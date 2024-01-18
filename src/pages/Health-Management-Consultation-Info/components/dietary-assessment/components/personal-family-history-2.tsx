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

const PersonalFamilyHistory2 = () => {
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
                            <TableCell rowSpan={4}>
                                <p className={styles.hmp_report_title}>
                                    8. Hepatobiliary
                                </p>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Hepatities B"
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
                                        label="Hepatities C"
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
                                        label="Liver cirrhosis"
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
                                        label="Liver and/or Gallstones"
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

                        <TableRow>
                            <TableCell rowSpan={5}>
                                <p className={styles.hmp_report_title}>
                                    9. Gastrointestinal Tract Diseases
                                </p>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Gastroesophageal"
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
                                        label="Haemorrhoids"
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
                                        label="Irritable Bowel Syndrome"
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
                                        label="Peptic Ulser"
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
                                        label="Reflux"
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
                        <TableRow>
                            <TableCell rowSpan={4}>
                                <p className={styles.hmp_report_title}>
                                    10. Kidney Diseases
                                </p>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Chronic Nephritis"
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
                                        label="Kidney Failure"
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
                                        label="Kidney Oedema"
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
                                        label="Kidney Stones"
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
                        <TableRow>
                            <TableCell rowSpan={2}>
                                <p className={styles.hmp_report_title}>
                                    11. Urianary Tract Diseases
                                </p>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Prostate Hypertrophy"
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
                                        label="Urinary Calculus"
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

                        <TableRow>
                            <TableCell rowSpan={4}>
                                <p className={styles.hmp_report_title}>
                                    12. Gynecologica Diseases
                                </p>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Endometriosis"
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
                                        label="Menstrual Disorders"
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
                                        label="Ovarian/Fallopian Crystal"
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
                                        label="Uterine Fibroids"
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

                        <TableRow>
                            <TableCell rowSpan={2}>
                                <p className={styles.hmp_report_title}>
                                    13. Bone, Joint Diseases
                                </p>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Gout"
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
                                        label="Rheumatoid Arthritis"
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

                        <TableRow>
                            <TableCell rowSpan={2} sx={{ borderBottom: '0px' }}>
                                <p className={styles.hmp_report_title}>
                                    14. Breast/Thyroid Diseases
                                </p>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Hyperthyroidism/Hypothyroidismz"
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
                                        label="Thyroid Nodules"
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
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default PersonalFamilyHistory2
