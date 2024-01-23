import styles from '../../_interview-info.module.scss'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { TextField, Button } from '@mui/material'
const PersonalComplaint = () => {
    return (
        <>
            <div style={{ paddingLeft: '30px', paddingRight: '30px' }}>
                <p className={styles.medical_content_title}>
                    Complaint History
                </p>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell width="20%" sx={{ paddingLeft: '0px' }}>
                                <p className={styles.tableHeadCellText}>
                                    Exam.Date
                                </p>
                            </TableCell>
                            <TableCell width="80%" sx={{ paddingLeft: '0px' }}>
                                <p className={styles.tableHeadCellText}>
                                    Description
                                </p>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell
                                sx={{ paddingLeft: '0px', borderBottom: '0' }}
                            >
                                <p className={styles.infoModalTopText}>
                                    25-03-2018
                                </p>
                            </TableCell>
                            <TableCell
                                sx={{ paddingLeft: '0px', borderBottom: '0' }}
                            >
                                <p className={styles.infoModalTopText}>-</p>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <div style={{ marginTop: '2rem' }}>
                    <p className={styles.medical_content_title}>
                        New Complaint
                    </p>
                    <div>
                        <TextField
                            margin="dense"
                            variant="outlined"
                            size="small"
                            InputProps={{
                                classes: {
                                    input: styles.inputField,
                                },
                            }}
                            fullWidth
                            className={styles.modalFormField}
                            rows={10}
                            placeholder="Type in your message & recommendation."
                            multiline
                        />
                    </div>
                </div>
                <div style={{ marginTop: '2rem', textAlign: 'end' }}>
                    <Button
                        variant="contained"
                        className={styles.interview_info_save_bttn}
                        sx={{ width: '220px', height: '64px' }}
                    >
                        Save
                    </Button>
                </div>
            </div>
        </>
    )
}

export default PersonalComplaint
