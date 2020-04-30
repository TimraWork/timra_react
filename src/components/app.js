import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from '../components/header';
import Footer from '../components/footer';

export default class App extends Component {
	state = {};

	render() {
		return (
			<div className="main">
				<CssBaseline />
				<Header />
				<Footer />
			</div>
		);
	}
}
