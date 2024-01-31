import { Grid, Stack } from '@mui/material'
import styles from '../_hmp-brochure.module.scss'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const Page3 = () => {
    const theme = useTheme()
    const mdUp = useMediaQuery(theme.breakpoints.up('md'))
    const table_data = [
        {
            id: 1,
            factor: 'High uric acid level',
            risk: '1.2',
        },
        {
            id: 2,
            factor: '',
            risk: '',
        },
        {
            id: 3,
            factor: '',
            risk: '',
        },
        {
            id: 4,
            factor: '',
            risk: '',
        },
        {
            id: 5,
            factor: '',
            risk: '',
        },
    ]
    return (
        <>
            <div className={styles.outer_div_background}>
                <div className={styles.paddingSection}>
                    <p className={styles.hmp_title}>Health Risk Groups</p>
                    <p
                        className={styles.hmp_subtitle}
                        style={{ marginTop: '10px', marginBottom: '10px' }}
                    >
                        According to your health questionnaire and screening
                        results, you belong to the following risk groups:
                    </p>
                    <p
                        className={styles.page_3_sub_title}
                        style={{ marginTop: '10px', marginBottom: '10px' }}
                    >
                        Diabetes Mellitus, Obesity, -{' '}
                    </p>
                    <Stack
                        direction={{
                            xs: 'column',
                            sm: 'column',
                            md: 'row',
                            lg: 'row',
                            xl: 'row',
                        }}
                        spacing={{
                            xs: 0,
                            sm: 0,
                            md: 3,
                            lg: 3,
                            xl: 3,
                        }}
                        sx={{ marginTop: '10px', marginBottom: '10px' }}
                    >
                        <p className={styles.hmp_subtitle}>
                            The five major factors affecting your health are:
                        </p>
                        <p className={styles.page_3_sub_title}>
                            High uric acid level, Insufficient Exercise
                        </p>
                    </Stack>
                    <p
                        className={styles.hmp_subtitle}
                        style={{ marginTop: '10px', marginBottom: '10px' }}
                    >
                        According to MJ Health database analysis, when compared
                        to those without the aforementioned factors, the effects
                        on the independent risk of death are:
                    </p>
                    <div
                        style={{
                            paddingLeft: '15px',
                            paddingRight: '15px',
                            marginTop: '15px',
                        }}
                    >
                        <TableContainer>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell
                                            className={
                                                styles.table_head_cell_color
                                            }
                                            sx={{
                                                borderRadius: '3px 0px 0px 0px',
                                            }}
                                            width="60%"
                                        >
                                            <p
                                                className={
                                                    styles.table_head_cell
                                                }
                                                style={{ textAlign: 'center' }}
                                            >
                                                The five major factors affecting
                                                your health
                                            </p>
                                        </TableCell>
                                        <TableCell
                                            className={
                                                styles.table_head_cell_color
                                            }
                                            sx={{
                                                borderRadius: '0px 3px 0px 0px',
                                            }}
                                            width={'40%'}
                                        >
                                            <p
                                                className={
                                                    styles.table_head_cell
                                                }
                                                style={{ textAlign: 'center' }}
                                            >
                                                Risk of death
                                            </p>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {table_data.map(
                                        (item: any, index: number) => {
                                            return (
                                                <TableRow key={index}>
                                                    <TableCell
                                                        sx={{
                                                            borderRight:
                                                                '1px solid rgba(224, 224, 224, 1)',
                                                            borderLeft:
                                                                '1px solid rgba(224, 224, 224, 1)',
                                                            background:
                                                                '#FDFDFD',
                                                        }}
                                                    >
                                                        <p
                                                            className={
                                                                styles.page_3_sub_title
                                                            }
                                                            style={{
                                                                textAlign:
                                                                    'center',
                                                            }}
                                                        >
                                                            {item.factor}
                                                        </p>
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{
                                                            borderRight:
                                                                '1px solid rgba(224, 224, 224, 1)',
                                                            background:
                                                                '#FDFDFD',
                                                        }}
                                                    >
                                                        <Stack
                                                            direction="row"
                                                            justifyContent="center"
                                                            spacing={2}
                                                        >
                                                            {item.risk ? (
                                                                <div>
                                                                    <p
                                                                        className={
                                                                            styles.page_3_sub_title
                                                                        }
                                                                    >
                                                                        {
                                                                            item.risk
                                                                        }
                                                                    </p>
                                                                </div>
                                                            ) : (
                                                                <div
                                                                    style={{
                                                                        width: '20px',
                                                                    }}
                                                                />
                                                            )}

                                                            <div>
                                                                <p
                                                                    className={
                                                                        styles.hmp_subtitle
                                                                    }
                                                                >
                                                                    Times
                                                                </p>
                                                            </div>
                                                        </Stack>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <p>
                            <span className={styles.hmp_subtitle}>
                                By following the health management instructions,
                                your health age can be reduced to{' '}
                            </span>{' '}
                            <span
                                className={styles.page_3_sub_title}
                                style={{
                                    marginLeft: '10px',
                                    marginRight: '10px',
                                }}
                            >
                                19
                            </span>{' '}
                            <span className={styles.hmp_subtitle}>years.</span>
                        </p>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <p>
                            <span className={styles.hmp_subtitle}>
                                When compared to other MJ members in your age
                                group (from
                            </span>{' '}
                            <span
                                className={styles.page_3_sub_title}
                                style={{
                                    marginLeft: '10px',
                                    marginRight: '10px',
                                }}
                            >
                                19
                            </span>{' '}
                            <span className={styles.hmp_subtitle}>to</span>{' '}
                            <span
                                className={styles.page_3_sub_title}
                                style={{
                                    marginLeft: '10px',
                                    marginRight: '10px',
                                }}
                            >
                                24
                            </span>
                            <span className={styles.hmp_subtitle}>
                                ), your health ranking is:
                            </span>
                        </p>
                    </div>
                    <div
                        style={{
                            marginTop: '20px',
                            paddingLeft: '15px',
                            paddingRight: '15px',
                        }}
                    >
                        <ButtonGroup
                            variant="contained"
                            fullWidth
                            orientation={mdUp ? 'horizontal' : 'vertical'}
                        >
                            <Button className={styles.page_3_unselected_bttn}>
                                Poor (1-15)
                            </Button>
                            <Button className={styles.page_3_unselected_bttn}>
                                Below Average (16-35)
                            </Button>
                            <Button className={styles.page_3_unselected_bttn}>
                                Fair (36-56)
                            </Button>
                            <Button className={styles.page_3_unselected_bttn}>
                                Good (66-85)
                            </Button>
                            <Button className={styles.page_3_selected_bttn}>
                                Excellent (86-100)
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
            <div className={styles.paddingSection}>
                <p className={styles.hmp_title}>Morbidity Prediction</p>
                <p
                    className={styles.hmp_subtitle}
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                >
                    According to the research results of MJ’s collaboration with
                    the academies, we offer you the Five-Year Morbidity
                    Prediction Model of Chronic Diseases (diabetes, obesity,
                    metabolic syndrome (MetS), dyslipidemia, hypertension,
                    Osteoporosis and lung cancer) to help you better in health
                    promotion. In future, MJ will continue to develop prediction
                    model for more chronic diseases to help you achieve
                    comprehensive health management.
                </p>
                <p
                    className={styles.hmp_subtitle}
                    style={{ marginTop: '10px', marginBottom: '10px' }}
                >
                    Your five-year morbidity for the following chronic diseases
                    higher than the incidence of MJ Group is:
                </p>

                <div
                    style={{
                        paddingLeft: '15px',
                        paddingRight: '15px',
                        marginTop: '15px',
                    }}
                >
                    <TableContainer>
                        <Table size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        className={styles.table_head_cell_color}
                                        sx={{
                                            borderRadius: '3px 0px 0px 0px',
                                        }}
                                        width="30%"
                                    >
                                        <p
                                            className={styles.table_head_cell}
                                            style={{ textAlign: 'center' }}
                                        >
                                            Chronic Diseases
                                        </p>
                                    </TableCell>
                                    <TableCell
                                        className={styles.table_head_cell_color}
                                        width="30%"
                                    >
                                        <p
                                            className={styles.table_head_cell}
                                            style={{ textAlign: 'center' }}
                                        >
                                            Predictive Five-Year Morbidity
                                        </p>
                                    </TableCell>
                                    <TableCell
                                        className={styles.table_head_cell_color}
                                        sx={{
                                            borderRadius: '0px 3px 0px 0px',
                                        }}
                                        width={'30%'}
                                    >
                                        <p
                                            className={styles.table_head_cell}
                                            style={{ textAlign: 'center' }}
                                        >
                                            The Incident of MJ Group
                                        </p>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* Row 1 */}
                                <TableRow>
                                    <TableCell
                                        height="40"
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                            borderLeft:
                                                '1px solid rgba(224, 224, 224, 1)',
                                            background: '#FDFDFD',
                                        }}
                                    ></TableCell>
                                    <TableCell
                                        height="40"
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                            background: '#FDFDFD',
                                        }}
                                    ></TableCell>
                                    <TableCell
                                        height="40"
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                            background: '#FDFDFD',
                                        }}
                                    ></TableCell>
                                </TableRow>

                                {/* Row 2 */}
                                <TableRow>
                                    <TableCell
                                        height="40"
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                            borderLeft:
                                                '1px solid rgba(224, 224, 224, 1)',
                                            background: '#FDFDFD',
                                        }}
                                    ></TableCell>
                                    <TableCell
                                        height="40"
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                            background: '#FDFDFD',
                                        }}
                                    ></TableCell>
                                    <TableCell
                                        height="40"
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                            background: '#FDFDFD',
                                        }}
                                    ></TableCell>
                                </TableRow>

                                {/* Row 4 */}
                                <TableRow>
                                    <TableCell
                                        height="40"
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                            borderLeft:
                                                '1px solid rgba(224, 224, 224, 1)',
                                            background: '#FDFDFD',
                                        }}
                                    ></TableCell>
                                    <TableCell
                                        height="40"
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                            background: '#FDFDFD',
                                        }}
                                    ></TableCell>
                                    <TableCell
                                        height="40"
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                            background: '#FDFDFD',
                                        }}
                                    ></TableCell>
                                </TableRow>

                                {/* Row 5 */}
                                <TableRow>
                                    <TableCell
                                        height="40"
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                            borderLeft:
                                                '1px solid rgba(224, 224, 224, 1)',
                                            background: '#FDFDFD',
                                        }}
                                    ></TableCell>
                                    <TableCell
                                        height="40"
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                            background: '#FDFDFD',
                                        }}
                                    ></TableCell>
                                    <TableCell
                                        height="40"
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                            background: '#FDFDFD',
                                        }}
                                    ></TableCell>
                                </TableRow>
                                {/* Row 6 */}
                                <TableRow>
                                    <TableCell
                                        height="40"
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                            borderLeft:
                                                '1px solid rgba(224, 224, 224, 1)',
                                            background: '#FDFDFD',
                                        }}
                                    ></TableCell>
                                    <TableCell
                                        height="40"
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                            background: '#FDFDFD',
                                        }}
                                    ></TableCell>
                                    <TableCell
                                        height="40"
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                            background: '#FDFDFD',
                                        }}
                                    ></TableCell>
                                </TableRow>
                                {/* Row 7 */}
                                <TableRow>
                                    <TableCell
                                        height="40"
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                            borderLeft:
                                                '1px solid rgba(224, 224, 224, 1)',
                                            background: '#FDFDFD',
                                        }}
                                    ></TableCell>
                                    <TableCell
                                        height="40"
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                            background: '#FDFDFD',
                                        }}
                                    ></TableCell>
                                    <TableCell
                                        height="40"
                                        sx={{
                                            borderRight:
                                                '1px solid rgba(224, 224, 224, 1)',
                                            background: '#FDFDFD',
                                        }}
                                    ></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </>
    )
}

export default Page3
