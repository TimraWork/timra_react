import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import SwapiService from '../swapi-service';
import Preloader from '../components/preloader';

export default class Cats extends Component {
	SwapiService = new SwapiService();

	state = {
		posts: null,
	};

	componentDidMount() {
		this.SwapiService.getPosts().then((posts) => {
			this.setState({
				posts,
			});
		});
	}

	renderCats(cats) {
		return cats.map(({ id, title, date, excerpt, img }) => {
			return (
				<Grid item xl={6} md={6} key={id}>
					<Card
						height="100%"
						onClick={() => this.props.OnItemSelected(id)}
					>
						<CardActionArea>
							<CardMedia
								component="img"
								height="130"
								image={img}
							/>
							<CardContent>
								{/* <Typography variant="body2" color="textPrimary">
									{date}
								</Typography> */}
								<Typography
									variant="body2"
									color="textPrimary"
									// gutterBottom
									// variant="h6"
									// component="h6"
									dangerouslySetInnerHTML={{ __html: title }}
								></Typography>
							</CardContent>
						</CardActionArea>
					</Card>
				</Grid>
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
	}
}
