import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
    //edit this to a color pallete your app
    palette: {
        primary: {
            main: '#219B8E',
        },
        secondary: {
            main: '#fff',
        },
    },
})

// const components: any = createTheme(theme, {
//     MuiButton: {
//         //add variants to button component
//         variants: [
//             {
//                 props: { variant: 'primary' },
//                 style: {
//                     backgroundColor: `${theme.palette.primary.main}`,
//                 },
//             },
//         ],
//         styleOverrides: {
//             root: {
//                 fontSize: '1em',
//             },
//         },
//     },
// })

// // Create a theme instance.
// theme = createTheme({
//     components,
// })
// add responsive MUI responsiveFontSize
theme = responsiveFontSizes(theme)

export default theme
