import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import SwapiService from '../swapi-service';

export default class Post extends Component {
	SwapiService = new SwapiService();

	constructor() {
		super();
		this.updatePosts();
	}

	updatePosts() {
		this.SwapiService.getAllPosts().then((posts) => {
			// console.log(body);
			posts.forEach((post) => {
				console.log(post.title['rendered']);
			});
		});
	}

	// state = {};
	render() {
		return (
			<Card>
				<CardActionArea>
					<CardMedia
						component="img"
						height="140"
						image="https://timra.ru/timra/wp-content/uploads/2020/04/react_component.png"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							Заголовок
						</Typography>
						<Typography variant="body2" color="textPrimary">
							September 14, 2016
						</Typography>
						<Typography
							variant="body2"
							color="textSecondary"
							component="p"
						>
							Lizards are a widespread group of squamate reptiles,
							with over 6,000 species, ranging across all
							continents except Antarctica
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		);
	}
}
