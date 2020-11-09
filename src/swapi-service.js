import { v4 as uuidv4 } from "uuid";

export default class SwapiService {
    _apiPosts = `https://timra.ru/timra/wp-json/wp/v2`;
    _apiAuth = `https://example.com/wp-json/jwt-auth/v1/token`;
    _apiGists = `https://api.github.com/users/TimraWork/gists`;
    _apiGist = `https://api.github.com/gists`;

    _pushImageUrl = `http://timra.ru/timra/wp-content/uploads/2020/05/727.png`;

    _postsParameters = `_embed&per_page=4&page=1`;
    _catsParameters = `orderby=count&order=desc&exclude=1&per_page=4&page=1`;
    _gistsParameters = `page=1&per_page=4`;

    _getResource = async (url, api) => {
        api = api || this._apiPosts;
        const res = await fetch(`${api}${url}`);
        return await res.json();
    };

    getPosts = async () => {
        const posts = await this._getResource(
            `/posts?${this._postsParameters}`
        );
        return posts.map(this._transformPosts);
    };

    auth = async (login, password) => {};

    _formatDate = (date) => {
        return date.slice(0, -9).split("-").reverse().join(".");
    };

    _transformPosts = ({ id, title, _embedded, date, excerpt }) => {
        return {
            id: id,
            img:
                _embedded["wp:featuredmedia"][0]["source_url"] ||
                this._pushImageUrl,
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
        };
    };

    getPage = async (id) => {
        const page = await this._getResource(`/pages/${id}`);
        return this._transformPost(page);
    };

    getWorks = async (id) => {
        const works = await this._getResource(`/pages/${id}`);
        return works.acf.works.map(this._transformWork).slice(0, 4);
    };

    _transformWork = ({ works_name, works_date, works_link, works_img }) => {
        return {
            id: uuidv4(),
            title: works_name,
            date: works_date,
            url: works_link,
            img: works_img.url,
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
