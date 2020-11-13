import React, { Component } from "react";

import { WorkList } from "../helpers/item-lists";
import { Chip, Grid } from "@material-ui/core";

class WorksPage extends Component {
    state = {
        currentCat: `All`,
    };

    handleOnClick = (evt) => {
        this.setState({
            currentCat: evt.target.textContent,
        });
    };

    render() {
        return (
            <React.Fragment>
                <h2>Работы</h2>

                {/* {data.edit && <IconEditView link={data.edit} />} */}

                <Grid container justify="center" style={{ minHeight: "6vh" }}>
                    {["All", "WordPress", "Jquery", "Vue", "React"].map(
                        (el) => {
                            return (
                                <Chip
                                    key={el}
                                    color={
                                        this.state.currentCat === el
                                            ? "primary"
                                            : "default"
                                    }
                                    label={el}
                                    onClick={this.handleOnClick}
                                />
                            );
                        }
                    )}
                </Grid>

                <WorkList pageId="9662" category={this.state.currentCat} />
            </React.Fragment>
        );
    }
}

export default WorksPage;
