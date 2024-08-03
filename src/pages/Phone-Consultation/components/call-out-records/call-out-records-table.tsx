import {
    Box,
    TableContainer,
    Paper,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Stack,
    Button,
} from '@mui/material'
import { PHONE_CONSULTATION_DISTRIBUTE_PAGE } from 'constant'
import { CallOutRecordData } from 'pages/Phone-Consultation/types/CallOutRecordData'
import styles from './_call-out-records.module.scss'
import CallHistoryModal from 'components/CallHistoryModal'
import { useState } from 'react'

type Props = {
    data: CallOutRecordData[]
}

const CallOutRecordsTable = (props: Props) => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <>
            <Box mt={1.5} mb={2}>
                <TableContainer component={Paper} className={styles.dataTable}>
                    <Table stickyHeader>
                        <TableHead className={styles.dataTableHead}>
                            <TableRow>
                                <TableCell>
                                    <p className={styles.dataTableHeadTitle}>
                                        Name
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p className={styles.dataTableHeadTitle}>
                                        Member ID
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p className={styles.dataTableHeadTitle}>
                                        IC No.
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p className={styles.dataTableHeadTitle}>
                                        Gender
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p className={styles.dataTableHeadTitle}>
                                        Contact No.
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p className={styles.dataTableHeadTitle}>
                                        Date
                                    </p>
                                </TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.data.map((item, index: number) => {
                                return (
                                    <TableRow
                                        key={index}
                                        className={''}
                                        sx={{ cursor: 'pointer' }}
                                        // onClick={() =>
                                        //     navigate(
                                        //         `${MEMBER_PROFILE_PAGE}/${item.id}`
                                        //     )
                                        // }
                                    >
                                        <TableCell>
                                            <p
                                                className={
                                                    styles.tableCellBoldValue
                                                }
                                            >
                                                {item.name}
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <p
                                                className={
                                                    styles.tableCellValue
                                                }
                                            >
                                                {item.memberId}
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <p
                                                className={
                                                    styles.tableCellValue
                                                }
                                            >
                                                {item.icNo}
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <p
                                                className={
                                                    styles.tableCellValue
                                                }
                                            >
                                                {item.gender}
                                            </p>
                                        </TableCell>

                                        <TableCell>
                                            <p
                                                className={
                                                    styles.tableCellValue
                                                }
                                            >
                                                {item.contactNo}
                                            </p>
                                        </TableCell>

                                        <TableCell>
                                            <p
                                                className={
                                                    styles.tableCellValue
                                                }
                                            >
                                                {item.date}
                                            </p>
                                        </TableCell>

                                        <TableCell>
                                            <Button
                                                variant="contained"
                                                className={
                                                    styles.tableActionButton
                                                }
                                                onClick={() => {
                                                    setOpen(true)
                                                }}
                                            >
                                                View
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

            <CallHistoryModal
                setOpen={setOpen}
                open={open}
                module="PhoneConsultation"
            />
        </>
    )
}

export default CallOutRecordsTable
