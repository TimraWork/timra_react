import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import SwapiService from '../swapi-service';
import Preloader from '../components/preloader';

export default class Items extends Component {
	SwapiService = new SwapiService();

	state = {
		posts: null,
	};

	componentDidMount() {
		const { getData } = this.props;

		getData() // Функция Меняется
			.then((posts) => {
				this.setState({
					posts,
				});
			});
	}

	renderItems(items) {
		return items.map((item) => {
			const { id } = item;

			const label = this.props.children(item);

			return (
				<Grid item xl={6} md={6} key={id}>
					<Card
						height="100%"
						onClick={() => this.props.OnItemSelected(id)}
					>
						<CardActionArea>
							{/* <CardMedia
								component="img"
								height="130"
								image={img}
							/> */}
							<CardContent>
								<Typography
									variant="body2"
									color="textPrimary"
									dangerouslySetInnerHTML={{ __html: label }}
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
		const itemb = this.renderItems(posts);
		return (
			<Grid container spacing={3}>
				{itemb}
			</Grid>
		);
	}
}
