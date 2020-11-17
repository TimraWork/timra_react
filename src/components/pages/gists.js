import React, { Component } from "react";

import { GistList } from "../helpers/item-lists";
import { GistDetails } from "../helpers/item-details";

import ErrorBoundry from "../error-boundry";
import Row from "../../utils/row";

import { withRouter } from "react-router-dom";
import IconEditView from "../icon-edit-view";

class GistsPage extends Component {
    state = {
        gistId: "caf5c68c163ccd9c089b437d3a507d15",
        pageId: 1,
    };

    onItemListClicked = (id) => {
        const { history } = this.props;
        history.push(`${id}`);
    };

    render() {
        const {
            match: { params },
        } = this.props;

        const { gistId } = this.state;

        const gistsList = (
            <GistList
                pageId={gistId}
                onItemListClicked={this.onItemListClicked}
            />
        );

        const gistDetails = (
            <GistDetails pageId={params.id ? params.id : gistId} />
        );

        return (
            <ErrorBoundry>
                <IconEditView link={`https://gist.github.com/`} />
                <h2>Гисты</h2>
                <Row left={gistsList} right={gistDetails}></Row>
            </ErrorBoundry>
        );
    }
}

export default withRouter(GistsPage);
