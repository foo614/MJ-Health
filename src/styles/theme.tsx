import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
    //edit this to a color pallete your app
    palette: {
        primary: {
            main: '#219B8E',
        },
        secondary: {
            main: '#3ADEBB',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    borderRadius: '5px !important',
                    boxShadow:
                        '0px 3px 15px rgba(33, 155, 142, 0.25) !important',
                    backgroundColor: '#3ADEBB',
                },
                root: {
                    height: '45px',
                    textTransform: 'none',
                },
            },
        },
        MuiInputBase: {
            styleOverrides: {
                root: {
                    '&.Mui-disabled': {
                        border: 'none',
                    },
                },
            },
        },
        MuiOutlinedInput: {
            defaultProps: {
                inputProps: {
                    d: true,
                },
            },
            styleOverrides: {
                root: {
                    // background: '#F2F2F2',
                    boxShadow:
                        '0px 2px 2px 1px rgba(0, 0, 0, 0.05) inset !important',
                    borderRadius: '5px',
                    '& fieldset': {
                        borderColor: 'transparent', // Remove the border
                    },
                    '&:hover fieldset': {
                        borderColor: 'transparent !important', // Remove the border on hover
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: 'transparent !important', // Remove the border on focus
                    },
                    '&.Mui-focused.Mui-active fieldset': {
                        borderColor: 'transparent !important', // Remove the border on active
                    },
                    '&.Mui-disabled': {
                        '& fieldset': {
                            border: 'none !important',
                        },
                    },
                },
            },
        },
    },
})

theme = responsiveFontSizes(theme)

export default theme
