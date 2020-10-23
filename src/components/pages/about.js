import React, { Component } from "react";

import Page from "../page";
import ErrorBoundry from "../error-boundry";

import Row from "../../utils/row";

export default class AboutPage extends Component {
    state = {
        pageId: "10618",
    };

    render() {
        const { getData } = this.props;
        const aboutItem = <Page pageId={this.state.pageId} getData={getData} />;

        return (
            <React.Fragment>
                <h2>Обо мне</h2>
                <ErrorBoundry>
                    <Row full={aboutItem}></Row>
                </ErrorBoundry>
            </React.Fragment>
        );
    }
}
