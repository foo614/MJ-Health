import { useNavigate } from 'react-router-dom'
import { StaffData } from '../types/StaffData'
import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material'
import styles from '../_staff-management.module.scss'
import { STAFF_PROFILE_PAGE } from 'constant'

type Props = {
    fakeData: StaffData[]
}

const StaffManagementTable = ({ fakeData }: Props) => {
    const navigate = useNavigate()

    return (
        <>
            <TableContainer
                component={Paper}
                className={styles.staffManagementTable}
            >
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell
                                className={styles.staffManagementTableHead}
                            >
                                <p
                                    className={
                                        styles.staffManagementTableHeadTitle
                                    }
                                >
                                    Staff ID
                                </p>
                            </TableCell>
                            <TableCell
                                className={styles.staffManagementTableHead}
                            >
                                <p
                                    className={
                                        styles.staffManagementTableHeadTitle
                                    }
                                >
                                    Name
                                </p>
                            </TableCell>
                            <TableCell
                                className={styles.staffManagementTableHead}
                            >
                                <p
                                    className={
                                        styles.staffManagementTableHeadTitle
                                    }
                                >
                                    Gender
                                </p>
                            </TableCell>
                            <TableCell
                                className={styles.staffManagementTableHead}
                            >
                                <p
                                    className={
                                        styles.staffManagementTableHeadTitle
                                    }
                                >
                                    IC No.
                                </p>
                            </TableCell>
                            <TableCell
                                className={styles.staffManagementTableHead}
                            >
                                <p
                                    className={
                                        styles.staffManagementTableHeadTitle
                                    }
                                >
                                    Position
                                </p>
                            </TableCell>
                            <TableCell
                                className={styles.staffManagementTableHead}
                            >
                                <p
                                    className={
                                        styles.staffManagementTableHeadTitle
                                    }
                                ></p>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {fakeData.map((item, index: number) => {
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
                                        <p className={styles.tableCellValue}>
                                            {item.staffId}
                                        </p>
                                    </TableCell>
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
                                        <p className={styles.tableCellValue}>
                                            {item.gender}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <p className={styles.tableCellValue}>
                                            {item.icNo}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <p className={styles.tableCellValue}>
                                            {item.position}
                                        </p>
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            className={
                                                styles.manageAccountButton
                                            }
                                            onClick={() =>
                                                navigate(
                                                    STAFF_PROFILE_PAGE +
                                                        '/' +
                                                        item.id
                                                )
                                            }
                                        >
                                            Manage account
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default StaffManagementTable
