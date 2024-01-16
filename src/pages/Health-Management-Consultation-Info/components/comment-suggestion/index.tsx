import styles from '../../_health-management-consultation-info.module.scss'
import { TextField, Button, Stack } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
const CommentSuggestion = () => {
    const bottomTableData = [
        {
            code: '01',
            content:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        },
        {
            code: '02',
            content:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        },
        {
            code: '03',
            content:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        },
        {
            code: '04',
            content:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        },
        {
            code: '05',
            content:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        },
        {
            code: '06',
            content:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        },
        {
            code: '07',
            content:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        },
        {
            code: '08',
            content:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        },
        {
            code: '09',
            content:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        },
        {
            code: '10',
            content:
                'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
        },
    ]

    return (
        <div
            className={styles.main_section_div}
            style={{ paddingBottom: '20px' }}
        >
            <p className={styles.main_section_text}>Overview</p>
            <div style={{ marginTop: '10px' }}>
                <TextField
                    InputProps={{
                        classes: {
                            input: styles.inputField,
                        },
                    }}
                    variant="outlined"
                    size="small"
                    margin="dense"
                    name="water_intake"
                    className={styles.textFieldProps}
                    fullWidth
                    placeholder="Search ..."
                />
            </div>

            <div style={{ marginTop: '20px' }}>
                <TableContainer
                    component={Paper}
                    className={styles.current_table_bottom_table}
                >
                    <Table stickyHeader size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <p className={styles.tableHeadCellText}>
                                        Code
                                    </p>
                                </TableCell>
                                <TableCell colSpan={2}>
                                    <p className={styles.tableHeadCellText}>
                                        Content
                                    </p>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {bottomTableData.map((item: any, index: number) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell
                                            sx={{
                                                borderBottom: '0',
                                                backgroundColor: '#F9F9F9',
                                            }}
                                        >
                                            <p
                                                className={
                                                    styles.currentTableExamItemCellValue
                                                }
                                                style={{ textAlign: 'center' }}
                                            >
                                                {item.code}
                                            </p>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                borderBottom: '0',

                                                backgroundColor: '#F9F9F9',
                                            }}
                                        >
                                            <Stack
                                                direction="row"
                                                alignItems="center"
                                            >
                                                <div>
                                                    <p
                                                        className={
                                                            styles.tableHeadCellText
                                                        }
                                                    >
                                                        {item.content}
                                                    </p>
                                                </div>

                                                <Stack
                                                    direction="row"
                                                    sx={{
                                                        marginLeft: 'auto',
                                                    }}
                                                    spacing={2}
                                                >
                                                    <Button
                                                        variant="text"
                                                        className={
                                                            styles.editBttn
                                                        }
                                                    >
                                                        Edit
                                                    </Button>
                                                    <Button
                                                        variant="text"
                                                        className={
                                                            styles.deleteBttn
                                                        }
                                                    >
                                                        Delete
                                                    </Button>
                                                </Stack>
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default CommentSuggestion
