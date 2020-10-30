import React from "react";

import { Grid, Chip } from "@material-ui/core";

import Pager from "../components/pagination-view";

const Row = ({ left, right, full, filter }) => {
    if (full) {
        return <Grid>{full}</Grid>;
    }
    if (filter) {
        return (
            <React.Fragment>
                <Grid container spacing={3}>
                    <Grid item xl={6} md={12}>
                        <Grid
                            container
                            justify="center"
                            style={{ minHeight: "6vh" }}
                        >
                            <Chip color="primary" label="Все работы" />
                            <Chip label="Wordpress" />
                            <Chip label="Frontend" />
                        </Grid>
                        {left}
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
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
