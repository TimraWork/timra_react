import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { Typography } from "@material-ui/core";

const ItemDetailsView = (data) => {
    const {
        data: { title, date, excerpt },
    } = data;

    return (
        <React.Fragment>
            <Typography
                gutterBottom
                variant="h4"
                component="h2"
                dangerouslySetInnerHTML={{ __html: title }}
            ></Typography>
            <Typography variant="body2" color="textPrimary">
                {date}
            </Typography>
            <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                dangerouslySetInnerHTML={{ __html: excerpt }}
            ></Typography>
        </React.Fragment>
    );
};

export default ItemDetailsView;
