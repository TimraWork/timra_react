import React, { Component } from "react";

// import ItemList from "../item-list";
import ErrorBoundry from "../components/error-boundry";
import Page from "../components/page";

import Row from "../utils/row";

const WithPage = (View, idPage, dataPage) => {
    return class WithPage extends Component {
        state = {
            idPage: idPage,
        };

        componentDidMount() {
            console.log(`with Page = `, this.props);
        }

        onItemListClicked = (id) => {
            console.log(`id = `, id);
        };

        render() {
            const postItem = (
                <Page pageId={this.state.idPage} getData={dataPage} />
            );

            return (
                // <View {...this.props}></View>

                <View {...this.props}>
                    <ErrorBoundry>
                        <Row full={postItem}>6345435</Row>
                    </ErrorBoundry>
                </View>
            );
        }
    };
};

export default WithPage;
