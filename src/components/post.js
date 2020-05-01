import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
});

export default function Post() {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="140"
					image="/static/logo.png"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						Lizard
					</Typography>
					<div className="date mb-4">September 14, 2016</div>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
					>
						Lizards are a widespread group of squamate reptiles,
						with over 6,000 species, ranging across all continents
						except Antarctica
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
