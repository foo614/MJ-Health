import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Grid, TextField } from '@mui/material'
import styles from '../../_health-management-consultation-info.module.scss'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
const LifeStyleRiskFactor = () => {
    const theme = useTheme()
    const lgUp = useMediaQuery(theme.breakpoints.up('lg'))
    return (
        <>
            <div
                style={{
                    paddingBottom: '20px',
                    overflow: 'auto',
                }}
            >
                <Grid container>
                    <Grid item md={12} xs={12}>
                        <TableContainer
                            sx={{
                                width: lgUp ? 'auto' : '800px',
                                overflow: 'auto',
                            }}
                        >
                            <Table stickyHeader size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                paddingLeft: '24px',
                                                paddingBottom: '20px',
                                                borderBottom:
                                                    '2px solid #EDEDED',
                                            }}
                                        >
                                            <p
                                                className={
                                                    styles.main_section_text
                                                }
                                            >
                                                Items
                                            </p>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                paddingBottom: '20px',
                                                borderBottom:
                                                    '2px solid #EDEDED',
                                            }}
                                        >
                                            <p
                                                className={
                                                    styles.diatery_lifestyle_item
                                                }
                                                style={{ textAlign: 'center' }}
                                            >
                                                Value
                                            </p>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                paddingLeft: '24px',
                                                paddingBottom: '20px',
                                                borderBottom:
                                                    '2px solid #EDEDED',
                                            }}
                                        >
                                            <p
                                                className={
                                                    styles.main_section_text
                                                }
                                            >
                                                Items
                                            </p>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                paddingBottom: '20px',
                                                borderBottom:
                                                    '2px solid #EDEDED',
                                            }}
                                        >
                                            <p
                                                className={
                                                    styles.diatery_lifestyle_item
                                                }
                                                style={{ textAlign: 'center' }}
                                            >
                                                Value
                                            </p>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow>
                                        <TableCell
                                            sx={{ paddingLeft: '24px' }}
                                            className={
                                                styles.lifestyle_risk_table_cell
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.currentTableExamItemCellValue
                                                }
                                            >
                                                Exercise
                                            </p>
                                        </TableCell>
                                        <TableCell
                                            className={
                                                styles.lifestyle_risk_table_cell
                                            }
                                        >
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
                                                className={
                                                    styles.textFieldProps
                                                }
                                                fullWidth
                                            />
                                        </TableCell>
                                        <TableCell
                                            sx={{ paddingLeft: '24px' }}
                                            className={
                                                styles.lifestyle_risk_table_cell
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.currentTableExamItemCellValue
                                                }
                                            >
                                                BP (Right Hand)
                                            </p>
                                        </TableCell>
                                        <TableCell
                                            className={
                                                styles.lifestyle_risk_table_cell
                                            }
                                        >
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
                                                className={
                                                    styles.textFieldProps
                                                }
                                                fullWidth
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{ paddingLeft: '24px' }}
                                            className={
                                                styles.lifestyle_risk_table_cell
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.currentTableExamItemCellValue
                                                }
                                            >
                                                Regular Meal Time
                                            </p>
                                        </TableCell>
                                        <TableCell
                                            className={
                                                styles.lifestyle_risk_table_cell
                                            }
                                        >
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
                                                className={
                                                    styles.textFieldProps
                                                }
                                                fullWidth
                                            />
                                        </TableCell>
                                        <TableCell
                                            sx={{ paddingLeft: '24px' }}
                                            className={
                                                styles.lifestyle_risk_table_cell
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.currentTableExamItemCellValue
                                                }
                                            >
                                                BP (Right Hand)
                                            </p>
                                        </TableCell>
                                        <TableCell
                                            className={
                                                styles.lifestyle_risk_table_cell
                                            }
                                        >
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
                                                className={
                                                    styles.textFieldProps
                                                }
                                                fullWidth
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{ paddingLeft: '24px' }}
                                            className={
                                                styles.lifestyle_risk_table_cell
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.currentTableExamItemCellValue
                                                }
                                            >
                                                Sleeping Hours
                                            </p>
                                        </TableCell>
                                        <TableCell
                                            className={
                                                styles.lifestyle_risk_table_cell
                                            }
                                        >
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
                                                className={
                                                    styles.textFieldProps
                                                }
                                                fullWidth
                                            />
                                        </TableCell>
                                        <TableCell
                                            sx={{ paddingLeft: '24px' }}
                                            className={
                                                styles.lifestyle_risk_table_cell
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.currentTableExamItemCellValue
                                                }
                                            >
                                                BP (Right Hand)
                                            </p>
                                        </TableCell>
                                        <TableCell
                                            className={
                                                styles.lifestyle_risk_table_cell
                                            }
                                        >
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
                                                className={
                                                    styles.textFieldProps
                                                }
                                                fullWidth
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{ paddingLeft: '24px' }}
                                            className={
                                                styles.lifestyle_risk_table_cell
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.currentTableExamItemCellValue
                                                }
                                            >
                                                Blood Pressure
                                            </p>
                                        </TableCell>
                                        <TableCell
                                            className={
                                                styles.lifestyle_risk_table_cell
                                            }
                                        >
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
                                                className={
                                                    styles.textFieldProps
                                                }
                                                fullWidth
                                            />
                                        </TableCell>
                                        <TableCell
                                            sx={{ paddingLeft: '24px' }}
                                            className={
                                                styles.lifestyle_risk_table_cell
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.currentTableExamItemCellValue
                                                }
                                            >
                                                BP (Left Hand)
                                            </p>
                                        </TableCell>
                                        <TableCell
                                            className={
                                                styles.lifestyle_risk_table_cell
                                            }
                                        >
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
                                                className={
                                                    styles.textFieldProps
                                                }
                                                fullWidth
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{ paddingLeft: '24px' }}
                                            className={
                                                styles.lifestyle_risk_table_cell
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.currentTableExamItemCellValue
                                                }
                                            >
                                                Cholesterol
                                            </p>
                                        </TableCell>
                                        <TableCell
                                            className={
                                                styles.lifestyle_risk_table_cell
                                            }
                                        >
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
                                                className={
                                                    styles.textFieldProps
                                                }
                                                fullWidth
                                            />
                                        </TableCell>
                                        <TableCell
                                            sx={{ paddingLeft: '24px' }}
                                            className={
                                                styles.lifestyle_risk_table_cell
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.currentTableExamItemCellValue
                                                }
                                            >
                                                Color Blind/ Deficiency
                                            </p>
                                        </TableCell>
                                        <TableCell
                                            className={
                                                styles.lifestyle_risk_table_cell
                                            }
                                        >
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
                                                className={
                                                    styles.textFieldProps
                                                }
                                                fullWidth
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                paddingLeft: '24px',
                                                borderBottom:
                                                    '2px solid #EDEDED',
                                            }}
                                            className={
                                                styles.lifestyle_risk_table_cell
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.currentTableExamItemCellValue
                                                }
                                            >
                                                Triglyceride
                                            </p>
                                        </TableCell>
                                        <TableCell
                                            className={
                                                styles.lifestyle_risk_table_cell
                                            }
                                            sx={{
                                                borderBottom:
                                                    '2px solid #EDEDED',
                                            }}
                                        >
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
                                                className={
                                                    styles.textFieldProps
                                                }
                                                fullWidth
                                            />
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                paddingLeft: '24px',
                                                borderBottom:
                                                    '2px solid #EDEDED',
                                            }}
                                            className={
                                                styles.lifestyle_risk_table_cell
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.currentTableExamItemCellValue
                                                }
                                            >
                                                Astigmatism
                                            </p>
                                        </TableCell>
                                        <TableCell
                                            className={
                                                styles.lifestyle_risk_table_cell
                                            }
                                            sx={{
                                                borderBottom:
                                                    '2px solid #EDEDED',
                                            }}
                                        >
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
                                                className={
                                                    styles.textFieldProps
                                                }
                                                fullWidth
                                            />
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default LifeStyleRiskFactor
