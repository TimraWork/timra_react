import React, { Component } from "react";

import { GistList } from "../helpers/item-lists";
import { GistDetails } from "../helpers/item-details";

import ErrorBoundry from "../error-boundry";
import Row from "../../utils/row";

import { withRouter } from "react-router-dom";
import IconEditView from "../icon-edit-view";

class GistsPage extends Component {
    state = {
        gistId: "e65d78cf4a641bfa6b5638d3fe71ef52",
        pageId: 1,
    };

    onItemListClicked = (id) => {
        const { history } = this.props;
        history.push(`${id}`);
    };

    render() {
        const gistsList = (
            <GistList
                pageId={this.state.pageId}
                onItemListClicked={this.onItemListClicked}
            />
        );

        const { match } = this.props;

        const gistDetails = <GistDetails pageId={match.params.id} />;

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
