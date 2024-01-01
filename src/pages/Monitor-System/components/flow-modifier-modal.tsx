import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import styles from '../_monitor-system.module.scss'
import { DialogTitle, Grid, TextField, Stack } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import DialogActions from '@mui/material/DialogActions'
import { useState } from 'react'

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

type Props = {
    open: boolean
    setOpen: any
    matches: any
    currentItem: any
}

const FlowModifierModal: React.FC<Props> = ({
    open,
    setOpen,
    matches,
    currentItem,
}: Props) => {
    const initialValues = {
        interview: '',
        briefingRoom: '',
        sonography: '',
        general_measurement: '',
        ecg: '',
        retinography: '',
        pap_smear: '',
        lung_function_test: '',
        peripheral_vascular: '',
        vision_ocular_tension_test: '',
        ent_exam1: '',
        pulmonary_function: '',
        bmd: '',
        audiometry: '',
        x_ray: '',
        mammography: '',
        ent_exam2: '',
        dining_room: '',
        physician_conclusion: '',
        health_management_consultation: '',
    }

    const [fieldData, setFieldData] = useState(initialValues)

    const handleValueChange = (e: SelectChangeEvent) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setFieldData({ ...fieldData, [e.target.name]: e.target.value })
    }
    const selectOptions = [
        {
            id: '1',
            label: 'Completed',
        },
        {
            id: '2',
            label: 'Incomplete',
        },
        {
            id: '3',
            label: 'Additional Item',
        },
        {
            id: '4',
            label: 'RT',
        },
        {
            id: '5',
            label: 'RND',
        },
        {
            id: '6',
            label: 'CNT',
        },
        {
            id: '7',
            label: 'MUL',
        },
    ]
    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                classes={{ paper: styles.flowModifierModal }}
            >
                <DialogTitle className={styles.flowModifierTitleColor}>
                    <p className={styles.flowModifierModalTitle}>
                        Flow Modifier
                    </p>
                </DialogTitle>
                <IconButton
                    onClick={() => setOpen(false)}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 15,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon className={styles.flowModifierCloseIcon} />
                </IconButton>
                <DialogContent className={styles.flowModifierDialogContent}>
                    <div style={{ marginTop: '1rem' }}>
                        <p className={styles.flowModifierModalSectionTitle}>
                            Preparation Area
                        </p>
                        <Grid
                            container
                            wrap="nowrap"
                            sx={{
                                flexDirection: { xs: 'column', md: 'row' },
                                marginTop: '2px',
                            }}
                            spacing={2}
                        >
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <div style={{ whiteSpace: 'nowrap' }}>
                                    <p
                                        className={
                                            styles.flowModifierModalSectionSubTitle
                                        }
                                    >
                                        Interview
                                    </p>
                                </div>

                                <FormControl
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    className={styles.textFieldProps}
                                >
                                    <Select
                                        className={
                                            fieldData?.interview === '2'
                                                ? styles.selectFieldCssIncomplete
                                                : styles.selectFieldCss
                                        }
                                        MenuProps={{
                                            classes: {
                                                paper: styles.selectPaperCss,
                                            },
                                        }}
                                        name="interview"
                                        value={fieldData?.interview}
                                        onChange={handleValueChange}
                                    >
                                        {selectOptions.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <MenuItem
                                                        value={item.id}
                                                        key={index}
                                                        className={
                                                            styles.selectFieldCss
                                                        }
                                                        sx={
                                                            item.id === '2'
                                                                ? {
                                                                      color: '#DE4E3A !important',
                                                                  }
                                                                : {}
                                                        }
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                )
                                            }
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <div style={{ whiteSpace: 'nowrap' }}>
                                    <p
                                        className={
                                            styles.flowModifierModalSectionSubTitle
                                        }
                                    >
                                        Briefing Room
                                    </p>
                                </div>
                                <FormControl
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    className={styles.textFieldProps}
                                >
                                    <Select
                                        className={
                                            fieldData?.briefingRoom === '2'
                                                ? styles.selectFieldCssIncomplete
                                                : styles.selectFieldCss
                                        }
                                        MenuProps={{
                                            classes: {
                                                paper: styles.selectPaperCss,
                                            },
                                        }}
                                        name="briefingRoom"
                                        value={fieldData?.briefingRoom}
                                        onChange={handleValueChange}
                                    >
                                        {selectOptions.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <MenuItem
                                                        value={item.id}
                                                        key={index}
                                                        className={
                                                            styles.selectFieldCss
                                                        }
                                                        sx={
                                                            item.id === '2'
                                                                ? {
                                                                      color: '#DE4E3A !important',
                                                                  }
                                                                : {}
                                                        }
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                )
                                            }
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}></Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}></Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}></Grid>
                        </Grid>
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <p className={styles.flowModifierModalSectionTitle}>
                            Area 1
                        </p>
                        <Grid
                            container
                            wrap="nowrap"
                            sx={{
                                flexDirection: { xs: 'column', md: 'row' },
                                marginTop: '2px',
                            }}
                            spacing={2}
                        >
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <div style={{ whiteSpace: 'nowrap' }}>
                                    <p
                                        className={
                                            styles.flowModifierModalSectionSubTitle
                                        }
                                    >
                                        Sonography
                                    </p>
                                </div>
                                <FormControl
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    className={styles.textFieldProps}
                                >
                                    <Select
                                        className={
                                            fieldData?.sonography === '2'
                                                ? styles.selectFieldCssIncomplete
                                                : styles.selectFieldCss
                                        }
                                        MenuProps={{
                                            classes: {
                                                paper: styles.selectPaperCss,
                                            },
                                        }}
                                        name="sonography"
                                        value={fieldData?.sonography}
                                        onChange={handleValueChange}
                                    >
                                        {selectOptions.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <MenuItem
                                                        value={item.id}
                                                        key={index}
                                                        className={
                                                            styles.selectFieldCss
                                                        }
                                                        sx={
                                                            item.id === '2'
                                                                ? {
                                                                      color: '#DE4E3A !important',
                                                                  }
                                                                : {}
                                                        }
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                )
                                            }
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <div style={{ whiteSpace: 'nowrap' }}>
                                    <p
                                        className={
                                            styles.flowModifierModalSectionSubTitle
                                        }
                                    >
                                        General Measurement
                                    </p>
                                </div>
                                <FormControl
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    className={styles.textFieldProps}
                                >
                                    <Select
                                        className={
                                            fieldData?.general_measurement ===
                                            '2'
                                                ? styles.selectFieldCssIncomplete
                                                : styles.selectFieldCss
                                        }
                                        MenuProps={{
                                            classes: {
                                                paper: styles.selectPaperCss,
                                            },
                                        }}
                                        name="general_measurement"
                                        value={fieldData?.general_measurement}
                                        onChange={handleValueChange}
                                    >
                                        {selectOptions.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <MenuItem
                                                        value={item.id}
                                                        key={index}
                                                        className={
                                                            styles.selectFieldCss
                                                        }
                                                        sx={
                                                            item.id === '2'
                                                                ? {
                                                                      color: '#DE4E3A !important',
                                                                  }
                                                                : {}
                                                        }
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                )
                                            }
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <div style={{ whiteSpace: 'nowrap' }}>
                                    <p
                                        className={
                                            styles.flowModifierModalSectionSubTitle
                                        }
                                    >
                                        ECG
                                    </p>
                                </div>
                                <FormControl
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    className={styles.textFieldProps}
                                >
                                    <Select
                                        className={
                                            fieldData?.ecg === '2'
                                                ? styles.selectFieldCssIncomplete
                                                : styles.selectFieldCss
                                        }
                                        MenuProps={{
                                            classes: {
                                                paper: styles.selectPaperCss,
                                            },
                                        }}
                                        name="ecg"
                                        value={fieldData?.ecg}
                                        onChange={handleValueChange}
                                    >
                                        {selectOptions.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <MenuItem
                                                        value={item.id}
                                                        key={index}
                                                        className={
                                                            styles.selectFieldCss
                                                        }
                                                        sx={
                                                            item.id === '2'
                                                                ? {
                                                                      color: '#DE4E3A !important',
                                                                  }
                                                                : {}
                                                        }
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                )
                                            }
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <div style={{ whiteSpace: 'nowrap' }}>
                                    <p
                                        className={
                                            styles.flowModifierModalSectionSubTitle
                                        }
                                    >
                                        Retinography
                                    </p>
                                </div>
                                <FormControl
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    className={styles.textFieldProps}
                                >
                                    <Select
                                        className={
                                            fieldData?.retinography === '2'
                                                ? styles.selectFieldCssIncomplete
                                                : styles.selectFieldCss
                                        }
                                        MenuProps={{
                                            classes: {
                                                paper: styles.selectPaperCss,
                                            },
                                        }}
                                        name="retinography"
                                        value={fieldData?.retinography}
                                        onChange={handleValueChange}
                                    >
                                        {selectOptions.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <MenuItem
                                                        value={item.id}
                                                        key={index}
                                                        className={
                                                            styles.selectFieldCss
                                                        }
                                                        sx={
                                                            item.id === '2'
                                                                ? {
                                                                      color: '#DE4E3A !important',
                                                                  }
                                                                : {}
                                                        }
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                )
                                            }
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <div style={{ whiteSpace: 'nowrap' }}>
                                    <p
                                        className={
                                            styles.flowModifierModalSectionSubTitle
                                        }
                                    >
                                        Pap &apos; s Smear
                                    </p>
                                </div>
                                <FormControl
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    className={styles.textFieldProps}
                                >
                                    <Select
                                        className={
                                            fieldData?.pap_smear === '2'
                                                ? styles.selectFieldCssIncomplete
                                                : styles.selectFieldCss
                                        }
                                        MenuProps={{
                                            classes: {
                                                paper: styles.selectPaperCss,
                                            },
                                        }}
                                        name="pap_smear"
                                        value={fieldData?.pap_smear}
                                        onChange={handleValueChange}
                                    >
                                        {selectOptions.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <MenuItem
                                                        value={item.id}
                                                        key={index}
                                                        className={
                                                            styles.selectFieldCss
                                                        }
                                                        sx={
                                                            item.id === '2'
                                                                ? {
                                                                      color: '#DE4E3A !important',
                                                                  }
                                                                : {}
                                                        }
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                )
                                            }
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            wrap="nowrap"
                            sx={{
                                flexDirection: { xs: 'column', md: 'row' },
                                marginTop: '2px',
                            }}
                            spacing={2}
                        >
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <div style={{ whiteSpace: 'nowrap' }}>
                                    <p
                                        className={
                                            styles.flowModifierModalSectionSubTitle
                                        }
                                    >
                                        Lung Function Test
                                    </p>
                                </div>
                                <FormControl
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    className={styles.textFieldProps}
                                >
                                    <Select
                                        className={
                                            fieldData?.lung_function_test ===
                                            '2'
                                                ? styles.selectFieldCssIncomplete
                                                : styles.selectFieldCss
                                        }
                                        MenuProps={{
                                            classes: {
                                                paper: styles.selectPaperCss,
                                            },
                                        }}
                                        name="lung_function_test"
                                        value={fieldData?.lung_function_test}
                                        onChange={handleValueChange}
                                    >
                                        {selectOptions.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <MenuItem
                                                        value={item.id}
                                                        key={index}
                                                        className={
                                                            styles.selectFieldCss
                                                        }
                                                        sx={
                                                            item.id === '2'
                                                                ? {
                                                                      color: '#DE4E3A !important',
                                                                  }
                                                                : {}
                                                        }
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                )
                                            }
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <div style={{ whiteSpace: 'nowrap' }}>
                                    <p
                                        className={
                                            styles.flowModifierModalSectionSubTitle
                                        }
                                    >
                                        Peripheral Vascular
                                    </p>
                                </div>
                                <FormControl
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    className={styles.textFieldProps}
                                >
                                    <Select
                                        className={
                                            fieldData?.peripheral_vascular ===
                                            '2'
                                                ? styles.selectFieldCssIncomplete
                                                : styles.selectFieldCss
                                        }
                                        MenuProps={{
                                            classes: {
                                                paper: styles.selectPaperCss,
                                            },
                                        }}
                                        name="peripheral_vascular"
                                        value={fieldData?.peripheral_vascular}
                                        onChange={handleValueChange}
                                    >
                                        {selectOptions.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <MenuItem
                                                        value={item.id}
                                                        key={index}
                                                        className={
                                                            styles.selectFieldCss
                                                        }
                                                        sx={
                                                            item.id === '2'
                                                                ? {
                                                                      color: '#DE4E3A !important',
                                                                  }
                                                                : {}
                                                        }
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                )
                                            }
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <div style={{ whiteSpace: 'nowrap' }}>
                                    <p
                                        className={
                                            styles.flowModifierModalSectionSubTitle
                                        }
                                    >
                                        Vision & Ocular Tension Test
                                    </p>
                                </div>

                                <FormControl
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    className={styles.textFieldProps}
                                >
                                    <Select
                                        className={
                                            fieldData?.vision_ocular_tension_test ===
                                            '2'
                                                ? styles.selectFieldCssIncomplete
                                                : styles.selectFieldCss
                                        }
                                        MenuProps={{
                                            classes: {
                                                paper: styles.selectPaperCss,
                                            },
                                        }}
                                        name="vision_ocular_tension_test"
                                        value={
                                            fieldData?.vision_ocular_tension_test
                                        }
                                        onChange={handleValueChange}
                                    >
                                        {selectOptions.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <MenuItem
                                                        value={item.id}
                                                        key={index}
                                                        className={
                                                            styles.selectFieldCss
                                                        }
                                                        sx={
                                                            item.id === '2'
                                                                ? {
                                                                      color: '#DE4E3A !important',
                                                                  }
                                                                : {}
                                                        }
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                )
                                            }
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}></Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}></Grid>
                        </Grid>
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <p className={styles.flowModifierModalSectionTitle}>
                            Area 2
                        </p>
                        <Grid
                            container
                            wrap="nowrap"
                            sx={{
                                flexDirection: { xs: 'column', md: 'row' },
                                marginTop: '2px',
                            }}
                            spacing={2}
                        >
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <div style={{ whiteSpace: 'nowrap' }}>
                                    <p
                                        className={
                                            styles.flowModifierModalSectionSubTitle
                                        }
                                    >
                                        ENT Examination
                                    </p>
                                </div>
                                <FormControl
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    className={styles.textFieldProps}
                                >
                                    <Select
                                        className={
                                            fieldData?.ent_exam1 === '2'
                                                ? styles.selectFieldCssIncomplete
                                                : styles.selectFieldCss
                                        }
                                        MenuProps={{
                                            classes: {
                                                paper: styles.selectPaperCss,
                                            },
                                        }}
                                        name="ent_exam1"
                                        value={fieldData?.ent_exam1}
                                        onChange={handleValueChange}
                                    >
                                        {selectOptions.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <MenuItem
                                                        value={item.id}
                                                        key={index}
                                                        className={
                                                            styles.selectFieldCss
                                                        }
                                                        sx={
                                                            item.id === '2'
                                                                ? {
                                                                      color: '#DE4E3A !important',
                                                                  }
                                                                : {}
                                                        }
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                )
                                            }
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <div style={{ whiteSpace: 'nowrap' }}>
                                    <p
                                        className={
                                            styles.flowModifierModalSectionSubTitle
                                        }
                                    >
                                        Pulmonary Function
                                    </p>
                                </div>
                                <FormControl
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    className={styles.textFieldProps}
                                >
                                    <Select
                                        className={
                                            fieldData?.pulmonary_function ===
                                            '2'
                                                ? styles.selectFieldCssIncomplete
                                                : styles.selectFieldCss
                                        }
                                        MenuProps={{
                                            classes: {
                                                paper: styles.selectPaperCss,
                                            },
                                        }}
                                        name="pulmonary_function"
                                        value={fieldData?.pulmonary_function}
                                        onChange={handleValueChange}
                                    >
                                        {selectOptions.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <MenuItem
                                                        value={item.id}
                                                        key={index}
                                                        className={
                                                            styles.selectFieldCss
                                                        }
                                                        sx={
                                                            item.id === '2'
                                                                ? {
                                                                      color: '#DE4E3A !important',
                                                                  }
                                                                : {}
                                                        }
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                )
                                            }
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <div style={{ whiteSpace: 'nowrap' }}>
                                    <p
                                        className={
                                            styles.flowModifierModalSectionSubTitle
                                        }
                                    >
                                        BMD
                                    </p>
                                </div>
                                <FormControl
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    className={styles.textFieldProps}
                                >
                                    <Select
                                        className={
                                            fieldData?.bmd === '2'
                                                ? styles.selectFieldCssIncomplete
                                                : styles.selectFieldCss
                                        }
                                        MenuProps={{
                                            classes: {
                                                paper: styles.selectPaperCss,
                                            },
                                        }}
                                        name="bmd"
                                        value={fieldData?.bmd}
                                        onChange={handleValueChange}
                                    >
                                        {selectOptions.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <MenuItem
                                                        value={item.id}
                                                        key={index}
                                                        className={
                                                            styles.selectFieldCss
                                                        }
                                                        sx={
                                                            item.id === '2'
                                                                ? {
                                                                      color: '#DE4E3A !important',
                                                                  }
                                                                : {}
                                                        }
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                )
                                            }
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <div style={{ whiteSpace: 'nowrap' }}>
                                    <p
                                        className={
                                            styles.flowModifierModalSectionSubTitle
                                        }
                                    >
                                        Audiometry
                                    </p>
                                </div>
                                <FormControl
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    className={styles.textFieldProps}
                                >
                                    <Select
                                        className={
                                            fieldData?.audiometry === '2'
                                                ? styles.selectFieldCssIncomplete
                                                : styles.selectFieldCss
                                        }
                                        MenuProps={{
                                            classes: {
                                                paper: styles.selectPaperCss,
                                            },
                                        }}
                                        name="audiometry"
                                        value={fieldData?.audiometry}
                                        onChange={handleValueChange}
                                    >
                                        {selectOptions.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <MenuItem
                                                        value={item.id}
                                                        key={index}
                                                        className={
                                                            styles.selectFieldCss
                                                        }
                                                        sx={
                                                            item.id === '2'
                                                                ? {
                                                                      color: '#DE4E3A !important',
                                                                  }
                                                                : {}
                                                        }
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                )
                                            }
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <div style={{ whiteSpace: 'nowrap' }}>
                                    <p
                                        className={
                                            styles.flowModifierModalSectionSubTitle
                                        }
                                    >
                                        X-Ray
                                    </p>
                                </div>
                                <FormControl
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    className={styles.textFieldProps}
                                >
                                    <Select
                                        className={
                                            fieldData?.x_ray === '2'
                                                ? styles.selectFieldCssIncomplete
                                                : styles.selectFieldCss
                                        }
                                        MenuProps={{
                                            classes: {
                                                paper: styles.selectPaperCss,
                                            },
                                        }}
                                        name="x_ray"
                                        value={fieldData?.x_ray}
                                        onChange={handleValueChange}
                                    >
                                        {selectOptions.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <MenuItem
                                                        value={item.id}
                                                        key={index}
                                                        className={
                                                            styles.selectFieldCss
                                                        }
                                                        sx={
                                                            item.id === '2'
                                                                ? {
                                                                      color: '#DE4E3A !important',
                                                                  }
                                                                : {}
                                                        }
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                )
                                            }
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            wrap="nowrap"
                            sx={{
                                flexDirection: { xs: 'column', md: 'row' },
                                marginTop: '2px',
                            }}
                            spacing={2}
                        >
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <div style={{ whiteSpace: 'nowrap' }}>
                                    <p
                                        className={
                                            styles.flowModifierModalSectionSubTitle
                                        }
                                    >
                                        Mammography
                                    </p>
                                </div>
                                <FormControl
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    className={styles.textFieldProps}
                                >
                                    <Select
                                        className={
                                            fieldData?.mammography === '2'
                                                ? styles.selectFieldCssIncomplete
                                                : styles.selectFieldCss
                                        }
                                        MenuProps={{
                                            classes: {
                                                paper: styles.selectPaperCss,
                                            },
                                        }}
                                        name="mammography"
                                        value={fieldData?.mammography}
                                        onChange={handleValueChange}
                                    >
                                        {selectOptions.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <MenuItem
                                                        value={item.id}
                                                        key={index}
                                                        className={
                                                            styles.selectFieldCss
                                                        }
                                                        sx={
                                                            item.id === '2'
                                                                ? {
                                                                      color: '#DE4E3A !important',
                                                                  }
                                                                : {}
                                                        }
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                )
                                            }
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <div style={{ whiteSpace: 'nowrap' }}>
                                    <p
                                        className={
                                            styles.flowModifierModalSectionSubTitle
                                        }
                                    >
                                        ENT Examination
                                    </p>
                                </div>
                                <FormControl
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    className={styles.textFieldProps}
                                >
                                    <Select
                                        className={
                                            fieldData?.ent_exam2 === '2'
                                                ? styles.selectFieldCssIncomplete
                                                : styles.selectFieldCss
                                        }
                                        MenuProps={{
                                            classes: {
                                                paper: styles.selectPaperCss,
                                            },
                                        }}
                                        name="ent_exam2"
                                        value={fieldData?.ent_exam2}
                                        onChange={handleValueChange}
                                    >
                                        {selectOptions.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <MenuItem
                                                        value={item.id}
                                                        key={index}
                                                        className={
                                                            styles.selectFieldCss
                                                        }
                                                        sx={
                                                            item.id === '2'
                                                                ? {
                                                                      color: '#DE4E3A !important',
                                                                  }
                                                                : {}
                                                        }
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                )
                                            }
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}></Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}></Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}></Grid>
                        </Grid>
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <Grid
                            container
                            wrap="nowrap"
                            sx={{
                                flexDirection: { xs: 'column', md: 'row' },
                                marginTop: '2px',
                            }}
                            spacing={2}
                        >
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <div style={{ paddingBottom: '16px' }}>
                                    <p
                                        className={
                                            styles.flowModifierModalSectionTitle
                                        }
                                    >
                                        Dining
                                    </p>
                                </div>
                                <div style={{ whiteSpace: 'nowrap' }}>
                                    <p
                                        className={
                                            styles.flowModifierModalSectionSubTitle
                                        }
                                    >
                                        Dining Room
                                    </p>
                                </div>
                                <FormControl
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    className={styles.textFieldProps}
                                >
                                    <Select
                                        className={
                                            fieldData?.dining_room === '2'
                                                ? styles.selectFieldCssIncomplete
                                                : styles.selectFieldCss
                                        }
                                        MenuProps={{
                                            classes: {
                                                paper: styles.selectPaperCss,
                                            },
                                        }}
                                        name="dining_room"
                                        value={fieldData?.dining_room}
                                        onChange={handleValueChange}
                                    >
                                        {selectOptions.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <MenuItem
                                                        value={item.id}
                                                        key={index}
                                                        className={
                                                            styles.selectFieldCss
                                                        }
                                                        sx={
                                                            item.id === '2'
                                                                ? {
                                                                      color: '#DE4E3A !important',
                                                                  }
                                                                : {}
                                                        }
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                )
                                            }
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <div style={{ paddingBottom: '16px' }}>
                                    <p
                                        className={
                                            styles.flowModifierModalSectionTitle
                                        }
                                    >
                                        Physician Conclusion
                                    </p>
                                </div>
                                <div style={{ whiteSpace: 'nowrap' }}>
                                    <p
                                        className={
                                            styles.flowModifierModalSectionSubTitle
                                        }
                                    >
                                        Physician Conclusion
                                    </p>
                                </div>
                                <FormControl
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    className={styles.textFieldProps}
                                >
                                    <Select
                                        className={
                                            fieldData?.physician_conclusion ===
                                            '2'
                                                ? styles.selectFieldCssIncomplete
                                                : styles.selectFieldCss
                                        }
                                        MenuProps={{
                                            classes: {
                                                paper: styles.selectPaperCss,
                                            },
                                        }}
                                        name="physician_conclusion"
                                        value={fieldData?.physician_conclusion}
                                        onChange={handleValueChange}
                                    >
                                        {selectOptions.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <MenuItem
                                                        value={item.id}
                                                        key={index}
                                                        className={
                                                            styles.selectFieldCss
                                                        }
                                                        sx={
                                                            item.id === '2'
                                                                ? {
                                                                      color: '#DE4E3A !important',
                                                                  }
                                                                : {}
                                                        }
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                )
                                            }
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}>
                                <div style={{ paddingBottom: '16px' }}>
                                    <p
                                        className={
                                            styles.flowModifierModalSectionTitle
                                        }
                                    >
                                        Life Style Consultation
                                    </p>
                                </div>
                                <div style={{ whiteSpace: 'nowrap' }}>
                                    <p
                                        className={
                                            styles.flowModifierModalSectionSubTitle
                                        }
                                    >
                                        Health Management Consultation
                                    </p>
                                </div>
                                <FormControl
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    className={styles.textFieldProps}
                                >
                                    <Select
                                        className={
                                            fieldData?.health_management_consultation ===
                                            '2'
                                                ? styles.selectFieldCssIncomplete
                                                : styles.selectFieldCss
                                        }
                                        MenuProps={{
                                            classes: {
                                                paper: styles.selectPaperCss,
                                            },
                                        }}
                                        name="health_management_consultation"
                                        value={
                                            fieldData?.health_management_consultation
                                        }
                                        onChange={handleValueChange}
                                    >
                                        {selectOptions.map(
                                            (item: any, index: number) => {
                                                return (
                                                    <MenuItem
                                                        value={item.id}
                                                        key={index}
                                                        className={
                                                            styles.selectFieldCss
                                                        }
                                                        sx={
                                                            item.id === '2'
                                                                ? {
                                                                      color: '#DE4E3A !important',
                                                                  }
                                                                : {}
                                                        }
                                                    >
                                                        {item.label}
                                                    </MenuItem>
                                                )
                                            }
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={3}></Grid>
                        </Grid>
                    </div>
                </DialogContent>
                <DialogActions className={styles.flowModifierDialogActions}>
                    <Grid container sx={{ padding: '5px 40px' }}>
                        <Grid item md={2} sx={{ margin: 'auto' }}>
                            <Stack direction="row" spacing={2}>
                                <p
                                    className={
                                        styles.flowModifierDialogActionsTitle
                                    }
                                >
                                    Seq No:
                                </p>
                                <p
                                    className={
                                        styles.flowModifierDialogActionsValue
                                    }
                                >
                                    {currentItem.seqNo}
                                </p>
                            </Stack>
                        </Grid>
                        <Grid item md={6} sx={{ margin: 'auto' }}>
                            <Stack direction="row" spacing={2}>
                                <p
                                    className={
                                        styles.flowModifierDialogActionsTitle
                                    }
                                >
                                    Name:{' '}
                                </p>
                                <p
                                    className={
                                        styles.flowModifierDialogActionsValue
                                    }
                                >
                                    {currentItem.name}
                                </p>
                            </Stack>
                        </Grid>
                        <Grid item md={2}></Grid>
                        <Grid item md={2} sx={{ margin: 'auto' }}>
                            <Button
                                variant="contained"
                                fullWidth
                                className={styles.flowModifierModalSaveBttn}
                                onClick={() => setOpen(false)}
                            >
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}

export default FlowModifierModal
