import {
    Grid,
    MenuItem,
    Select,
    FormControl,
    Stack,
    FormControlLabel,
    Checkbox,
    TextField,
    Button,
} from '@mui/material'
import styles from '../../_interview-info.module.scss'
import { useState } from 'react'
const PersonalStatusScreeningFlow = () => {
    const [checkItem, setCheckItem] = useState<any>([])

    const handleCheckItem = (itemId: number) => {
        const itemExist = checkItem?.includes(itemId)
        console.log(itemId)
        console.log()
        if (!itemExist) {
            setCheckItem((oldArray: any) => [...oldArray, itemId])
        } else {
            const filterArray = checkItem?.filter((x: any) => x !== itemId)
            setCheckItem(filterArray)
        }
    }

    const select_option = [
        {
            id: 1,
            label: 'No',
        },
        {
            id: 2,
            label: 'Trans-abdomen',
        },
    ]

    const screening_flow = [
        {
            id: 1,
            title: '',
            option: [
                {
                    id: 1,
                    label: 'Audiometry Test',
                },
            ],
        },
        {
            id: 2,
            title: '',
            option: [
                {
                    id: 2,
                    label: 'Blood Sampling',
                },
            ],
        },
        {
            id: 3,
            title: '',
            option: [
                {
                    id: 3,
                    label: 'Blood Sampling',
                },
            ],
        },
        {
            id: 4,
            title: 'General Measurement',
            option: [
                {
                    id: 4,
                    label: 'Height, Weight, Body Fat',
                },
                {
                    id: 5,
                    label: 'Muscle Mass',
                },
                {
                    id: 6,
                    label: 'Chest, Waist, Hip Circumference',
                },
                {
                    id: 7,
                    label: 'BP',
                },
            ],
        },
        {
            id: 5,
            title: 'Gynecology  Examination',
            option: [
                {
                    id: 8,
                    label: 'Paps Smear',
                },
                {
                    id: 9,
                    label: 'Pelvic Examination',
                },
            ],
        },
        {
            id: 6,
            title: '',
            option: [
                {
                    id: 10,
                    label: 'HMC',
                },
            ],
        },
        {
            id: 7,
            title: '',
            option: [
                {
                    id: 11,
                    label: 'Interview',
                },
            ],
        },
        {
            id: 8,
            title: '',
            option: [
                {
                    id: 12,
                    label: 'Lounge & Health Education',
                },
            ],
        },
        {
            id: 9,
            title: '',
            option: [
                {
                    id: 13,
                    label: 'Mammography',
                },
            ],
        },
        {
            id: 10,
            title: '',
            option: [
                {
                    id: 14,
                    label: 'MPA',
                },
            ],
        },
        {
            id: 11,
            title: 'Ophthalmology Examination',
            option: [
                {
                    id: 15,
                    label: 'Vision',
                },
                {
                    id: 16,
                    label: 'Color Discrimination',
                },
                {
                    id: 17,
                    label: 'Astigmatism',
                },
                {
                    id: 18,
                    label: 'Ocular Tension',
                },
            ],
        },
        {
            id: 12,
            title: '',
            option: [
                {
                    id: 19,
                    label: 'Peripheral Vascular Screening',
                },
            ],
        },
        {
            id: 13,
            title: '',
            option: [
                {
                    id: 20,
                    label: 'Physician Consultation',
                },
            ],
        },
        {
            id: 14,
            title: '',
            option: [
                {
                    id: 21,
                    label: 'Pulmonary Function Test',
                },
            ],
        },
        {
            id: 15,
            title: 'Reception',
            option: [
                {
                    id: 22,
                    label: 'Hand in Questionnaire',
                },
                {
                    id: 23,
                    label: 'Hand in Stool Collector',
                },
            ],
        },
        {
            id: 16,
            title: 'Retinal Imaging',
            option: [
                {
                    id: 24,
                    label: 'Retinography',
                },
                {
                    id: 25,
                    label: 'Strabismus ',
                },
                {
                    id: 26,
                    label: 'Slit Lamp',
                },
            ],
        },
        {
            id: 17,
            title: 'Sonography',
            option: [
                {
                    id: 27,
                    label: 'Abdomen',
                },
                {
                    id: 28,
                    label: 'Breast ',
                },
                {
                    id: 29,
                    label: 'Prostate',
                },
                {
                    id: 30,
                    label: 'Gynecology',
                },
            ],
        },
        {
            id: 18,
            title: '',
            option: [
                {
                    id: 31,
                    label: 'Thyroid',
                },
                {
                    id: 32,
                    label: 'Carotid Artery ',
                },
                {
                    id: 33,
                    label: 'Liver Elastography',
                },
            ],
        },
        {
            id: 19,
            title: '',
            option: [
                {
                    id: 34,
                    label: 'Urine',
                },
            ],
        },
        {
            id: 20,
            title: 'X-Ray',
            option: [
                {
                    id: 35,
                    label: 'CXR',
                },
                {
                    id: 36,
                    label: 'KUB',
                },
                {
                    id: 37,
                    label: 'Lateral Chest X-Ray',
                },
            ],
        },
        {
            id: 21,
            title: '',
            option: [
                {
                    id: 38,
                    label: 'Changing Room',
                },
            ],
        },
        {
            id: 22,
            title: 'Electrocardiogram',
            option: [
                {
                    id: 39,
                    label: 'ECG',
                },
                {
                    id: 40,
                    label: 'Pulse, Respiration Rate',
                },
            ],
        },
        {
            id: 23,
            title: 'ENT Examination',
            option: [
                {
                    id: 41,
                    label: 'Ear',
                },
                {
                    id: 42,
                    label: 'Nose',
                },
                {
                    id: 43,
                    label: 'Throat',
                },
            ],
        },
    ]

    const otherCheckBoxTextField = () => {
        return (
            <>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <p>Others:</p>
                    <TextField
                        InputProps={{
                            classes: { input: styles.searchInputField },
                        }}
                        variant="outlined"
                        margin="dense"
                        fullWidth
                        name="searchField"
                        className={styles.modalFormField}
                        size="small"
                    />
                </Stack>
            </>
        )
    }
    return (
        <>
            <div style={{ paddingLeft: '30px', paddingRight: '30px' }}>
                <p className={styles.medical_content_title}>
                    Personal Status Confirmation
                </p>
                <Grid container alignItems="center" sx={{ marginTop: '15px' }}>
                    <Grid item md={6} xs={12} lg={4} xl={4}>
                        <p className={styles.add_on_service_op_item_text}>
                            Vegetarian
                        </p>
                    </Grid>
                    <Grid item md={6} xs={12} lg={4} xl={4}>
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
                    </Grid>
                    <Grid item md={6} lg={4} xl={4}></Grid>
                </Grid>
                <Grid container alignItems="center">
                    <Grid item md={6} xs={12} lg={4} xl={4}>
                        <p className={styles.add_on_service_op_item_text}>
                            Gynecology Ultrasound
                        </p>
                    </Grid>
                    <Grid item md={6} xs={12} lg={4} xl={4}>
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
                    </Grid>
                    <Grid item md={6} lg={4} xl={4}></Grid>
                </Grid>
                <div style={{ marginTop: '2rem' }}>
                    <p>
                        <span className={styles.medical_content_title}>
                            Special Conditions
                        </span>
                        <span className={styles.personal_status_mcq_small_text}>
                            {' '}
                            (multiple choice)
                        </span>
                    </p>
                    <Stack sx={{ display: 'block' }}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Request Early Meal"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Antenatal"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Menstruation Period"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Breast Feeding"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Ovulation"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Infectious Disease (HIV, Hep B Carrier, Hep C, Conjunctivitis"
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label={otherCheckBoxTextField()}
                        />
                    </Stack>
                </div>
                <div style={{ marginTop: '2rem' }}>
                    <p className={styles.medical_content_title}>
                        Screening Flow
                    </p>
                    <Grid
                        container
                        sx={{
                            marginTop: '1rem',
                            border: '2px solid #EDEDED',
                            borderRadius: '10px',
                        }}
                    >
                        {screening_flow.map((item: any, index: number) => {
                            return (
                                <Grid
                                    item
                                    md={12}
                                    sm={12}
                                    xs={12}
                                    lg={4}
                                    xl={4}
                                    key={index}
                                    className={styles.screening_flow_grid_item}
                                    sx={{
                                        borderRight:
                                            item.id === 17 ? 'unset' : '',
                                    }}
                                >
                                    {item.title ? (
                                        <p
                                            className={
                                                styles.screening_flow_grid_title
                                            }
                                        >
                                            {item.title}
                                        </p>
                                    ) : null}

                                    {item.option.map(
                                        (selectOption: any, index: number) => {
                                            return (
                                                <Stack
                                                    direction="column"
                                                    key={index}
                                                >
                                                    <FormControlLabel
                                                        control={
                                                            <Checkbox
                                                                checked={
                                                                    checkItem?.includes(
                                                                        selectOption.id
                                                                    )
                                                                        ? true
                                                                        : false
                                                                }
                                                                name="screening_flow_checkbox"
                                                                onChange={() =>
                                                                    handleCheckItem(
                                                                        selectOption.id
                                                                    )
                                                                }
                                                            />
                                                        }
                                                        label={
                                                            selectOption.label
                                                        }
                                                    />
                                                </Stack>
                                            )
                                        }
                                    )}
                                </Grid>
                            )
                        })}
                    </Grid>
                    <div style={{ marginTop: '10px' }}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Select All"
                            labelPlacement="start"
                            sx={{ marginLeft: '0' }}
                        />
                    </div>
                    <div>
                        <Stack direction="row" spacing={2} justifyContent="end">
                            <Button
                                variant="contained"
                                className={styles.screening_flow_print_bttn}
                                sx={{ width: '220px', height: '64px' }}
                            >
                                Print
                            </Button>
                            <Button
                                variant="contained"
                                className={styles.interview_info_save_bttn}
                                sx={{ width: '220px', height: '64px' }}
                            >
                                Save
                            </Button>
                        </Stack>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PersonalStatusScreeningFlow
