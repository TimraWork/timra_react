import React, { Component } from 'react';

import SwapiService from '../swapi-service';
import Preloader from '../components/preloader';

export default class Cats extends Component {
	SwapiService = new SwapiService();

	state = {
		posts: null,
	};

	getCats = () => {
		// console.log(dasta);
	};

	componentDidMount() {
		this.SwapiService.getPosts().then((posts) => {
			this.setState({
				posts,
			});
		});
	}

	renderCats(cats) {
		return cats.map((item) => {
			return (
				<li
					className="ITEMS"
					key={item.id}
					onClick={() => this.propsOnItemSelected(item.id)}
				>
					{item.title}
				</li>
			);
		});
	}

	render() {
		const { posts } = this.state;

		if (!posts) {
			return <Preloader></Preloader>;
		}
		const itemb = this.renderCats(posts);
		return (
			<div className="cats_list">
				<div className="cat_item">{itemb}</div>
			</div>
		);
		// const elements = item.map((el) => {
		// 	return <button key={el.title}>{el.title}</button>;
		// });

		// return { elements }; // Тут мы распечатываем массив
	}
}
