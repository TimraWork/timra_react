import React from 'react';
import Button from '@material-ui/core/Button';

export default class Toggle extends React.Component {
	render() {
		const { onTogglePost } = this.props;
		return (
			<Button variant="contained" className="mt-2" onClick={onTogglePost}>
				Toggle
			</Button>
		);
	}
}
