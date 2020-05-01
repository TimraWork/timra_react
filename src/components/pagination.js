import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			marginTop: theme.spacing(2),
		},
	},
}));

const Pager = () => {
	const classes = useStyles();
	return <Pagination count={10} shape="rounded" color="primary" />;
};

export default Pager;
