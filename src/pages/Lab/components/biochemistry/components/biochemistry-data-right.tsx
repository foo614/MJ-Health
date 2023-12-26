import TextField from '@mui/material/TextField'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import styles from '../_biochemistry.module.scss'
type BiochemistryDataRightProps = {
    editMode: boolean
    matches: boolean
}

const BiochemistryDataRight: React.FC<BiochemistryDataRightProps> = ({
    editMode,
    matches,
}: BiochemistryDataRightProps) => {
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
                        <p className={styles.dataTitle}>Urine Acid Tests</p>
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
                        <p className={styles.dataCategory}>Urine Acid</p>
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
                        <p className={styles.dataTitle}>Blood Lipid Tests</p>
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
                        <p className={styles.dataCategory}>Triglyceride</p>
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
                        <p className={styles.dataCategory}>Cholesterol</p>
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
                        <p className={styles.dataCategory}>HDL-Cholesterol</p>
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
                        <p className={styles.dataCategory}>LDL-Cholesterol</p>
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
                        <p className={styles.dataCategory}>CHOL/HDL-C</p>
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
                        <p className={styles.dataTitle}>Ca.P.Fe Tests</p>
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
                        <p className={styles.dataCategory}>Ca</p>
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
                        <p className={styles.dataCategory}>P</p>
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
                        <p className={styles.dataCategory}>Fe</p>
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
                        <p className={styles.dataCategory}>TIBC</p>
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
                        <p className={styles.dataCategory}>% Saturation</p>
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
                        <p className={styles.dataTitle}>
                            Tissue Inflammation Screening
                        </p>
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
                        <p className={styles.dataCategory}>CRP</p>
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
                        <p className={styles.dataCategory}>HS_CRP</p>
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
export default BiochemistryDataRight
