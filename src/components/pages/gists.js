import React, { Component } from "react";

import { GistList } from "../helpers/item-lists";
import { GistDetails } from "../helpers/item-details";

import ErrorBoundry from "../error-boundry";
import Row from "../../utils/row";
import withSwapiService from "../hoc/with-swapi";

class GistsPage extends Component {
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
        const {
            swapiService: { getGist, getGists },
        } = this.props;

        const gistsList = (
            <GistList
                getData={getGists}
                pageId={this.state.pageId}
                onItemListClicked={this.onItemListClicked}
            />
        );

        const gistDetails = (
            <GistDetails pageId={this.state.gistId} getData={getGist} />
        );

        return (
            <ErrorBoundry>
                <h2>Гисты</h2>
                <Row left={gistsList} right={gistDetails}></Row>
            </ErrorBoundry>
        );
    }
}

export default withSwapiService(GistsPage);
