import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
import styles from '../_meal-setup.module.scss'

type Props = {
    fakeData: any
    matches: boolean
    editMode: boolean
}
const MealSetupTable: React.FC<Props> = ({
    fakeData,
    matches,
    editMode,
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
                            sx={{ width: '30%' }}
                        >
                            <p className={styles.mealSetupColumnTitle}>
                                Weight (gram)
                            </p>
                        </TableCell>
                        <TableCell
                            sx={{ width: '6%' }}
                            className={styles.tableCell}
                        ></TableCell>
                        <TableCell
                            className={styles.tableCell}
                            sx={{ width: '30%' }}
                        >
                            <p className={styles.mealSetupColumnTitle}>
                                Energy/ Calories
                            </p>
                        </TableCell>
                        {/* <TableCell
                            sx={{ width: '6%' }}
                            className={styles.tableCell}
                        ></TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {fakeData.map((item: any, index: number) => {
                        return (
                            <TableRow key={index}>
                                <TableCell className={styles.tableCell}>
                                    <p className={styles.mealCategory}>
                                        {item.name}
                                    </p>
                                </TableCell>
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
                                {/* <TableCell className={styles.tableCell}>
                                    <CancelIcon className={styles.cancelBttn} />
                                </TableCell> */}
                            </TableRow>
                        )
                    })}

                    <TableRow>
                        <TableCell className={styles.divTableCell}>
                            <div className={styles.divider} />
                        </TableCell>
                        <TableCell className={styles.divTableCell}>
                            <div className={styles.divider} />
                        </TableCell>
                        <TableCell className={styles.divTableCell}>
                            <div className={styles.divider} />
                        </TableCell>
                        <TableCell className={styles.divTableCell}>
                            <div className={styles.divider} />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className={styles.divTableCell}>
                            <p className={styles.totalTitle}>
                                Total Energy/ Calories:
                            </p>
                        </TableCell>
                        <TableCell className={styles.tableCell}></TableCell>
                        <TableCell className={styles.tableCell}></TableCell>
                        <TableCell className={styles.divTableCell}>
                            <p className={styles.total}>4.72</p>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}
export default MealSetupTable
