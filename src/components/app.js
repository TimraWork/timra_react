import React, { Component } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Header from '../components/header';
import Footer from '../components/footer';
import Pager from '../components/pagination';
// import ToggleBtn from '../components/toggle_btn';

import Posts from '../components/posts';
import Post from '../components/post';

import ErrorIndicator from '../components/error-indicator/error-indicator';

import SwapiService from '../swapi-service';

// import Cats from '../components/cats';
// import Cat from '../components/cat';

class ErrorBoundry extends Component {
	state = {
		hasError: false,
	};

	componentDidCatch() {
		this.setState({
			hasError: true,
		});
	}

	render() {
		if (this.state.hasError) {
			return <ErrorIndicator />;
		}
		return this.props.children;
	}
}

const Row = ({ left, right }) => {
	return (
		<Grid container spacing={3}>
			<Grid item xl={8} md={9}>
				{left}
			</Grid>
			<Grid item xl={4} md={3}>
				{right}
			</Grid>
		</Grid>
	);
};

export default class App extends Component {
	swapiService = new SwapiService();

	state = {
		showPost: true,
		postId: 1,
	};

	onTogglePost = () => {
		this.setState(({ showPost }) => {
			return {
				showPost: !showPost,
			};
		});
	};

	onShowPost = () => {};

	onItemSelected = (id) => {
		//console.log('del', id);
		this.setState({
			postId: id,
		});
	};

	render() {
		const postsList = (
			<div>
				<Posts
					OnItemSelected={this.onItemSelected}
					getData={this.swapiService.getPosts}
				>
					{(item) =>
						`${item.title} <span class="date">(${item.date})</span>`
					}
				</Posts>

				<Pager></Pager>
			</div>
		);

		const gistsList = (
			<Posts
				OnItemSelected={this.onItemSelected}
				getData={this.swapiService.getGists}
			>
				{(item) =>
					`${item.title} <span class="date">(${item.date})</span>`
				}
			</Posts>
		);

		const postItem = <Post postId={this.state.postId} />;
		return (
			<div className="main">
				<CssBaseline />
				<Header />
				<Container maxWidth="xl">
					<div className="content">
						<h2>Посты</h2>
						<ErrorBoundry>
							<Row left={postsList} right={postItem}></Row>
						</ErrorBoundry>
						<h2>Gists</h2>
						<ErrorBoundry>
							<Row left={gistsList} right={postItem}></Row>
						</ErrorBoundry>
						<Row
							left={<p>Hello</p>}
							right={<strong>WORLD</strong>}
						></Row>
						<Row left="Foo" right="Bar"></Row>
					</div>
				</Container>
				<Footer />
			</div>
		);
	}
}
