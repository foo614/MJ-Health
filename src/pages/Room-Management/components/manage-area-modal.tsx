import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import styles from '../_room-management.module.scss'
import {
    Grid,
    TextField,
    Button,
    DialogTitle,
    Divider,
    Stack,
    Checkbox,
} from '@mui/material'
import { DialogActions } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import CircleIcon from '@mui/icons-material/Circle'
import RemoveModal from './remove-modal'
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
    matches: boolean
}

const ManageAreaModal: React.FC<Props> = ({
    setOpen,
    open,
    matches,
}: Props) => {
    const [editItem, setEditItem] = React.useState<number>(0)
    const [addNewArea, setAddNewArea] = React.useState<boolean>(false)
    const [removeArea, setRemoveArea] = React.useState<boolean>(false)
    const [openRemoveAreaModal, setOpenRemoveAreaModal] =
        React.useState<boolean>(false)

    const area = [
        {
            id: 1,
            label: 'Front Area',
            active: true,
        },
        {
            id: 2,
            label: 'Area 1',
            active: true,
        },
        {
            id: 3,
            label: 'Area 2',
            active: true,
        },
        {
            id: 4,
            label: 'Dining Area',
            active: true,
        },
        {
            id: 5,
            label: 'Physician Consultation',
            active: true,
        },

        {
            id: 6,
            label: 'Life Style Consultiong',
            active: true,
        },
        {
            id: 7,
            label: 'Sample',
            active: false,
        },
    ]

    const editTextComponent = () => {
        return (
            <div className={styles.manage_area_edit_area_div}>
                <TextField
                    InputProps={{
                        classes: {
                            input: styles.inputField,
                        },
                    }}
                    fullWidth
                    variant="standard"
                    margin="dense"
                    size="medium"
                    autoFocus
                />
            </div>
        )
    }

    const defaultTextComponent = (id: number) => {
        return (
            <>
                <TextField
                    InputProps={{
                        classes: {
                            input: styles.input_field_manage_area_edit,
                            adornedEnd: styles.adornedEnd,
                        },
                        endAdornment: (
                            <div
                                className={styles.manage_area_edit_textfield}
                                onClick={() => {
                                    setEditItem(id), setAddNewArea(false)
                                }}
                            >
                                <p className={styles.manage_area_edit_text}>
                                    Edit
                                </p>
                            </div>
                        ),
                    }}
                    fullWidth
                    variant="outlined"
                    margin="dense"
                    size="medium"
                    className={styles.textFieldProps}
                    sx={{
                        borderRadius: '10px !important',
                    }}
                    disabled={editItem === 0 ? true : false}
                />
            </>
        )
    }

    const removeTextComponent = (id: number) => {
        return (
            <>
                <Stack direction="row" alignItems="center">
                    <Checkbox />
                    <TextField
                        InputProps={{
                            classes: {
                                input: styles.input_field_manage_area_edit,
                                adornedEnd: styles.adornedEnd,
                            },
                            endAdornment: (
                                <div
                                    className={
                                        styles.manage_area_edit_textfield_remove_state
                                    }
                                    onClick={() => {
                                        setEditItem(id),
                                            setAddNewArea(false),
                                            setRemoveArea(false)
                                    }}
                                >
                                    <p
                                        className={
                                            styles.manage_area_edit_text_remove_state
                                        }
                                    >
                                        Edit
                                    </p>
                                </div>
                            ),
                        }}
                        fullWidth
                        variant="outlined"
                        margin="dense"
                        size="medium"
                        className={styles.textFieldProps}
                        sx={{
                            borderRadius: '10px !important',
                        }}
                        disabled={editItem === 0 ? true : false}
                    />
                </Stack>
            </>
        )
    }

    const resetAllState = () => {
        setAddNewArea(false)
        setEditItem(0)
        setRemoveArea(false)
    }
    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                classes={{ paper: styles.manage_room_modal }}
            >
                <DialogTitle></DialogTitle>
                <IconButton
                    onClick={() => setOpen(!open)}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 15,
                        color: (theme) => theme?.palette?.grey[500],
                    }}
                >
                    <CloseIcon className={styles.closeIcon} />
                </IconButton>
                <DialogContent>
                    <p className={styles.manage_room_area_title}>Manage Area</p>
                    <div
                        className={styles.modal_divider}
                        // className={
                        //     matches
                        //         ? styles.remove_room_modal_divider
                        //         : styles.remove_room_modal_divider_mobile
                        // }
                    />
                    <div>
                        <div>
                            <Button
                                variant="text"
                                endIcon={
                                    <CircleIcon
                                        className={styles.active_icon}
                                    />
                                }
                                className={styles.manage_area_status}
                            >
                                Current Active
                            </Button>
                        </div>
                        <div
                            style={{
                                paddingLeft: '25px',
                                paddingRight: '25px',
                            }}
                        >
                            <Grid container spacing={3}>
                                {area.map((item: any, index) => {
                                    if (item.active) {
                                        return (
                                            <Grid item md={4} sm={6} xs={12} key={index}>
                                                {removeArea
                                                    ? removeTextComponent(
                                                          item.id
                                                      )
                                                    : editItem === item.id
                                                      ? editTextComponent()
                                                      : defaultTextComponent(
                                                            item.id
                                                        )}
                                            </Grid>
                                        )
                                    }
                                })}
                            </Grid>
                        </div>
                    </div>
                    <Divider
                        sx={{
                            marginTop: '2rem',
                            height: '2px',
                            backgroundColor: '#EDEDED',
                            marginBottom: '1rem',
                        }}
                    />
                    <div>
                        <div>
                            <Button
                                variant="text"
                                endIcon={
                                    <CircleIcon
                                        className={styles.inactive_icon}
                                    />
                                }
                                // disabled={true}
                                className={styles.manage_area_status}
                            >
                                Off
                            </Button>
                        </div>
                        <div
                            style={{
                                paddingLeft: '25px',
                                paddingRight: '25px',
                            }}
                        >
                            <Grid container spacing={3} alignItems="center">
                                {area.map((item: any, index) => {
                                    if (!item.active) {
                                        return (
                                            <Grid item md={4} sm={6} xs={12} key={index}>
                                                {removeArea
                                                    ? removeTextComponent(
                                                          item.id
                                                      )
                                                    : editItem === item.id
                                                      ? editTextComponent()
                                                      : defaultTextComponent(
                                                            item.id
                                                        )}
                                            </Grid>
                                        )
                                    }
                                })}
                                <Grid item md={4} sm={6} xs={12}>
                                    <div
                                        className={
                                            styles.manage_area_add_new_area_div
                                        }
                                        onClick={() => {
                                            setEditItem(0), setAddNewArea(true)
                                        }}
                                        style={{
                                            pointerEvents: removeArea
                                                ? 'none'
                                                : 'unset',
                                            opacity: removeArea
                                                ? '0.5'
                                                : 'unset',
                                        }}
                                    >
                                        {addNewArea ? (
                                            <TextField
                                                InputProps={{
                                                    classes: {
                                                        input: styles.inputField,
                                                    },
                                                }}
                                                fullWidth
                                                variant="standard"
                                                margin="dense"
                                                size="medium"
                                                autoFocus
                                            />
                                        ) : (
                                            <p
                                                className={
                                                    styles.manage_area_add_new_area_text
                                                }
                                            >
                                                Add New Area
                                            </p>
                                        )}
                                    </div>
                                </Grid>
                            </Grid>
                            <Stack
                                direction="row"
                                justifyContent="center"
                                spacing={2}
                                sx={{ marginTop: '20px' }}
                            >
                                {editItem === 0 &&
                                !addNewArea &&
                                !removeArea ? (
                                    <>
                                        <Button
                                            variant="contained"
                                            className={
                                                styles.manage_area_remove_bttn
                                            }
                                            onClick={() => setRemoveArea(true)}
                                        >
                                            Remove
                                        </Button>
                                        <Button
                                            variant="contained"
                                            className={
                                                styles.manage_area_save_disabled_bttn
                                            }
                                        >
                                            Save
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Button
                                            variant="contained"
                                            className={
                                                removeArea
                                                    ? styles.add_new_room_modal_cancel_bttn_remove_state
                                                    : styles.add_new_room_modal_cancel_bttn
                                            }
                                            onClick={() => {
                                                setEditItem(0),
                                                    setAddNewArea(false),
                                                    setRemoveArea(false)
                                            }}
                                        >
                                            Cancel
                                        </Button>
                                        {removeArea ? (
                                            <Button
                                                variant="contained"
                                                className={
                                                    styles.manage_area_remove_bttn
                                                }
                                                onClick={() =>
                                                    setOpenRemoveAreaModal(true)
                                                }
                                            >
                                                Remove
                                            </Button>
                                        ) : (
                                            <Button
                                                variant="contained"
                                                className={
                                                    styles.add_new_room_modal_add_bttn
                                                }
                                                onClick={() => {
                                                    setEditItem(0),
                                                        setAddNewArea(false)
                                                }}
                                            >
                                                Save
                                            </Button>
                                        )}
                                    </>
                                )}
                            </Stack>
                        </div>
                    </div>
                    {openRemoveAreaModal ? (
                        <RemoveModal
                            open={openRemoveAreaModal}
                            setOpen={setOpenRemoveAreaModal}
                            matches={matches}
                            title="Delete Area?"
                            subtitle="This action will result removing all existing room in the area. "
                            resetAllState={resetAllState}
                        />
                    ) : null}
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}
export default ManageAreaModal
