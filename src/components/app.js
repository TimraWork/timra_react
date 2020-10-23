import React, { Component } from "react";

import { Container, CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "../theme";

import Header from "../components/header";
import Footer from "../components/footer";

import WorksPage from "./pages/works";
import GistsPage from "./pages/gists";
import BlogPage from "./pages/blog";
import AboutPage from "./pages/about";

import SwapiService from "../swapi-service";
export default class App extends Component {
    swapiService = new SwapiService();

    render() {
        const { onItemListClicked } = this.props;
        const {
            getPage,
            getWorks,
            getPosts,
            getPost,
            getCats,
            getGist,
            getGists,
        } = this.swapiService;
        console.log(getWorks);

        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Container maxWidth="xl">
                    <WorksPage
                        getData={getWorks}
                        onItemListClicked={onItemListClicked}
                    ></WorksPage>
                    <AboutPage getData={getPage}></AboutPage>
                    <BlogPage
                        getData={[getPosts, getPost, getCats]}
                        onItemListClicked={onItemListClicked}
                    ></BlogPage>
                    <GistsPage
                        getData={[getGist, getGists]}
                        onItemListClicked={onItemListClicked}
                    ></GistsPage>
                </Container>
                <Footer />
            </ThemeProvider>
        );
    }
}
