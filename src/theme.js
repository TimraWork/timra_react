import { createMuiTheme } from "@material-ui/core/styles";

const ACCENT_COLOR = "rgb(105, 186, 190)";
// const ACCENT_LIGHT_COLOR = "rgba(105, 186, 190, 0.2)";

// Create a theme instance.
export const theme = createMuiTheme({
    palette: {
        primary: {
            main: ACCENT_COLOR,
        },
        secondary: {
            main: ACCENT_COLOR,
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
        borderRadius: 20,
    },
    // spacing: 8,
    overrides: {
        MuiChip: {
            root: {
                margin: "0 10px 20px 0",
            },
        },
        MuiTextField: {
            root: {
                // backgroundColor: ACCENT_LIGHT_COLOR,
                borderColor: ACCENT_COLOR,
                marginBottom: "20px",
                width: "370px",
                "& .MuiInput-underline:before": {
                    borderBottomColor: ACCENT_COLOR,
                },
                "&:hover": {
                    borderBottomColor: ACCENT_COLOR,
                },
            },
        },
        MuiButton: {
            root: {
                "&:focus": {
                    outline: "none",
                },
            },
            fullWidth: {
                // maxWidth: "300px"
            },
        },
        MuiInputLabel: {
            root: {
                color: ACCENT_COLOR,
            },
        },
    },
    //         fullWidth: {
    //             width: "600px",
    //         },
    //     },
    //     MuiInputLabel: {
    //         root: {
    //             color: ACCENT_COLOR,
    //         },
    //     },
    //     MuiTextField: {
    //         root: {},
    //     },
    //     MuiButton: {
    //         root: {
    //             // textTransform: "none",
    //             // padding: "20px"
    //         },
    //         fullWidth: {
    //             // maxWidth: "300px"
    //         },
    //     },
    // },
    // props: {
    //     MuiButton: {
    //         //   disableRipple: true,
    //         //   variant: "contained",
    //         //   color: "primary"
    //     },
    //     MuiCheckbox: {
    //         //   disableRipple: true
    //     },
    //     MuiTextField: {
    //         variant: "filled",
    //         InputLabelProps: {
    //             shrink: true,
    //         },
    //     },
    //     MuiPaper: {
    //         //   elevation: 12
    //     },
    //     MuiCard: {
    //         elevation: 1,
    //     },
    // },
});
