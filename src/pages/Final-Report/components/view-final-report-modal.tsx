import CloseIcon from '@mui/icons-material/Close'
import {
    DialogActions,
    FormControl,
    MenuItem,
    Select,
    Stack,
} from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import { SelectChangeEvent } from '@mui/material/Select'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import {
    FINAL_REPORT_AUDIOMETRY,
    FINAL_REPORT_BONE_MINERAL_DENSITY,
    FINAL_REPORT_CT_SCAN,
    FINAL_REPORT_ELECTROCARDIOGRAM,
    FINAL_REPORT_ENT_EXAMINATION,
    FINAL_REPORT_GENERAL_MEASUREMENT,
    FINAL_REPORT_HMC_RECORD,
    FINAL_REPORT_HMP_BROCHURE,
    FINAL_REPORT_INTERVIEW_PAGE,
    FINAL_REPORT_LUNG_FUNCTION_TEST,
    FINAL_REPORT_MAMMOGRAPHY,
    FINAL_REPORT_MPA,
    FINAL_REPORT_PAPS_SMEAR_EXAM,
    FINAL_REPORT_PERIPHERAL_VASCULAR_SCREENING,
    FINAL_REPORT_RETINOGRAPHY,
    FINAL_REPORT_SONOGRAPHY,
    FINAL_REPORT_VISION_AND_OCULAR_TENSION_TEST,
    FINAL_REPORT_X_RAY,
} from 'constant'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../_final-report.module.scss'

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

type Props = {
    setOpen: any
    open: any
    setOpenReportFollowedModal: any
}

const ViewFinalReportModal: React.FC<Props> = ({
    setOpen,
    open,
    setOpenReportFollowedModal,
}: Props) => {
    const [selectedReport, setSelectedReport] = React.useState<string>('')
    const [selectedURL, setSelectedURL] = React.useState<string>('')

    const [
        selectedHealthManagementSection,
        setSelectedHealthManagementSection,
    ] = React.useState<string>('')

    const navigate = useNavigate()
    const select_option = [
        {
            id: 1,
            label: 'Health Management Promotion Brochure',
            to: FINAL_REPORT_HMP_BROCHURE,
        },
        {
            id: 2,
            label: 'Health Screening Report',
        },
        {
            id: 3,
            label: 'Micro Physiological Assessment',
            to: FINAL_REPORT_MPA,
        },
        {
            id: 4,
            label: "Pap's Smear Exam Report",
            to: FINAL_REPORT_PAPS_SMEAR_EXAM,
        },
        {
            id: 5,
            label: 'HMC Record',
            to: FINAL_REPORT_HMC_RECORD,
        },
    ]

    const select_option_health_management_report = [
        {
            id: 6,
            label: 'Interview',
            to: FINAL_REPORT_INTERVIEW_PAGE,
        },
        {
            id: 7,
            label: 'Audiometry',
            to: FINAL_REPORT_AUDIOMETRY,
        },
        {
            id: 8,
            label: 'Bone Mineral Density',
            to: FINAL_REPORT_BONE_MINERAL_DENSITY,
        },
        {
            id: 9,
            label: 'CT Scan',
            to: FINAL_REPORT_CT_SCAN,
        },
        {
            id: 10,
            label: 'Electrocardiogram',
            to: FINAL_REPORT_ELECTROCARDIOGRAM,
        },
        {
            id: 11,
            label: 'ENT Examination',
            to: FINAL_REPORT_ENT_EXAMINATION,
        },
        {
            id: 12,
            label: 'General Measurement',
            to: FINAL_REPORT_GENERAL_MEASUREMENT,
        },
        {
            id: 13,
            label: 'Lung Function Test',
            to: FINAL_REPORT_LUNG_FUNCTION_TEST,
        },
        {
            id: 14,
            label: 'Mammography',
            to: FINAL_REPORT_MAMMOGRAPHY,
        },
        {
            id: 15,
            label: "Pap's Smear",
            to: FINAL_REPORT_PAPS_SMEAR_EXAM,
        },
        {
            id: 16,
            label: 'Peripheral Vascular Screening',
            to: FINAL_REPORT_PERIPHERAL_VASCULAR_SCREENING,
        },
        {
            id: 17,
            label: 'Retinography',
            to: FINAL_REPORT_RETINOGRAPHY,
        },
        {
            id: 18,
            label: 'Sonography',
            to: FINAL_REPORT_SONOGRAPHY,
        },
        {
            id: 19,
            label: 'Vision & Ocular Tension Test',
            to: FINAL_REPORT_VISION_AND_OCULAR_TENSION_TEST,
        },
        {
            id: 20,
            label: 'X-Ray',
            to: FINAL_REPORT_X_RAY,
        },
    ]

    const handleReportChange = (event: SelectChangeEvent) => {
        setSelectedReport(event.target.value)
        setSelectedHealthManagementSection('')
    }

    const handleHealthManagementSectionChange = (event: SelectChangeEvent) => {
        setSelectedHealthManagementSection(event.target.value)
    }

    const handleOnClickOption = (item: any) => {
        setSelectedURL(item.to)
    }

    return (
        <>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                classes={{ paper: styles.view_final_report_modal }}
            >
                <DialogTitle className={styles.infoModalColor}>
                    <p className={styles.infoModalTitle}>View Final Report</p>
                </DialogTitle>
                <IconButton
                    onClick={() => setOpen(!open)}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 15,
                        color: (theme: any) => theme?.palette?.grey[500],
                    }}
                >
                    <CloseIcon className={styles.closeIcon} />
                </IconButton>
                <DialogContent sx={{ p: 4 }}>
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
                                value={selectedReport}
                                onChange={handleReportChange}
                            >
                                {select_option.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.id}
                                                key={index}
                                                className={styles.inputField}
                                                onClick={() =>
                                                    handleOnClickOption(item)
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
                    {selectedReport == '2' ? (
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
                                    value={selectedHealthManagementSection}
                                    onChange={
                                        handleHealthManagementSectionChange
                                    }
                                >
                                    {select_option_health_management_report.map(
                                        (item: any, index: number) => {
                                            return (
                                                <MenuItem
                                                    value={item.id}
                                                    key={index}
                                                    className={
                                                        styles.inputField
                                                    }
                                                    onClick={() =>
                                                        handleOnClickOption(
                                                            item
                                                        )
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
                    ) : null}
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        spacing={3}
                        sx={{ marginTop: '15px', cursor: 'pointer' }}
                        onClick={() => setOpenReportFollowedModal(true)}
                    >
                        <div>
                            <p
                                className={styles.date_remaining_text}
                                style={{ fontWeight: '500' }}
                            >
                                Date Remaining:
                            </p>
                        </div>
                        <div>
                            <p
                                className={styles.date_remaining_text}
                                style={{ fontWeight: '600' }}
                            >
                                RF:6
                            </p>
                        </div>
                        <div>
                            <p
                                className={styles.date_remaining_text}
                                style={{ fontWeight: '600' }}
                            >
                                RF:4
                            </p>
                        </div>
                    </Stack>
                </DialogContent>
                <DialogActions
                    className={styles.view_final_report_dialog_action}
                >
                    <Button
                        variant="contained"
                        className={
                            selectedReport
                                ? styles.view_final_report_confirm_bttn
                                : styles.view_final_report_confirm_disabed_bttn
                        }
                        disabled={selectedReport ? false : true}
                        onClick={() => navigate(selectedURL)}
                    >
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ViewFinalReportModal
