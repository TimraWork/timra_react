import React, { Component } from "react";

import Page from "../page";
import ErrorBoundry from "../error-boundry";

import Row from "../../utils/row";

import { SwapiConsumer } from "../context/swapi-context";

export default class AboutPage extends Component {
    state = {
        pageId: "10618",
    };

    render() {
        const aboutItem = (
            <SwapiConsumer>
                {({ getPage }) => {
                    return (
                        <Page pageId={this.state.pageId} getData={getPage} />
                    );
                }}
            </SwapiConsumer>
        );

        return (
            <React.Fragment>
                <ErrorBoundry>
                    <Row full={aboutItem}></Row>
                </ErrorBoundry>
            </React.Fragment>
        );
    }
}
