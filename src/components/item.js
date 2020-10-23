import React, { Component } from "react";

import {
    Card,
    CardActionArea,
    CardContent,
    Typography,
} from "@material-ui/core";

export default class PostItem extends Component {
    render() {
        const { label, onItemListClicked } = this.props;

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
    }
}
