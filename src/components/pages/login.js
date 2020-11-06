import { Button, Grid, TextField, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    // root: {
    //     display: "flex",
    //     flexWrap: "wrap",
    // },
    // textField: {
    //     // marginLeft: theme.spacing(1),
    //     // marginRight: theme.spacing(1),
    //     // width: "255ch",
    // },
}));

const LoginPage = () => {
    const classes = useStyles();
    return (
        <Grid container justify="center" className={classes.root}>
            <form>
                <h2 classList="text-center">Войти</h2>
                <TextField label="Логин" />
                <br />
                <TextField type="password" label="Пароль" />
                <br />
                <Button fullWidth={true}>Отправить</Button>
            </form>
        </Grid>
    );
};

export default LoginPage;
