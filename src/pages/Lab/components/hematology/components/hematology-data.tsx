// import { Grid } from '@mui/material'
import styles from '../_hematology.module.scss'
import TextField from '@mui/material/TextField'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

type HematologyDataProps = {
    editMode: boolean
}

const HematologyData: React.FC<HematologyDataProps> = ({
    editMode,
}: HematologyDataProps) => {
    return (
        <Table sx={{ minWidth: 700 }} className={styles.dataTable}>
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
                    <TableCell style={{ border: '0' }}>
                        <p className={styles.dataTitle}>Blood Test</p>
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
                    <TableCell style={{ border: '0' }}>
                        <p className={styles.dataCategory}>WBC</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.currentDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }}>
                        <p className={styles.dataCategory}>RBC</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.currentDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }}>
                        <p className={styles.dataCategory}>Hb</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.currentDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }}>
                        <p className={styles.dataCategory}>Hematocrit</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.currentDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }}>
                        <p className={styles.dataCategory}>MCV</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.currentDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }}>
                        <p className={styles.dataCategory}>MCH</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.currentDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }}>
                        <p className={styles.dataCategory}>MCHC</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.currentDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }}>
                        <p className={styles.dataCategory}>RDW</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.currentDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }}>
                        <p className={styles.dataCategory}>PLT</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.currentDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }}>
                        <p className={styles.dataTitle}>
                            WBC Differential Count
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
                    <TableCell style={{ border: '0' }}>
                        <p className={styles.dataCategory}>Neutrophils</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.currentDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }}>
                        <p className={styles.dataCategory}>Lymphocytes</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.currentDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }}>
                        <p className={styles.dataCategory}>Monocytes</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.currentDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }}>
                        <p className={styles.dataCategory}>Eosinophils</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.currentDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }}>
                        <p className={styles.dataCategory}>Basophilis</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.currentDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }}>
                        <p className={styles.dataTitle}>ABO Blood Type</p>
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
                    <TableCell style={{ border: '0' }}>
                        <p className={styles.dataCategory}>ABO Blood Type</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.currentDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell
                        style={{
                            border: '0',
                        }}
                    >
                        <p className={styles.dataCategory}>Rhesus Typing</p>
                    </TableCell>
                    <TableCell
                        style={{
                            border: '0',
                            borderRadius: '0px 0px 8px 8px',
                        }}
                        className={styles.currentDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{
                            border: '0',
                            borderRadius: '0px 0px 8px 8px',
                        }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                    <TableCell
                        style={{
                            border: '0',
                            borderRadius: '0px 0px 8px 8px',
                        }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <TextField
                            size="small"
                            fullWidth
                            disabled={editMode ? false : true}
                        />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default HematologyData
