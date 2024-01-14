import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import styles from "../_health-management-consultation.module.scss"
import { Grid, Stack } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import HealthScreeningImage from '../../../images/health-screening-report.png'
import HealthManagementImage from '../../../images/health-management-report.png'
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

type Props = {
    matches: any
    setOpen: any
    open: any
}

const ViewPDFModal: React.FC<Props> = ({ matches, setOpen, open }: Props) => {
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                classes={{ paper: styles.viewPDFModal }}
            >
                <IconButton
                    onClick={() => setOpen(false)}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon className={styles.closeIcon} />
                </IconButton>
                <DialogContent>
                    <div style={{ marginTop: '4rem' }}>
                        <div style={{ marginTop: '20px' }}>
                            <p className={styles.viewPDFModalText}>
                                Choose PDF
                            </p>
                        </div>
                        <div
                            className={
                                matches
                                    ? styles.viewPDFModalDivider
                                    : styles.viewPDFModalDividerMobile
                            }
                        />
                    </div>
                    <Stack direction="row">
                        <div style={{ cursor: 'pointer' }}>
                            <img
                                src={HealthScreeningImage}
                                height="100%"
                                width="100%"
                            />
                        </div>
                        <div style={{ cursor: 'pointer' }}>
                            <img
                                src={HealthManagementImage}
                                height="100%"
                                width="100%"
                            />
                        </div>
                    </Stack>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}
export default ViewPDFModal
