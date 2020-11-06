import React from "react";

import Logo from "../assets/img/logo.png";
import Nav from "./nav";

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
    IconButton,
    Button,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

const HeaderView = () => {
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

                    <Nav />

                    <div className="searchBox">
                        <div className="searchIcon">
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            inputProps={{ "aria-label": "search" }}
                        />
                    </div>

                    <Button component={NavLink} to="/login/">
                        Войти
                    </Button>

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
