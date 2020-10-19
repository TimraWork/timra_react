import React, { Component } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Header from '../components/header';
import Footer from '../components/footer';
// import Pager from '../components/pagination';
// import ToggleBtn from '../components/toggle_btn';
// import CardMedia from '@material-ui/core/CardMedia';

import Posts from '../components/posts';
import Post from '../components/post';

import ErrorIndicator from '../components/error-indicator/error-indicator';
import SwapiService from '../swapi-service';

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
			<Grid item xl={6} md={6}>
				{left}
			</Grid>
			<Grid item xl={6} md={6}>
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
		gistId: 'e65d78cf4a641bfa6b5638d3fe71ef52',
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
			gistId: id,
		});
	};

	render() {
		const {
			getGist,
			getGists,

			getPost,
			getPosts,

			getCats,
			getWorks
			
		} = this.swapiService;

		const postsList = (
			<div>
				<Posts OnItemSelected={this.onItemSelected} getData={getPosts}>
					{(item) =>
						`<img src="${item.img}" style="max-height: 100px;" alt=""/> <div>${item.title}</div> <span class="date">(${item.date})</span>`
					}
				</Posts>

				{/* <Pager></Pager> */}
			</div>
		);

		const gistsList = (
			<Posts OnItemSelected={this.onItemSelected} getData={getGists}>
				{(item) => `${item.title}`}
			</Posts>
		);

		const worksList = (
			<Posts getData={getWorks}>
				{(item) =>
					`<img src="${item.img}" style="max-height: 100px;" alt=""/> <div>${item.title}</div>`
				}
			</Posts>
		);

		const catsList = (
			<Posts getData={getCats}>
				{(item) =>
					`<img src="${item.img}" style="max-height: 100px;" alt=""/> <div>${item.title}</div>`
				}
			</Posts>
		);

		const postItem = <Post postId={this.state.postId} getData={getPost} />;

		const gistItem = <Post postId={this.state.gistId} getData={getGist} />;

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
						<br />
						<h2>Gists</h2>
						<ErrorBoundry>
							<Row left={gistsList} right={gistItem}></Row>
						</ErrorBoundry>
						<br />
						<br />
						<h2>Работы</h2>
						<ErrorBoundry>
							<Row left={worksList} right={catsList}></Row>
						</ErrorBoundry>
					</div>
				</Container>
				<Footer />
			</div>
		);
	}
}
