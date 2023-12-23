import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import styles from './_hematology.module.scss'
import { Grid } from '@mui/material'
import HematologyStatusComponent from './components/hematology-status-component'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useState } from 'react'
import HematologyStatusModal from './components/hematology-status-modal'
import HematologyData from './components/hematology-data'
import StaffEditModal from '../staffEditModal'
const Hematology = () => {
    const [openStatusModal, setOpenStatusModal] = useState(false)
    const [currentSelectedItem, setCurrentSelectedItem] = useState('')
    const [editMode, setEditMode] = useState(true)
    const [staffOpenModal, setStaffOpenModal] = useState(false)

    const fakeData = [
        {
            id: 1,
            name: 'MYJB-001',
            status: 2,
            blood_taken: 1,
            blood_taken_text: 'Not Taken',
            puntured_site: 'RH',
            result: 'Failed',
        },
        {
            id: 2,
            name: 'MYJB-001',
            status: 2,
            blood_taken: 2,
            blood_taken_text: 'Not Taken',
            puntured_site: 'LH',
            result: 'Failed',
        },
        {
            id: 3,
            name: 'MYJB-002',
            status: 1,
            blood_taken: 2,
            blood_taken_text: 'Not Taken',
            puntured_site: 'RT',
            result: 'Success',
        },
        {
            id: 4,
            name: '-',
            status: 0,
            blood_taken: 2,
            blood_taken_text: 'Not Taken',
            puntured_site: 'RT',
        },
    ]

    const handleOpenStatusModal = (item: any) => {
        console.log(item)
        setCurrentSelectedItem(item)
        setOpenStatusModal(true)
    }
    return (
        <>
            <Card className={styles.card}>
                <CardHeader
                    title="Attempt:"
                    className={styles.cardHeader}
                    classes={{
                        title: styles.cardHeaderTitle,
                        content: styles.cardHeaderContent,
                    }}
                />
                <div className={styles.divBorder}>
                    <CardContent
                        className={
                            styles.cardHeaderContent +
                            ' ' +
                            styles.paddingBottom0
                        }
                    >
                        <Grid container>
                            <Grid item md={5}>
                                <Grid container>
                                    <Grid
                                        item
                                        md={4}
                                        xs={4}
                                        style={{
                                            margin: 'auto',
                                        }}
                                    >
                                        <p
                                            className={
                                                styles.hematologyResultTitle
                                            }
                                        >
                                            Fasting:
                                        </p>
                                    </Grid>
                                    <Grid item md={4} xs={4}>
                                        <HematologyStatusComponent
                                            status={1}
                                            text="Yes"
                                        />
                                    </Grid>
                                    <Grid item md={4} xs={4}>
                                        <HematologyStatusComponent
                                            status={2}
                                            text="No"
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid
                                        item
                                        md={4}
                                        xs={4}
                                        style={{
                                            margin: 'auto',
                                        }}
                                    >
                                        <p
                                            className={
                                                styles.hematologyResultTitle
                                            }
                                        >
                                            Urine Test:
                                        </p>
                                    </Grid>
                                    <Grid item md={4} xs={4}>
                                        <HematologyStatusComponent
                                            status={1}
                                            text="Not Taken"
                                        />
                                    </Grid>
                                    <Grid item md={4} xs={4}>
                                        <HematologyStatusComponent
                                            status={2}
                                            text="Taken"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={5}>
                                <Grid container>
                                    <Grid
                                        item
                                        md={4}
                                        xs={4}
                                        style={{
                                            margin: 'auto',
                                        }}
                                    >
                                        <p
                                            className={
                                                styles.hematologyResultTitle
                                            }
                                        >
                                            HIV Test:
                                        </p>
                                    </Grid>
                                    <Grid item md={4} xs={4}>
                                        <HematologyStatusComponent
                                            status={1}
                                            text="Agree"
                                        />
                                    </Grid>
                                    <Grid item md={4} xs={4}>
                                        <HematologyStatusComponent
                                            status={2}
                                            text="Disagree"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={2}></Grid>
                        </Grid>
                    </CardContent>
                </div>

                <div
                    style={{ backgroundColor: '#F9F9F9' }}
                    className={styles.divBorder}
                >
                    <CardContent
                        className={
                            styles.cardHeaderContent +
                            ' ' +
                            styles.paddingBottom0
                        }
                    >
                        <Grid container>
                            <Grid item md={5} xs={12}>
                                <Grid container>
                                    <Grid
                                        item
                                        md={4}
                                        xs={4}
                                        style={{
                                            margin: 'auto',
                                        }}
                                    >
                                        <p
                                            className={
                                                styles.hematologyResultTitle
                                            }
                                        >
                                            Blood:
                                        </p>
                                    </Grid>
                                    <Grid item md={4} xs={4}>
                                        <HematologyStatusComponent
                                            status={1}
                                            text="Not Taken"
                                        />
                                    </Grid>
                                    <Grid item md={4} xs={4}>
                                        <HematologyStatusComponent
                                            status={2}
                                            text="Taken"
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid
                                        item
                                        md={4}
                                        xs={4}
                                        style={{
                                            margin: 'auto',
                                        }}
                                    >
                                        <p
                                            className={
                                                styles.hematologyResultTitle
                                            }
                                        >
                                            Venipucture Site:
                                        </p>
                                    </Grid>
                                    <Grid item md={4} xs={4}>
                                        <HematologyStatusComponent
                                            status={1}
                                            text="RT"
                                        />
                                    </Grid>
                                    <Grid item md={4} xs={4}>
                                        <HematologyStatusComponent
                                            status={2}
                                            text="LT"
                                        />
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item md={4} xs={4}></Grid>
                                    <Grid item md={4} xs={4}>
                                        <HematologyStatusComponent
                                            status={1}
                                            text="RH"
                                        />
                                    </Grid>
                                    <Grid item md={4} xs={4}>
                                        <HematologyStatusComponent
                                            status={2}
                                            text="LH"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={5} xs={12}>
                                <Grid container>
                                    <Grid
                                        item
                                        md={4}
                                        xs={4}
                                        style={{
                                            margin: 'auto',
                                        }}
                                    >
                                        <p
                                            className={
                                                styles.hematologyResultTitle
                                            }
                                        >
                                            Facilitated By:
                                        </p>
                                    </Grid>
                                    <Grid item md={4} xs={4}>
                                        <Button
                                            disabled
                                            style={{ color: 'transparent' }}
                                        >
                                            -
                                        </Button>
                                    </Grid>
                                    <Grid item md={4} xs={4}></Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item md={8} xs={12}>
                                        <div style={{ marginTop: '10px' }}>
                                            <TextField
                                                size="small"
                                                fullWidth
                                                placeholder="Staff ID..."
                                            />
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item md={2} xs={12}>
                                <div style={{ padding: '10px' }}>
                                    <Button
                                        variant="contained"
                                        className={styles.hematologySuccessBttn}
                                        size="small"
                                        fullWidth
                                    >
                                        Successful
                                    </Button>
                                </div>
                                <div style={{ padding: '10px' }}>
                                    <Button
                                        variant="contained"
                                        className={styles.hematologyFailedBttn}
                                        size="small"
                                        fullWidth
                                    >
                                        Failed
                                    </Button>
                                </div>
                            </Grid>
                        </Grid>
                    </CardContent>
                </div>
                <div className={styles.divBorder}>
                    <CardContent className={styles.cardHeaderContent}>
                        <Grid container spacing={2}>
                            {fakeData?.map((item: any, index: number) => {
                                return (
                                    <Grid item md={3} key={index}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                cursor: 'pointer',
                                            }}
                                            onClick={
                                                item?.status === 0
                                                    ? undefined
                                                    : () =>
                                                          handleOpenStatusModal(
                                                              item
                                                          )
                                            }
                                        >
                                            <div>
                                                <TextField
                                                    sx={{
                                                        '& .MuiInputBase-input.Mui-disabled':
                                                            {
                                                                WebkitTextFillColor:
                                                                    '#211d4e',
                                                                cursor: 'pointer',
                                                            },
                                                    }}
                                                    value={item.name}
                                                    variant="standard"
                                                    size="small"
                                                    disabled
                                                    InputProps={{
                                                        disableUnderline: true,
                                                        className:
                                                            styles.branchTextField,
                                                    }}
                                                />
                                            </div>
                                            <div
                                                className={
                                                    item.status === 0
                                                        ? styles.branchTextFieldColorDivPending
                                                        : item.status === 1
                                                          ? styles.branchTextFieldColorDivSuccess
                                                          : styles.branchTextFieldColorDivFail
                                                }
                                            >
                                                <p
                                                    style={{
                                                        color: 'transparent',
                                                    }}
                                                >
                                                    -
                                                </p>
                                            </div>
                                        </div>
                                    </Grid>
                                )
                            })}
                        </Grid>
                        {openStatusModal ? (
                            <HematologyStatusModal
                                open={openStatusModal}
                                setOpen={setOpenStatusModal}
                                fakeData={currentSelectedItem}
                            />
                        ) : null}
                    </CardContent>
                </div>
                <div className={styles.divBorder}>
                    <div className={styles.hematologyDataOutsideDiv}>
                        <HematologyData editMode={editMode} />
                        <div
                            style={{
                                marginLeft: '1rem',
                                marginRight: '1rem',
                                padding: '14px',
                                marginTop: '1rem',
                            }}
                        >
                            <Grid container spacing={8}>
                                <Grid item md={6}>
                                    <Grid container spacing={1}>
                                        <Grid item md={6}>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                fullWidth
                                                className={
                                                    styles.nextForwardBttn
                                                }
                                            >
                                                Next
                                            </Button>
                                        </Grid>
                                        <Grid item md={6}>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                fullWidth
                                                className={
                                                    styles.nextForwardBttn
                                                }
                                            >
                                                Forward
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item md={6}>
                                    <Grid container spacing={1}>
                                        <Grid item md={6}>
                                            {editMode ? (
                                                <Button
                                                    size="small"
                                                    variant="contained"
                                                    fullWidth
                                                    className={styles.saveBttn}
                                                >
                                                    Save
                                                </Button>
                                            ) : (
                                                <Button
                                                    size="small"
                                                    variant="contained"
                                                    fullWidth
                                                    className={styles.editBttn}
                                                    onClick={() =>
                                                        setStaffOpenModal(true)
                                                    }
                                                >
                                                    Edit
                                                </Button>
                                            )}
                                        </Grid>
                                        <Grid item md={6}>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                fullWidth
                                                className={styles.confirmBttn}
                                                classes={{
                                                    disabled:
                                                        styles.confirmBttnDisabled,
                                                }}
                                                disabled={
                                                    editMode ? false : true
                                                }
                                                onClick={() =>
                                                    setEditMode(false)
                                                }
                                            >
                                                Confirm
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
                {staffOpenModal ? (
                    <StaffEditModal
                        open={staffOpenModal}
                        setOpen={setStaffOpenModal}
                        setEditMode={setEditMode}
                    />
                ) : null}
            </Card>
        </>
    )
}

export default Hematology
