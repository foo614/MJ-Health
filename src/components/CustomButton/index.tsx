import Button, { ButtonProps } from '@mui/material/Button'
import { purple } from '@mui/material/colors'
import { styled } from '@mui/material/styles'

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: '#211D4E',
    '&:hover': {
        background:
            'linear-gradient(90deg, #3ADEBB 0%, #00AEE9 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)',
    },
}))

export default function CustomButton(props: ButtonProps) {
    return (
        <ColorButton variant="contained" {...props}>
            {props.children}
        </ColorButton>
    )
}
