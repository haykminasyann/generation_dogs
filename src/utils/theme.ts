import { createTheme } from "@mui/material";

export const theme = createTheme({
    components: {
        MuiFormControl: {
            styleOverrides: {
                root: {
                    width: "100%",
                    borderRadius: '8px',
                }
            }
        },
        MuiSelect: { 
            styleOverrides: {
                select: {
                    backgroundColor: "transparent",
                    border: "2px solid aquamarine",
                    borderRadius: '8px',
                    textTransform: 'capitalize',
                    color: "white",
                }
            }
        },
    },
});
