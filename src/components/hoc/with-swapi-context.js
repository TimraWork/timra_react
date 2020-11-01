import React from "react";
import { SwapiConsumer } from "../context/swapi-context";

const withSwapiService = (Wrapped) => {
    return (props) => {
        return (
            <SwapiConsumer>
                {(swapiService) => {
                    return <Wrapped {...props} swapiService={swapiService} />;
                }}
            </SwapiConsumer>
        );
    };
};

export default withSwapiService;
