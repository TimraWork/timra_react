import React, { Component } from 'react';

import ItemList from '../item-list';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../swapi-service';

import Row from '../../utils/row';

export default class WorksPage extends Component {
    swapiService = new SwapiService();

    state = {
		pageId: `9662`
    };
    
    render(){
        const { getWorks } = this.swapiService;

        const worksList = (
			<ItemList pageId={this.state.pageId} getData={getWorks}>
				{(item) =>
					`<img src="${item.img}" style="max-height: 100px;" alt=""/>
					<div><a href="${item.url}" target="_blank">${item.title}</a></div>
					`}
			</ItemList>
		);

        return(
            <React.Fragment>
                <h2>Работы</h2>
                <ErrorBoundry>
                    <Row left={worksList} filter="true"></Row>
                </ErrorBoundry>
            </React.Fragment>
        );
    }
}