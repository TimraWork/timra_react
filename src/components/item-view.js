import React from "react";

import {
    Card,
    CardActionArea,
    CardContent,
    Typography,
} from "@material-ui/core";

const ItemView = ({ label, onItemListClicked }) => {
    return (
        <Card height="100%" onClick={onItemListClicked}>
            <CardActionArea>
                <CardContent>
                    <Typography
                        variant="body2"
                        color="textPrimary"
                        dangerouslySetInnerHTML={{ __html: label }}
                    ></Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ItemView;
