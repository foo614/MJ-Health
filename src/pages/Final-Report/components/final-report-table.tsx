import { Box, Button } from '@mui/material'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useState } from 'react'
import styles from '../_final-report.module.scss'
import ViewFinalReportModal from './view-final-report-modal'
const FinalReportTable = () => {
    const [openViewFinalReportModal, setOpenViewFinalReportModal] =
        useState<boolean>(false)
    const data = [
        {
            seq: '001',
            name: 'Jeffery Mohamad Bin Christofa',
            gender: 'Male',
            package: 'K2',
            icNo: '150103197908131051',
            memberID: '5040110100678001',
            date: '03-03-2023',
        },
        {
            seq: '002',
            name: 'Jeffery Mohamad Bin Christofa',
            gender: 'Female',
            package: 'K2',
            icNo: '150103197908131051',
            memberID: '5040110100678001',
            date: '03-03-2023',
        },
        {
            seq: '003',
            name: 'Jeffery Mohamad Bin Christofa',
            gender: 'Male',
            package: 'K2',
            icNo: '150103197908131051',
            memberID: '5040110100678001',
            date: '03-03-2023',
        },
        {
            seq: '004',
            name: 'Jeffery Mohamad Bin Christofa',
            gender: 'Male',
            package: 'K2',
            icNo: '150103197908131051',
            memberID: '5040110100678001',
            date: '03-03-2023',
        },
        {
            seq: '005',
            name: 'Jeffery Mohamad Bin Christofa',
            gender: 'Male',
            package: 'K2',
            icNo: '150103197908131051',
            memberID: '5040110100678001',
            date: '03-03-2023',
        },
        {
            seq: '006',
            name: 'Jeffery Mohamad Bin Christofa',
            gender: 'Male',
            package: 'K2',
            icNo: '150103197908131051',
            memberID: '5040110100678001',
            date: '03-03-2023',
        },
        {
            seq: '007',
            name: 'Jeffery Mohamad Bin Christofa',
            gender: 'Male',
            package: 'K2',
            icNo: '150103197908131051',
            memberID: '5040110100678001',
            date: '03-03-2023',
        },
        {
            seq: '008',
            name: 'Jeffery Mohamad Bin Christofa',
            gender: 'Male',
            package: 'K2',
            icNo: '150103197908131051',
            memberID: '5040110100678001',
            date: '03-03-2023',
        },
        {
            seq: '009',
            name: 'Jeffery Mohamad Bin Christofa',
            gender: 'Male',
            package: 'K2',
            icNo: '150103197908131051',
            memberID: '5040110100678001',
            date: '03-03-2023',
        },
        {
            seq: '010',
            name: 'Jeffery Mohamad Bin Christofa',
            gender: 'Male',
            package: 'K2',
            icNo: '150103197908131051',
            memberID: '5040110100678001',
            date: '03-03-2023',
        },
    ]
    return (
        <>
            <TableContainer
                component={Paper}
                sx={{
                    mt: 3,
                    boxShadow: '0px 2px 2px 1px rgba(0,0,0,0.05) inset',
                }}
            >
                <Table size="small">
                    <TableHead className={styles.final_report_table_head}>
                        <TableRow>
                            <TableCell width="8%">
                                <p
                                    className={
                                        styles.final_report_table_head_cell
                                    }
                                    style={{ textAlign: 'center' }}
                                >
                                    Seq No.
                                </p>
                            </TableCell>
                            <TableCell width="25%">
                                <p
                                    className={
                                        styles.final_report_table_head_cell
                                    }
                                >
                                    Name
                                </p>
                            </TableCell>
                            <TableCell width="8%">
                                <p
                                    className={
                                        styles.final_report_table_head_cell
                                    }
                                >
                                    Gender
                                </p>
                            </TableCell>
                            <TableCell width="8%">
                                <p
                                    className={
                                        styles.final_report_table_head_cell
                                    }
                                    style={{ textAlign: 'center' }}
                                >
                                    Package
                                </p>
                            </TableCell>
                            <TableCell width="15%">
                                <p
                                    className={
                                        styles.final_report_table_head_cell
                                    }
                                    style={{ textAlign: 'end' }}
                                >
                                    IC No.
                                </p>
                            </TableCell>
                            <TableCell width="15%">
                                <p
                                    className={
                                        styles.final_report_table_head_cell
                                    }
                                    style={{ textAlign: 'center' }}
                                >
                                    Member ID
                                </p>
                            </TableCell>
                            <TableCell width="10%">
                                <p
                                    className={
                                        styles.final_report_table_head_cell
                                    }
                                    style={{ textAlign: 'center' }}
                                >
                                    Date
                                </p>
                            </TableCell>
                            <TableCell width="12%"></TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
                <Box
                    sx={{ height: '400px', overflow: 'auto' }}
                    className={'tableContainer'}
                >
                    <Table>
                        <TableBody>
                            {data.map((item: any, index: number) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell width="8%">
                                            <p
                                                className={
                                                    styles.final_report_table_body_cell
                                                }
                                                style={{ textAlign: 'center' }}
                                            >
                                                {item.seq}
                                            </p>
                                        </TableCell>
                                        <TableCell width="25%">
                                            <p
                                                className={
                                                    styles.final_report_table_body_cell_bold
                                                }
                                            >
                                                {item.name}
                                            </p>
                                        </TableCell>
                                        <TableCell width="8%">
                                            <p
                                                className={
                                                    styles.final_report_table_body_cell
                                                }
                                            >
                                                {item.gender}
                                            </p>
                                        </TableCell>
                                        <TableCell width="8%">
                                            <p
                                                className={
                                                    styles.final_report_table_body_cell
                                                }
                                                style={{ textAlign: 'center' }}
                                            >
                                                {item.package}
                                            </p>
                                        </TableCell>
                                        <TableCell width="15%">
                                            <p
                                                className={
                                                    styles.final_report_table_body_cell
                                                }
                                                style={{ textAlign: 'end' }}
                                            >
                                                {item.icNo}
                                            </p>
                                        </TableCell>
                                        <TableCell width="15%">
                                            <p
                                                className={
                                                    styles.final_report_table_body_cell
                                                }
                                                style={{ textAlign: 'center' }}
                                            >
                                                {item.memberID}
                                            </p>
                                        </TableCell>
                                        <TableCell width="10%">
                                            <p
                                                style={{ textAlign: 'center' }}
                                                className={
                                                    styles.final_report_table_body_date
                                                }
                                            >
                                                {item.date}
                                            </p>
                                        </TableCell>
                                        <TableCell width="12%">
                                            <Button
                                                variant="contained"
                                                className={
                                                    styles.final_report_table_view_bttn
                                                }
                                                fullWidth
                                                onClick={() =>
                                                    setOpenViewFinalReportModal(
                                                        true
                                                    )
                                                }
                                            >
                                                View
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </Box>
            </TableContainer>
            {openViewFinalReportModal ? (
                <ViewFinalReportModal
                    open={openViewFinalReportModal}
                    setOpen={setOpenViewFinalReportModal}
                />
            ) : null}
        </>
    )
}

export default FinalReportTable
