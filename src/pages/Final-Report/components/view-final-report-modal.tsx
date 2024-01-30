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
import { FormControl, Select, MenuItem } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select'

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
}

const ViewFinalReportModal: React.FC<Props> = ({ setOpen, open }: Props) => {
    const [selectedReport, setSelectedReport] = React.useState<string>('')
    const [
        selectedHealthManagementSection,
        setSelectedHealthManagementSection,
    ] = React.useState<string>('')
    const select_option = [
        {
            id: 1,
            label: 'Health Management Promotion Brochure',
        },
        {
            id: 2,
            label: 'Health Screening Report',
        },
        {
            id: 3,
            label: 'Micro Physiological Assessment',
        },
        {
            id: 4,
            label: "Pap's Smear Exam Report",
        },
        {
            id: 5,
            label: 'HMC Record',
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

    return (
        console.log(selectedHealthManagementSection),
        (
            <>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    classes={{ paper: styles.view_final_report_modal }}
                >
                    <DialogTitle className={styles.infoModalColor}>
                        <p className={styles.infoModalTitle}>
                            View Final Report
                        </p>
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
                    </DialogContent>
                </Dialog>
            </>
        )
    )
}

export default ViewFinalReportModal
