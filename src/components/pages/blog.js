import React, { Component } from 'react';

import Posts from '../posts';
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
        const { getPost, getPosts, getCats } = this.swapiService;

		const postsList = (
			<div>
				<Posts getData={getPosts}  onPostClicked={this.onPostClicked} >
					{(item) =>
						`<img src="${item.img}" style="max-height: 100px;" alt=""/>
						<div>${item.title}</div>
						<span class="date">(${item.date})</span>`
					}
				</Posts>

			</div>
		);

        const postItem = <Post postId={this.state.postId} getData={getPost} />;


		const catsList = (
			<Posts getData={getCats}>
				{(item) =>
					`
					<img src="${item.img}" style="max-height: 100px;" alt=""/>
					<div>${item.title}</div>`
				}
			</Posts>
        );

        return(
            <React.Fragment>
                <h2>Блог</h2>
                <ErrorBoundry>
                    <Row left={postsList} right={catsList}></Row>
                    <Row full={postItem}></Row>
                </ErrorBoundry>
                <br />

                <br />
                <br />
                <br />
            </React.Fragment>
        );
    }
}