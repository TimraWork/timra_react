import React from "react";

import { Grid } from "@material-ui/core";

import Pager from "../components/pagination-view";

const Row = ({ left, right }) => {
    return (
        <Grid container spacing={3}>
            <Grid item xl={6} md={6}>
                {left}
                <Pager></Pager>
            </Grid>
            <Grid item xl={6} md={6}>
                {right}
            </Grid>
        </Grid>
    );
};

export default Row;
