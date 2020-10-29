import React from "react";
import { SwapiConsumer } from "../context/swapi-context";

const withSwapiService = (Wrapped) => {
    return (
        <SwapiConsumer>
            {(swapiService) => {
                return <Wrapped {...this.props} swapiService={swapiService} />;
            }}
        </SwapiConsumer>
    );
};

export { withSwapiService };
