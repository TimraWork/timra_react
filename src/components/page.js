import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import { Typography } from "@material-ui/core";

import Preloader from "./preloader";
import Error from "./error";

export default class Page extends Component {
    state = {
        data: null,
        loading: true,
        error: false,
    };

    onError = (err) => {
        console.log(`err = `, err);
        this.setState({
            error: true,
            loading: false,
        });
    };

    componentDidMount() {
        this.updateData();
    }

    onDataLoaded = (data) => {
        // console.log({ data });
        this.setState({
            data,
            loading: false,
            error: false,
        });
    };

    updateData() {
        const { pageId, getData } = this.props;

        if (!pageId) {
            return;
        }

        this.setState({
            loading: true,
        });

        getData(pageId).then(this.onDataLoaded).catch(this.onError);
    }

    componentDidUpdate(prevProps) {
        if (this.props.pageId !== prevProps.pageId) {
            this.updateData();
        }
    }

    render() {
        const { data, loading, error } = this.state;

        const error_bl = error ? <Error /> : null;
        const preloader = !data && loading ? <Preloader /> : null;
        const content = !(loading || error) ? <PageView data={data} /> : null;

        return (
            <React.Fragment>
                {error_bl}
                {preloader}
                {content}
            </React.Fragment>
        );
    }
}

const PageView = (data) => {
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
