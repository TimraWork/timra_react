import { v4 as uuidv4 } from "uuid";

export default class SwapiService {
    _siteUrl = "https://timra.ru/timra";

    _apiPosts = `${this._siteUrl}/wp-json/wp/v2`;
    _postEditUrl = `${this._siteUrl}/wp-admin/post.php?post=`;

    _apiAuth = `${this._siteUrl}/wp-json/jwt-auth/v1/token`;
    _pushImageUrl = `${this._siteUrl}/wp-content/uploads/2020/05/727.png`;

    _apiGists = `https://api.github.com/users/TimraWork/gists`;
    _apiGist = `https://api.github.com/gists`;

    _postsParameters = `_embed&per_page=4&page=1`;
    _postEditParameters = `&action=edit`;
    _catsParameters = `orderby=count&order=desc&exclude=1&per_page=6&page=1`;
    _gistsParameters = `page=1&per_page=2`;

    _getResource = async (url, api, params = {}) => {
        api = api || this._apiPosts;
        const res = await fetch(`${api}${url}`, params);
        return await res.json();
    };

    getPosts = async () => {
        const posts = await this._getResource(
            `/posts?${this._postsParameters}`
        );
        return posts.map(this._transformPosts);
    };

    getToken = async (login, password) => {
        const tokenParams = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: login,
                password: password,
            }),
        };
        const token = await this._getResource(``, this._apiAuth, tokenParams);
        return token;
    };

    _formatDate = (date) => {
        return date.slice(0, -9).split("-").reverse().join(".");
    };

    _transformPosts = ({ id, title, _embedded, date, excerpt }) => {
        return {
            id: id,
            img: _embedded["wp:featuredmedia"]
                ? _embedded["wp:featuredmedia"][0]["source_url"]
                : this._pushImageUrl,
            title: title["rendered"],
            date: this._formatDate(date),
            excerpt: excerpt["rendered"],
        };
    };

    getPost = async (id) => {
        const post = await this._getResource(`/posts/${id}`);
        return this._transformPost(post);
    };

    _transformPost = ({ id, title, content }) => {
        return {
            id,
            title: title["rendered"],
            excerpt: content["rendered"],
            edit: this._postEditUrl + id + this._postEditParameters,
        };
    };

    getPage = async (id) => {
        const page = await this._getResource(`/pages/${id}`);
        return this._transformPost(page);
    };

    getWorks = async (id) => {
        const works = await this._getResource(`/pages/${id}`);
        return works.acf.works.map(this._transformWork);
    };

    _transformWork = ({
        works_name,
        works_date,
        works_link,
        works_img,
        works_category,
        tegi,
    }) => {
        const id = uuidv4();
        return {
            id,
            title: works_name,
            date: works_date,
            url: works_link,
            img: works_img.url,
            category: works_category,
            tags: tegi,
        };
    };

    getCats = async () => {
        const cats = await this._getResource(
            `/categories?${this._catsParameters}`
        );
        return await cats.map(this._transformCategory);
    };

    _transformCategory = ({ id, name, slug, acf }) => {
        return {
            id,
            title: name,
            slug,
            img: acf.cat_img.url,
        };
    };

    getGists = async () => {
        const gists = await this._getResource(
            `?${this._gistsParameters}`,
            this._apiGists
        );

        return gists.map(this._transformGists);
    };

    _transformGists = ({ id, description }) => {
        return {
            id,
            title: description,
        };
    };

    getGist = async (id) => {
        const gist = await this._getResource(`/${id}`, this._apiGist);
        return this._transformGist(gist);
    };

    _getGistIdByUrl = (url) => {
        return url.match(/\/([0-9a-z]*)$/)[1];
    };

    _transformGist = (gist) => {
        const files = Object.keys(gist.files);

        for (let i = 0; i < files.length; i++) {
            const fileName = files[i];
            return {
                id: this._getGistIdByUrl(gist.url),
                title: gist.description,
                excerpt: gist.files[fileName].content,
            };
        }
    };
}
