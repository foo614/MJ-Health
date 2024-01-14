import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import styles from '../_physician-consultation-info.module.scss'
import { Stack, Button } from '@mui/material'
import { useState } from 'react'
import CurrentTableEditModal from './current-table-edit-modal'
const CurrentTable = () => {
    const [openCurrentTableEditModal, setOpenCurrentTableEditModal] =
        useState<boolean>(false)
    const tableData = [
        {
            title: 'Weight and Body Build',
            description:
                'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
        },
        {
            title: 'Blood Tests',
            description:
                'Lorem ipsum dolor sit amet, reprehenderit in voluptate.',
        },
        {
            title: 'Blood Lipid Test',
            description: '-',
        },
        {
            title: 'Inflammatory Response',
            description:
                ' in reprehenderit in voluptate velit esse cillum dolor. minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
        },
        {
            title: 'Weight and Body Build',
            description:
                'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
        },
        {
            title: 'Urinalysis',
            description:
                'aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui rat. ',
        },
        {
            title: 'ECG',
            description:
                'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
        },
        {
            title: 'Muscle Mass',
            description:
                'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
        },
        {
            title: 'Normal',
            description:
                'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
        },
    ]
    return (
        <>
            <div style={{ paddingLeft: '35px', paddingRight: '35px' }}>
                <p className={styles.commentText}>Comment and Suggestion</p>
                <TableContainer
                    component={Paper}
                    className={styles.physicianConsultationInfoTable}
                    sx={{ marginTop: '1rem' }}
                >
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <p className={styles.tableHeadCellText}>
                                        Abnormal Items
                                    </p>
                                </TableCell>
                                <TableCell sx={{ width: '70%' }}>
                                    <p className={styles.tableHeadCellText}>
                                        Content
                                    </p>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableData.map((item: any, index: number) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell
                                            className={styles.tableBodyCell}
                                        >
                                            <p
                                                className={
                                                    styles.tableBodyCellAbnormalItems
                                                }
                                            >
                                                {item.title}
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <Stack direction="row">
                                                <div>
                                                    <p
                                                        className={
                                                            styles.tableBodyCellContent
                                                        }
                                                    >
                                                        {item.description}
                                                    </p>
                                                </div>

                                                <Stack
                                                    direction="row"
                                                    sx={{
                                                        marginLeft: 'auto',
                                                    }}
                                                >
                                                    <Button
                                                        variant="text"
                                                        className={
                                                            styles.editBttn
                                                        }
                                                        onClick={() =>
                                                            setOpenCurrentTableEditModal(
                                                                true
                                                            )
                                                        }
                                                    >
                                                        Edit
                                                    </Button>
                                                    <Button
                                                        variant="text"
                                                        className={
                                                            styles.deleteBttn
                                                        }
                                                    >
                                                        Delete
                                                    </Button>
                                                </Stack>
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>

                <div style={{ textAlign: 'end', marginTop: '1rem' }}>
                    <Button variant="contained" className={styles.saveBttn}>
                        Save
                    </Button>
                </div>

                {openCurrentTableEditModal ? (
                    <CurrentTableEditModal
                        open={openCurrentTableEditModal}
                        setOpen={setOpenCurrentTableEditModal}
                    />
                ) : null}
            </div>
        </>
    )
}

export default CurrentTable
