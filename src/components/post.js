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
		post: {},
	};

	onBlaBla = (post) => {
		console.log(post);
	};

	onPostLoaded = (post) => {
		console.log(post);
		this.setState({ post });
	};

	updatePosts() {
		const post_id = 9805;
		this.SwapiService.getPost(post_id).then(this.onPostLoaded);
	}

	constructor() {
		super();
		this.updatePosts();
	}

	render() {
		const {
			post: { title, date, excerpt, img },
		} = this.state;
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
						<Typography
							gutterBottom
							variant="h5"
							component="h2"
							dangerouslySetInnerHTML={{ __html: title }}
						></Typography>
						<Typography variant="body2" color="textPrimary">
							{date}
						</Typography>
						<Typography
							variant="body2"
							color="textSecondary"
							component="p"
							dangerouslySetInnerHTML={{ __html: excerpt }}
						></Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		);
	}
}
