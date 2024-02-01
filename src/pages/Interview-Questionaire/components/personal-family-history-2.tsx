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

type Props = {
    readonly?: boolean
}

const PersonalFamilyHistory2 = ({ readonly }: Props) => {
    const select_option = [
        {
            id: 1,
            label: 'No',
        },
    ]

    const table_body = [
        {
            id: '8',
            rowSpan: 5,
            type: 'Hepatobiliary',
            disease: [
                {
                    id: 1,
                    label: 'Hepatitis B',
                },
                {
                    id: 2,
                    label: 'Hepatitis C',
                },
                {
                    id: 3,
                    label: 'Liver cirrhosis',
                },
                {
                    id: 4,
                    label: 'Liver and/or Gallstones',
                },
            ],
        },
        {
            id: '9',
            rowSpan: 5,
            type: 'Gastrointestinal Tract Diseases',
            disease: [
                {
                    id: 5,
                    label: 'Peptic Ulcer',
                },
                {
                    id: 6,
                    label: 'Gastroesophageal Reflux',
                },
                {
                    id: 7,
                    label: 'Haemorrhoids',
                },
                {
                    id: 8,
                    label: 'Irritable Bowel Syndrome',
                },
            ],
        },
        {
            id: '10',
            rowSpan: 5,
            type: 'Kidney Diseases',
            disease: [
                {
                    id: 9,
                    label: 'Chronic Nephritis',
                },
                {
                    id: 10,
                    label: 'Kidney Failure',
                },
                {
                    id: 11,
                    label: 'Kidney Oedema',
                },
                {
                    id: 12,
                    label: 'Kidney Stones',
                },
            ],
        },
        {
            id: '11',
            rowSpan: 3,
            type: 'Urianary Tract Diseases',
            disease: [
                {
                    id: 13,
                    label: 'Prostate Hypertrophy',
                },
                {
                    id: 14,
                    label: 'Urinary Calculus',
                },
            ],
        },
        {
            id: '12',
            rowSpan: 5,
            type: 'Gynecological Diseases',
            disease: [
                {
                    id: 15,
                    label: 'Endometriosis',
                },
                {
                    id: 16,
                    label: 'Menstrual Disorders',
                },
                {
                    id: 17,
                    label: 'Ovarian/ Fallopian Cyst',
                },
                {
                    id: 18,
                    label: 'Uterine Fibroids',
                },
            ],
        },
        {
            id: '13',
            rowSpan: 4,
            type: 'Bone, Joint Diseases',
            disease: [
                {
                    id: 19,
                    label: 'Rheumatoid Arthritis',
                },
                {
                    id: 20,
                    label: 'Degenerative Arthritis',
                },
                {
                    id: 21,
                    label: 'Gout',
                },
            ],
        },
        {
            id: '14',
            rowSpan: 4,
            type: 'Breast / Thyroid Diseases',
            disease: [
                {
                    id: 22,
                    label: 'Fibrocystic Breast ',
                },
                {
                    id: 23,
                    label: 'Thyroid Nodules',
                },
                {
                    id: 24,
                    label: 'Hyperthyroidism/ Hypothyroidism',
                },
            ],
        },
    ]
    return (
        <>
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
                                                        <div>
                                                            <FormControlLabel
                                                                disabled={
                                                                    readonly
                                                                }
                                                                control={
                                                                    <Checkbox
                                                                        sx={{
                                                                            '&.Mui-checked.Mui-disabled':
                                                                                {
                                                                                    color: 'var(--mj-light-green) !important',
                                                                                },
                                                                        }}
                                                                    />
                                                                }
                                                                label={
                                                                    checkBoxItem.label
                                                                }
                                                            />
                                                        </div>
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{
                                                            borderBottom: '0px',
                                                        }}
                                                    >
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
                                                                    inputProps={{
                                                                        readOnly:
                                                                            readonly,
                                                                    }}
                                                                    value={
                                                                        readonly
                                                                            ? select_option[0].id.toString()
                                                                            : undefined
                                                                    }
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
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{
                                                            borderBottom: '0px',
                                                        }}
                                                    >
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
                                                                    inputProps={{
                                                                        readOnly:
                                                                            readonly,
                                                                    }}
                                                                    value={
                                                                        readonly
                                                                            ? select_option[0].id.toString()
                                                                            : undefined
                                                                    }
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

export default PersonalFamilyHistory2
