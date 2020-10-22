import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';

import Preloader from './preloader';
import Error from './error';
import Item from './item';

export default class ItemList extends Component {
	state = {
		items: null,
		loading: true,
		error: false
	};

	onError = (err) => {
		console.log(`err = `, err);
		this.setState({
			error: err,
			loading: false,
		});
	};

	componentDidMount() {
		const { getData, pageId } = this.props;

		getData(pageId)
			.then((items) => {
				this.setState({
					items,
					loading: false,
					error: false
				});
			})
			.catch(this.onError);
	}

	renderItems(items) {
		return items.map((item) => {
			const { id } = item;
			const { onItemListClicked } = this.props;
			const label = this.props.children(item);

			return (
				<Grid item xl={6} md={6} key={id}>
					<Item label = {label} id = {id}
						onItemListClicked = {() => onItemListClicked(id)}
					/>
				</Grid>
			);
		});
	}

	render() {
		const { items, loading, error } = this.state;

		const error_bl = error ? <Error /> : null;
		const preloader = loading ? <Preloader /> : null;
		const content = !(loading || error) ? this.renderItems(items) : null;

		return (
			<React.Fragment>
				{error_bl}
				{preloader}
				<Grid container spacing={3}>
					{content}
				</Grid>
			</React.Fragment>
		);
	}
}
