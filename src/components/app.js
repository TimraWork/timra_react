import React, { Component } from "react";

import { Container, CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "../theme";

import Header from "../components/header";
import Footer from "../components/footer";

import WorksPage from "./pages/works";
import GistsPage from "./pages/gists";
import PostsPage from "./pages/posts";
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

        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Container maxWidth="xl" style={{ padding: 40 }}>
                    <AboutPage getData={getPage}></AboutPage>
                    <WorksPage
                        getData={getWorks}
                        onItemListClicked={onItemListClicked}
                    ></WorksPage>
                    <PostsPage
                        getData={[getPosts, getPost, getCats]}
                        onItemListClicked={onItemListClicked}
                    ></PostsPage>
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
