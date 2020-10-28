import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
export const theme = createMuiTheme({
    palette: {
        primary: {
            main: "rgba(105, 186, 190, 0.2)",
        },
        secondary: {
            main: "rgb(105, 186, 190)",
        },
    },
    typography: {
        fontFamily: "Jura",
        body2: {
            fontFamily: "Jura",
            fontSize: "1rem",
        },
    },
    shape: {
        borderRadius: 15,
    },
    //   spacing: 8,
    overrides: {
        MuiFilledInput: {
            root: {
                backgroundColor: "green",
            },
        },
        MuiInputLabel: {
            root: {
                backgroundColor: "yellow",
            },
        },
        MuiTextField: {
            root: {},
        },
        MuiButton: {
            root: {
                // textTransform: "none",
                // padding: "20px"
            },
            fullWidth: {
                // maxWidth: "300px"
            },
        },
    },
    props: {
        MuiButton: {
            //   disableRipple: true,
            //   variant: "contained",
            //   color: "primary"
        },
        MuiCheckbox: {
            //   disableRipple: true
        },
        MuiTextField: {
            variant: "filled",
            InputLabelProps: {
                shrink: true,
            },
        },
        MuiPaper: {
            //   elevation: 12
        },
        MuiCard: {
            elevation: 1,
        },
    },
});
