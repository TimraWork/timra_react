import React, { Component } from 'react';

import Post from '../post';
import ItemList from '../item-list';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../swapi-service';

import Row from '../../utils/row';

export default class GistsPage extends Component {
    swapiService = new SwapiService();

	state = {
		gistId: 'e65d78cf4a641bfa6b5638d3fe71ef52',
    };

    render(){
        const { getGist, getGists} = this.swapiService;

        const gistsList = (
            <ItemList onItemListClicked={this.onItemListClicked} getData={getGists}>
                {(item) => `${item.title}`}
            </ItemList>
        );

        const gistItem = <Post postId={this.state.gistId} getData={getGist} />;

        return(
            <React.Fragment>
                <h2>Гисты</h2>
                <ErrorBoundry>
                    <Row left={gistsList} right={gistItem}></Row>
                </ErrorBoundry>
            </React.Fragment>
        );
    }
}