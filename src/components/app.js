import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from '../components/header';

export default class App extends Component {
	state = {};

	render() {
		return (
			<Container maxWidth="xl">
				<CssBaseline />

				<Header />
			</Container>
		);
	}
}
