import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Header from '../components/header';
import Footer from '../components/footer';
import Post from '../components/post';
import Pager from '../components/pagination';

export default class App extends Component {
	state = {};

	render() {
		return (
			<div className="main">
				<CssBaseline />
				<Header />
				<Container maxWidth="xl">
					<div className="content">
						{/* <Grid container spacing={1}>
							<Grid container item xs={12} spacing={3}>
								sdfas
							</Grid>
							<Grid container item xs={12} spacing={3}>
								asdfsd
							</Grid>
							<Grid container item xs={12} spacing={3}>
								asdf
							</Grid>
						</Grid> */}
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<Post />
							</Grid>
						</Grid>

						<Pager />
					</div>
				</Container>
				<Footer />
			</div>
		);
	}
}
