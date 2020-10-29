import React from "react";

import Page from "../page";
import ErrorBoundry from "../error-boundry";

import Row from "../../utils/row";

import { withSwapiService } from "../hoc/with-swapi";

const AboutPage = ({ swapiService }) => {
    const { getPage } = swapiService;
    const aboutItem = <Page pageId="10618" getData={getPage} />;

    return (
        <React.Fragment>
            <ErrorBoundry>
                <Row full={aboutItem}></Row>
            </ErrorBoundry>
        </React.Fragment>
    );
};

export default withSwapiService(AboutPage);
