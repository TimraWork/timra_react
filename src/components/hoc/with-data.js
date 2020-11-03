import React, { Component } from "react";

import PreloaderView from "../preloader-view";
import ErrorView from "../error-view";

const withData = (View) => {
    return class withData extends Component {

        static defaultProps = {
            onItemListClicked: () => {}
        }

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
            this.updateData();
        }

        onDataLoaded = (data) => {
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

            getData(pageId).then(this.onDataLoaded).catch(this.onError);
        }

        componentDidUpdate(prevProps) {
            if (this.props.pageId !== prevProps.pageId) {
                this.updateData();
            }
        }

        render() {
            const { data, loading, error } = this.state;

            const error_bl = error ? <ErrorView /> : null;
            const preloader = !data && loading ? <PreloaderView /> : null;

            const content =
                !(loading || error) && data ? (
                    <View data={data} {...this.props} />
                ) : null;
            return (
                <React.Fragment>
                    {error_bl}
                    {preloader}
                    {content}
                </React.Fragment>
            );
        }
    };
};

export default withData;
