import React, { Component } from "react";

import ItemList from "../item-list";

import Page from "../page";
import ErrorBoundry from "../error-boundry";

import Row from "../../utils/row";

import { SwapiConsumer } from "../context/swapi-context";

export default class GistsPage extends Component {
    state = {
        gistId: "e65d78cf4a641bfa6b5638d3fe71ef52",
        pageId: 1,
    };

    onItemListClicked = (id) => {
        this.setState({
            gistId: id,
        });
    };

    render() {
        const gistsList = (
            <SwapiConsumer>
                {({ getGists }) => {
                    return (
                        <ItemList
                            getData={getGists}
                            pageId={this.state.pageId}
                            onItemListClicked={this.onItemListClicked}
                        >
                            {(item) => `${item.title}`}
                        </ItemList>
                    );
                }}
            </SwapiConsumer>
        );

        const gistItem = (
            <SwapiConsumer>
                {({ getGist }) => {
                    return (
                        <Page pageId={this.state.gistId} getData={getGist} />
                    );
                }}
            </SwapiConsumer>
        );

        return (
            <React.Fragment>
                <h2>Гисты</h2>
                <ErrorBoundry>
                    <Row left={gistsList} right={gistItem}></Row>
                </ErrorBoundry>
            </React.Fragment>
        );
    }
}
