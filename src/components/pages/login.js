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

const LoginPage = ({ isLoggedIn, onLogin }) => {
    console.log(onLogin);
    const classes = useStyles();
    return (
        <Grid container justify="center" className={classes.root}>
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
