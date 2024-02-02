import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import * as React from 'react'
import styles from '../_mpa.module.scss'
type Props = {
    open: boolean
    setOpen: any
}
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

const ViewModal: React.FC<Props> = ({ open, setOpen }: Props) => {
    return (
        <>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setOpen(false)}
            >
                <DialogContent>
                    <p className={styles.view_modal_text}>M: 6.0-8.50</p>
                    <p className={styles.view_modal_text}>FP: 0.40-0.70</p>
                    <p className={styles.view_modal_text}>LP:1.38-5.47</p>
                    <p className={styles.view_modal_text}>MP: 26.72-133.40</p>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default ViewModal
