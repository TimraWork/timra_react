import React from "react";

import { AboutDetails } from "../helpers/item-details";
import ErrorBoundry from "../error-boundry";

import Row from "../../utils/row";

const AboutPage = () => {
    return (
        <ErrorBoundry>
            <Row full={<AboutDetails pageId="10618" />}></Row>
        </ErrorBoundry>
    );
};

export default AboutPage;
