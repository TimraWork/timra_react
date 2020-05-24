export default class SwapiService {
	_apiBase = 'https://timra.ru/timra/wp-json/wp/v2';
	_apiGists = 'https://api.github.com/users/TimraWork/gists';
	_apiGist = 'https://api.github.com/gists';

	getResource = async (url, api) => {
		api = api || this._apiBase;
		const res = await fetch(`${api}${url}`);
		return await res.json();
	};

	// +++++++++++++++++++++ WORKS begin +++++++++++++++++++++
	getWorks = async (id) => {
		const works = await this.getResource(`/pages/9662`);
		return works.acf.works.map(this._transformWork);
	};
	_transformWork = (work) => {
		const uuid = new Date().getTime().toString();
		return {
			id: uuid,
			title: work.works_name,
			date: work.works_date,
			url: work.works_link,
			img: work.works_img,
		};
	};
	// +++++++++++++++++++++ WORKS end +++++++++++++++++++++

	// +++++++++++++++++++++ CATEGORIES begin +++++++++++++++++++++
	getCategories = async () => {
		const cats = await this.getResource(`/categories?per_page=4&page=1`);
		return await cats.map(this._transformCategory);
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
	// +++++++++++++++++++++ CATEGORIES end +++++++++++++++++++++

	//  +++++++++++++++++++++ POST begin +++++++++++++++++++++
	getPosts = async () => {
		const posts = await this.getResource(`/posts?_embed&per_page=4&page=1`);
		return posts.map(this._transformPosts);
	};
	_transformPosts = (post) => {
		const date_format = post.date
			.slice(0, -9)
			.split('-')
			.reverse()
			.join('.');
		const img_url = post._embedded['wp:featuredmedia'][0]['source_url'];
		console.log(post._embedded['wp:featuredmedia'][0]['source_url']);
		return {
			id: post.id,
			img:
				img_url ||
				'http://timra.ru/timra/wp-content/uploads/2020/05/727.png',
			title: post.title['rendered'],
			date: date_format,
			excerpt: post.excerpt['rendered'],
		};
	};
	getPost = async (id) => {
		const post = await this.getResource(`/posts/${id}`);
		return this._transformPost(post);
	};
	_transformPost = (post) => {
		return {
			id: post.id,
			title: post.title['rendered'],
			excerpt: post.excerpt['rendered'],
		};
	};
	//  +++++++++++++++++++++ POST end +++++++++++++++++++++

	// +++++++++++++++++++++ GISTS begin +++++++++++++++++++++
	getGist = async (id) => {
		const gist = await this.getResource(`/${id}`, `${this._apiGist}`);
		return this._transformGist(gist);
	};
	_transformGist = (gist) => {
		const files = Object.keys(gist.files);

		for (let i = 0; i < files.length; i++) {
			var fileName = files[i];
			var date_files = gist.files[fileName].content;
			var date_url = gist.url;
			const regExp = /\/([0-9a-z]*)$/;
			const id = date_url.match(regExp)[1];
			console.log('date_files = ', i, date_files);
			return {
				id: id,
				title: gist.description,
				excerpt: date_files,
			};
		}
	};

	getGists = async () => {
		const gists = await this.getResource(
			`?page=1&per_page=3`,
			`${this._apiGists}`
		);
		// var gist_ = gists.map(this._transformGist);
		// console.log(gists);
		return gists.map(this._transformGists);
	};
	_transformGists = (gist) => {
		return {
			id: gist.id,
			title: gist.description,
		};
	};
	// +++++++++++++++++++++ GISTS end +++++++++++++++++++++
}

// const swapi = new SwapiService();
// swapi.getGist('ec1847e392742252284241d3bbbda32f');
