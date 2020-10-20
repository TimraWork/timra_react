import React, {Component} from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default class PostItem extends Component {
	render() {
        const {label, onPostClicked} = this.props;

        return(
            // <Card height="100%" onClick = { this.onPostClick }>
            <Card height="100%" onClick = { onPostClicked }>
                <CardActionArea>
                    {/* <CardMedia
                        component="img"
                        height="130"
                        image={img}
                    /> */}
                    <CardContent>
                        <Typography
                            variant="body2"
                            color="textPrimary"
                            dangerouslySetInnerHTML={{ __html: label }}
                        ></Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );

	};
};