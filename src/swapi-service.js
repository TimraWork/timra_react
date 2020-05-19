export default class SwapiService {
	_apiBase = 'https://timra.ru/timra/wp-json/wp/v2';
	_apiGists =
		'https://api.github.com/users/TimraWork/gists?page=1&per_page=100';

	async getResource(url, api) {
		api = api || this._apiBase;
		const res = await fetch(`${api}${url}`);
		return await res.json();
	}

	async getCategories() {
		return this.getResource(`/categories/`);
	}

	async getGists() {
		const gists = await this.getResource(``, `${this._apiGists}`);
		gists.map((el, i) => {
			if (i < 1) {
				const fileNames = Object.keys(el.files);
				for (let i = 0; i < el.files; i++) {
					var fileName = fileNames[i];
					// var blob = new Blob([el.files[fileName].content]);
				}
				return console.log('fileNames = ', fileNames);
			}

			// if (i < 1) {

			// 	return console.log(
			// 		'el = ',
			// 		i,
			// 		el.files['componentDidUpdate.js'].raw_url
			// 	);
			// }
		});

		return gists.map(this._transformGist);
	}

	// getCategory(id) {
	// 	return this.getResource(`/categories/${id}`);
	// }

	async getPosts() {
		const posts = await this.getResource(`/posts?_embed&per_page=4&page=1`);
		return posts.map(this._transformPost);
	}

	async getPost(id) {
		const post = await this.getResource(`/posts/${id}`);
		// console.log(post.title);
		return this._transformPost(post);
	}

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

swapi.getGists();
