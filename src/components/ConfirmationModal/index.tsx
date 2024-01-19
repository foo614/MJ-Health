import {
    Box,
    Breakpoint,
    Grid,
    Stack,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import * as React from 'react'
import styles from './_confirmation-modal.module.scss'

type Props = {
    setOpen: React.Dispatch<React.SetStateAction<any>>
    open: boolean
    image: string | undefined
    title: string
    context: string | React.ReactNode
    width: false | Breakpoint | undefined //false = full width
    accept: () => void
    acceptText?: string
    decline: () => void
    declineText?: string
}

const ConfirmationModal: React.FC<Props> = ({
    setOpen,
    open,
    image,
    title,
    width,
    accept,
    decline,
    context,
    acceptText,
    declineText,
}: Props) => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Dialog
            open={open}
            keepMounted
            classes={{ paper: styles.modal }}
            maxWidth={width}
        >
            <DialogContent>
                <Stack spacing={3} sx={{ my: 5, mx: 3 }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <img src={image} alt="print icon" />
                    </Box>
                    {/* <div style={{ textAlign: 'center' }}></div> */}
                    <Box>
                        <p className={styles.title}>{title}</p>
                    </Box>
                    <Box>
                        <p className={styles.description}>{context}</p>
                    </Box>
                    <Box>
                        <div className={styles.divider} />
                    </Box>
                    <Box>
                        <Grid container spacing={3}>
                            <Grid item md={6} xs={12}>
                                <Button
                                    variant="contained"
                                    className={styles.decline}
                                    fullWidth
                                    onClick={decline}
                                >
                                    {declineText ?? 'No'}
                                </Button>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <Button
                                    variant="contained"
                                    className={styles.accept}
                                    fullWidth
                                    onClick={accept}
                                >
                                    {acceptText ?? 'Yes'}
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}
export default ConfirmationModal
