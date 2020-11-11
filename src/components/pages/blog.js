import React, { Component } from "react";

import Row from "../../utils/row";

import { PostList, CatList } from "../helpers/item-lists";
import { withRouter } from "react-router-dom";

class BlogPage extends Component {
    state = {
        postId: 1,
        pageId: 1,
    };

    onItemListClicked = (id) => {
        const { history } = this.props;
        history.push(`${id}`);
    };

    onCatsClicked = (id) => {
        // console.log("console.log = ", id);
    };

    render() {
        const postsList = (
            <PostList
                pageId={this.state.pageId}
                onItemListClicked={this.onItemListClicked}
            />
        );

        const catsList = (
            <CatList
                pageId={this.state.pageId}
                onItemListClicked={this.onCatsClicked}
            />
        );

        return (
            <React.Fragment>
                <h2>Блог</h2>
                <Row left={postsList} right={catsList}></Row>
            </React.Fragment>
        );
    }
}

export default withRouter(BlogPage);
