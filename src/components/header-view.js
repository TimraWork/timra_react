import React from "react";

import Logo from "../assets/img/logo.png";
import Nav from "./nav";

import { Menu, Search, AddCircle, VpnKey } from "@material-ui/icons";

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

const HeaderView = ({ isLoggedIn, onLogin }) => {
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
                            <Search />
                        </div>
                        <InputBase
                            placeholder="Search…"
                            inputProps={{ "aria-label": "search" }}
                        />
                    </div>

                    {isLoggedIn ? (
                        <React.Fragment>
                            <IconButton
                                color="primary"
                                aria-label="timra.ru/timra"
                                onClick={() =>
                                    window.open(
                                        "https://timra.ru/timra/wp-admin/post-new.php",
                                        "_blank"
                                    )
                                }
                            >
                                <AddCircle />
                            </IconButton>
                            <IconButton
                                color="primary"
                                aria-label="timra.ru/timra"
                                onClick={() =>
                                    window.open(
                                        "https://timra.ru/timra/paroli-pass/",
                                        "_blank"
                                    )
                                }
                            >
                                <VpnKey />
                            </IconButton>
                            <Button
                                component={NavLink}
                                to="/login/"
                                onClick={() => onLogin()}
                            >
                                Выйти
                            </Button>
                        </React.Fragment>
                    ) : (
                        <Button component={NavLink} to="/login/">
                            Войти
                        </Button>
                    )}

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
                            <Menu />
                        </IconButton>
                    </Hidden>
                </Grid>
            </Container>
        </header>
    );
};

export default HeaderView;
