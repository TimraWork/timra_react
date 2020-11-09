import React from "react";
import { Button, Grid, TextField } from "@material-ui/core";

import { SwapiConsumer } from "../context/swapi-context";

const LoginPage = ({ isLoggedIn, onLogin }) => {
    // console.log(onLogin);
    return (
        <SwapiConsumer>
            {(swapiService) => {
                swapiService.getToken();
                return (
                    <Grid container justify="center">
                        <form>
                            <h2 className="text-center">Войти</h2>
                            <TextField label="Логин" />
                            <br />
                            <TextField type="password" label="Пароль" />
                            <br />
                            <Button fullWidth={true} onClick={onLogin}>
                                Отправить
                            </Button>
                        </form>
                    </Grid>
                );
            }}
        </SwapiConsumer>
    );
};

export default LoginPage;
