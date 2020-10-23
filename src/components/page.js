import React, { Component } from "react";

import {
    Card,
    CardActionArea,
    CardContent,
    Typography,
} from "@material-ui/core";

import Preloader from "./preloader";
import Error from "./error";

import SwapiService from "../swapi-service";

export default class Page extends Component {
    SwapiService = new SwapiService();

    state = {
        data: null,
        loading: true,
        error: false,
    };

    onDataLoaded = (data) => {
        // console.log({ data });
        this.setState({
            data,
            loading: false,
            error: false,
        });
    };

    onError = () => {
        this.setState({
            error: true,
            loading: false,
        });
    };

    updateData() {
        this.setState({
            loading: true,
        });

        const { pageId, getData } = this.props;

        if (!pageId) {
            return;
        }
        getData(pageId).then(this.onDataLoaded).catch(this.onError);
    }

    componentDidMount() {
        this.updateData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.pageId !== prevProps.pageId) {
            this.updateData();
        }
    }

    render() {
        const { data, loading, error } = this.state;

        const error_bl = error ? <Error /> : null;
        const preloader = data && loading ? <Preloader /> : null;
        const content = !(loading || error) ? <PageView data={data} /> : null;

        return (
            <Card>
                <CardActionArea>
                    {error_bl}
                    {preloader}
                    {content}
                </CardActionArea>
            </Card>
        );
    }
}

const PageView = (data) => {
    const {
        data: { title, date, excerpt },
    } = data;

    return (
        <React.Fragment>
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
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
            </CardContent>
        </React.Fragment>
    );
};
