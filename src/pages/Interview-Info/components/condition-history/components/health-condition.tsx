import { Grid, TextField, Stack, Button } from '@mui/material'
import styles from '../../../_interview-info.module.scss'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useState } from 'react'
import CurrentTableEditModal from './comment-suggestion-modal'

const HealthCondition = () => {
    const [openCommentSectionModal, setOpenCommentSectionModal] =
        useState<boolean>()
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
        <>
            <div
                style={{
                    marginTop: '2rem',
                    paddingLeft: '30px',
                    paddingRight: '30px',
                }}
            >
                <p className={styles.medical_content_title}>
                    Health Conditions
                </p>
                <Grid container spacing={2}>
                    <Grid item md={12} xs={12} sm={12} lg={6} xl={6}>
                        <TextField
                            margin="dense"
                            variant="outlined"
                            size="small"
                            InputProps={{
                                classes: {
                                    input: styles.inputField,
                                },
                                readOnly: true,
                            }}
                            onClick={() => setOpenCommentSectionModal(true)}
                            fullWidth
                            className={styles.modalFormField}
                            placeholder="Search"
                            sx={{ cursor: 'pointer' }}
                        />
                        <TableContainer
                            component={Paper}
                            className={styles.health_condition_table}
                        >
                            <Table stickyHeader size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            <p
                                                className={
                                                    styles.tableHeadCellText
                                                }
                                            >
                                                No.
                                            </p>
                                        </TableCell>
                                        <TableCell colSpan={2}>
                                            <p
                                                className={
                                                    styles.tableHeadCellText
                                                }
                                            >
                                                Content
                                            </p>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {bottomTableData.map(
                                        (item: any, index: number) => {
                                            return (
                                                <TableRow key={index}>
                                                    <TableCell
                                                        sx={{
                                                            borderBottom: '0',
                                                            backgroundColor:
                                                                '#F9F9F9',
                                                        }}
                                                    >
                                                        <p
                                                            className={
                                                                styles.tableCellValue
                                                            }
                                                            style={{
                                                                textAlign:
                                                                    'center',
                                                            }}
                                                        >
                                                            {item.code}
                                                        </p>
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{
                                                            borderBottom: '0',

                                                            backgroundColor:
                                                                '#F9F9F9',
                                                        }}
                                                    >
                                                        <Stack
                                                            direction="row"
                                                            alignItems="center"
                                                        >
                                                            <div>
                                                                <p
                                                                    className={
                                                                        styles.tableCellValue
                                                                    }
                                                                >
                                                                    {
                                                                        item.content
                                                                    }
                                                                </p>
                                                            </div>

                                                            <Stack
                                                                direction="row"
                                                                sx={{
                                                                    marginLeft:
                                                                        'auto',
                                                                }}
                                                                spacing={2}
                                                            >
                                                                <Button
                                                                    variant="text"
                                                                    className={
                                                                        styles.editBttn
                                                                    }
                                                                    onClick={() =>
                                                                        setOpenCommentSectionModal(
                                                                            true
                                                                        )
                                                                    }
                                                                >
                                                                    Edit
                                                                </Button>
                                                                <Button
                                                                    variant="text"
                                                                    className={
                                                                        styles.health_condition_delete_bttn
                                                                    }
                                                                >
                                                                    Delete
                                                                </Button>
                                                            </Stack>
                                                        </Stack>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item md={12} xs={12} sm={12} lg={6} xl={6}>
                        <div style={{ paddingTop: '5px', height: '100%' }}>
                            <div
                                className={
                                    styles.health_conditon_other_comment_div
                                }
                            >
                                <p className={styles.tableHeadCellText}>
                                    Other Comment
                                </p>
                            </div>
                            <div style={{ height: '100%' }}>
                                <TextField
                                    margin="dense"
                                    variant="outlined"
                                    size="small"
                                    InputProps={{
                                        classes: {
                                            input: styles.inputField,
                                        },
                                    }}
                                    onClick={() => console.log('open')}
                                    fullWidth
                                    className={styles.modalFormField}
                                    // sx={{ height: '100%' }}
                                    rows={13}
                                    placeholder="Type in your message & recommendation."
                                    multiline
                                />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            {openCommentSectionModal ? (
                <CurrentTableEditModal
                    open={openCommentSectionModal}
                    setOpen={setOpenCommentSectionModal}
                />
            ) : null}
        </>
    )
}
export default HealthCondition
