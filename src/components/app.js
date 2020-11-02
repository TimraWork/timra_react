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
export default class App extends Component {
    swapiService = new SwapiService();

    render() {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Container maxWidth="xl" style={{ padding: 40 }}>
                    <SwapiProvider value={this.swapiService}>
                        <PostsPage></PostsPage>
                        <AboutPage></AboutPage>
                        <WorksPage></WorksPage>
                        <GistsPage></GistsPage>
                    </SwapiProvider>
                </Container>
                <Footer />
            </ThemeProvider>
        );
    }
}
