import React, { Component } from 'react';

import { Container, CssBaseline, ThemeProvider } from '@material-ui/core';

import Header from '../components/header';
import Footer from '../components/footer';

import SwapiService from '../swapi-service';
import { theme } from '../theme';

import WorksPage from './pages/works';
import GistsPage from './pages/gists';
import BlogPage from './pages/blog';
import AboutPage from './pages/about';

export default class App extends Component {
	swapiService = new SwapiService();

	onPostClicked = (id) => {
		this.setState({
			selectedPostId: id
		});
	};

	render() {
		return (
			<div className="main" >
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Header />
					<Container maxWidth="xl">
						<div className="content">
							<GistsPage></GistsPage>
							<WorksPage></WorksPage>
							<BlogPage></BlogPage>
							<AboutPage></AboutPage>
						</div>
					</Container>
					<Footer />
				</ThemeProvider>
			</div>
		);
	}
}
