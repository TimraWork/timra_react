import React, { Component } from "react";

import PreloaderView from "../preloader-view";
import ErrorView from "../error-view";

import IconEditView from "../icon-edit-view";

const withData = (View) => {
    return class withData extends Component {
        static defaultProps = {
            onItemListClicked: () => {},
        };

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
            this.data = data;
            this.setState({
                data,
                loading: false,
                error: false,
            });
        };

        updateData() {
            const { pageId, getData } = this.props;

            console.log(`this.props = `, this.props);

            if (!pageId) {
                return;
            }

            getData(pageId).then(this.onDataLoaded).catch(this.onError);
        }

        filterData() {
            const { category } = this.props;

            const filteredData =
                category === "All"
                    ? this.data
                    : this.data.filter((work) => work.category === category);

            this.setState({
                data: filteredData,
            });
        }

        componentDidUpdate(prevProps) {
            if (this.props.pageId !== prevProps.pageId) {
                this.updateData();
            }

            if (this.props.category !== prevProps.category) {
                this.filterData();
            }
        }

        render() {
            const { data, loading, error } = this.state;
            const error_bl = error ? <ErrorView /> : null;
            const preloader = !data && loading ? <PreloaderView /> : null;

            const content =
                !(loading || error) && data ? (
                    <React.Fragment>
                        {data.edit && <IconEditView link={data.edit} />}
                        <View data={data} {...this.props} />
                    </React.Fragment>
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
