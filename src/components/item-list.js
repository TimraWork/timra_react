import React from "react";

import Grid from "@material-ui/core/Grid";

import withData from "../hoc/with-data";

import Item from "./item";

const PostView = ({ data, onItemListClicked, children }) => {
    return (
        <Grid container spacing={3}>
            {data.map((item) => {
                const { id } = item;
                const label = children(item);

                return (
                    <React.Fragment key={id}>
                        <Grid item xl={6} md={6} key={id}>
                            <Item
                                label={label}
                                id={id}
                                onItemListClicked={() => onItemListClicked(id)}
                            />
                        </Grid>
                    </React.Fragment>
                );
            })}
        </Grid>
    );
};

export default withData(PostView);
