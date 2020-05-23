import React from 'react';
import './error-indicator.scss';
import logo from './error-indicator.png';

const ErrorIndicator = () => {
	return (
		<div className="error">
			<img src={logo} className="error__img" alt="" />
			<h1>Что-то пошло не так...</h1>
			<h2>Попробуйте перезагрузить страницу</h2>
		</div>
	);
};

export default ErrorIndicator;
