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
    Divider,
} from '@mui/material'
import styles from '../_interview-questionaire.module.scss'
import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const PersonalFamilyHistory3 = () => {
    const select_option = [
        {
            id: 1,
            label: 'No',
        },
    ]

    const table_body = [
        {
            id: '15',
            type: 'Cancers',
            rowSpan: 17,
            disease: [
                {
                    id: 1,
                    label: 'Bladder Cancer',
                },
                {
                    id: 2,
                    label: 'Breast Cancer',
                },
                {
                    id: 3,
                    label: 'Cervical Cancer / Corpus Uteri Cancer',
                },
                {
                    id: 4,
                    label: 'Colorectal Cancer',
                },
                {
                    id: 5,
                    label: 'Esophageal Cancer',
                },
                {
                    id: 6,
                    label: 'Nasopharyngeal Carcinoma',
                },
                {
                    id: 7,
                    label: 'Gastic Cancer',
                },
                {
                    id: 8,
                    label: 'Liver Cancer / Cholangiocarcinoma',
                },
                {
                    id: 9,
                    label: 'Lung Cancer / Trachea Cancer',
                },
                {
                    id: 10,
                    label: 'Lymphoma',
                },
                {
                    id: 11,
                    label: 'Oral Cancer',
                },
                {
                    id: 12,
                    label: 'Ovarian Cancer',
                },
                {
                    id: 13,
                    label: 'Pancreatic Cancer',
                },
                {
                    id: 14,
                    label: 'Prostate Cancer',
                },
                {
                    id: 15,
                    label: 'Skin Cancer',
                },
                {
                    id: 16,
                    label: 'Thyroid Cancer',
                },
            ],
        },
    ]

    const item_17_label = [
        {
            id: 1,
            label: 'Atopic Anemia',
        },
        {
            id: 2,
            label: 'Asthma',
        },
        {
            id: 3,
            label: 'Bladder Cancer',
        },
        {
            id: 4,
            label: 'Breast Cancer',
        },
        {
            id: 5,
            label: 'Cardiovascular Diseases',
        },
        {
            id: 6,
            label: 'Cerebrovascular Disease(Stroke)',
        },
        {
            id: 7,
            label: 'Colorectal Cancer',
        },
        {
            id: 8,
            label: 'Dementia',
        },
        {
            id: 9,
            label: 'Dizziness',
        },
        {
            id: 10,
            label: 'Familial Anemia',
        },
        {
            id: 11,
            label: 'Multiple Sclerosis',
        },
        {
            id: 12,
            label: 'Gastic Cancer',
        },
        {
            id: 13,
            label: 'Gout',
        },
        {
            id: 14,
            label: 'Hepatities B',
        },
        {
            id: 15,
            label: 'Hepatities C',
        },
        {
            id: 16,
            label: 'Hyperglycemia (Diabetes)',
        },
        {
            id: 17,
            label: 'Hypertension',
        },
        {
            id: 18,
            label: 'Hyperlipidemia',
        },
        {
            id: 19,
            label: 'Kidney Failure',
        },
        {
            id: 20,
            label: 'Lung Cancer / Trachea Cancer',
        },
        {
            id: 21,
            label: 'Lymphoma',
        },
        {
            id: 22,
            label: 'Migraine',
        },
        {
            id: 23,
            label: 'Oral Cancer',
        },
        {
            id: 24,
            label: 'Ovarian Cancer',
        },
        {
            id: 25,
            label: 'Pancreatic Cancer',
        },
        {
            id: 26,
            label: 'Parkinson’s Disease',
        },
        {
            id: 27,
            label: 'Prostate Cancer',
        },
        {
            id: 28,
            label: 'Rheumatoid Arthritis',
        },
        {
            id: 29,
            label: 'Skin Cancer',
        },
        {
            id: 30,
            label: 'None of the above',
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
                                                                control={
                                                                    <Checkbox />
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
            <Grid container sx={{ marginTop: '15px' }}>
                <Grid item md={12} xs={12}>
                    <p className={styles.questionaire_item}>
                        16. Other Medications
                    </p>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Stack
                        direction={{
                            xs: 'column',
                            sm: 'column',
                            md: 'row',
                            lg: 'row',
                            xl: 'row',
                        }}
                        justifyContent="space-between"
                        sx={{ paddingLeft: '25px' }}
                    >
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
            <Divider
                sx={{ height: '4px', background: '#D9D9D9', marginTop: '15px' }}
            />

            <Grid container sx={{ marginTop: '15px' }}>
                <Grid item md={12} xs={12}>
                    <p className={styles.questionaire_item}>
                        17. Have your family member (grandparents, parents and
                        siblings) suffered from this disease? (Check all that
                        apply)
                    </p>
                </Grid>
                <Grid item md={12} xs={12}>
                    <Grid
                        container
                        spacing={1}
                        sx={{
                            paddingLeft: '25px !important',
                            marginTop: '15px',
                        }}
                    >
                        {item_17_label.map((item: any, index: number) => {
                            return (
                                <Grid item md={2} key={index}>
                                    <FormControlLabel
                                        control={<Checkbox />}
                                        label={item.label}
                                    />
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default PersonalFamilyHistory3
