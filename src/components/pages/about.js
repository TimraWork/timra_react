import React from "react";

import { AboutDetails } from "../helpers/item-details";
import ErrorBoundry from "../error-boundry";

import Row from "../../utils/row";

import withSwapiService from "../hoc/with-swapi";

const AboutPage = ({ swapiService }) => {
    const { getPage } = swapiService;

    const aboutItem = <AboutDetails pageId="10618" getData={getPage} />;

    return (
        <ErrorBoundry>
            <Row full={aboutItem}></Row>
        </ErrorBoundry>
    );
};

export default withSwapiService(AboutPage);
