import React from 'react';

import {Alert, AlertTitle} from '@material-ui/lab';

const Error = () => {
	return (
		<Alert severity="error">
			<AlertTitle><strong>Произошла ошибка</strong></AlertTitle>
			Перезагрузитесь или попробуйте зайти позже
		</Alert>
	);
};

export default Error;
