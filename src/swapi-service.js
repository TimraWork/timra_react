export default class SwapiService {
	_apiBase = 'https://timra.ru/timra/wp-json/wp/v2';
	_apiGists = 'https://api.github.com/users/TimraWork/gists';
	_apiGist = 'https://api.github.com/gists';

	getResource = async (url, api) => {
		api = api || this._apiBase;
		const res = await fetch(`${api}${url}`);
		return await res.json();
	};

	getWorks = async (id) => {
		const works = await this.getResource(`/pages/9662`);
		return works.acf.works.map(this._transformWork);
	};

	getCategories = async () => {
		const cats = await this.getResource(`/categories?per_page=4&page=1`);
		return await cats.map(this._transformCategory);
	};

	getGists = async () => {
		const gists = await this.getResource(
			`?page=1&per_page=10`,
			`${this._apiGists}`
		);
		// var gist_ = gists.map(this._transformGist);
		// console.log(gists);
		return gists.map(this._transformGist);
	};

	getGist = async (id) => {
		// const gist = await this.getResource(`/${id}`);
		const gist = await this.getResource(
			`/ec1847e392742252284241d3bbbda32f`,
			`${this._apiGist}`
		);
		const files = Object.keys(gist.files);
		for (let i = 0; i < files.length; i++) {
			var fileName = files[i];
			var date_files = gist.files[fileName].content;
			console.log('gist =', date_files);
			return date_files;
		}

		// return gist;
	};

	getPosts = async () => {
		const posts = await this.getResource(`/posts?_embed&per_page=4&page=1`);
		return posts.map(this._transformPost);
	};

	getPost = async (id) => {
		const post = await this.getResource(`/posts/${id}`);
		// console.log(post.title);
		return this._transformPost(post);
	};

	_transformWork = (work) => {
		const uuid = new Date().getTime().toString();
		return {
			id: uuid,
			title: work.works_name,
			date: work.works_date,
			url: work.works_link,
			img: work.works_img,
			// title: work.name,
			// slug: work.slug,
			// img: work.acf.cat_img.url,
		};
	};

	_transformCategory = (cat) => {
		return {
			id: cat.id,
			title: cat.name,
			slug: cat.slug,
			// img: cat.acf.cat_img.url,
			img: 'http://timra.ru/timra/wp-content/uploads/2020/05/727.png',
		};
	};

	_transformPost = (post) => {
		const date_format = post.date
			.slice(0, -9)
			.split('-')
			.reverse()
			.join('/');
		// const img_url = post._embedded['wp:featuredmedia'][0]['source_url'];
		return {
			id: post.id,
			img: 'http://timra.ru/timra/wp-content/uploads/2020/05/727.png',
			title: post.title['rendered'],
			date: date_format,
			excerpt: post.excerpt['rendered'],
		};
	};

	_transformGist = (gist) => {
		return {
			id: gist.id,
			title: gist.description,
		};
	};
}

const swapi = new SwapiService();

swapi.getGist();
