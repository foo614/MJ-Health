import TextField from '@mui/material/TextField'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import styles from '../_biochemistry.module.scss'
type BiochemistryDataLeftProps = {
    editMode: boolean
    matches: boolean
}

const BiochemistryDataLeft: React.FC<BiochemistryDataLeftProps> = ({
    editMode,
    matches,
}: BiochemistryDataLeftProps) => {
    return (
        <Table
            style={matches ? {} : { width: '800px' }}
            className={styles.dataTable}
        >
            <TableHead>
                <TableRow>
                    <TableCell style={{ border: '0' }}></TableCell>
                    <TableCell
                        style={{
                            border: '0',
                            borderRadius: '8px 8px 0px 0px',
                        }}
                        className={styles.currentDataBackgroundColor}
                    >
                        <p className={styles.dataTitleColumn}>Current</p>
                    </TableCell>
                    <TableCell
                        style={{
                            border: '0',
                            borderRadius: '8px 8px 0px 0px',
                        }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <p className={styles.dataTitleColumn}>22-09-2022</p>
                    </TableCell>
                    <TableCell
                        style={{
                            border: '0',
                            borderRadius: '8px 8px 0px 0px',
                        }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <p className={styles.dataTitleColumn}>22-09-2018</p>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell
                        style={{
                            border: '0',
                            paddingLeft: '10px',
                            paddingRight: '10px',
                        }}
                    >
                        <p className={styles.dataTitle}>Blood Sugar Tests</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.currentDataBackgroundColor}
                    ></TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    ></TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    ></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>
                            Fasting Blood Glucose
                        </p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>HbA1c</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell
                        style={{
                            border: '0',
                            paddingLeft: '10px',
                            paddingRight: '10px',
                        }}
                    >
                        <p className={styles.dataTitle}>Liver Function Tests</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.currentDataBackgroundColor}
                    ></TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    ></TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    ></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>Total Bilirubin</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>Direct Bilirubin</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>Total Protein</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>Albumin</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>Globulin</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>
                            Alkaline Phosphatase
                        </p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>sGot (AST)</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>sGPT (ALT)</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>y-GT (GGT)</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>LDH</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell
                        style={{
                            border: '0',
                            paddingLeft: '10px',
                            paddingRight: '10px',
                        }}
                    >
                        <p className={styles.dataTitle}>Renal Function</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.currentDataBackgroundColor}
                    ></TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    ></TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    ></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>Bun (Urea)</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>Creatinine</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>eGFR</p>
                    </TableCell>
                    <TableCell
                        style={{
                            border: '0',
                            borderRadius: '0px 0px 8px 8px',
                            paddingBottom: '16px !important',
                            paddingTop: '0px',
                            paddingLeft: '10px',
                            paddingRight: '10px',
                        }}
                        className={styles.currentDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{
                            border: '0',
                            borderRadius: '0px 0px 8px 8px',
                            paddingBottom: '16px !important',
                            paddingTop: '0px',
                            paddingLeft: '10px',
                            paddingRight: '10px',
                        }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{
                            border: '0',
                            borderRadius: '0px 0px 8px 8px',
                            paddingBottom: '16px !important',
                            paddingTop: '0px',
                            paddingLeft: '10px',
                            paddingRight: '10px',
                        }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}
export default BiochemistryDataLeft
