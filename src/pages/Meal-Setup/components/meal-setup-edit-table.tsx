import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import styles from '../_meal-setup.module.scss'
import CancelIcon from '@mui/icons-material/Cancel'
import { Button } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import AddNewModal from './add-new-modal'
type Props = {
    fakeData: any
    matches: boolean
    editMode: boolean
    openAddNewModal: boolean
    setOpenAddNewModal: any
}
const MealSetupEditTable: React.FC<Props> = ({
    fakeData,
    matches,
    editMode,
    openAddNewModal,
    setOpenAddNewModal,
}: Props) => {
    return (
        <div
            style={
                matches
                    ? {}
                    : {
                          maxWidth: '400px',
                          overflow: 'auto',
                      }
            }
        >
            <Table
                sx={matches ? { tableLayout: 'fixed' } : { width: '800px' }}
                size="small"
            >
                <TableHead>
                    <TableRow>
                        <TableCell className={styles.tableCellMealSetupTitle}>
                            <p className={styles.mealSetupTitle}>Simple Meal</p>
                        </TableCell>
                        <TableCell
                            className={styles.tableCell}
                            sx={{ width: '10%' }}
                        ></TableCell>
                        <TableCell
                            className={styles.tableCell}
                            sx={{ width: '25%' }}
                        >
                            <p className={styles.mealSetupColumnTitle}>
                                Weight (gram)
                            </p>
                        </TableCell>
                        <TableCell
                            className={styles.tableCell}
                            sx={{ width: '5%' }}
                        ></TableCell>
                        <TableCell
                            className={styles.tableCell}
                            sx={{ width: '25%' }}
                        >
                            <p className={styles.mealSetupColumnTitle}>
                                Energy/ Calories
                            </p>
                        </TableCell>
                        <TableCell
                            sx={{ width: '2%' }}
                            className={styles.tableCell}
                        ></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {fakeData.map((item: any, index: number) => {
                        return (
                            <TableRow key={index}>
                                <TableCell className={styles.tableCell}>
                                    <TextField
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                        disabled={editMode ? false : true}
                                        defaultValue={item.name}
                                        InputProps={{
                                            classes: {
                                                input: styles.inputPropsForMealCategory,
                                            },
                                            className: styles.textFieldProps,
                                        }}
                                    />
                                </TableCell>
                                <TableCell
                                    className={styles.tableCell}
                                ></TableCell>
                                <TableCell className={styles.tableCell}>
                                    <TextField
                                        size="small"
                                        margin="dense"
                                        fullWidth
                                        disabled={editMode ? false : true}
                                        defaultValue={item.weight}
                                        InputProps={{
                                            classes: {
                                                input: styles.inputProps,
                                            },
                                            className: styles.textFieldProps,
                                        }}
                                    />
                                </TableCell>
                                <TableCell
                                    className={styles.tableCell}
                                ></TableCell>
                                <TableCell className={styles.tableCell}>
                                    <TextField
                                        size="small"
                                        margin="dense"
                                        defaultValue={item.calories}
                                        disabled={editMode ? false : true}
                                        fullWidth
                                        InputProps={{
                                            classes: {
                                                input: styles.inputProps,
                                            },
                                            className: styles.textFieldProps,
                                        }}
                                    />
                                </TableCell>
                                <TableCell className={styles.tableCell}>
                                    <CancelIcon className={styles.cancelIcon} />
                                </TableCell>
                            </TableRow>
                        )
                    })}
                    <TableRow>
                        <TableCell className={styles.tableCell}>
                            <div style={{ marginTop: '1rem' }}>
                                <Button
                                    variant="contained"
                                    startIcon={
                                        <AddCircleIcon
                                            className={styles.addIcon}
                                        />
                                    }
                                    className={styles.addNewBttn}
                                    fullWidth
                                    onClick={() => setOpenAddNewModal(true)}
                                >
                                    Add New
                                </Button>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            {openAddNewModal ? (
                <AddNewModal
                    open={openAddNewModal}
                    setOpen={setOpenAddNewModal}
                />
            ) : null}
        </div>
    )
}
export default MealSetupEditTable
