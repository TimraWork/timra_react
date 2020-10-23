import React from "react";

import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";

const Info = () => {
    return (
        <Alert severity="info">
            <AlertTitle>
                <strong>Не выбран элемент</strong>
            </AlertTitle>
            Выберите элемент из списка
        </Alert>
    );
};

export default Info;
