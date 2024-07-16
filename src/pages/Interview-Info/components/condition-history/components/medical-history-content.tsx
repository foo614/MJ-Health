import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import React from 'react'
import styles from '../../../_interview-info.module.scss'

type Props = {
    readonly?: boolean
}

type HistoryComponentProps = {
    title: string
    items: any[]
    readonly?: boolean
}

type RemarkComponentProps = {
    title: string
    remark: string
    readonly?: boolean
}

const MedicalHistory = ({ title, items, readonly }: HistoryComponentProps) => {
    return (
        <React.Fragment>
            <Grid item md={6} sm={12} xs={12} lg={4} xl={4} mt={1}>
                <div className={styles.medical_content_div}>
                    <p className={styles.medical_content_title}>{title}</p>
                    <div className={styles.medical_history_content_div}>
                        {items.map((sub_item: any, index: number) => {
                            return (
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    key={index}
                                    mt={1}
                                >
                                    <p className={styles.medical_content_item}>
                                        {sub_item.title}
                                    </p>
                                    {!readonly && (
                                        <Button
                                            variant="text"
                                            className={styles.deleteBttn}
                                            sx={{
                                                marginLeft: 'auto',
                                            }}
                                        >
                                            Delete
                                        </Button>
                                    )}
                                </Stack>
                            )
                        })}
                    </div>
                </div>
            </Grid>
        </React.Fragment>
    )
}

const MedicationAndAllergyHistory = ({
    title,
    items,
    readonly,
}: HistoryComponentProps) => {
    return (
        <React.Fragment>
            <Grid item md={6} sm={12} xs={12} lg={4} xl={4} mt={1}>
                <div className={styles.medical_content_div}>
                    <p className={styles.medical_content_title}>{title}</p>
                    <div className={styles.medical_history_content_div}>
                        {items.map((sub_item: any, index: number) => {
                            return (
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    key={index}
                                    mt={1}
                                >
                                    <p className={styles.medical_content_item}>
                                        {sub_item.title}
                                    </p>
                                    {!readonly && (
                                        <Button
                                            variant="text"
                                            className={styles.deleteBttn}
                                            sx={{
                                                marginLeft: 'auto',
                                            }}
                                        >
                                            Delete
                                        </Button>
                                    )}
                                </Stack>
                            )
                        })}
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
                            className={styles.modalFormField}
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
}

const RemarkComponent = ({ title, remark, readonly }: RemarkComponentProps) => {
    return (
        <React.Fragment>
            <Grid item md={6} sm={12} xs={12} lg={4} xl={4} mt={1}>
                <div className={styles.medical_content_div}>
                    <p className={styles.medical_content_title}>{title}</p>
                    <div className={styles.medical_history_content_div}>
                        <Typography mt={1}>{remark}</Typography>
                    </div>
                    <Stack
                        direction="row"
                        justifyContent="end"
                        spacing={2}
                        sx={{ marginTop: '10px' }}
                    >
                        <Button
                            variant="contained"
                            disabled={readonly}
                            size="small"
                            className={styles.addBttn}
                        >
                            Edit
                        </Button>
                    </Stack>
                </div>
            </Grid>
        </React.Fragment>
    )
}

const MedicalHistoryContent = ({ readonly }: Props) => {
    const medicalHistoryData = [
        {
            id: 1,
            title: 'Diabetes',
        },
    ]

    const previousSurgeryData = [
        {
            id: 2,
            title: 'Kidney Surgery',
        },
    ]

    const familyMedicalHistoryData = [
        {
            id: 3,
            title: 'High Blood Pressure',
        },
    ]

    const medicationData = [
        {
            id: 4,
            title: 'Calories Control',
        },
        {
            id: 5,
            title: 'Blood Pressure Control',
        },
        {
            id: 6,
            title: 'Glycemia Manager',
        },
    ]

    const allergyHistoryData = [
        {
            id: 7,
            title: 'Milk sensitization reaction',
        },
        {
            id: 8,
            title: 'Longan pulp sensitization reaction',
        },
        {
            id: 9,
            title: 'Severe snow fungus sensitization react..',
        },
    ]

    const remark =
        'Lorem ipsum dolor sit amet; consectetur adipiscing elit; sed do eiusmod tempor incididunt. '

    return (
        <>
            <div style={{ paddingLeft: '30px', paddingRight: '30px' }}>
                <Grid container spacing={2}>
                    {/* Medical History */}
                    <MedicalHistory
                        title="Medical History"
                        items={medicalHistoryData}
                        readonly={readonly}
                    />

                    {/* Previous Surgery */}
                    <MedicalHistory
                        title="Previous Surgery"
                        items={previousSurgeryData}
                        readonly={readonly}
                    />

                    {/* Family Medical History */}
                    <MedicalHistory
                        title="Family Medical History"
                        items={familyMedicalHistoryData}
                        readonly={readonly}
                    />

                    {/* Medication */}
                    <MedicationAndAllergyHistory
                        title="Medication"
                        items={medicationData}
                        readonly={readonly}
                    />

                    {/* Allergy History */}
                    <MedicationAndAllergyHistory
                        title="Allergy History"
                        items={allergyHistoryData}
                        readonly={readonly}
                    />

                    {/* Remark */}
                    <RemarkComponent
                        title="Remark"
                        remark={remark}
                        readonly={readonly}
                    />
                </Grid>
            </div>
        </>
    )
}

export default MedicalHistoryContent
