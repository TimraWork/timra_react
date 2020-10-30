import React, { Component } from "react";

import ErrorBoundry from "../error-boundry";

import Row from "../../utils/row";
import { SwapiConsumer } from "../context/swapi-context";

import { PostList, CatList } from "../helpers/item-lists";
import { PostDetails } from "../helpers/item-page";


export default class BlogPage extends Component {
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
        const postsList = (
            <SwapiConsumer>
                {({ getPosts }) => {
                    return (
                        <PostList
                            getData={getPosts}
                            pageId={this.state.pageId}
                            onItemListClicked={this.onItemListClicked}
                        >
                            {(item) =>
                                `<img src="${item.img}" style="max-height: 100px;" alt=""/>
						<div>${item.title}</div>
						<span class="date">(${item.date})</span>`
                            }
                        </PostList>
                    );
                }}
            </SwapiConsumer>
        );

        const catsList = (
            <SwapiConsumer>
                {({ getCats }) => {
                    return (
                        <CatList
                            pageId={this.state.pageId}
                            getData={getCats}
                            onItemListClicked={this.onCatsClicked}
                        >
                            {(item) =>
                                `<img src="${item.img}" style="max-height: 100px;" alt=""/><div>${item.title}</div>`
                            }
                        </CatList>
                    );
                }}
            </SwapiConsumer>
        );

        const postItem = (
            <SwapiConsumer>
                {({ getPost }) => {
                    return (
                        <PostDetails pageId={this.state.postId} getData={getPost} />
                    );
                }}
            </SwapiConsumer>
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
