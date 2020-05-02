import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import SwapiService from '../swapi-service';

export default class Post extends Component {
	SwapiService = new SwapiService();

	state = {
		title: null,
		date: null,
		excerpt: null,
		img: null,
	};

	constructor() {
		super();
		this.updatePosts();
	}

	updatePosts() {
		this.SwapiService.getPost(1).then((post) => {
			console.log(post);
			this.setState({
				title: post.title['rendered'],
				date: post.date.slice(0, -9),
			});
		});
	}

	// state = {};
	render() {
		const { title, date, excerpt, img } = this.state;
		return (
			<Card>
				<CardActionArea>
					<CardMedia
						component="img"
						height="140"
						image="https://timra.ru/timra/wp-content/uploads/2020/04/react_component.png"
					/>
					{img}
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{title}
						</Typography>
						<Typography variant="body2" color="textPrimary">
							{date}
						</Typography>
						<Typography
							variant="body2"
							color="textSecondary"
							component="p"
						>
							{excerpt}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		);
	}
}
