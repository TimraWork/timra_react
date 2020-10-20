import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import Preloader from '../components/preloader';
import Error from '../components/error';
import PostsItem from '../components/posts-item';

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

		getData()
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
			const { id } = item;
			const { onPostClicked } = this.props;
			const label = this.props.children(item);

			return (
				<Grid item xl={6} md={6} key={id}>
					<PostsItem label = {label} id = {id} 
						onPostClicked = {() => onPostClicked(id)}
					/>
				</Grid>
			);
		});
	}

	render() {
		const { posts, loading, error } = this.state;

		const error_bl = error ? <Error /> : null;
		const preloader = loading ? <Preloader /> : null;
		const content = !(loading || error) ? this.renderItems(posts) : null;

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
