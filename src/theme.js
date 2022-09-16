import { createTheme } from "@mui/material"



export const theme = createTheme({
    palette: {
        primary: {
            main: '#56BF4D',
            ligh: '#8AFF80',
            dark: '#297322',
            contrastText: '#000000',
        },
        secondary: {
            main: '#475950',
            light: '#95A69D',
            dark: '#4C5859',
            contrastText: '#ffffff',
        }
    },
    dividerColor: {
        backgroundColor: 'white',
    },
})