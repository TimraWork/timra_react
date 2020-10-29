import React, { Component } from "react";

import ItemList from "../item-list";

import Page from "../page";
import ErrorBoundry from "../error-boundry";

import Row from "../../utils/row";
import { SwapiConsumer } from "../context/swapi-context";

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
                        <ItemList
                            getData={getPosts}
                            pageId={this.state.pageId}
                            onItemListClicked={this.onItemListClicked}
                        >
                            {(item) =>
                                `<img src="${item.img}" style="max-height: 100px;" alt=""/>
						<div>${item.title}</div>
						<span class="date">(${item.date})</span>`
                            }
                        </ItemList>
                    );
                }}
            </SwapiConsumer>
        );

        const catsList = (
            <SwapiConsumer>
                {({ getCats }) => {
                    return (
                        <ItemList
                            pageId={this.state.pageId}
                            getData={getCats}
                            onItemListClicked={this.onCatsClicked}
                        >
                            {(item) =>
                                `<img src="${item.img}" style="max-height: 100px;" alt=""/><div>${item.title}</div>`
                            }
                        </ItemList>
                    );
                }}
            </SwapiConsumer>
        );

        const postItem = (
            <SwapiConsumer>
                {({ getPost }) => {
                    return (
                        <Page pageId={this.state.postId} getData={getPost} />
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