import {
    Button,
    DialogContent,
    Divider,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import Dialog from '@mui/material/Dialog'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Unstable_Grid2'
import Branch from 'images/branch.png'
import React from 'react'
import styles from './_switch-branch.module.scss'
type Props = {
    setOpen: (open: boolean) => void
    open: boolean
}
function SwitchBranch(props: Props) {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const handleClose = () => {
        props.setOpen(false)
    }
    return (
        <React.Fragment>
            <Dialog
                open={props.open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent className={styles.box}>
                    <Stack>
                        <Grid xs textAlign={'center'}>
                            <img
                                src={Branch}
                                style={{
                                    height: `100px`,
                                    width: `115.68px`,
                                }}
                            />
                        </Grid>
                        <Grid xs textAlign={'center'} className={styles.title}>
                            Switch Branch
                        </Grid>
                        <Grid
                            xs
                            textAlign={'center'}
                            className={styles.subtitle}
                        >
                            You are about switch to{' '}
                            <b className={styles.subtitleBoldText}>
                                MJ Health Centre branch.
                            </b>
                        </Grid>
                        <Divider className={styles.divider} />
                        <Grid xs className={styles.dFlex} gap={2}>
                            <Button
                                variant="contained"
                                className={styles.cancelButton}
                                aria-label="Increment value"
                                sx={{ mt: 2 }}
                                onClick={() => props.setOpen(false)}
                                fullWidth
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                className={styles.confirmButton}
                                aria-label="Increment value"
                                sx={{ mt: 2 }}
                                onClick={() => props.setOpen(false)}
                                fullWidth
                            >
                                Switch Now
                            </Button>
                        </Grid>
                    </Stack>
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}

export default SwitchBranch
