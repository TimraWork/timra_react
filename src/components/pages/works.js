import React, { Component } from "react";

import { WorkList } from "../helpers/item-lists";
import { Chip, Grid } from "@material-ui/core";
import IconEditView from "../icon-edit-view";

class WorksPage extends Component {
    state = {
        currentCat: `All`,
        pageId: "9662",
    };

    handleOnClick = (evt) => {
        this.setState({
            currentCat: evt.target.textContent,
        });
    };

    render() {
        const { currentCat, pageId } = this.state;
        console.log(this.props);
        return (
            <React.Fragment>
                <IconEditView
                    link={`http://timra.ru/timra/wp-admin/post.php?post=${pageId}&action=edit&classic-editor`}
                />
                <h2>Работы</h2>

                <Grid container justify="center" style={{ minHeight: "6vh" }}>
                    {["All", "WordPress", "Jquery", "Vue", "React"].map(
                        (cat) => {
                            return (
                                <Chip
                                    key={cat}
                                    color={
                                        currentCat === cat
                                            ? "primary"
                                            : "default"
                                    }
                                    label={cat}
                                    onClick={this.handleOnClick}
                                />
                            );
                        }
                    )}
                </Grid>

                <WorkList pageId={pageId} category={this.state.currentCat} />
            </React.Fragment>
        );
    }
}

export default WorksPage;
