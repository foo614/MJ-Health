import { Grid, Stack, Button, TextField, Divider } from '@mui/material'
import styles from '../../../_interview-info.module.scss'
import React from 'react'

type Props = {
    readonly?: boolean
}

const MedicalHistoryContent = ({ readonly }: Props) => {
    const medical_history_content = [
        {
            id: 1,
            title: 'Medical History',
            items: [
                {
                    title: 'Diabetes',
                },
            ],
        },
        {
            id: 2,
            title: 'Previous Surgery',
            items: [
                {
                    title: 'Kidney Surgery',
                },
            ],
        },
        {
            id: 3,
            title: 'Family Medical History',
            items: [
                {
                    title: 'High Blood Pressure',
                },
            ],
        },
        {
            id: 4,
            title: 'Medication',
            items: [
                {
                    title: 'Calories Control',
                },
                {
                    title: 'Blood Pressure Control',
                },
                {
                    title: 'Glycemia Manager',
                },
            ],
        },
        {
            id: 5,
            title: 'Allergy History',
            items: [
                {
                    title: 'Milk sensitization reaction',
                },
                {
                    title: 'Longan pulp sensitization reaction',
                },
                {
                    title: 'Severe snow fungus sensitization react..',
                },
            ],
        },
    ]
    return (
        <>
            <div style={{ paddingLeft: '30px', paddingRight: '30px' }}>
                <Grid container spacing={2}>
                    {medical_history_content.map((item: any, index: number) => {
                        return (
                            <React.Fragment key={index}>
                                <Grid
                                    item
                                    md={6}
                                    sm={12}
                                    xs={12}
                                    lg={4}
                                    xl={4}
                                    sx={{
                                        marginTop: index > 2 ? '10px' : '',
                                    }}
                                >
                                    <div className={styles.medical_content_div}>
                                        <p
                                            className={
                                                styles.medical_content_title
                                            }
                                        >
                                            {item.title}
                                        </p>
                                        <div
                                            className={
                                                styles.medical_history_content_div
                                            }
                                        >
                                            {item.items.map(
                                                (
                                                    sub_item: any,
                                                    index: number
                                                ) => {
                                                    return (
                                                        <Stack
                                                            direction="row"
                                                            alignItems="center"
                                                            key={index}
                                                            sx={{
                                                                marginTop:
                                                                    '10px',
                                                            }}
                                                        >
                                                            <p
                                                                className={
                                                                    styles.medical_content_item
                                                                }
                                                            >
                                                                {sub_item.title}
                                                            </p>
                                                            {!readonly && (
                                                                <Button
                                                                    variant="text"
                                                                    className={
                                                                        styles.deleteBttn
                                                                    }
                                                                    sx={{
                                                                        marginLeft:
                                                                            'auto',
                                                                    }}
                                                                >
                                                                    Delete
                                                                </Button>
                                                            )}
                                                        </Stack>
                                                    )
                                                }
                                            )}
                                        </div>
                                        <Stack
                                            direction="row"
                                            spacing={2}
                                            sx={{ marginTop: '10px' }}
                                        >
                                            <TextField
                                                variant="outlined"
                                                size="small"
                                                InputProps={{
                                                    classes: {
                                                        input: styles.inputField,
                                                    },
                                                    readOnly: readonly,
                                                }}
                                                fullWidth
                                                className={
                                                    styles.modalFormField
                                                }
                                                placeholder="Additional"
                                            />
                                            <Button
                                                variant="contained"
                                                disabled={readonly}
                                                size="small"
                                                className={styles.addBttn}
                                            >
                                                Add
                                            </Button>
                                        </Stack>
                                    </div>
                                </Grid>
                            </React.Fragment>
                        )
                    })}
                </Grid>
            </div>
        </>
    )
}

export default MedicalHistoryContent
