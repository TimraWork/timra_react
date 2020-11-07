import React from "react";
import { AboutDetails } from "../helpers/item-details";

const PasswordsPage = ({ isLoggedIn }) => {
    console.log(isLoggedIn);
    if (isLoggedIn) {
        return <AboutDetails pageId="2075" />;
    }
    return <p>You should not see this!!!</p>;
};

export default PasswordsPage;
