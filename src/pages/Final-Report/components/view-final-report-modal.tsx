import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import styles from '../_final-report.module.scss'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import DialogTitle from '@mui/material/DialogTitle'
import {
    FormControl,
    Select,
    MenuItem,
    DialogActions,
    Stack,
} from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'
import {
    FINAL_REPORT_HMC_RECORD,
    FINAL_REPORT_HMP_BROCHURE,
    FINAL_REPORT_MPA,
    FINAL_REPORT_PAPS_SMEAR_EXAM,
} from 'constant'
import { useNavigate } from 'react-router-dom'

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
        },
        {
            id: 7,
            label: 'Audiometry',
        },
        {
            id: 8,
            label: 'Bone Mineral Density',
        },
        {
            id: 9,
            label: 'CT Scan',
        },
        {
            id: 10,
            label: 'Electrocardiogram',
        },
        {
            id: 11,
            label: 'ENT Examination',
        },
        {
            id: 12,
            label: 'General Measurement',
        },
        {
            id: 13,
            label: 'Lung Function Test',
        },
        {
            id: 14,
            label: 'Mammography',
        },
        {
            id: 15,
            label: "Pap's Smear",
        },
        {
            id: 16,
            label: 'Peripheral Vascular Screening',
        },
        {
            id: 17,
            label: 'Retinography',
        },
        {
            id: 18,
            label: 'Sonography',
        },
        {
            id: 19,
            label: 'Vision & Ocular Tension Test',
        },
        {
            id: 20,
            label: 'X-Ray',
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
