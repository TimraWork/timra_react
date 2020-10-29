import React, { Component } from "react";

import ItemList from "../item-list";
import ErrorBoundry from "../error-boundry";

import Row from "../../utils/row";

import { SwapiConsumer } from "../context/swapi-context";

export default class WorksPage extends Component {
    state = {
        pageId: `9662`,
    };

    onItemListClicked = (id) => {
        // console.log(`id = `, id);
    };

    render() {
        const worksList = (
            <SwapiConsumer>
                {({ getWorks }) => {
                    return (
                        <ItemList
                            pageId={this.state.pageId}
                            getData={getWorks}
                            onItemListClicked={this.onItemListClicked}
                        >
                            {(item) =>
                                `<img src="${item.img}" style="max-height: 100px;" alt=""/>
					<div><a href="${item.url}" target="_blank">${item.title}</a></div>`
                            }
                        </ItemList>
                    );
                }}
            </SwapiConsumer>
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
