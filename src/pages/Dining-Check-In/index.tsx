import ResponsiveAppBar from 'components/AppBar.tsx'
import styles from './_dining-check-in.module.scss'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Button from '@mui/material/Button'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { useNavigate } from 'react-router-dom'
import { DINING_PAGE } from 'constant'
import { Container } from '@mui/material'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TextField from '@mui/material/TextField'
const DiningCheckIn = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const navigate = useNavigate()
    return (
        <>
            <ResponsiveAppBar />
            <div className={styles.diningHeader}>
                <div
                    className={
                        matches
                            ? styles.diningTitleButtonDiv
                            : styles.diningTitleButtonDivMobile
                    }
                >
                    <Button
                        variant="text"
                        className={styles.diningBackButton}
                        startIcon={
                            <ChevronLeftIcon className={styles.backIcon} />
                        }
                        onClick={() => navigate(DINING_PAGE)}
                    >
                        BACK
                    </Button>
                </div>
                <div className={styles.diningHeaderTitle}>
                    <p>DINING</p>
                </div>
                <Container maxWidth="lg" style={{ marginTop: '1rem' }}>
                    <Card
                        className={styles.card}
                        sx={matches ? { padding: '3rem 5rem' } : {}}
                    >
                        <Card className={styles.innerCard}>
                            <div style={{ padding: '20px 50px' }}>
                                <p className={styles.innerCardTitle}>
                                    MEAL: VEGETARIAN
                                </p>
                                <div
                                    style={
                                        matches
                                            ? { marginTop: '2rem' }
                                            : {
                                                  maxWidth: '400px',
                                                  overflow: 'auto',
                                              }
                                    }
                                >
                                    <Table
                                        style={
                                            matches
                                                ? { tableLayout: 'fixed' }
                                                : { width: '800px' }
                                        }
                                        size="small"
                                    >
                                        <TableHead>
                                            <TableRow>
                                                <TableCell
                                                    className={
                                                        styles.titleCellMealTitle
                                                    }
                                                >
                                                    <p
                                                        className={
                                                            styles.mealTitle
                                                        }
                                                    >
                                                        Vegetarian Meal
                                                    </p>
                                                </TableCell>
                                                <TableCell
                                                    className={
                                                        styles.tableColumnTitle
                                                    }
                                                    sx={{
                                                        width: '30%',
                                                        borderRadius:
                                                            '8px 8px 0px 0px',
                                                    }}
                                                >
                                                    <p
                                                        className={
                                                            styles.columnTitle
                                                        }
                                                    >
                                                        Weight (gram){' '}
                                                    </p>
                                                </TableCell>
                                                <TableCell
                                                    className={styles.border0}
                                                    sx={{
                                                        width: '2%',
                                                    }}
                                                ></TableCell>
                                                <TableCell
                                                    className={
                                                        styles.tableColumnTitle
                                                    }
                                                    sx={{
                                                        width: '30%',
                                                        borderRadius:
                                                            '8px 8px 0px 0px',
                                                    }}
                                                >
                                                    <p
                                                        className={
                                                            styles.columnTitle
                                                        }
                                                    >
                                                        Energy/ Calories
                                                    </p>
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell
                                                    className={styles.titleCell}
                                                >
                                                    <p
                                                        className={
                                                            styles.mealCategory
                                                        }
                                                    >
                                                        Multigrain Rice
                                                    </p>
                                                </TableCell>
                                                <TableCell
                                                    className={
                                                        styles.tableColumn
                                                    }
                                                >
                                                    <TextField
                                                        size="small"
                                                        margin="dense"
                                                        fullWidth
                                                        InputProps={{
                                                            className:
                                                                styles.textFieldProps,
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell
                                                    className={styles.border0}
                                                ></TableCell>
                                                <TableCell
                                                    className={
                                                        styles.tableColumn
                                                    }
                                                >
                                                    <TextField
                                                        size="small"
                                                        margin="dense"
                                                        fullWidth
                                                        InputProps={{
                                                            className:
                                                                styles.textFieldProps,
                                                        }}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell
                                                    className={styles.titleCell}
                                                >
                                                    <p
                                                        className={
                                                            styles.mealCategory
                                                        }
                                                    >
                                                        Mushroom Soy Knot
                                                    </p>
                                                </TableCell>
                                                <TableCell
                                                    className={
                                                        styles.tableColumn
                                                    }
                                                >
                                                    <TextField
                                                        size="small"
                                                        margin="dense"
                                                        fullWidth
                                                        InputProps={{
                                                            className:
                                                                styles.textFieldProps,
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell
                                                    className={styles.border0}
                                                ></TableCell>
                                                <TableCell
                                                    className={
                                                        styles.tableColumn
                                                    }
                                                >
                                                    <TextField
                                                        size="small"
                                                        margin="dense"
                                                        fullWidth
                                                        InputProps={{
                                                            className:
                                                                styles.textFieldProps,
                                                        }}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell
                                                    className={styles.titleCell}
                                                >
                                                    <p
                                                        className={
                                                            styles.mealCategory
                                                        }
                                                    >
                                                        Chinese Cabbage Tofu
                                                    </p>
                                                </TableCell>
                                                <TableCell
                                                    className={
                                                        styles.tableColumn
                                                    }
                                                >
                                                    <TextField
                                                        size="small"
                                                        margin="dense"
                                                        fullWidth
                                                        InputProps={{
                                                            className:
                                                                styles.textFieldProps,
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell
                                                    className={styles.border0}
                                                ></TableCell>
                                                <TableCell
                                                    className={
                                                        styles.tableColumn
                                                    }
                                                >
                                                    <TextField
                                                        size="small"
                                                        margin="dense"
                                                        fullWidth
                                                        InputProps={{
                                                            className:
                                                                styles.textFieldProps,
                                                        }}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell
                                                    className={styles.titleCell}
                                                >
                                                    <p
                                                        className={
                                                            styles.mealCategory
                                                        }
                                                    >
                                                        Stearmed Pork Choy
                                                    </p>
                                                </TableCell>
                                                <TableCell
                                                    className={
                                                        styles.tableColumn
                                                    }
                                                >
                                                    <TextField
                                                        size="small"
                                                        margin="dense"
                                                        fullWidth
                                                        InputProps={{
                                                            className:
                                                                styles.textFieldProps,
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell
                                                    className={styles.border0}
                                                ></TableCell>
                                                <TableCell
                                                    className={
                                                        styles.tableColumn
                                                    }
                                                >
                                                    <TextField
                                                        size="small"
                                                        margin="dense"
                                                        fullWidth
                                                        InputProps={{
                                                            className:
                                                                styles.textFieldProps,
                                                        }}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell
                                                    className={styles.titleCell}
                                                >
                                                    <p
                                                        className={
                                                            styles.mealCategory
                                                        }
                                                    >
                                                        Old Cucumber Soup
                                                    </p>
                                                </TableCell>
                                                <TableCell
                                                    className={
                                                        styles.tableColumn
                                                    }
                                                >
                                                    <TextField
                                                        size="small"
                                                        margin="dense"
                                                        fullWidth
                                                        InputProps={{
                                                            className:
                                                                styles.textFieldProps,
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell
                                                    className={styles.border0}
                                                ></TableCell>
                                                <TableCell
                                                    className={
                                                        styles.tableColumn
                                                    }
                                                >
                                                    <TextField
                                                        size="small"
                                                        margin="dense"
                                                        fullWidth
                                                        InputProps={{
                                                            className:
                                                                styles.textFieldProps,
                                                        }}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell
                                                    className={styles.titleCell}
                                                >
                                                    <p
                                                        className={
                                                            styles.mealCategory
                                                        }
                                                    >
                                                        Melon
                                                    </p>
                                                </TableCell>
                                                <TableCell
                                                    className={
                                                        styles.tableColumn
                                                    }
                                                >
                                                    <TextField
                                                        size="small"
                                                        margin="dense"
                                                        fullWidth
                                                        InputProps={{
                                                            className:
                                                                styles.textFieldProps,
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell
                                                    className={styles.border0}
                                                ></TableCell>
                                                <TableCell
                                                    className={
                                                        styles.tableColumn
                                                    }
                                                >
                                                    <TextField
                                                        size="small"
                                                        margin="dense"
                                                        fullWidth
                                                        InputProps={{
                                                            className:
                                                                styles.textFieldProps,
                                                        }}
                                                    />
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell
                                                    style={{ border: '0' }}
                                                ></TableCell>
                                                <TableCell
                                                    className={
                                                        styles.tableColumnEnd
                                                    }
                                                    sx={{
                                                        borderRadius:
                                                            '0px 0px 8px 8px',
                                                    }}
                                                ></TableCell>
                                                <TableCell
                                                    className={styles.border0}
                                                ></TableCell>
                                                <TableCell
                                                    className={
                                                        styles.tableColumnEnd
                                                    }
                                                    sx={{
                                                        borderRadius:
                                                            '0px 0px 8px 8px',
                                                    }}
                                                ></TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>

                                <div className={styles.confirmBttnDiv}>
                                    <Button
                                        variant="contained"
                                        className={styles.confirmBttn}
                                        sx={
                                            matches
                                                ? { width: '25%' }
                                                : { width: 'auto' }
                                        }
                                        onClick={() => navigate(DINING_PAGE)}
                                    >
                                        Confirm
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </Card>
                </Container>
            </div>
        </>
    )
}
export default DiningCheckIn
