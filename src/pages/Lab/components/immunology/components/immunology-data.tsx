import TextField from '@mui/material/TextField'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import styles from '../_immunology.module.scss'

type ImmunologyDataProps = {
    editMode: boolean
}

const ImmunologyData: React.FC<ImmunologyDataProps> = ({
    editMode,
}: ImmunologyDataProps) => {
    return (
        <Table className={styles.dataTable}>
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
                    {/* For right Table */}
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
                        style={{ border: '0' }}
                        className={styles.rowRemovePaddingTopBottom}
                    >
                        <p className={styles.dataCategory}>HBsAG</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
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
                    {/* For Right Table */}
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.rowRemovePaddingTopBottom}
                    >
                        <p className={styles.dataCategory}>TSH</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
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
                        style={{ border: '0' }}
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
                        style={{ border: '0' }}
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
            {/* <TableBody>
                <TableRow>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.rowRemovePaddingTopBottom}
                    >
                        <p className={styles.dataCategory}>TSH</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
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
                        style={{ border: '0' }}
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
                        style={{ border: '0' }}
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
                <TableRow>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.rowRemovePaddingTopBottom}
                    >
                        <p className={styles.dataCategory}>F-T4</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
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
                        style={{ border: '0' }}
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
                        style={{ border: '0' }}
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
                <TableRow>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.rowRemovePaddingTopBottom}
                    >
                        <p className={styles.dataCategory}>a-FP</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
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
                        style={{ border: '0' }}
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
                        style={{ border: '0' }}
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
                <TableRow>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.rowRemovePaddingTopBottom}
                    >
                        <p className={styles.dataCategory}>
                            CEA{' '}
                            <span style={{ color: '#5A567B' }}>
                                (General/Smoker)
                            </span>
                        </p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
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
                        style={{ border: '0' }}
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
                        style={{ border: '0' }}
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
                <TableRow>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.rowRemovePaddingTopBottom}
                    >
                        <p className={styles.dataCategory}>RA Factor (RF)</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
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
                        className={styles.rowRemovePaddingTopBottom}
                    >
                        <p className={styles.dataCategory}>RPR</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
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
                        style={{ border: '0' }}
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
                        style={{ border: '0' }}
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
                <TableRow>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.rowRemovePaddingTopBottom}
                    >
                        <p className={styles.dataCategory}>TPHA with Titre </p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
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
                        className={styles.rowRemovePaddingTopBottom}
                    >
                        <p className={styles.dataCategory}>Anti-HCV</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
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
                        className={styles.rowRemovePaddingTopBottom}
                    >
                        <p className={styles.dataCategory}>AIDS</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
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
                        className={styles.rowRemovePaddingTopBottom}
                    >
                        <p className={styles.dataCategory}>PSA</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
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
                        style={{ border: '0' }}
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
                        style={{ border: '0' }}
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
                <TableRow>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.rowRemovePaddingTopBottom}
                    >
                        <p className={styles.dataCategory}>CA15-3</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
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
                        style={{ border: '0' }}
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
                        style={{ border: '0' }}
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
                <TableRow>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.rowRemovePaddingTopBottom}
                    >
                        <p className={styles.dataCategory}>CA125</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
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
                        style={{ border: '0' }}
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
                        style={{ border: '0' }}
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
                <TableRow>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.rowRemovePaddingTopBottom}
                    >
                        <p className={styles.dataCategory}>CA19-9</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
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
                        style={{ border: '0' }}
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
                        style={{ border: '0' }}
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
                <TableRow>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.rowRemovePaddingTopBottom}
                    >
                        <p className={styles.dataCategory}>H.pylori Ab</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
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
                        style={{ border: '0' }}
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
                        style={{ border: '0' }}
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
                <TableRow>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.rowRemovePaddingTopBottom}
                    >
                        <p className={styles.dataCategory}>Homocysteine</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
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
                        style={{ border: '0' }}
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
                        style={{ border: '0' }}
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
                <TableRow>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.rowRemovePaddingTopBottom}
                    >
                        <p className={styles.dataCategory}>Insulin</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
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
                        style={{ border: '0' }}
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
                        style={{ border: '0' }}
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
                <TableRow>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.rowRemovePaddingTopBottom}
                    >
                        <p className={styles.dataCategory}>Testosterone</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
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
                        style={{ border: '0' }}
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
                        style={{ border: '0' }}
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
                <TableRow>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.rowRemovePaddingTopBottom}
                    >
                        <p className={styles.dataCategory}>Vitamin D</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0', borderRadius: '0px 0px 8px 8px' }}
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
                        style={{ border: '0', borderRadius: '0px 0px 8px 8px' }}
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
                        style={{ border: '0', borderRadius: '0px 0px 8px 8px' }}
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
            </TableBody> */}
        </Table>
    )
}

export default ImmunologyData
