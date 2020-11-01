import React, { Component } from "react";

import ErrorBoundry from "../error-boundry";

import Row from "../../utils/row";

import { PostList, CatList } from "../helpers/item-lists";
import { PostDetails } from "../helpers/item-details";

import withSwapiService from "../hoc/with-swapi-context";

class BlogPage extends Component {
    state = {
        postId: 1,
        pageId: 1,
    };

    onItemListClicked = (id) => {
        this.setState({
            postId: id,
        });
    };

    onCatsClicked = (id) => {
        console.log("console.log = ", id);
    };

    render() {
        const {
            swapiService: { getPosts, getCats, getPost },
        } = this.props;

        const postsList = (
            <PostList
                getData={getPosts}
                pageId={this.state.pageId}
                onItemListClicked={this.onItemListClicked}
            />
        );

        const catsList = (
            <CatList
                pageId={this.state.pageId}
                getData={getCats}
                onItemListClicked={this.onCatsClicked}
            />
        );

        const postItem = (
            <PostDetails pageId={this.state.postId} getData={getPost} />
        );

        return (
            <React.Fragment>
                <h2>Блог</h2>
                <ErrorBoundry>
                    <Row left={postsList} right={catsList}></Row>
                    <Row full={postItem}></Row>
                </ErrorBoundry>
            </React.Fragment>
        );
    }
}

export default withSwapiService(BlogPage);
