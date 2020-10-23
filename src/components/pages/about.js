import React, { Component } from 'react';

import Page from '../page';

import ErrorBoundry from '../error-boundry';
import SwapiService from '../../swapi-service';

import Row from '../../utils/row';

export default class AboutPage extends Component {
    swapiService = new SwapiService();

	state = {
		pageId: '10618',
	};

    render(){
        const { getPage } = this.swapiService;

		const aboutItem = <Page pageId={this.state.pageId} getData={getPage} />;

        return(
            <React.Fragment>
                <h2>Обо мне</h2>
                <ErrorBoundry>
                    <Row full={aboutItem}></Row>
                </ErrorBoundry>
            </React.Fragment>
        );
    }
}