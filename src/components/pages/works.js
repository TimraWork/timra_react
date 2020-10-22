import React, { Component } from 'react';

import Posts from '../posts';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../swapi-service';

import Row from '../../utils/row';

export default class WorksPage extends Component {
    swapiService = new SwapiService();

    render(){
        const { getWorks} = this.swapiService;

        const worksList = (
			<Posts getData={getWorks}>
				{(item) =>
					`<img src="${item.img}" style="max-height: 100px;" alt=""/>
					<div><a href="${item.url}" target="_blank">${item.title}</a></div>
					`}
			</Posts>
		);

        return(
            <React.Fragment>
                <h2>Работы</h2>
                <ErrorBoundry>
                    <Row left={worksList} filter="true"></Row>
                </ErrorBoundry>

                <br />
                <br />
                <br />
            </React.Fragment>
        );
    }
}