import React, { Component } from 'react';

import ItemList from '../item-list';
import Post from '../post';

import ErrorBoundry from '../error-boundry';
import SwapiService from '../../swapi-service';

import Row from '../../utils/row';

export default class BlogPage extends Component {
    swapiService = new SwapiService();

	state = {
		postId: 1
	};

    render(){
        const {getPosts, getPost, getCats } = this.swapiService;

		const postsList = (
			<React.Fragment >
				<ItemList getData={getPosts} >
					{(item) =>
						`<img src="${item.img}" style="max-height: 100px;" alt=""/>
						<div>${item.title}</div>
						<span class="date">(${item.date})</span>`
					}
				</ItemList>
			</React.Fragment >
		);

        const postItem = <Post postId={this.state.postId} getData={getPost} />;

		const catsList = (
			<ItemList getData={getCats}>
				{(item) =>
					`<img src="${item.img}" style="max-height: 100px;" alt=""/>
					<div>${item.title}</div>`
				}
			</ItemList>
        );

        return(
            <React.Fragment>
                <h2>Блог</h2>
                <ErrorBoundry>
                    <Row left={postsList} right={catsList}></Row>
                    <Row full={postItem}></Row>
                </ErrorBoundry>
            </React.Fragment>
        );
    }
}