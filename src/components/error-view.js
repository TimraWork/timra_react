import React from "react";

import { Alert, AlertTitle } from "@material-ui/lab";

const ErrorView = () => {
    return (
        <Alert severity="error">
            <AlertTitle>
                <strong>Произошла ошибка</strong>
            </AlertTitle>
            Перезагрузитесь или попробуйте зайти позже
        </Alert>
    );
};

export default ErrorView;
