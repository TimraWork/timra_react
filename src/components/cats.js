import React, { Component } from 'react';

import SwapiService from '../swapi-service';

export default class Cats extends Component {
	SwapiService = new SwapiService();

	state = {
		cats: {},
		loading: true,
		error: false,
	};

	getCats = () => {
		this.SwapiService.getPosts().then((post) => {
			console.log(post);
		});
	};

	componentDidMount() {
		this.getCats();
	}

	render() {
		return (
			<div className="cats_list">
				<div className="cat_item">Категория1</div>
				<div className="cat_item">Категория2</div>
				<div className="cat_item">Категория3</div>
			</div>
		);
	}
}
