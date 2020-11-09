import React, { Component } from "react";

import { Container, CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "../theme";

import Header from "../components/header-view";
import Footer from "../components/footer-view";

import WorksPage from "./pages/works";
import GistsPage from "./pages/gists";
import BlogPage from "./pages/blog";
import AboutPage from "./pages/about";
import PasswordsPage from "./pages/passwords";
import LoginPage from "./pages/login";

import SwapiService from "../swapi-service";
import { SwapiProvider } from "../components/context/swapi-context";
import { PostDetails } from "../components/helpers/item-details";

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from "react-router-dom";

export default class App extends Component {
    swapiService = new SwapiService();
    state = {
        isLoggedIn: false,
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true,
        });
    };
    render() {
        const { isLoggedIn } = this.state;
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <Header />
                    <Container maxWidth="xl" style={{ padding: 40 }}>
                        <SwapiProvider value={this.swapiService}>
                            <Switch>
                                <Route path="/" exact component={BlogPage} />
                                <Route path="/about" component={AboutPage} />
                                <Route
                                    path="/blog"
                                    exact
                                    component={BlogPage}
                                />
                                <Route
                                    path="/blog/:id"
                                    render={({ match: { params } }) => {
                                        return (
                                            <PostDetails pageId={params.id} />
                                        );
                                    }}
                                />
                                <Route path="/works" component={WorksPage} />
                                <Route
                                    path="/gists/:id?"
                                    exact
                                    component={GistsPage}
                                />
                                <Route
                                    path="/passwords"
                                    exact
                                    render={() => (
                                        <PasswordsPage
                                            isLoggedIn={isLoggedIn}
                                        />
                                    )}
                                />
                                <Route
                                    path="/login/"
                                    render={() => (
                                        <LoginPage
                                            isLoggedIn={isLoggedIn}
                                            onLogin={this.onLogin}
                                        />
                                    )}
                                />
                                <Redirect to="/" />
                                {/* <Route render={() => <h2>404</h2>} /> */}
                            </Switch>
                        </SwapiProvider>
                    </Container>
                </Router>
                <Footer />
            </ThemeProvider>
        );
    }
}
