import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";

import Preloader from "./preloader";
import Error from "./error";
import Item from "./item";

export default class ItemList extends Component {
    state = {
        data: null,
        loading: true,
        error: false,
    };

    onError = (err) => {
        console.log(`err = `, err);
        this.setState({
            error: err,
            loading: false,
        });
    };

    componentDidMount() {
        const { getData, pageId } = this.props;

        getData(pageId)
            .then((data) => {
                this.setState({
                    data,
                    loading: false,
                    error: false,
                });
            })
            .catch(this.onError);
    }

    render() {
        const { data, loading, error } = this.state;

        const error_bl = error ? <Error /> : null;
        const preloader = !data && loading ? <Preloader /> : null;

        const content =
            !(loading || error) && data ? (
                <PostView data={data} {...this.props} />
            ) : null;

        return (
            <React.Fragment>
                {error_bl}
                {preloader}
                <Grid container spacing={3}>
                    {content}
                </Grid>
            </React.Fragment>
        );
    }
}

const PostView = (props) => {
    const { data, onItemListClicked, children } = props;
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
