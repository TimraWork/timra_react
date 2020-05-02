import React, { Component } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Header from '../components/header';
import Footer from '../components/footer';
import Post from '../components/post';
import Pager from '../components/pagination';
import Preloader from '../components/preloader';
import Cat from '../components/cat.js';

export default class App extends Component {
	state = {};

	render() {
		return (
			<div className="main">
				<CssBaseline />
				<Header />
				<Container maxWidth="xl">
					<div className="content">
						<Grid container spacing={3}>
							<Grid item xl={8} md={9}>
								<Grid container spacing={3}>
									<Grid item xl={6} md={4}>
										<Post />
									</Grid>
								</Grid>
							</Grid>
							<Grid item xl={4} md={3}>
								<Cat />
								<Cat />
								<Cat />
							</Grid>
						</Grid>
						<Preloader></Preloader>

						<Pager />
					</div>
				</Container>
				<Footer />
			</div>
		);
	}
}
