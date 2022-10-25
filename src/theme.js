import { createTheme, responsiveFontSizes } from "@mui/material"



let theme = createTheme({
    palette: {
        primary: {
            main: '#56BF4D',
            ligh: '#8AFF80',
            dark: '#297322',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#c4c9cc',
            light: '#95A69D',
            dark: '#4C5859',
            contrastText: '#000000',
        }
    },
    dividerColor: {
        backgroundColor: 'white',
    },

    components:{
        MuiTextField:{
            styleOverrides:{
                root:{
                    fontSize:"0.5em"
                }
            }
        }
    }
})

theme = responsiveFontSizes(theme)

export { theme }
