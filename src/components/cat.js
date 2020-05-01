import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	content: {
		flex: '1 0 auto',
	},
	cover: {
		width: 180,
	},
}));

export default function MediaControlCard() {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<div className={classes.details}>
				<CardContent className={classes.content}>
					<Typography component="h6" variant="h6">
						JavaScript
					</Typography>
				</CardContent>
			</div>
			<CardMedia
				className={classes.cover}
				image="https://timra.ru/timra/wp-content/uploads/2020/04/js.jpg"
			/>
		</Card>
	);
}
