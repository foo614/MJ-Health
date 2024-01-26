import {
    Grid,
    FormControl,
    Select,
    MenuItem,
    Box,
    TextField,
    Stack,
    FormControlLabel,
    Checkbox,
} from '@mui/material'
import styles from '../_interview-questionaire.module.scss'
import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const PersonalFamilyHistory1 = () => {
    const select_option = [
        {
            id: 1,
            label: 'No',
        },
    ]

    const table_body = [
        {
            id: '1',
            rowSpan: 6,
            type: 'Brain and Neurological Diseases',
            disease: [
                {
                    id: 1,
                    label: 'Dementia',
                },
                {
                    id: 2,
                    label: 'Epilepsy',
                },
                {
                    id: 3,
                    label: 'Migraine',
                },
                {
                    id: 4,
                    label: 'Multiple Sclerosis',
                },
                {
                    id: 5,
                    label: 'Parkinson’s Disease',
                },
            ],
        },
        {
            id: '2',
            rowSpan: 6,
            type: 'Eye Disorder',
            disease: [
                {
                    id: 6,
                    label: 'Cataract',
                },
                {
                    id: 7,
                    label: 'Floaters',
                },
                {
                    id: 8,
                    label: 'Glaucoma',
                },
                {
                    id: 9,
                    label: 'Retina-Associated Disorders',
                },
                {
                    id: 10,
                    label: 'Vision Problems',
                },
            ],
        },
        {
            id: '3',
            rowSpan: 6,
            type: 'Ear, Nose and Throat Disorders',
            disease: [
                {
                    id: 11,
                    label: 'Chronic Pharyngitis',
                },
                {
                    id: 12,
                    label: 'Deviated Nasal Septum',
                },
                {
                    id: 13,
                    label: 'Dizziness',
                },
                {
                    id: 14,
                    label: 'Otitis Media',
                },
                {
                    id: 15,
                    label: 'Sinusitis',
                },
            ],
        },
        {
            id: '4',
            rowSpan: 5,
            type: 'Skin Abnormalities',
            disease: [
                {
                    id: 16,
                    label: 'Atopic Dermatitis',
                },
                {
                    id: 17,
                    label: 'Fungal Infection',
                },
                {
                    id: 18,
                    label: 'Onychomycosis',
                },
                {
                    id: 19,
                    label: 'Psoriasis',
                },
            ],
        },
        {
            id: '5',
            rowSpan: 4,
            type: ' Chronic Pulmonary Diseases',
            disease: [
                {
                    id: 20,
                    label: 'Asthma',
                },
                {
                    id: 21,
                    label: 'Chronic Bronchitis',
                },
                {
                    id: 22,
                    label: 'Chronic Obstuctive Pulmonary Disease(COPD)',
                },
            ],
        },
        {
            id: '6',
            rowSpan: 6,
            type: 'Heart, Blood and Nlood Vessel Disorders',
            disease: [
                {
                    id: 23,
                    label: 'Anaemia',
                },
                {
                    id: 24,
                    label: 'Arrhythmia',
                },
                {
                    id: 25,
                    label: 'Cararomyopathy (hypertrophic or dilated)',
                },
                {
                    id: 26,
                    label: 'Congenital Heart Disorder',
                },
                {
                    id: 27,
                    label: 'Coronary Artery Disease',
                },
            ],
        },
        {
            id: '7',
            rowSpan: 5,
            type: 'High Blood Pressure, High Blood Cholesterol and High Blood Glucose',
            disease: [
                {
                    id: 28,
                    label: 'Hypertension',
                },
                {
                    id: 29,
                    label: 'Hyperlipidemia',
                },
                {
                    id: 30,
                    label: 'Hyperglycemia (Diabetes)',
                },
                {
                    id: 31,
                    isSelectField: true,
                },
            ],
        },
    ]
    return (
        <>
            <Box>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item md={12} xs={12} sm={12}>
                        <p className={styles.questionaire_item}>
                            101. Have you ever had one of the following
                            confirmed diseases, are under medication, or had
                            surgery from this disease? (Check all that apply)
                        </p>
                    </Grid>
                </Grid>
            </Box>

            <TableContainer sx={{ marginTop: '15px' }}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell
                                sx={{
                                    borderBottom: '4px solid #D9D9D9',
                                    textAlign: 'center',
                                }}
                                width="25%"
                            >
                                <p className={styles.tableHead}>Type</p>
                            </TableCell>
                            <TableCell
                                sx={{
                                    borderBottom: '4px solid #D9D9D9',
                                    textAlign: 'center',
                                }}
                            >
                                <p className={styles.tableHead}>
                                    Associated Disease(s) Or Symptom(s)
                                </p>
                            </TableCell>
                            <TableCell
                                sx={{
                                    borderBottom: '4px solid #D9D9D9',
                                    textAlign: 'center',
                                }}
                                width="25%"
                            >
                                <p className={styles.tableHead}>
                                    You Are Under Medication
                                </p>
                            </TableCell>
                            <TableCell
                                sx={{
                                    borderBottom: '4px solid #D9D9D9',
                                    textAlign: 'center',
                                }}
                                width="25%"
                            >
                                <p className={styles.tableHead}>
                                    You Had Surgery
                                </p>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {table_body.map((item: any, index: number) => {
                            return (
                                <React.Fragment key={index}>
                                    <TableRow className={styles.tableCell}>
                                        <TableCell rowSpan={item.rowSpan}>
                                            <p
                                                className={
                                                    styles.questionaire_item
                                                }
                                            >
                                                {item.id} . {item.type}
                                            </p>
                                        </TableCell>
                                    </TableRow>
                                    {item.disease.map(
                                        (checkBoxItem: any, index: number) => {
                                            return (
                                                <TableRow
                                                    key={index}
                                                    sx={{
                                                        borderBottom:
                                                            index + 1 ===
                                                            item.disease.length
                                                                ? '4px solid #d9d9d9'
                                                                : '',
                                                    }}
                                                >
                                                    <TableCell
                                                        sx={{
                                                            borderBottom: '0px',
                                                        }}
                                                    >
                                                        {checkBoxItem.isSelectField ? (
                                                            <div>
                                                                <FormControl
                                                                    className={
                                                                        styles.textFieldProps
                                                                    }
                                                                    size="small"
                                                                    margin="dense"
                                                                    fullWidth
                                                                >
                                                                    <Select
                                                                        className={
                                                                            styles.inputField
                                                                        }
                                                                        name="meal_time_option"
                                                                    >
                                                                        {select_option.map(
                                                                            (
                                                                                item: any,
                                                                                index: number
                                                                            ) => {
                                                                                return (
                                                                                    <MenuItem
                                                                                        value={
                                                                                            item.id
                                                                                        }
                                                                                        key={
                                                                                            index
                                                                                        }
                                                                                        className={
                                                                                            styles.inputField
                                                                                        }
                                                                                    >
                                                                                        {
                                                                                            item.label
                                                                                        }
                                                                                    </MenuItem>
                                                                                )
                                                                            }
                                                                        )}
                                                                    </Select>
                                                                </FormControl>
                                                            </div>
                                                        ) : (
                                                            <div>
                                                                <FormControlLabel
                                                                    control={
                                                                        <Checkbox />
                                                                    }
                                                                    label={
                                                                        checkBoxItem.label
                                                                    }
                                                                />
                                                            </div>
                                                        )}
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{
                                                            borderBottom: '0px',
                                                        }}
                                                    >
                                                        {checkBoxItem.isSelectField ? null : (
                                                            <div>
                                                                <FormControl
                                                                    className={
                                                                        styles.textFieldProps
                                                                    }
                                                                    size="small"
                                                                    margin="dense"
                                                                    fullWidth
                                                                >
                                                                    <Select
                                                                        className={
                                                                            styles.inputField
                                                                        }
                                                                        name="meal_time_option"
                                                                    >
                                                                        {select_option.map(
                                                                            (
                                                                                item: any,
                                                                                index: number
                                                                            ) => {
                                                                                return (
                                                                                    <MenuItem
                                                                                        value={
                                                                                            item.id
                                                                                        }
                                                                                        key={
                                                                                            index
                                                                                        }
                                                                                        className={
                                                                                            styles.inputField
                                                                                        }
                                                                                    >
                                                                                        {
                                                                                            item.label
                                                                                        }
                                                                                    </MenuItem>
                                                                                )
                                                                            }
                                                                        )}
                                                                    </Select>
                                                                </FormControl>
                                                            </div>
                                                        )}
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{
                                                            borderBottom: '0px',
                                                        }}
                                                    >
                                                        {checkBoxItem.isSelectField ? null : (
                                                            <div>
                                                                <FormControl
                                                                    className={
                                                                        styles.textFieldProps
                                                                    }
                                                                    size="small"
                                                                    margin="dense"
                                                                    fullWidth
                                                                >
                                                                    <Select
                                                                        className={
                                                                            styles.inputField
                                                                        }
                                                                        name="meal_time_option"
                                                                    >
                                                                        {select_option.map(
                                                                            (
                                                                                item: any,
                                                                                index: number
                                                                            ) => {
                                                                                return (
                                                                                    <MenuItem
                                                                                        value={
                                                                                            item.id
                                                                                        }
                                                                                        key={
                                                                                            index
                                                                                        }
                                                                                        className={
                                                                                            styles.inputField
                                                                                        }
                                                                                    >
                                                                                        {
                                                                                            item.label
                                                                                        }
                                                                                    </MenuItem>
                                                                                )
                                                                            }
                                                                        )}
                                                                    </Select>
                                                                </FormControl>
                                                            </div>
                                                        )}
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }
                                    )}
                                </React.Fragment>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default PersonalFamilyHistory1
