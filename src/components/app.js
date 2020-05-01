import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Header from '../components/header';
import Footer from '../components/footer';
import Post from '../components/post';

export default class App extends Component {
	state = {};

	render() {
		return (
			<div className="main">
				<CssBaseline />
				<Header />
				<Container maxWidth="xl">
					<div className="content">
						<Post />
					</div>
				</Container>
				<Footer />
			</div>
		);
	}
}
