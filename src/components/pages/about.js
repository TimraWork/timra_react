import React from "react";

import { AboutDetails } from "../helpers/item-details";
import ErrorBoundry from "../error-boundry";

import Row from "../../utils/row";

const AboutPage = (props) => {
    const aboutItem = <AboutDetails pageId="10618" {...props} />;

    return (
        <ErrorBoundry>
            <Row full={aboutItem}></Row>
        </ErrorBoundry>
    );
};

export default AboutPage;
