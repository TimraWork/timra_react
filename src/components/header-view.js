import React from "react";

import Logo from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";

import {
    Container,
    InputBase,
    Grid,
    Hidden,
    Switch,
    FormGroup,
    FormControlLabel,
    FormControl,
    Button,
    IconButton,
} from "@material-ui/core";

const HeaderView = () => {
    const LINKS = [
        {
            name: "Гисты",
            path: "/gists",
        },
        {
            name: "Работы",
            path: "/works",
        },
        {
            name: "Блог",
            path: "/blog",
        },
        {
            name: "Обо мне",
            path: "/about",
        },
    ];

    return (
        <header>
            <Container maxWidth="xl">
                <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justify="space-between"
                    style={{ minHeight: "5vh" }}
                >
                    <a href={"/"} className="logo">
                        <img src={Logo} alt="" className="logo__img" />
                        <span className="logo__text">
                            <span className="logo__title">Timra.ru</span>
                            <span className="logo__subtitle">
                                Front-end разработка
                            </span>
                        </span>
                    </a>

                    <nav className="nav">
                        {LINKS.map((item, index) => (
                            <Button
                                key={index}
                                component={NavLink}
                                to={item.path}
                                exact
                            >
                                {item.name}
                            </Button>
                        ))}
                    </nav>

                    <div className="searchBox">
                        <div className="searchIcon">
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            inputProps={{ "aria-label": "search" }}
                        />
                    </div>

                    <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value="eng"
                                control={<Switch color="primary" />}
                                color="secondary"
                                label="Eng"
                                labelPlacement="end"
                            />
                        </FormGroup>
                    </FormControl>

                    <Hidden mdUp>
                        <IconButton>
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                </Grid>
            </Container>
        </header>
    );
};

export default HeaderView;
