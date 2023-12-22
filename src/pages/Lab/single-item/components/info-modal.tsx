import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
import styles from '../../_lab.module.scss'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import { Grid } from '@mui/material'
import { useState } from 'react'
type InfoModalProps = {
    open: boolean
    setOpen: any
    fakeData: any
}

const InfoModal: React.FC<InfoModalProps> = ({
    open,
    setOpen,
    fakeData,
}: InfoModalProps) => {
    const testFakeData = [
        {
            seqNo: '001',
            name: 'Jeffery Mohamad Bin Christofa',
            age: 54,
            gender: 'Male',
            package: 'K1',
            confirm: 'Y',
            current: '3.36',
            currentStatus: 'Positive',
            previous: '-',
            previousStatus: 'Negative',
        },
        {
            seqNo: '002',
            name: 'Wong Sin Yi',
            age: 64,
            gender: 'Female',
            package: 'K2',
            confirm: 'Y',
            current: '3.1',
            currentStatus: 'Negative',
            previous: '-',
            previousStatus: 'Negative',
        },
        {
            seqNo: '003',
            name: 'Liu Yan',
            age: 24,
            gender: 'Male',
            package: 'K3',
            confirm: 'Y',
            current: '3.12',
            currentStatus: 'Positive',
            previous: '-',
            previousStatus: 'Negative',
        },
        {
            seqNo: '004',
            name: 'Lok Wing Ching',
            age: 77,
            gender: 'Female',
            package: 'K3',
            confirm: 'Y',
            current: '3.13',
            currentStatus: 'Negative',
            previous: '-',
            previousStatus: 'Negative',
        },
        {
            seqNo: '005',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K2',
            confirm: 'Y',
            current: '3.14',
            currentStatus: 'Positive',
            previous: '-',
            previousStatus: 'Negative',
        },
        {
            seqNo: '006',
            name: 'Noraini Binti Hassan',
            age: 37,
            gender: 'Female',
            package: 'K2',
            confirm: 'Y',
            current: '3.15',
            currentStatus: 'Negative',
            previous: '-',
            previousStatus: 'Negative',
        },
        {
            seqNo: '007',
            name: 'Grosen Edly Anak Henry',
            age: 45,
            gender: 'Male',
            package: 'K1',
            confirm: 'Y',
            current: '3.16',
            currentStatus: 'Negative',
            previous: '-',
            previousStatus: 'Negative',
        },
        {
            seqNo: '008',
            name: 'Dato Hussin',
            age: 42,
            gender: 'Male',
            package: 'K2',
            confirm: 'Y',
            current: '3.17',
            currentStatus: 'Positive',
            previous: '-',
            previousStatus: 'Negative',
        },
        {
            seqNo: '009',
            name: 'Chen Yu Lin',
            age: 37,
            gender: 'Female',
            package: 'K2',
            confirm: 'Y',
            current: '3.18',
            currentStatus: 'Positive',
            previous: '-',
            previousStatus: 'Negative',
        },
        {
            seqNo: '010',
            name: 'Wang Jin Pyng',
            age: 35,
            gender: 'Male',
            package: 'K1',
            confirm: 'Y',
            current: '3.19',
            currentStatus: 'Negative',
            previous: '-',
            previousStatus: 'Negative',
        },
        {
            seqNo: '011',
            name: 'Chen Yu Lin',
            age: 37,
            gender: 'Female',
            package: 'K2',
            confirm: 'Y',
            current: '3.20',
            currentStatus: 'Negative',
            previous: '-',
            previousStatus: 'Negative',
        },
        {
            seqNo: '012',
            name: 'Lok Wing Ching',
            age: 77,
            gender: 'Female',
            package: 'K3',
            confirm: 'Y',
            current: '3.21',
            currentStatus: 'Positive',
            previous: '-',
            previousStatus: 'Negative',
        },
        {
            seqNo: '013',
            name: 'Lok Wing Ching',
            age: 77,
            gender: 'Female',
            package: 'K3',
            confirm: 'Y',
            current: '3.22',
            currentStatus: 'Negative',
            previous: '-',
            previousStatus: 'Negative',
        },
        {
            seqNo: '014',
            name: 'Lok Wing Ching',
            age: 77,
            gender: 'Female',
            package: 'K3',
            confirm: 'Y',
            current: '3.23',
            currentStatus: 'Positive',
            previous: '-',
            previousStatus: 'Negative',
        },
        {
            seqNo: '015',
            name: 'Lok Wing Ching',
            age: 77,
            gender: 'Female',
            package: 'K3',
            confirm: 'Y',
            current: '3.24',
            currentStatus: 'Negative',
            previous: '-',
            previousStatus: 'Negative',
        },
        {
            seqNo: '016',
            name: 'Lok Wing Ching',
            age: 77,
            gender: 'Female',
            package: 'K3',
            confirm: 'Y',
            current: '3.25',
            currentStatus: 'Positive',
            previous: '-',
            previousStatus: 'Negative',
        },
    ]
    const [selectedData, setSelectedData] = useState<any>(
        testFakeData?.length > 0 ? testFakeData?.[0] : ''
    )

    const handleSelectData = (currentData: any) => {
        setSelectedData(currentData)
    }

    return (
        <Dialog open={open} classes={{ paper: styles.infoModalRadius }}>
            <DialogTitle
                sx={{ m: 0, p: 2 }}
                className={styles.infoModalTitleBackground}
            >
                <p className={styles.infoModalTitle}>{fakeData?.[0]?.name}</p>
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={() => setOpen(false)}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 20,
                    color: '#FFFFFF',
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent dividers className={styles.infoModalDialogContent}>
                <Table sx={{ minWidth: "850px" }} stickyHeader>
                    <TableHead className={styles.infoTableTH}>
                        <TableRow>
                            <TableCell className={styles.infoTableTH}>
                                Seq No.
                            </TableCell>
                            <TableCell className={styles.infoTableTH}>
                                Name
                            </TableCell>
                            <TableCell className={styles.infoTableTH}>
                                Package
                            </TableCell>
                            <TableCell className={styles.infoTableTH}>
                                Gender
                            </TableCell>
                            <TableCell className={styles.infoTableTH}>
                                Age
                            </TableCell>
                            <TableCell className={styles.infoTableTH}>
                                Confirm
                            </TableCell>
                            <TableCell className={styles.infoTableTH}>
                                Current
                            </TableCell>
                            <TableCell className={styles.infoTableTH}>
                                Current Status
                            </TableCell>
                            <TableCell className={styles.infoTableTH}>
                                Previous
                            </TableCell>
                            <TableCell className={styles.infoTableTH}>
                                Previous Status
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {testFakeData.map((item: any, index: number) => {
                            return (
                                <TableRow
                                    key={index}
                                    onClick={() => handleSelectData(item)}
                                    className={
                                        selectedData?.seqNo === item.seqNo
                                            ? styles.infoTableTRSelected
                                            : styles.infoTableTR
                                    }
                                >
                                    <TableCell
                                        className={styles.infoTableTRCell}
                                    >
                                        {item.seqNo}
                                    </TableCell>
                                    <TableCell
                                        className={styles.infoTableTRCell}
                                    >
                                        {item.name}
                                    </TableCell>
                                    <TableCell
                                        className={styles.infoTableTRCell}
                                    >
                                        {item.package}
                                    </TableCell>
                                    <TableCell
                                        className={styles.infoTableTRCell}
                                    >
                                        {item.gender}
                                    </TableCell>
                                    <TableCell
                                        className={styles.infoTableTRCell}
                                    >
                                        {item.age}
                                    </TableCell>
                                    <TableCell
                                        className={styles.infoTableTRCell}
                                    >
                                        {item.confirm}
                                    </TableCell>
                                    <TableCell
                                        className={styles.infoTableTRCell}
                                    >
                                        <TextField
                                            value={item.current}
                                            size="small"
                                        />
                                    </TableCell>
                                    <TableCell
                                        className={styles.infoTableTRCell}
                                    >
                                        <TextField
                                            value={item.currentStatus}
                                            size="small"
                                        />
                                    </TableCell>
                                    <TableCell
                                        className={styles.infoTableTRCell}
                                    >
                                        {item.previous}
                                    </TableCell>
                                    <TableCell
                                        className={styles.infoTableTRCell}
                                    >
                                        {item.previousStatus}
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </DialogContent>
            <DialogActions className={styles.infoModalDialogActions}>
                {selectedData ? (
                    <Grid container>
                        <Grid item md={1} xs={6}>
                            {selectedData?.seqNo ? (
                                <>
                                    <p className={styles.infoTableTH}>
                                        Seq No.
                                    </p>
                                    <p className={styles.infoTableTRCell}>
                                        {selectedData?.seqNo}
                                    </p>
                                </>
                            ) : null}
                        </Grid>
                        <Grid item md={4} xs={6}>
                            {selectedData?.name ? (
                                <>
                                    <p className={styles.infoTableTH}>Name</p>
                                    <p className={styles.infoTableTRCell}>
                                        {selectedData?.name}
                                    </p>
                                </>
                            ) : null}
                        </Grid>
                        <Grid item md={1} xs={6}>
                            {selectedData?.package ? (
                                <>
                                    <p className={styles.infoTableTH}>
                                        Package
                                    </p>
                                    <p className={styles.infoTableTRCell}>
                                        {selectedData?.package}
                                    </p>
                                </>
                            ) : null}
                        </Grid>
                        <Grid item md={2} xs={6}>
                            {selectedData?.current ? (
                                <>
                                    <p className={styles.infoTableTH}>
                                        Current
                                    </p>
                                    <TextField
                                        value={selectedData?.current}
                                        size="small"
                                        sx={{ width: '100px' }}
                                    />
                                </>
                            ) : null}
                        </Grid>
                        <Grid item md={2} xs={6}>
                            {selectedData?.currentStatus ? (
                                <>
                                    <p className={styles.infoTableTH}>
                                        Current Status
                                    </p>
                                    <TextField
                                        value={selectedData?.currentStatus}
                                        size="small"
                                        sx={{ width: '100px' }}
                                    />
                                </>
                            ) : null}
                        </Grid>
                        <Grid item md={2} style={{ margin: 'auto' }}>
                            <Button
                                onClick={() => setOpen(false)}
                                size="small"
                                className={styles.infoModalDialogConfirmBttn}
                            >
                                Confirm
                            </Button>
                        </Grid>
                    </Grid>
                ) : (
                    <Button
                        onClick={() => setOpen(false)}
                        size="small"
                        className={styles.infoModalDialogConfirmBttn}
                    >
                        Confirm
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    )
}

export default InfoModal
