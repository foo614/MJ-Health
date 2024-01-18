import {
    Grid,
    FormControl,
    Select,
    MenuItem,
    TextField,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Stack,
    useMediaQuery,
    useTheme,
} from '@mui/material'

import { SelectChangeEvent } from '@mui/material/Select'
import styles from '../../../_health-management-consultation-info.module.scss'
import { useState } from 'react'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const PersonalFamilyHistory3 = () => {
    const theme = useTheme()
    const mdUp = useMediaQuery(theme.breakpoints.up('md'))
    const select_option = [
        {
            id: 1,
            label: 'No',
        },
    ]
    return (
        <>
            <TableContainer
                sx={{ marginTop: '15px', width: mdUp ? '100%' : '1000px' }}
            >
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ width: '20%' }}>
                                <p className={styles.hmp_report_sub_item}>
                                    Type
                                </p>
                            </TableCell>
                            <TableCell>
                                <p className={styles.hmp_report_sub_item}>
                                    Associated Disease(s) Or Symptom(s)
                                </p>
                            </TableCell>
                            <TableCell width="25%">
                                <p className={styles.hmp_report_sub_item}>
                                    You Are Under Medication
                                </p>
                            </TableCell>
                            <TableCell width="25%">
                                <p className={styles.hmp_report_sub_item}>
                                    You Had Surgery
                                </p>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell rowSpan={16}>
                                <p className={styles.hmp_report_title}>
                                    15. Cancers
                                </p>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Bladder Cancer"
                                    />
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Breast Cancer"
                                    />
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Cervical Cancer / Corpus Uteri Cancer"
                                    />
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Colorectal Cancer"
                                    />
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Esophageal Cancer"
                                    />
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Nasopharyngeal Carcinoma"
                                    />
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Gastic Cancer"
                                    />
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Liver Cancer / Cholangiocarcinoma"
                                    />
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Lung Cancer / Trachea Cancer"
                                    />
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Lymphoma"
                                    />
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Oral Cancer"
                                    />
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Ovarian Cancer"
                                    />
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Pancreatic Cancer"
                                    />
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Prostate Cancer"
                                    />
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Skin Cancer"
                                    />
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Thyroid Cancer"
                                    />
                                </div>
                            </TableCell>
                            <TableCell>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                            <TableCell>
                                <div>
                                    <FormControl
                                        className={styles.textFieldProps}
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                    >
                                        <Select
                                            className={styles.inputField}
                                            name="meal_time_option"
                                        >
                                            {select_option.map(
                                                (item: any, index: number) => {
                                                    return (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.label}
                                                        </MenuItem>
                                                    )
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid container sx={{ marginTop: '15px' }}>
                <Grid item md={12} xs={12}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        16. Other Medications
                    </p>
                </Grid>
                <Grid
                    item
                    md={12}
                    xs={12}
                    sx={{
                        borderBottom: '1px solid rgba(224, 224, 224, 1)',
                        paddingBottom: '10px',
                    }}
                >
                    <Stack sx={{ paddingLeft: '28px', display: 'block' }}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Hormonal Drugs"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Psychiatric Drugs"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Steroids"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Traditional Chinese Herbs"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Tranquilizers or Sleeping Pills"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Uric Acid Drugs"
                        />
                    </Stack>
                </Grid>
            </Grid>
            <Grid container sx={{ marginTop: '15px' }}>
                <Grid item md={12} xs={12}>
                    <p className={styles.questionnaire_modal_subtitle}>
                        17. Have your family member (grandparents, parents, and
                        siblings) suffered from this disease? (Check all that
                        apply)
                    </p>
                </Grid>
                <Grid
                    item
                    md={12}
                    xs={12}
                    sx={{
                        borderBottom: '1px solid rgba(224, 224, 224, 1)',
                        paddingBottom: '10px',
                    }}
                >
                    <Grid
                        container
                        sx={{
                            paddingLeft: '28px',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                        }}
                    >
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Atopic Anemia"
                            />
                        </Grid>
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Asthma"
                            />
                        </Grid>
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Bladder Cancer"
                            />
                        </Grid>
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Breast Cancer"
                            />
                        </Grid>
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Cardiovascular Diseases"
                            />
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        sx={{
                            paddingLeft: '28px',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                        }}
                    >
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Cerebrovascular Disease(Stroke)"
                            />
                        </Grid>
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Colorectal Cancer"
                            />
                        </Grid>
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Dementia"
                            />
                        </Grid>
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Dizziness"
                            />
                        </Grid>
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Familial Anemia"
                            />
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        sx={{
                            paddingLeft: '28px',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                        }}
                    >
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Gastic Cancer"
                            />
                        </Grid>
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Gout"
                            />
                        </Grid>
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Hepatities B"
                            />
                        </Grid>
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Hepatities C"
                            />
                        </Grid>
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Hyperglycemia (Diabetes)"
                            />
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        sx={{
                            paddingLeft: '28px',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                        }}
                    >
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Hypertension"
                            />
                        </Grid>
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Hyperlipidemia"
                            />
                        </Grid>
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Kidney Failure"
                            />
                        </Grid>
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Lung Cancer/Traches Cancer"
                            />
                        </Grid>
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Lymphoma"
                            />
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        sx={{
                            paddingLeft: '28px',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                        }}
                    >
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Multiple Sclerosis"
                            />
                        </Grid>
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Migraine"
                            />
                        </Grid>
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Oral Cancer"
                            />
                        </Grid>
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Ovarian Cancer"
                            />
                        </Grid>
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Pancreatic Cancer"
                            />
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        sx={{
                            paddingLeft: '28px',
                            justifyContent: 'space-between',
                            marginTop: '10px',
                        }}
                    >
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Parkinson's Disease"
                            />
                        </Grid>
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Prostate Cancer"
                            />
                        </Grid>
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Rheumatoid Arthrities"
                            />
                        </Grid>
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Skin Cancer"
                            />
                        </Grid>
                        <Grid item md={2} sm={6} xs={12}>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="None of the above"
                            />
                        </Grid>
                    </Grid>

                    {/* <Stack direction="row" justifyContent="space-between">
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Atopic Anemia"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Asthma"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Bladder Cancer"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Breast Cancer"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Cardiovascular Diseases"
                        />
                    </Stack>

                    <Stack direction="row" justifyContent="space-between">
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Cerebrovascular Disease(Stroke)"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Colorectal Cancer"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Dizziness"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Familial Anemia"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Gastic Cancer"
                        />
                    </Stack> */}
                </Grid>
            </Grid>
        </>
    )
}
export default PersonalFamilyHistory3
