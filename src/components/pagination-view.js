import React from "react";
import Pagination from "@material-ui/lab/Pagination";

const PaginationView = () => {
    return (
        <Pagination
            count={10}
            shape="rounded"
            boundaryCount={1}
            siblingCount={0}
        />
    );
};

export default PaginationView;
