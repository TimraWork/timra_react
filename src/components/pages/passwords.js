import React from "react";
import { AboutDetails } from "../helpers/item-details";
import { Redirect } from "react-router-dom";

const PasswordsPage = ({ isLoggedIn }) => {
    console.log(isLoggedIn);
    if (isLoggedIn) {
        return <AboutDetails pageId="2075" />;
    }
    return <Redirect to="/login/" />;
};

export default PasswordsPage;
