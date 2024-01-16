import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import styles from '../_health-management-consultation-info.module.scss'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import DialogTitle from '@mui/material/DialogTitle'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import DialogActions from '@mui/material/DialogActions'
import Stack from '@mui/material/Stack'
import { useState } from 'react'
import { FormControl, Select, MenuItem, TextField } from '@mui/material'
import DietaryLifestyle from './hmc-modal-components/dietary-lifestyle'
import Nutrients from './hmc-modal-components/nutrients'
import MainIngredientProduct from './hmc-modal-components/main-ingredient-product'
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

const HMCRecordModal: React.FC<Props> = ({ setOpen, open }: Props) => {
    const theme = useTheme()
    const lgUp = useMediaQuery(theme.breakpoints.up('lg'))
    const mdUp = useMediaQuery(theme.breakpoints.up('md'))
    const [currentSection, setCurrentSection] = useState<number>(1)
    const handleClose = () => {
        setOpen(false)
    }

    const displayCurrentSection = () => {
        switch (currentSection) {
            case 1:
                return <DietaryLifestyle />
            case 2:
                return <Nutrients />
            case 3:
                return <MainIngredientProduct />
            default:
                return null
        }
    }

    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                classes={{ paper: styles.hmcReportModal }}
            >
                <DialogTitle className={styles.infoModalColor}>
                    <p className={styles.infoModalTitle}>
                        Health Management Consultation Report
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
                <DialogContent sx={{ padding: '0' }}>
                    <div>
                        <Stack
                            direction={{
                                xs: 'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                            }}
                            spacing={2}
                            sx={{ padding: '20px 24px' }}
                        >
                            <Button
                                variant="contained"
                                className={
                                    currentSection === 1
                                        ? styles.selectedBttn
                                        : styles.unSelectedBttn
                                }
                                onClick={() => setCurrentSection(1)}
                            >
                                Dietary & Lifestyle
                            </Button>
                            <Button
                                variant="contained"
                                className={
                                    currentSection === 2
                                        ? styles.selectedBttn
                                        : styles.unSelectedBttn
                                }
                                onClick={() => setCurrentSection(2)}
                            >
                                Nutrients
                            </Button>
                            <Button
                                variant="contained"
                                className={
                                    currentSection === 3
                                        ? styles.selectedBttn
                                        : styles.unSelectedBttn
                                }
                                onClick={() => setCurrentSection(3)}
                            >
                                Main Ingredients of Products
                            </Button>
                        </Stack>
                        <div className={styles.hmcModalTitleDiv}>
                            <p className={styles.hmcModalTitle}>
                                {currentSection === 1
                                    ? 'Dietary & Lifestyle'
                                    : currentSection === 2
                                      ? 'Nutrients'
                                      : 'Main Ingredients of Products'}
                            </p>
                        </div>
                    </div>

                    {displayCurrentSection()}
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}
export default HMCRecordModal
