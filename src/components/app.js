import React, { Component } from 'react';

import { Container, CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from '../theme';

import Header from '../components/header';
import Footer from '../components/footer';

import WorksPage from './pages/works';
import GistsPage from './pages/gists';
import BlogPage from './pages/blog';
import AboutPage from './pages/about';

export default class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header />
				<Container maxWidth="xl">
					<WorksPage></WorksPage>
					<AboutPage></AboutPage>
					<BlogPage></BlogPage>
					<GistsPage></GistsPage>
				</Container>
				<Footer />
			</ThemeProvider>
		);
	}
}
