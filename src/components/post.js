import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Preloader from '../components/preloader';
import Error from '../components/error';

import SwapiService from '../swapi-service';

export default class Post extends Component {
	SwapiService = new SwapiService();

	state = {
		post: null,
		loading: true,
		error: false,
	};

	onPostLoaded = (post) => {
		this.setState({
			post,
			loading: false,
			error: false,
		});
	};

	onError = (err) => {
		this.setState({
			error: true,
			loading: false,
		});
	};

	updatePost() {
		this.setState({
			loading: true,
		});
		
		const { postId, getData } = this.props;

		if (!postId) {
			return;
		}
		getData(postId) // Функция Меняется
			.then(this.onPostLoaded)
			.catch(this.onError);
	}

	componentDidMount() {
		this.updatePost();
	}

	componentDidUpdate(prevProps) {
		if (this.props.postId !== prevProps.postId) {
			this.updatePost();
		}
	}

	render() {
		const { post, loading, error } = this.state;

		const error_bl = error ? <Error /> : null;
		const preloader = loading ? <Preloader /> : null;
		const content = !(loading || error) ? <PostView post={post} /> : null;

		return (
			<Card>
				<CardActionArea>
					{error_bl}
					{preloader}
					{content}
				</CardActionArea>
			</Card>
		);
	}
}

const PostView = (post) => {
	const {
		post: { title, date, excerpt },
	} = post;

	return (
		<React.Fragment>
			{/* <CardMedia
				component="img"
				height="140"
				image="https://timra.ru/timra/wp-content/uploads/2020/04/react_component.png"
			/> */}
			<CardContent>
				<h1>Post</h1>
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
		</React.Fragment>
	);
};
