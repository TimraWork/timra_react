import React from 'react';
import Container from '@material-ui/core/Container';
import Logo from '../assets/img/logo.png';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
	return (
		<header>
			<Container maxWidth="xl">
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

					<nav className="nav">
						{[
							'Гисты',
							'Блог' /* 'Работы', 'Обо мне', 'Контакты' */,
						].map((anchor) => (
							<React.Fragment key={anchor}>
								<Button>{anchor}</Button>
							</React.Fragment>
						))}
					</nav>
					<div className="searchBox">
						<div className="searchIcon">
							<SearchIcon />
						</div>
						<InputBase
							placeholder="Search…"
							inputProps={{ 'aria-label': 'search' }}
						/>
					</div>

					<IconButton>
						<MenuIcon />
					</IconButton>
				</Box>
			</Container>
		</header>
	);
};

export default Header;
