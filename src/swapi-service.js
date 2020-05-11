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
		const posts = await this.getResource(`/posts?_embed&per_page=4&page=1`);
		return posts.map(this._transformPost);
	}

	async getPost(id) {
		const post = await this.getResource(`/posts/${id}`);
		// console.log(post.title);
		// console.log(post.id);
		// console.log(post.date);
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
}
