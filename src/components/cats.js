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
		return cats.map(({ id, title }) => {
			return (
				<div
					className="ITEMS"
					key={id}
					onClick={() => this.propsOnItemSelected(id)}
					dangerouslySetInnerHTML={{ __html: title }}
				></div>
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
			<Grid container spacing={3}>
				{itemb}
			</Grid>
		);
		// const elements = item.map((el) => {
		// 	return <button key={el.title}>{el.title}</button>;
		// });

		// return { elements }; // Тут мы распечатываем массив
	}
}
