import React, { Component } from 'react';

import {Card, CardActionArea, CardContent, Typography } from '@material-ui/core';

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

	onError = () => {
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
		getData(postId)
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
		const preloader =  (post && loading) ? <Preloader /> : null;
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
		<React.Fragment >
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
		</React.Fragment>
	);
};
