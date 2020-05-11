export default class SwapiService {
	_apiBase = 'https://timra.ru/timra/wp-json/wp/v2';

	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`);
		return await res.json();
	}

	// getCategories() {
	// 	return this.getResource(`/categories/`);
	// }

	// getCategory(id) {
	// 	return this.getResource(`/categories/${id}`);
	// }

	async getPosts() {
		const posts = await this.getResource(`/posts/`);
		return posts.map(this._transformPost);
	}

	async getPost(id) {
		const post = await this.getResource(`/posts/${id}`);
		return this._transformPost(post);
	}

	_transformPost = (post) => {
		// console.log(this);
		const date_format = post.date
			.slice(0, -9)
			.split('-')
			.reverse()
			.join('/');
		return {
			id: post.id,
			title: post.title['rendered'],
			date: date_format,
			excerpt: post.excerpt['rendered'],
		};
	};
}
