import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Preloader from '../components/preloader';
import Error from '../components/error';

export default class Items extends Component {
	state = {
		posts: null,
		loading: true,
		error: false
	};

	onError = (err) => {
		this.setState({
			error: true,
			loading: false,
		});
	};

	componentDidMount() {
		const { getData } = this.props;

		getData() // Функция Меняется
			.then((posts) => {

				this.setState({
					posts,
					loading: false,
					error: false
				});
			})
			.catch(this.onError);
	}

	renderItems(items) {
		return items.map((item) => {
			// key={post.id}

			const { id } = item;

			console.log(id);

			const label = this.props.children(item);

			return (
				<Grid item xl={6} md={6} key={id}>
					<Card
						height="100%"
						// onClick={() => this.props.OnItemSelected(id)}
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
		const { posts, loading, error } = this.state;

		const error_bl = error ? <Error /> : null;
		const preloader = loading ? <Preloader /> : null;
		const content = !(loading || error) ? this.renderItems(posts) : [];

		return (
			<React.Fragment>
				{error_bl}
				{preloader}
				<Grid container spacing={3}>
					{content}
				</Grid>
			</React.Fragment>
		);
	}
}
