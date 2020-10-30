import React, { Component } from "react";

import { GistList } from "../helpers/item-lists";
import { GistDetails } from "../helpers/item-page";

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
                        <GistList
                            getData={getGists}
                            pageId={this.state.pageId}
                            onItemListClicked={this.onItemListClicked}
                        >
                            {(item) => `${item.title}`}
                        </GistList>
                    );
                }}
            </SwapiConsumer>
        );

        const gistDetails = (
            <SwapiConsumer>
                {({ getGist }) => {
                    return (
                        <GistDetails pageId={this.state.gistId} getData={getGist} />
                    );
                }}
            </SwapiConsumer>
        );

        return (
            <React.Fragment>
                <h2>Гисты</h2>
                <ErrorBoundry>
                    <Row left={gistsList} right={gistDetails}></Row>
                </ErrorBoundry>
            </React.Fragment>
        );
    }
}
