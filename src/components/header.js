import React from 'react';
import Container from '@material-ui/core/Container';
import Logo from '../assets/img/logo.png';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const Header = () => {
	return (
		<header>
			<Container maxWidth="md">
				<Box display="flex" justifyContent="space-between">
					<a href={'https://timra.ru/'} className="logo">
						<img src={Logo} alt="" className="logo__img" />
						<span className="logo__text">
							<span className="logo__title">Timra.ru</span>
							<span className="logo__subtitle">
								Front-end разработка
							</span>
						</span>
					</a>

					{['Гисты', 'Работы', 'Блог', 'Обо мне', 'Контакты'].map(
						(anchor) => (
							<React.Fragment key={anchor}>
								<Button>{anchor}</Button>
							</React.Fragment>
						)
					)}
				</Box>
			</Container>
		</header>
	);
};

export default Header;
