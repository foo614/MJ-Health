import {
    Box,
    Button,
    Paper,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material'
import { PHONE_CONSULTATION_DISTRIBUTE_PAGE } from 'constant'
import { useNavigate } from 'react-router-dom'
import { CallOutDistributionData } from '../../types/CallOutDistributionData'
import styles from './_call-out-distribution.module.scss'

const MedicalCallOutDistributionTable = () => {
    const navigate = useNavigate()

    const data: CallOutDistributionData[] = [
        {
            hsQuantity: 35,
            distributedQuantity: 17,
            notRequiredConsultantQuantity: 4,
            hsDate: '31-03-2023',
        },
        {
            hsQuantity: 0,
            distributedQuantity: 0,
            notRequiredConsultantQuantity: 0,
            hsDate: '30-03-2023',
        },
        {
            hsQuantity: 26,
            distributedQuantity: 35,
            notRequiredConsultantQuantity: 2,
            hsDate: '29-03-2023',
        },
        {
            hsQuantity: 2,
            distributedQuantity: 2,
            notRequiredConsultantQuantity: 2,
            hsDate: '27-03-2023',
        },
        {
            hsQuantity: 2,
            distributedQuantity: 2,
            notRequiredConsultantQuantity: 2,
            hsDate: '18-03-2023',
        },
        {
            hsQuantity: 28,
            distributedQuantity: 15,
            notRequiredConsultantQuantity: 3,
            hsDate: '14-03-2023',
        },
        {
            hsQuantity: 14,
            distributedQuantity: 14,
            notRequiredConsultantQuantity: 14,
            hsDate: '07-03-2023',
        },
        {
            hsQuantity: 8,
            distributedQuantity: 0,
            notRequiredConsultantQuantity: 8,
            hsDate: '06-03-2023',
        },
        {
            hsQuantity: 21,
            distributedQuantity: 21,
            notRequiredConsultantQuantity: 0,
            hsDate: '05-03-2023',
        },
        {
            hsQuantity: 0,
            distributedQuantity: 0,
            notRequiredConsultantQuantity: 0,
            hsDate: '04-03-2023',
        },
        {
            hsQuantity: 2,
            distributedQuantity: 2,
            notRequiredConsultantQuantity: 2,
            hsDate: '02-03-2023',
        },
    ]

    return (
        <>
            <Box mt={1.5} mb={2}>
                <TableContainer component={Paper} className={styles.dataTable}>
                    <Table stickyHeader>
                        <TableHead className={styles.dataTableHead}>
                            <TableRow>
                                <TableCell>
                                    <p className={styles.dataTableHeadTitle}>
                                        HS Quantity
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p className={styles.dataTableHeadTitle}>
                                        Distributed
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p className={styles.dataTableHeadTitle}>
                                        Not Required Consultant
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p className={styles.dataTableHeadTitle}>
                                        HS Date
                                    </p>
                                </TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((item, index: number) => {
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
                                                {item.hsQuantity}
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <p
                                                className={
                                                    styles.tableCellBoldValue
                                                }
                                            >
                                                {item.distributedQuantity}
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <p
                                                className={
                                                    styles.tableCellBoldValue
                                                }
                                            >
                                                {
                                                    item.notRequiredConsultantQuantity
                                                }
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <p
                                                className={
                                                    styles.tableCellValue
                                                }
                                            >
                                                {item.hsDate}
                                            </p>
                                        </TableCell>

                                        <TableCell>
                                            <Stack
                                                spacing={2}
                                                direction="row"
                                                justifyContent="flex-end"
                                            >
                                                <Button
                                                    variant="contained"
                                                    className={
                                                        styles.tableActionButton
                                                    }
                                                    onClick={() => {
                                                        navigate(
                                                            PHONE_CONSULTATION_DISTRIBUTE_PAGE
                                                        )
                                                    }}
                                                >
                                                    Distribute
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    className={
                                                        styles.tableActionButton
                                                    }
                                                >
                                                    UF Distribute
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    className={
                                                        styles.tableActionButton
                                                    }
                                                    disabled
                                                >
                                                    View PC
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    className={
                                                        styles.tableActionButton
                                                    }
                                                    disabled
                                                >
                                                    View UF
                                                </Button>
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}

export default MedicalCallOutDistributionTable
