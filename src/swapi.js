export default class SwapiService {
	_apiBase = 'https://timra.ru/timra/wp-json/wp/v2';

	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`);
		// if (!res.ok) {
		// 	throw new Error(`${res.status}`);
		// }
		return await res.json();
	}

	getAllPosts() {
		return this.getResource(`/posts/`);
	}

	getPost(id) {
		return this.getResource(`/posts/${id}`);
	}

	getAllCategories() {
		return this.getResource(`/categories/`);
	}

	getCategory(id) {
		return this.getResource(`/categories/${id}`);
	}
}

const swapi = new SwapiService();

swapi.getAllPosts().then((posts) => {
	// console.log(body);
	posts.forEach((post) => {
		console.log(post.title['rendered']);
	});
});
