import React, { Component } from "react";

import { Container, CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "../theme";

import Header from "../components/header-view";
import Footer from "../components/footer-view";

import WorksPage from "./pages/works";
import GistsPage from "./pages/gists";
import PostsPage from "./pages/posts";
import AboutPage from "./pages/about";

import SwapiService from "../swapi-service";
import { SwapiProvider } from "../components/context/swapi-context";
import { PostDetails, GistDetails } from "../components/helpers/item-details";

import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends Component {
    swapiService = new SwapiService();

    render() {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Router>
                    <Header />
                    <Container maxWidth="xl" style={{ padding: 40 }}>
                        <SwapiProvider value={this.swapiService}>
                            <Route path="/" exact component={PostsPage} />
                            <Route path="/about" component={AboutPage} />
                            <Route path="/blog" exact component={PostsPage} />
                            <Route
                                path="/blog/:id"
                                render={({ match }) => {
                                    const { params } = match;
                                    return <PostDetails pageId={params.id} />;
                                }}
                            />
                            <Route
                                path="/gists/:id"
                                render={({ match }) => {
                                    const { params } = match;
                                    return <GistDetails pageId={params.id} />;
                                }}
                            />
                            <Route path="/works" component={WorksPage} />
                            <Route path="/gists" exact component={GistsPage} />
                        </SwapiProvider>
                    </Container>
                </Router>
                <Footer />
            </ThemeProvider>
        );
    }
}
