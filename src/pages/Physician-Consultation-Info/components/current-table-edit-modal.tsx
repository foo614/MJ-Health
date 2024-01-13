import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import styles from '../_physician-consultation-info.module.scss'

import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Stack from '@mui/material/Stack'

import { FormControl, Select, MenuItem, TextField, Grid } from '@mui/material'
import CommentSection from './comment-section'
import SuggestionSection from './suggestion-section'
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

const CurrentTableEditModal: React.FC<Props> = ({ setOpen, open }: Props) => {
    const [selectedOption, setSelectedOption] = React.useState<number>(1)

    const displaySection = () => {
        switch (selectedOption) {
            case 1:
                return <CommentSection setOpen={setOpen} />
            case 2:
                return <SuggestionSection setOpen={setOpen} />
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
                classes={{ paper: styles.currentTableEditModal }}
            >
                <DialogContent
                    className={styles.currentTableEditModalDialogContent}
                >
                    <TextField
                        variant="outlined"
                        margin="dense"
                        size="small"
                        fullWidth
                        InputProps={{
                            className: styles.callHistorySelect,
                            classes: {
                                input: styles.inputField,
                            },
                        }}
                        placeholder="Search ..."
                    />
                    <Stack
                        direction={{
                            xs: 'column',
                            sm: 'column',
                            md: 'column',
                            lg: 'row',
                            xl: 'row',
                        }}
                        spacing={2}
                        sx={{
                            marginTop: '15px',
                            paddingLeft: '20px',
                            paddingRight: '20px',
                            marginBottom: '15px',
                        }}
                    >
                        <Button
                            variant="contained"
                            className={
                                selectedOption === 1
                                    ? styles.selectedBttn
                                    : styles.unSelectedBttn
                            }
                            onClick={() => setSelectedOption(1)}
                        >
                            Comment
                        </Button>
                        <Button
                            variant="contained"
                            className={
                                selectedOption === 2
                                    ? styles.selectedBttn
                                    : styles.unSelectedBttn
                            }
                            onClick={() => setSelectedOption(2)}
                        >
                            Suggestion
                        </Button>
                    </Stack>
                    {displaySection()}
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}
export default CurrentTableEditModal
