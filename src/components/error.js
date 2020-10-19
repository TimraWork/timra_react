import React from 'react';

import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';


const Error = () => {
	return (
		<Alert severity="error">
			<AlertTitle><strong>Произошла ошибка</strong></AlertTitle>
			Перезагрузитесь или попробуйте зайти позже
		</Alert>
	);
};

export default Error;
