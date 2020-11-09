import React from "react";

import { Button, Grid, TextField } from "@material-ui/core";

const LoginPage = ({ isLoggedIn, onLogin }) => {
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
};

export default LoginPage;
