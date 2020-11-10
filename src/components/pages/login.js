import React, { Component } from "react";
import { Button, Grid, TextField } from "@material-ui/core";

import withSwapiContext from "../hoc/with-swapi-context";

const mapLoginToProps = (swapiService) => {
    return {
        getData: swapiService.getToken,
    };
};

class LoginPage extends Component {
    state = {
        data: null,
        login: "",
        password: "",
        loading: false,
        error: false,
    };

    handleOnChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    };

    onDataLoaded = (data) => {
        console.log(`data.token = `, data.token);
        this.setState({
            data,
            loading: false,
            error: false,
        });
    };

    onError = (err) => {
        console.log(`err = `, err);
        this.setState({
            error: err,
            loading: false,
        });
    };

    handleOnClick = (evt) => {
        evt.preventDefault();
        this.setState(
            {
                loading: true,
            },
            () => {
                const { login, password } = this.state;
                console.log("login, password = ", login, password);
                this.props
                    .getData(login, password)
                    .then(this.onDataLoaded)
                    .catch(this.onError);
            }
        );
    };

    render() {
        const { login, password } = this.state;
        return (
            <Grid container justify="center">
                <form>
                    <h2 className="text-center">Войти</h2>
                    <TextField
                        type="text"
                        label="Логин"
                        onChange={this.handleOnChange}
                        name="login"
                        value={login}
                    />
                    <br />
                    <TextField
                        type="password"
                        label="Пароль"
                        onChange={this.handleOnChange}
                        name="password"
                        value={password}
                    />
                    <br />
                    <Button fullWidth={true} onClick={this.handleOnClick}>
                        Отправить
                    </Button>
                </form>
            </Grid>
        );
    }
}

export default withSwapiContext(LoginPage, mapLoginToProps);
