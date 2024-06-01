import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import TableContainer from '@mui/material/TableContainer'
import Stack from '@mui/material/Stack'
import styles from '../../_radiology-reporting.module.scss'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import TableRowSeparator from 'components/ScreeningRoom/TableSeparator/table-row-separator'
import TableCellSeparator from 'components/ScreeningRoom/TableSeparator/table-cell-separator'
import { TextField, Button, Grid } from '@mui/material'
import { useState, useRef } from 'react'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
const SonographyExamReport = () => {
    const dragRef = useRef<HTMLDivElement>(null)
    const [isMouseDown, setIsMouseDown] = useState(false)
    const mouseCoords = useRef({
        startX: 0,
        startY: 0,
        scrollLeft: 0,
        scrollTop: 0,
    })
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md'))
    const [currentSection, setCurrentSection] = useState<number>(1)
    const [currentSectionText, setCurrentSectionText] =
        useState<string>('Abdomen')
    const options = [
        {
            id: 1,
            label: 'Normal',
        },
        {
            id: 2,
            label: 'Abnormal',
        },
        {
            id: 3,
            label: 'Normal But Detected',
        },
        {
            id: 4,
            label: 'Others',
        },
    ]

    const readonly = false

    const handleDragStart = (e: any) => {
        if (!dragRef.current) return
        const slider = dragRef.current as any
        console.log(slider)
        const startX = e.pageX - slider.offsetLeft
        const startY = e.pageY - slider.offsetTop
        const scrollLeft = slider.scrollLeft
        const scrollTop = slider.scrollTop
        mouseCoords.current = { startX, startY, scrollLeft, scrollTop }
        setIsMouseDown(true)
        document.body.style.cursor = 'grabbing'
    }

    const handleDragEnd = () => {
        setIsMouseDown(false)
        if (!dragRef.current) return
        document.body.style.cursor = 'default'
    }

    const handleDrag = (e: any) => {
        if (!isMouseDown || !dragRef.current) return
        e.preventDefault()
        const slider = dragRef.current as any
        const x = e.pageX - slider.offsetLeft
        const y = e.pageY - slider.offsetTop
        const walkX = (x - mouseCoords.current.startX) * 1.5
        const walkY = (y - mouseCoords.current.startY) * 1.5
        slider.scrollLeft = mouseCoords.current.scrollLeft - walkX
        slider.scrollTop = mouseCoords.current.scrollTop - walkY
    }

    const handleDisplayCurrentSection = (section: number, text: string) => {
        setCurrentSection(section)
        setCurrentSectionText(text)
    }

    const displaySection = (currentSection: number) => {
        return (
            <>
                <Box sx={{ p: 3 }}>
                    <TableContainer style={{ overflow: 'auto' }}>
                        <Table size="small" className={styles.examReportTable}>
                            <TableRow>
                                <TableCell
                                    className={`${styles.examReportTableHeaderLabel} ${
                                        styles.tableCell
                                    } ${readonly ? styles.readonly : ''}`}
                                >
                                    {currentSectionText}
                                </TableCell>
                                <TableCell
                                    width="26%"
                                    className={`${styles.tableCellDateLabel} ${
                                        styles.tableCell
                                    } ${styles.currentTop} ${
                                        readonly ? styles.readonly : ''
                                    }`}
                                >
                                    Current
                                </TableCell>
                                <TableCellSeparator />
                                <TableCell
                                    width="26%"
                                    className={`${styles.tableCellDateLabel} ${
                                        styles.tableCell
                                    } ${styles.backDateTop} ${
                                        readonly ? styles.readonly : ''
                                    }`}
                                >
                                    22-09-2020
                                </TableCell>
                                <TableCellSeparator />
                                <TableCell
                                    width="26%"
                                    className={`${styles.tableCellDateLabel} ${
                                        styles.tableCell
                                    } ${styles.backDateTop} ${
                                        readonly ? styles.readonly : ''
                                    }`}
                                >
                                    22-09-2018
                                </TableCell>
                            </TableRow>

                            <TableRowSeparator readonly={readonly} />

                            {/* Liver */}
                            <TableRow>
                                <TableCell
                                    className={styles.examReportTableLabel}
                                >
                                    Liver
                                </TableCell>
                                <TableCell
                                    className={`${styles.tableCell} ${styles.current} ${
                                        readonly ? styles.readonly : ''
                                    }`}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="space-between"
                                    >
                                        {/* <ScoreInput readonly={readonly} value="[CNT]" /> */}
                                        <FormControl
                                            fullWidth
                                            className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                        >
                                            <Select
                                                size="small"
                                                value={1}
                                                inputProps={{
                                                    style: {
                                                        minWidth: '150px',
                                                    },
                                                    readOnly: readonly,
                                                }}
                                            >
                                                {options.map((item) => (
                                                    <MenuItem
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </TableCell>
                                <TableCellSeparator />
                                <TableCell
                                    className={`${styles.tableCell} ${
                                        styles.backDate
                                    } ${readonly ? styles.readonly : ''}`}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="space-between"
                                    >
                                        {/* <ScoreInput readonly={readonly} /> */}
                                        <FormControl
                                            fullWidth
                                            className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                        >
                                            <Select
                                                size="small"
                                                inputProps={{
                                                    style: {
                                                        minWidth: '150px',
                                                    },
                                                    readOnly: true,
                                                }}
                                                defaultValue={options[0].id}
                                            >
                                                {options.map((item) => (
                                                    <MenuItem
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </TableCell>
                                <TableCellSeparator />
                                <TableCell
                                    className={`${styles.tableCell} ${
                                        styles.backDate
                                    } ${readonly ? styles.readonly : ''}`}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="space-between"
                                    >
                                        {/* <ScoreInput readonly={readonly} /> */}
                                        <FormControl
                                            fullWidth
                                            className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                        >
                                            <Select
                                                size="small"
                                                inputProps={{
                                                    style: {
                                                        minWidth: '150px',
                                                    },
                                                    readOnly: true,
                                                }}
                                                defaultValue={options[0].id}
                                            >
                                                {options.map((item) => (
                                                    <MenuItem
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </TableCell>
                            </TableRow>

                            {/* Intrahepatic Bile Duct */}
                            <TableRow>
                                <TableCell
                                    className={styles.examReportTableLabel}
                                >
                                    Intrahepatic Bile Duct
                                </TableCell>
                                <TableCell
                                    className={`${styles.tableCell} ${styles.current} ${
                                        readonly ? styles.readonly : ''
                                    }`}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="space-between"
                                    >
                                        {/* <ScoreInput readonly={readonly} /> */}
                                        <FormControl
                                            fullWidth
                                            className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                        >
                                            <Select
                                                size="small"
                                                inputProps={{
                                                    style: {
                                                        minWidth: '150px',
                                                    },
                                                    readOnly: readonly,
                                                }}
                                            >
                                                {options.map((item) => (
                                                    <MenuItem
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </TableCell>
                                <TableCellSeparator />
                                <TableCell
                                    className={`${styles.tableCell} ${
                                        styles.backDate
                                    } ${readonly ? styles.readonly : ''}`}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="space-between"
                                    >
                                        {/* <ScoreInput readonly={readonly} /> */}
                                        <FormControl
                                            fullWidth
                                            className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                        >
                                            <Select
                                                size="small"
                                                inputProps={{
                                                    style: {
                                                        minWidth: '150px',
                                                    },
                                                    readOnly: true,
                                                }}
                                                defaultValue={options[0].id}
                                            >
                                                {options.map((item) => (
                                                    <MenuItem
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </TableCell>
                                <TableCellSeparator />
                                <TableCell
                                    className={`${styles.tableCell} ${
                                        styles.backDate
                                    } ${readonly ? styles.readonly : ''}`}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="space-between"
                                    >
                                        {/* <ScoreInput readonly={readonly} /> */}
                                        <FormControl
                                            fullWidth
                                            className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                        >
                                            <Select
                                                size="small"
                                                inputProps={{
                                                    style: {
                                                        minWidth: '150px',
                                                    },
                                                    readOnly: true,
                                                }}
                                                defaultValue={options[0].id}
                                            >
                                                {options.map((item) => (
                                                    <MenuItem
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </TableCell>
                            </TableRow>

                            {/* Common Bile Duct */}
                            <TableRow>
                                <TableCell
                                    className={styles.examReportTableLabel}
                                >
                                    Common Bile Duct
                                </TableCell>
                                <TableCell
                                    className={`${styles.tableCell} ${styles.current} ${
                                        readonly ? styles.readonly : ''
                                    }`}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="space-between"
                                    >
                                        {/* <ScoreInput readonly={readonly} /> */}
                                        <FormControl
                                            fullWidth
                                            className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                        >
                                            <Select
                                                size="small"
                                                inputProps={{
                                                    style: {
                                                        minWidth: '150px',
                                                    },
                                                    readOnly: readonly,
                                                }}
                                            >
                                                {options.map((item) => (
                                                    <MenuItem
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </TableCell>
                                <TableCellSeparator />
                                <TableCell
                                    className={`${styles.tableCell} ${
                                        styles.backDate
                                    } ${readonly ? styles.readonly : ''}`}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="space-between"
                                    >
                                        {/* <ScoreInput readonly={readonly} /> */}
                                        <FormControl
                                            fullWidth
                                            className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                        >
                                            <Select
                                                size="small"
                                                inputProps={{
                                                    style: {
                                                        minWidth: '150px',
                                                    },
                                                    readOnly: true,
                                                }}
                                                defaultValue={options[0].id}
                                            >
                                                {options.map((item) => (
                                                    <MenuItem
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </TableCell>
                                <TableCellSeparator />
                                <TableCell
                                    className={`${styles.tableCell} ${
                                        styles.backDate
                                    } ${readonly ? styles.readonly : ''}`}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="space-between"
                                    >
                                        {/* <ScoreInput readonly={readonly} /> */}
                                        <FormControl
                                            fullWidth
                                            className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                        >
                                            <Select
                                                size="small"
                                                inputProps={{
                                                    style: {
                                                        minWidth: '150px',
                                                    },
                                                    readOnly: true,
                                                }}
                                                defaultValue={options[0].id}
                                            >
                                                {options.map((item) => (
                                                    <MenuItem
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </TableCell>
                            </TableRow>

                            {/* Gall Bladdar */}
                            <TableRow>
                                <TableCell
                                    className={styles.examReportTableLabel}
                                >
                                    Gall Bladdar
                                </TableCell>
                                <TableCell
                                    className={`${styles.tableCell} ${styles.current} ${
                                        readonly ? styles.readonly : ''
                                    }`}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="space-between"
                                    >
                                        {/* <ScoreInput readonly={readonly} /> */}
                                        <FormControl
                                            fullWidth
                                            className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                        >
                                            <Select
                                                size="small"
                                                inputProps={{
                                                    style: {
                                                        minWidth: '150px',
                                                    },
                                                    readOnly: readonly,
                                                }}
                                            >
                                                {options.map((item) => (
                                                    <MenuItem
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </TableCell>
                                <TableCellSeparator />
                                <TableCell
                                    className={`${styles.tableCell} ${
                                        styles.backDate
                                    } ${readonly ? styles.readonly : ''}`}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="space-between"
                                    >
                                        {/* <ScoreInput readonly={readonly} /> */}
                                        <FormControl
                                            fullWidth
                                            className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                        >
                                            <Select
                                                size="small"
                                                inputProps={{
                                                    style: {
                                                        minWidth: '150px',
                                                    },
                                                    readOnly: true,
                                                }}
                                                defaultValue={options[0].id}
                                            >
                                                {options.map((item) => (
                                                    <MenuItem
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </TableCell>
                                <TableCellSeparator />
                                <TableCell
                                    className={`${styles.tableCell} ${
                                        styles.backDate
                                    } ${readonly ? styles.readonly : ''}`}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="space-between"
                                    >
                                        {/* <ScoreInput readonly={readonly} /> */}
                                        <FormControl
                                            fullWidth
                                            className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                        >
                                            <Select
                                                size="small"
                                                inputProps={{
                                                    style: {
                                                        minWidth: '150px',
                                                    },
                                                    readOnly: true,
                                                }}
                                                defaultValue={options[0].id}
                                            >
                                                {options.map((item) => (
                                                    <MenuItem
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </TableCell>
                            </TableRow>

                            {/* Right Kidney */}
                            <TableRow>
                                <TableCell
                                    className={styles.examReportTableLabel}
                                >
                                    Right Kidney
                                </TableCell>
                                <TableCell
                                    className={`${styles.tableCell} ${styles.current} ${
                                        readonly ? styles.readonly : ''
                                    }`}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="space-between"
                                    >
                                        {/* <ScoreInput readonly={readonly} /> */}
                                        <FormControl
                                            fullWidth
                                            className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                        >
                                            <Select
                                                size="small"
                                                inputProps={{
                                                    style: {
                                                        minWidth: '150px',
                                                    },
                                                    readOnly: readonly,
                                                }}
                                            >
                                                {options.map((item) => (
                                                    <MenuItem
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </TableCell>
                                <TableCellSeparator />
                                <TableCell
                                    className={`${styles.tableCell} ${
                                        styles.backDate
                                    } ${readonly ? styles.readonly : ''}`}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="space-between"
                                    >
                                        {/* <ScoreInput readonly={readonly} /> */}
                                        <FormControl
                                            fullWidth
                                            className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                        >
                                            <Select
                                                size="small"
                                                inputProps={{
                                                    style: {
                                                        minWidth: '150px',
                                                    },
                                                    readOnly: true,
                                                }}
                                                defaultValue={options[0].id}
                                            >
                                                {options.map((item) => (
                                                    <MenuItem
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </TableCell>
                                <TableCellSeparator />
                                <TableCell
                                    className={`${styles.tableCell} ${
                                        styles.backDate
                                    } ${readonly ? styles.readonly : ''}`}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="space-between"
                                    >
                                        {/* <ScoreInput readonly={readonly} /> */}
                                        <FormControl
                                            fullWidth
                                            className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                        >
                                            <Select
                                                size="small"
                                                inputProps={{
                                                    style: {
                                                        minWidth: '150px',
                                                    },
                                                    readOnly: true,
                                                }}
                                                defaultValue={options[0].id}
                                            >
                                                {options.map((item) => (
                                                    <MenuItem
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </TableCell>
                            </TableRow>

                            {/* Left Kidney */}
                            <TableRow>
                                <TableCell
                                    className={styles.examReportTableLabel}
                                >
                                    Left Kidney
                                </TableCell>
                                <TableCell
                                    className={`${styles.tableCell} ${styles.current} ${
                                        readonly ? styles.readonly : ''
                                    }`}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="space-between"
                                    >
                                        {/* <ScoreInput readonly={readonly} /> */}
                                        <FormControl
                                            fullWidth
                                            className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                        >
                                            <Select
                                                size="small"
                                                inputProps={{
                                                    style: {
                                                        minWidth: '150px',
                                                    },
                                                    readOnly: readonly,
                                                }}
                                            >
                                                {options.map((item) => (
                                                    <MenuItem
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </TableCell>
                                <TableCellSeparator />
                                <TableCell
                                    className={`${styles.tableCell} ${
                                        styles.backDate
                                    } ${readonly ? styles.readonly : ''}`}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="space-between"
                                    >
                                        {/* <ScoreInput readonly={readonly} /> */}
                                        <FormControl
                                            fullWidth
                                            className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                        >
                                            <Select
                                                size="small"
                                                inputProps={{
                                                    style: {
                                                        minWidth: '150px',
                                                    },
                                                    readOnly: true,
                                                }}
                                                defaultValue={options[0].id}
                                            >
                                                {options.map((item) => (
                                                    <MenuItem
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </TableCell>
                                <TableCellSeparator />
                                <TableCell
                                    className={`${styles.tableCell} ${
                                        styles.backDate
                                    } ${readonly ? styles.readonly : ''}`}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="space-between"
                                    >
                                        {/* <ScoreInput readonly={readonly} /> */}
                                        <FormControl
                                            fullWidth
                                            className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                        >
                                            <Select
                                                size="small"
                                                inputProps={{
                                                    style: {
                                                        minWidth: '150px',
                                                    },
                                                    readOnly: true,
                                                }}
                                                defaultValue={options[0].id}
                                            >
                                                {options.map((item) => (
                                                    <MenuItem
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </TableCell>
                            </TableRow>

                            {/* Hepatic Portal Vein */}
                            <TableRow>
                                <TableCell
                                    className={styles.examReportTableLabel}
                                >
                                    Hepatic Portal Vein
                                </TableCell>
                                <TableCell
                                    className={`${styles.tableCell} ${styles.current} ${
                                        readonly ? styles.readonly : ''
                                    }`}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="space-between"
                                    >
                                        {/* <ScoreInput readonly={readonly} /> */}
                                        <FormControl
                                            fullWidth
                                            className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                        >
                                            <Select
                                                size="small"
                                                inputProps={{
                                                    style: {
                                                        minWidth: '150px',
                                                    },
                                                    readOnly: readonly,
                                                }}
                                            >
                                                {options.map((item) => (
                                                    <MenuItem
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </TableCell>
                                <TableCellSeparator />
                                <TableCell
                                    className={`${styles.tableCell} ${
                                        styles.backDate
                                    } ${readonly ? styles.readonly : ''}`}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="space-between"
                                    >
                                        {/* <ScoreInput readonly={readonly} /> */}
                                        <FormControl
                                            fullWidth
                                            className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                        >
                                            <Select
                                                size="small"
                                                inputProps={{
                                                    style: {
                                                        minWidth: '150px',
                                                    },
                                                    readOnly: true,
                                                }}
                                                defaultValue={options[0].id}
                                            >
                                                {options.map((item) => (
                                                    <MenuItem
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </TableCell>
                                <TableCellSeparator />
                                <TableCell
                                    className={`${styles.tableCell} ${
                                        styles.backDate
                                    } ${readonly ? styles.readonly : ''}`}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="space-between"
                                    >
                                        {/* <ScoreInput readonly={readonly} /> */}
                                        <FormControl
                                            fullWidth
                                            className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                        >
                                            <Select
                                                size="small"
                                                inputProps={{
                                                    style: {
                                                        minWidth: '150px',
                                                    },
                                                    readOnly: true,
                                                }}
                                                defaultValue={options[0].id}
                                            >
                                                {options.map((item) => (
                                                    <MenuItem
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </TableCell>
                            </TableRow>

                            {/* Pancreas */}
                            <TableRow>
                                <TableCell
                                    className={styles.examReportTableLabel}
                                >
                                    Pancreas
                                </TableCell>
                                <TableCell
                                    className={`${styles.tableCell} ${styles.current} ${
                                        readonly ? styles.readonly : ''
                                    }`}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="space-between"
                                    >
                                        {/* <ScoreInput readonly={readonly} /> */}
                                        <FormControl
                                            fullWidth
                                            className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                        >
                                            <Select
                                                size="small"
                                                inputProps={{
                                                    style: {
                                                        minWidth: '150px',
                                                    },
                                                    readOnly: readonly,
                                                }}
                                            >
                                                {options.map((item) => (
                                                    <MenuItem
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </TableCell>
                                <TableCellSeparator />
                                <TableCell
                                    className={`${styles.tableCell} ${
                                        styles.backDate
                                    } ${readonly ? styles.readonly : ''}`}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="space-between"
                                    >
                                        {/* <ScoreInput readonly={readonly} /> */}
                                        <FormControl
                                            fullWidth
                                            className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                        >
                                            <Select
                                                size="small"
                                                inputProps={{
                                                    style: {
                                                        minWidth: '150px',
                                                    },
                                                    readOnly: true,
                                                }}
                                                defaultValue={options[0].id}
                                            >
                                                {options.map((item) => (
                                                    <MenuItem
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </TableCell>
                                <TableCellSeparator />
                                <TableCell
                                    className={`${styles.tableCell} ${
                                        styles.backDate
                                    } ${readonly ? styles.readonly : ''}`}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="space-between"
                                    >
                                        {/* <ScoreInput readonly={readonly} /> */}
                                        <FormControl
                                            fullWidth
                                            className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                        >
                                            <Select
                                                size="small"
                                                inputProps={{
                                                    style: {
                                                        minWidth: '150px',
                                                    },
                                                    readOnly: true,
                                                }}
                                                defaultValue={options[0].id}
                                            >
                                                {options.map((item) => (
                                                    <MenuItem
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </TableCell>
                            </TableRow>

                            {/* Spleen and Others */}
                            <TableRow>
                                <TableCell
                                    className={styles.examReportTableLabel}
                                >
                                    Spleen and Others
                                </TableCell>
                                <TableCell
                                    className={`${styles.tableCell} ${styles.current} ${
                                        readonly ? styles.readonly : ''
                                    }`}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="space-between"
                                    >
                                        {/* <ScoreInput readonly={readonly} /> */}
                                        <FormControl
                                            fullWidth
                                            className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                        >
                                            <Select
                                                size="small"
                                                inputProps={{
                                                    style: {
                                                        minWidth: '150px',
                                                    },
                                                    readOnly: readonly,
                                                }}
                                            >
                                                {options.map((item) => (
                                                    <MenuItem
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </TableCell>
                                <TableCellSeparator />
                                <TableCell
                                    className={`${styles.tableCell} ${
                                        styles.backDate
                                    } ${readonly ? styles.readonly : ''}`}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="space-between"
                                    >
                                        {/* <ScoreInput readonly={readonly} /> */}
                                        <FormControl
                                            fullWidth
                                            className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                        >
                                            <Select
                                                size="small"
                                                inputProps={{
                                                    style: {
                                                        minWidth: '150px',
                                                    },
                                                    readOnly: true,
                                                }}
                                                defaultValue={options[0].id}
                                            >
                                                {options.map((item) => (
                                                    <MenuItem
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </TableCell>
                                <TableCellSeparator />
                                <TableCell
                                    className={`${styles.tableCell} ${
                                        styles.backDate
                                    } ${readonly ? styles.readonly : ''}`}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1}
                                        justifyContent="space-between"
                                    >
                                        {/* <ScoreInput readonly={readonly} /> */}
                                        <FormControl
                                            fullWidth
                                            className={`${styles.examReportTableInput} ${styles.examReportTableSelectInput}`}
                                        >
                                            <Select
                                                size="small"
                                                inputProps={{
                                                    style: {
                                                        minWidth: '150px',
                                                    },
                                                    readOnly: true,
                                                }}
                                                defaultValue={options[0].id}
                                            >
                                                {options.map((item) => (
                                                    <MenuItem
                                                        key={item.id}
                                                        value={item.id}
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                            <TableRowSeparator readonly={readonly} lastRow />
                        </Table>
                    </TableContainer>
                </Box>
            </>
        )
    }
    return (
        <>
            <div
                className={matches ? styles.sono_menu : styles.sono_menu_mobile}
                onMouseDown={handleDragStart}
                onMouseUp={handleDragEnd}
                onMouseMove={handleDrag}
                ref={dragRef}
            >
                <div>
                    <Button
                        variant="contained"
                        className={
                            currentSection === 1
                                ? styles.sono_selected_menu
                                : styles.sono_unselected_menu
                        }
                        onClick={() =>
                            handleDisplayCurrentSection(1, 'Abdomen')
                        }
                    >
                        Abdomen
                    </Button>
                </div>
                <div>
                    <Button
                        variant="contained"
                        className={
                            currentSection === 2
                                ? styles.sono_selected_menu
                                : styles.sono_unselected_menu
                        }
                        onClick={() => handleDisplayCurrentSection(2, 'Breast')}
                    >
                        Breast
                    </Button>
                </div>
                <div>
                    <Button
                        variant="contained"
                        className={
                            currentSection === 3
                                ? styles.sono_selected_menu
                                : styles.sono_unselected_menu
                        }
                        onClick={() =>
                            handleDisplayCurrentSection(3, 'Carotid')
                        }
                    >
                        Carotid
                    </Button>
                </div>
                <div>
                    <Button
                        variant="contained"
                        className={
                            currentSection === 4
                                ? styles.sono_selected_menu
                                : styles.sono_unselected_menu
                        }
                        onClick={() => handleDisplayCurrentSection(4, 'DVT')}
                    >
                        DVT
                    </Button>
                </div>
                <div>
                    <Button
                        variant="contained"
                        className={
                            currentSection === 5
                                ? styles.sono_selected_menu
                                : styles.sono_unselected_menu
                        }
                        onClick={() => handleDisplayCurrentSection(5, 'Elasto')}
                    >
                        Elasto
                    </Button>
                </div>
                <div>
                    <Button
                        variant="contained"
                        className={
                            currentSection === 6
                                ? styles.sono_selected_menu
                                : styles.sono_unselected_menu
                        }
                        onClick={() =>
                            handleDisplayCurrentSection(6, 'Gynaecology')
                        }
                    >
                        Gynaecology
                    </Button>
                </div>
                <div>
                    <Button
                        variant="contained"
                        className={
                            currentSection === 7
                                ? styles.sono_selected_menu
                                : styles.sono_unselected_menu
                        }
                        onClick={() =>
                            handleDisplayCurrentSection(7, 'Prostate')
                        }
                    >
                        Prostate
                    </Button>
                </div>
                <div>
                    <Button
                        variant="contained"
                        className={
                            currentSection === 8
                                ? styles.sono_selected_menu
                                : styles.sono_unselected_menu
                        }
                        onClick={() =>
                            handleDisplayCurrentSection(8, 'Scrotum')
                        }
                    >
                        Scrotum
                    </Button>
                </div>
                <div>
                    <Button
                        variant="contained"
                        className={
                            currentSection === 9
                                ? styles.sono_selected_menu
                                : styles.sono_unselected_menu
                        }
                        onClick={() =>
                            handleDisplayCurrentSection(9, 'Thyroid')
                        }
                    >
                        Thyroid
                    </Button>
                </div>
                <div>
                    <Button
                        variant="contained"
                        className={
                            currentSection === 10
                                ? styles.sono_selected_menu
                                : styles.sono_unselected_menu
                        }
                        onClick={() =>
                            handleDisplayCurrentSection(10, 'Others')
                        }
                    >
                        Others
                    </Button>
                </div>
            </div>
            {displaySection(1)}
            <>
                <Box sx={{ p: 3 }}>
                    <p className={styles.commentText}>Other Comment</p>
                    <div>
                        <TextField
                            InputProps={{
                                classes: { input: styles.inputField },
                            }}
                            variant="outlined"
                            size="small"
                            margin="dense"
                            fullWidth
                            multiline
                            rows={8}
                            name="complaint"
                            className={styles.textFieldProps}
                            placeholder="Type in your message & recommendation."
                        />
                    </div>
                    <Grid container justifyContent="end" marginTop="10px">
                        <Grid item xs={12} sm={6}>
                            <Stack
                                direction="row"
                                spacing={2}
                                justifyContent="end"
                            >
                                <Button
                                    size="small"
                                    variant="contained"
                                    fullWidth
                                    sx={{ mt: 3 }}
                                    className={styles.sono_edit_bttn}
                                >
                                    Edit
                                </Button>
                                <Button
                                    size="small"
                                    variant="contained"
                                    fullWidth
                                    sx={{ mt: 3 }}
                                    className={styles.sono_confirm_bttn}
                                >
                                    Confirm
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            </>
        </>
    )
}

export default SonographyExamReport
