import { Theme } from '@mui/material/styles'
import { SxProps } from '@mui/system'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

type Props = {
    format?: string
    iconPosition?: 'start' | 'end'
    sx?: SxProps<Theme>
}

const DateInput = ({ format, iconPosition, sx }: Props) => {
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    closeOnSelect
                    format={format ?? 'DD-MM-YYYY'}
                    slotProps={{
                        openPickerButton: {
                            color: 'inherit',
                        },
                        inputAdornment: {
                            position: iconPosition,
                            sx: {
                                color: 'var(--mj-deep-green) !important',
                            },
                        },
                    }}
                    sx={sx}
                />
            </LocalizationProvider>
        </>
    )
}

export default DateInput
