import React from "react";
import { IconButton } from "@material-ui/core";
import { Edit } from "@material-ui/icons";

import { LoginConsumer } from "./context/login-context";

const IconEdit = ({ link: { link } }) => {
    return (
        <IconButton
            color="primary"
            onClick={() => window.open(`${link}`, "_blank")}
            style={{ float: "right" }}
        >
            <Edit />
        </IconButton>
    );
};

const IconEditView = (link) => {
    return (
        <LoginConsumer>
            {(loggedIn) => {
                return loggedIn && <IconEdit link={link} />;
            }}
        </LoginConsumer>
    );
};

export default IconEditView;
