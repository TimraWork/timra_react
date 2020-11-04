import React, { Component } from "react";

import ErrorBoundry from "../error-boundry";

import Row from "../../utils/row";

import { WorkList } from "../helpers/item-lists";
class WorksPage extends Component {
    state = {
        pageId: `9662`,
    };

    render() {
        const worksList = (
            <WorkList
                pageId={this.state.pageId}
            />
        );

        return (
            <React.Fragment>
                <h2>Работы</h2>
                <ErrorBoundry>
                    <Row left={worksList} filter="true"></Row>
                </ErrorBoundry>
            </React.Fragment>
        );
    }
}

export default WorksPage;
