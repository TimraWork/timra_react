import React, { Component } from "react";
import {
    Button,
    Grid,
    IconButton,
    InputAdornment,
    TextField,
} from "@material-ui/core";

import { Visibility, VisibilityOff } from "@material-ui/icons";

import withSwapiContext from "../hoc/with-swapi-context";
import { Redirect } from "react-router-dom";

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
        showPassword: false,
    };

    handleOnChange = (evt) => {
        this.setState({ [evt.target.name]: evt.target.value });
    };

    handleClickShowPassword = () => {
        this.setState({
            showPassword: !this.state.showPassword,
        });
    };

    render() {
        const { onLogin, isLoggedIn } = this.props;
        const { login, password, showPassword } = this.state;
        if (isLoggedIn || localStorage.getItem("token")) {
            return <Redirect to="/" />;
        }
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
                        type={showPassword ? "text" : "password"}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={this.handleClickShowPassword}
                                    >
                                        {showPassword ? (
                                            <Visibility />
                                        ) : (
                                            <VisibilityOff />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        label="Пароль"
                        onChange={this.handleOnChange}
                        name="password"
                        value={password}
                    />
                    <br />
                    <Button
                        fullWidth={true}
                        onClick={() =>
                            onLogin(this.props.getData(login, password))
                        }
                    >
                        Отправить
                    </Button>
                </form>
            </Grid>
        );
    }
}

export default withSwapiContext(LoginPage, mapLoginToProps);
