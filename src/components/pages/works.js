import React, { Component } from "react";

import ItemList from "../item-list";
import ErrorBoundry from "../error-boundry";

import Row from "../../utils/row";

export default class WorksPage extends Component {
    state = {
        pageId: `9662`,
    };

    onItemListClicked = (id) => {
        console.log(`id = `, id);
    };

    render() {
        const { getData } = this.props;

        const worksList = (
            <ItemList
                pageId={this.state.pageId}
                getData={getData}
                onItemListClicked={this.onItemListClicked}
            >
                {(item) =>
                    `<img src="${item.img}" style="max-height: 100px;" alt=""/>
					<div><a href="${item.url}" target="_blank">${item.title}</a></div>`
                }
            </ItemList>
        );

        return (
            <React.Fragment>
                <h2>Работы</h2>
                <ErrorBoundry>
                    <Row left={worksList} filter="true"></Row>
                </ErrorBoundry>
            </React.Fragment>
        );
    }
}
