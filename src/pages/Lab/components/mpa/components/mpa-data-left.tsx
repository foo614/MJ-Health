import TextField from '@mui/material/TextField'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import styles from '../_mpa.module.scss'

type MPADataLeftProps = {
    editMode: boolean
    matches: boolean
}

const MPADataLeft: React.FC<MPADataLeftProps> = ({
    editMode,
    matches,
}: MPADataLeftProps) => {
    return (
        <Table
            style={matches ? {tableLayout:"fixed"} : { width: '800px' }}
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
                        <p className={styles.dataTitleColumn}>Value</p>
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
                        <p className={styles.dataTitle}>Metabolic Assessment</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.currentDataBackgroundColor}
                    ></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>Glucose</p>
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
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>Insulin</p>
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
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>TG</p>
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
                            Inflammation Assessment
                        </p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.currentDataBackgroundColor}
                    ></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>HS_CRP</p>
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
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>Ferritin</p>
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
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>Homocysteine</p>
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
                </TableRow>
                <TableRow>
                    <TableCell
                        style={{
                            border: '0',
                            paddingLeft: '10px',
                            paddingRight: '10px',
                        }}
                    >
                        <p className={styles.dataTitle}>Hormonal Assessment</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.currentDataBackgroundColor}
                    ></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>FSH</p>
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
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>LH</p>
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
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>Testosterone</p>
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
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>SHBG</p>
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
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>hba1c</p>
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
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default MPADataLeft
