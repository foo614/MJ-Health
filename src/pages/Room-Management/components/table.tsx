import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import styles from '../_room-management.module.scss'
import {
    Button,
    useMediaQuery,
    useTheme,
    FormControl,
    Select,
    MenuItem,
} from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { useState } from 'react'
import AddRoomModal from './add-room-modal'
import RemoveModal from './remove-modal'

type Props = {
    currentEditItem: number
    setCurrentEditItem: any
}

const RoomManagementTable: React.FC<Props> = ({
    currentEditItem,
    setCurrentEditItem,
}: Props) => {
    const [openAddNewRoomModal, setOpenAddNewRoomModal] =
        useState<boolean>(false)
    const [openRemoveRoomModal, setOpenRemoveRoomModal] =
        useState<boolean>(false)

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const data = [
        {
            id: 1,
            roomNo: 'A-01',
            roomName: 'ENT Examination',
        },
        {
            id: 2,
            roomNo: 'A-02',
            roomName: 'Lung Function',
        },
        {
            id: 3,
            roomNo: 'A-03',
            roomName: 'MUL',
        },
        {
            id: 4,
            roomNo: 'A-04',
            roomName: 'ENT Mammo',
        },
        {
            id: 5,
            roomNo: 'B-01',
            roomName: 'BMD',
        },
        {
            id: 6,
            roomNo: 'B-02',
            roomName: 'Audiometry',
        },
        {
            id: 7,
            roomNo: 'B-03',
            roomName: 'Bone DEXA Scan',
        },
    ]

    const room_no_select_option = [
        {
            id: 1,
            label: 'A-01',
        },
        {
            id: 2,
            label: 'A-02',
        },
        {
            id: 3,
            label: 'A-03',
        },
        {
            id: 4,
            label: 'A-04',
        },

        {
            id: 5,
            label: 'B-01',
        },
        {
            id: 6,
            label: 'B-02',
        },
        {
            id: 7,
            label: 'B-03',
        },
        {
            id: 8,
            label: 'B-04',
        },
        {
            id: 9,
            label: 'B-05',
        },
    ]

    const room_name_select_option = [
        {
            id: 1,
            label: 'ENT Examination',
        },
        {
            id: 2,
            label: 'Lung Function',
        },
        {
            id: 3,
            label: 'Mul',
        },
        {
            id: 4,
            label: 'ENT Mammo',
        },
        {
            id: 5,
            label: 'BMD',
        },
        {
            id: 6,
            label: 'Audiometry',
        },
        {
            id: 7,
            label: 'Bone DEXA Scan',
        },
        {
            id: 8,
            label: 'Ocular Tension Test',
        },
    ]

    const handleEdit = (id: number) => {
        setCurrentEditItem(id)
    }
    return (
        <>
            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead className={styles.roomManagementTableHead}>
                        <TableRow>
                            <TableCell sx={{ width: '20%' }}>
                                <p
                                    className={
                                        styles.roomManagementTableHeadTitle
                                    }
                                    style={{ textAlign: 'center' }}
                                >
                                    Room No.
                                </p>
                            </TableCell>
                            <TableCell colSpan={3}>
                                <p
                                    className={
                                        styles.roomManagementTableHeadTitle
                                    }
                                >
                                    Room Name
                                </p>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item: any, index: number) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell sx={{ paddingLeft: '30px' }}>
                                        {currentEditItem === item.id ? (
                                            <FormControl
                                                className={
                                                    styles.textFieldProps
                                                }
                                                size="small"
                                                margin="dense"
                                                fullWidth
                                            >
                                                <Select
                                                    className={
                                                        styles.inputField
                                                    }
                                                    name="meal_time_option"
                                                >
                                                    {room_no_select_option.map(
                                                        (
                                                            item: any,
                                                            index: number
                                                        ) => {
                                                            return (
                                                                <MenuItem
                                                                    value={
                                                                        item.id
                                                                    }
                                                                    key={index}
                                                                    className={
                                                                        styles.inputField
                                                                    }
                                                                >
                                                                    {item.label}
                                                                </MenuItem>
                                                            )
                                                        }
                                                    )}
                                                </Select>
                                            </FormControl>
                                        ) : (
                                            <p
                                                className={
                                                    styles.tableCellValue
                                                }
                                            >
                                                {item.roomNo}
                                            </p>
                                        )}
                                    </TableCell>
                                    <TableCell sx={{ width: '50%' }}>
                                        {currentEditItem === item.id ? (
                                            <FormControl
                                                className={
                                                    styles.textFieldProps
                                                }
                                                size="small"
                                                margin="dense"
                                                fullWidth
                                            >
                                                <Select
                                                    className={
                                                        styles.inputField
                                                    }
                                                    name="meal_time_option"
                                                >
                                                    {room_name_select_option.map(
                                                        (
                                                            item: any,
                                                            index: number
                                                        ) => {
                                                            return (
                                                                <MenuItem
                                                                    value={
                                                                        item.id
                                                                    }
                                                                    key={index}
                                                                    className={
                                                                        styles.inputField
                                                                    }
                                                                >
                                                                    {item.label}
                                                                </MenuItem>
                                                            )
                                                        }
                                                    )}
                                                </Select>
                                            </FormControl>
                                        ) : (
                                            <p
                                                className={
                                                    styles.tableCellBoldValue
                                                }
                                            >
                                                {item.roomName}
                                            </p>
                                        )}
                                    </TableCell>
                                    {currentEditItem === item.id ? (
                                        <>
                                            <TableCell>
                                                <Button
                                                    variant="contained"
                                                    className={
                                                        styles.room_management_table_cancel_bttn
                                                    }
                                                    onClick={() =>
                                                        handleEdit(0)
                                                    }
                                                >
                                                    Cancel
                                                </Button>
                                            </TableCell>
                                            <TableCell
                                                sx={{ paddingRight: '30px' }}
                                            >
                                                <Button
                                                    className={
                                                        styles.room_management_table_edit_bttn
                                                    }
                                                    variant="contained"
                                                    onClick={() =>
                                                        handleEdit(0)
                                                    }
                                                >
                                                    Save
                                                </Button>
                                            </TableCell>
                                        </>
                                    ) : (
                                        <>
                                            <TableCell>
                                                <Button
                                                    variant="contained"
                                                    className={
                                                        styles.room_management_table_remove_bttn
                                                    }
                                                    onClick={() =>
                                                        setOpenRemoveRoomModal(
                                                            true
                                                        )
                                                    }
                                                >
                                                    Remove
                                                </Button>
                                            </TableCell>
                                            <TableCell
                                                sx={{ paddingRight: '30px' }}
                                            >
                                                <Button
                                                    className={
                                                        styles.room_management_table_edit_bttn
                                                    }
                                                    variant="contained"
                                                    onClick={() =>
                                                        handleEdit(item.id)
                                                    }
                                                >
                                                    Edit
                                                </Button>
                                            </TableCell>
                                        </>
                                    )}
                                </TableRow>
                            )
                        })}
                        <TableRow>
                            <TableCell
                                colSpan={4}
                                sx={{
                                    padding: '20px 30px',
                                }}
                            >
                                <Button
                                    variant="contained"
                                    fullWidth
                                    className={
                                        styles.room_management_table_add_bttn
                                    }
                                    startIcon={
                                        <AddCircleIcon
                                            sx={{
                                                color: '#3adebb',
                                                fontSize: '30px',
                                            }}
                                        />
                                    }
                                    onClick={() => setOpenAddNewRoomModal(true)}
                                >
                                    Add New
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            {openAddNewRoomModal ? (
                <AddRoomModal
                    open={openAddNewRoomModal}
                    setOpen={setOpenAddNewRoomModal}
                />
            ) : null}
            {openRemoveRoomModal ? (
                <RemoveModal
                    open={openRemoveRoomModal}
                    setOpen={setOpenRemoveRoomModal}
                    matches={matches}
                    title="Delete Room?"
                    subtitle="Remove room from this area?"
                    resetAllState={() => void 0}
                />
            ) : null}
        </>
    )
}
export default RoomManagementTable
