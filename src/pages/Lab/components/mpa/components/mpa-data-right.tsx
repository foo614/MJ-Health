import TextField from '@mui/material/TextField'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import styles from '../_mpa.module.scss'

type MPADataRightProps = {
    editMode: boolean
    matches: boolean
}

const MPADataRight: React.FC<MPADataRightProps> = ({
    editMode,
    matches,
}: MPADataRightProps) => {
    return (
        <Table
            style={matches ? { tableLayout: 'fixed' } : { width: '800px' }}
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
                        <p
                            className={styles.dataTitle}
                            style={{ color: 'transparent' }}
                        >
                            -
                        </p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.currentDataBackgroundColor}
                    ></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>HDL-C</p>
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
                        <p className={styles.dataCategory}>LDL-C</p>
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
                        <p className={styles.dataCategory}>TG/HDL-C</p>
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
                        <p className={styles.dataCategory}>LDL/HDL-C</p>
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
                </TableRow>
                <TableRow>
                    <TableCell
                        style={{
                            border: '0',
                            paddingLeft: '10px',
                            paddingRight: '10px',
                        }}
                    >
                        <p
                            className={styles.dataTitle}
                            style={{ color: 'transparent' }}
                        >
                            -
                        </p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.currentDataBackgroundColor}
                    ></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>Fibrinogen</p>
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
                        <p className={styles.dataCategory}>Uric Acid</p>
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
                        <p
                            className={styles.dataTitle}
                            style={{ color: 'transparent' }}
                        >
                            -
                        </p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.currentDataBackgroundColor}
                    ></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell
                        style={{
                            border: '0',
                            paddingLeft: '10px',
                            paddingRight: '10px',
                        }}
                    >
                        <p
                            className={styles.dataTitle}
                            style={{ color: 'transparent' }}
                        >
                            -
                        </p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.currentDataBackgroundColor}
                    ></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>Bio Testosterone</p>
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
                        style={{ border: '0' }}
                        className={styles.ptpb0}
                    ></TableCell>
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
                        <p className={styles.dataCategory}>Estradiol</p>
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
                        <p className={styles.dataCategory}>TSH</p>
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
                        <p className={styles.dataCategory}>Free T4</p>
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
                        <p className={styles.dataCategory}>PSA</p>
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

export default MPADataRight
