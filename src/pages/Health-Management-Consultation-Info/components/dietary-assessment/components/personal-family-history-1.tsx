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

const PersonalFamilyHistory1 = () => {
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
            <p className={styles.questionnaire_modal_subtitle}>
                102. Have you ever had one of the following confirmed diseases,
                are under medication, or had surgery from this disease? (Check
                all that apply)
            </p>
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
                            <TableCell rowSpan={5}>
                                <p className={styles.hmp_report_title}>
                                    1. Brain and Neurological Diseases
                                </p>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Dementia"
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
                                        label="Epilepsy"
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
                                        label="Migraine"
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
                                        label="Multiple Sclerosis"
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
                                        label="Parkinson’s Disease"
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
                                    2. Eye Disorder
                                </p>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Cataract"
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
                                        label="Floaters"
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
                                        label="Glaucoma"
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
                                        label="Retina-Associated Disorders"
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
                                        label="Vision Problems"
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
                                    3. Ear, Nose and Throat Disorders
                                </p>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Chronic Pharyngitis"
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
                                        label="Deviated Nasal Septum"
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
                                        label="Dizziness"
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
                                        label="Otitis Media"
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
                                        label="Sinuitis"
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
                                    4. Skin Abnormalities
                                </p>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Atopic Dermatitis"
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
                                        label="Fungal Infection"
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
                                        label="Onychomycosis"
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
                                        label="Psoriasis"
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
                            <TableCell rowSpan={3}>
                                <p className={styles.hmp_report_title}>
                                    5. Chronic Pulmonary Diseases
                                </p>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Asthma"
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
                                        label="Chronic Bronchitis"
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
                                        label="Chronic Obstuctive Pulmonary Disease (COPD)"
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
                                    6. Heart, Blood and Blood Vessel Disorders
                                </p>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Anaemia"
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
                                        label="Arrhythmia"
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
                                        label="Cararomyopathy (hypertrophic or dilated)"
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
                                        label="Congenital Heart Disorder"
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
                                        label="Coronary Artery Disease"
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
                            <TableCell rowSpan={4} sx={{ borderBottom: '0px' }}>
                                <p className={styles.hmp_report_title}>
                                    7. High Blood Pressure, High Blood
                                    Cholesterol and High Blood Glucose
                                </p>
                            </TableCell>
                            <TableCell sx={{ borderBottom: '0px' }}>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label="Hypertension"
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
                                        label="Hyperlipidemia"
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
                                        label="Hyperglycemia (Diabetes)"
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
                            <TableCell sx={{ borderBottom: '0px' }}></TableCell>
                            <TableCell colSpan={2} sx={{ borderBottom: '0px' }}>
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
export default PersonalFamilyHistory1
