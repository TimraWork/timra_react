import React, { Component } from 'react';

import SwapiService from '../swapi-service';

export default class Cats extends Component {
	SwapiService = new SwapiService();

	state = {
		cats: null,
	};

	getCats = () => {
		this.SwapiService.getPosts().then((post) => {
			this.setState({
				cats: post,
			});
		});
	};

	componentDidMount() {
		this.getCats();
	}

	renderCats() {
		return <li className="ITEMS">Категория1</li>;
	}

	render() {
		console.log('Cats = ', this.state.cats);

		const item = this.renderCats();
		return (
			<div className="cats_list">
				<div className="cat_item">{item}</div>
			</div>
		);
	}
}
