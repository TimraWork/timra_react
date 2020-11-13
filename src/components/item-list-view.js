import React from "react";

import { Fade, Grid, Grow } from "@material-ui/core";

import Item from "./item-view";
import { TransitionGroup } from "react-transition-group";

const ItemListView = ({ data, onItemListClicked, children }) => {
    return (
        <Fade in={true} timeout={1200}>
            <TransitionGroup component={Grid} container spacing={3}>
                {data.map((item, index) => {
                    const { id } = item;
                    const label = children(item);
                    return (
                        <Grow in={true} timeout={800} key={id}>
                            <Grid item xl={4} md={4}>
                                <Item
                                    label={label}
                                    id={id}
                                    onItemListClicked={() =>
                                        onItemListClicked(id)
                                    }
                                />
                            </Grid>
                        </Grow>
                    );
                })}
            </TransitionGroup>
        </Fade>
    );
};

export default ItemListView;
