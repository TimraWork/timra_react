import React, { Component } from 'react';

import { Grid, Container, CssBaseline, ThemeProvider, Chip } from '@material-ui/core';

import Header from '../components/header';
import Footer from '../components/footer';
import Pager from '../components/pagination';

import Posts from '../components/posts';
import Post from '../components/post';

import ErrorIndicator from '../components/error-indicator/error-indicator';
import SwapiService from '../swapi-service';
import { theme } from '../theme';

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

const Row = ({ left, right, full, filter }) => {
	if(full){
		return(
			<Grid container>
				{full}
			</Grid>
		);
	}
	if(filter){
		return(
			<React.Fragment >
				<Grid container spacing={3}>
					<Grid item xl={6} md={12}>
						<Grid
							container
							justify="center"
							style={{ minHeight: '6vh' }}
						>
							<Chip color="primary" label="Все работы"/>
							<Chip label="Wordpress" />
							<Chip label="Frontend" onClick={()=>alert(`click`)}/>
						</Grid>
						{left}
					</Grid>
				</Grid>
			</React.Fragment>
		);
	}
	return (
		<Grid container spacing={3}>
			<Grid item xl={6} md={6}>
				{left}
				<Pager></Pager>
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
		selectedPostId: 1,
		gistId: 'e65d78cf4a641bfa6b5638d3fe71ef52',
		aboutId: '10618',
	};

	onPostClicked = (id) => {
		this.setState({
			selectedPostId: id
		});
	};

	render() {
		const {
			getGist,
			getGists,

			getPost,
			getPosts,

			getPage,

			getCats,
			getWorks
			
		} = this.swapiService;

		const postsList = (
			<div>
				<Posts getData={getPosts}  onPostClicked={this.onPostClicked} >
					{(item) =>
						`<img src="${item.img}" style="max-height: 100px;" alt=""/> 
						<div>${item.title}</div> 
						<span class="date">(${item.date})</span>`
					}
				</Posts>

				
			</div>
		);

		const gistsList = (
			<Posts onPostClicked={this.onPostClicked} getData={getGists}>
				{(item) => `${item.title}`}
			</Posts>
		);

		const worksList = (
			<Posts getData={getWorks}>
				{(item) =>
					`<img src="${item.img}" style="max-height: 100px;" alt=""/> 
					<div><a href="${item.url}" target="_blank">${item.title}</a></div>
					`
				}
			</Posts>
		);

		const catsList = (
			<Posts getData={getCats}>
				{(item) =>
					`
					<img src="${item.img}" style="max-height: 100px;" alt=""/>
					<div>${item.title}</div>`
				}
			</Posts>
		);

		const postItem = <Post postId={this.state.selectedPostId} getData={getPost} />;

		const gistItem = <Post postId={this.state.gistId} getData={getGist} />;

		const aboutItem = <Post postId={this.state.aboutId} getData={getPage} />;

		return (
			<div className="main" >
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Header />
					<Container maxWidth="xl">
						<div className="content">
							<h2>Гисты</h2>
							<ErrorBoundry>
								<Row left={gistsList} right={gistItem}></Row>
							</ErrorBoundry>
							<br />
							<br />
							<br />
							<h2>Работы</h2>
							<ErrorBoundry>
								<Row left={worksList} filter="true"></Row>
							</ErrorBoundry>

							<br />
							<br />
							<br />
							<h2>Блог</h2>
							<ErrorBoundry>
								<Row left={postsList} right={catsList}></Row>
								<Row full={postItem}></Row>
							</ErrorBoundry>
							<br />

							<br />
							<br />
							<br />
							<h2>Обо мне</h2>
							<ErrorBoundry>
								<Row full={aboutItem}></Row>
							</ErrorBoundry>
							<br />
						</div>
					</Container>
					<Footer />
				</ThemeProvider>
			</div>
		);
	}
}
