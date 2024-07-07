import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import {
    Box,
    ClickAwayListener,
    Dialog,
    DialogContent,
    Grid,
    IconButton,
    Stack,
    Typography,
} from '@mui/material'
import { Theme, styled } from '@mui/material/styles'
import { SxProps } from '@mui/system'
import {
    DatePicker,
    LocalizationProvider,
    PickersCalendarHeaderProps,
} from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs, { Dayjs } from 'dayjs'
import { useCallback, useEffect, useRef, useState } from 'react'
import styles from './_date-input.module.scss'
import CloseIcon from '@mui/icons-material/Close'

type Props = {
    format?: string
    iconPosition?: 'start' | 'end'
    label?: string
    sx?: SxProps<Theme>
}

const CustomCalendarHeaderRoot = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 16px',
    alignItems: 'center',
})

const DateInput = ({ format, iconPosition, label, sx }: Props) => {
    const [open, setOpen] = useState<boolean>(false)
    const datePickerRef = useRef<HTMLDivElement | null>(null)
    const inputRef = useRef<HTMLDivElement | null>(null)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleClickOutside = (event: MouseEvent) => {
        console.log('datePickerRef.current', datePickerRef.current)
        console.log('inputRef.current', inputRef.current)
        console.log('event.target', event.target as Node)

        console.log(
            'contain',
            datePickerRef.current?.contains(event.target as Node)
        )
        if (
            datePickerRef.current &&
            !datePickerRef.current.contains(event.target as Node)
        ) {
            // setOpen(false)
        }
    }

    useEffect(() => {
        if (open) {
            document.addEventListener('mousedown', handleClickOutside)
        } else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [open])

    const CustomCalendarHeader = (props: PickersCalendarHeaderProps<Dayjs>) => {
        const { currentMonth, onMonthChange } = props

        const selectNextMonth = () =>
            onMonthChange(currentMonth.add(1, 'month'), 'left')
        const selectNextYear = () =>
            onMonthChange(currentMonth.add(1, 'year'), 'left')
        const selectPreviousMonth = () =>
            onMonthChange(currentMonth.subtract(1, 'month'), 'right')
        const selectPreviousYear = () =>
            onMonthChange(currentMonth.subtract(1, 'year'), 'right')

        return (
            <>
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                    className={styles.datePickerHeader}
                >
                    <Grid>Date</Grid>
                    <Grid>
                        <IconButton
                            color="inherit"
                            onClick={() => setOpen(false)}
                        >
                            <CloseIcon color="inherit" />
                        </IconButton>
                    </Grid>
                </Grid>
                <CustomCalendarHeaderRoot
                    sx={{
                        px: 4,
                        py: 2,
                        borderBottom: '2px solid var(--color-lightgray)',
                    }}
                >
                    <Stack spacing={1} direction="row">
                        {/* <IconButton onClick={selectPreviousYear} title="Previous year">
                        <KeyboardDoubleArrowLeftIcon />
                    </IconButton> */}
                        <IconButton
                            onClick={selectPreviousMonth}
                            title="Previous month"
                            size="small"
                            sx={{
                                boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.15)',
                                borderRadius: '3px',
                            }}
                        >
                            <ChevronLeft />
                        </IconButton>
                    </Stack>
                    <Typography variant="body2">
                        <strong>{currentMonth.format('MMMM')}</strong>{' '}
                        {currentMonth.format('YYYY')}
                    </Typography>
                    <Stack spacing={1} direction="row">
                        <IconButton
                            onClick={selectNextMonth}
                            title="Next month"
                            size="small"
                            sx={{
                                boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.15)',
                                borderRadius: '3px',
                            }}
                        >
                            <ChevronRight />
                        </IconButton>
                        {/* <IconButton onClick={selectNextYear} title="Next year">
                        <KeyboardDoubleArrowRightIcon />
                    </IconButton> */}
                    </Stack>
                </CustomCalendarHeaderRoot>
            </>
        )
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ClickAwayListener
                onClickAway={handleClose}
                mouseEvent="onMouseDown"
            >
                <Box style={{ position: 'relative' }}>
                    <DatePicker
                        dayOfWeekFormatter={(_day, date: dayjs.Dayjs) =>
                            dayjs(date).format('ddd')
                        }
                        format={format ?? 'DD-MM-YYYY (ddd)'}
                        open={open}
                        slotProps={{
                            day: {
                                sx: {
                                    fontWeight: '600 !important',
                                    '&.Mui-selected': {
                                        backgroundColor:
                                            'var(--mj-light-green) !important',
                                        color: 'white !important',
                                        borderRadius: '10px',
                                    },
                                    '&.MuiDayCalendar-weekDayLabel': {
                                        fontWeight: '600 !important',
                                    },
                                },
                            },
                            inputAdornment: {
                                onClick: handleOpen,
                                position: iconPosition,
                                sx: {
                                    color: 'var(--mj-deep-green) !important',
                                },
                            },
                            layout: {
                                sx: {
                                    height: 'auto',
                                    pb: 4,
                                    '& .MuiDayCalendar-weekDayLabel': {
                                        fontWeight: '600 !important',
                                    },
                                },
                            },
                            openPickerButton: {
                                color: 'inherit',
                            },
                            popper: {
                                container: inputRef.current,
                                sx: {},
                            },
                        }}
                        slots={{
                            calendarHeader: CustomCalendarHeader,
                        }}
                        sx={sx}
                    />
                </Box>
            </ClickAwayListener>
        </LocalizationProvider>
    )
}

export default DateInput
