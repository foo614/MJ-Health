import { Grid, Stack } from '@mui/material'
import styles from '../_hmp-brochure.module.scss'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const Page1 = () => {
    const table_data = [
        {
            id: 1,
            item: 'Body Weight (kg)',
            current: '64.7',
            last: '',
            previous: '',
        },
        {
            id: 2,
            item: 'Body Mass Index',
            current: '20.9',
            last: '',
            previous: '',
        },
        {
            id: 3,
            item: 'Body Fat (%)',
            current: '26.5',
            last: '',
            previous: '',
        },
        {
            id: 4,
            item: 'Waist/ Hip Circumference Ratio',
            current: '0.79',
            last: '',
            previous: '',
        },
    ]
    return (
        <>
            <div className={styles.outer_div_background}>
                <div style={{ padding: '20px 35px' }}>
                    <p className={styles.hmp_title}>Basic Information</p>
                    <Grid container spacing={1} sx={{ marginTop: '10px' }}>
                        <Grid item md={3} sm={4} xs={12}>
                            <Stack direction="row" spacing={3}>
                                <p className={styles.hmp_subtitle}>Gender:</p>
                                <p className={styles.hmp_title}>Male</p>
                            </Stack>
                        </Grid>
                        <Grid item md={3} sm={4} xs={12}>
                            <Stack direction="row" spacing={3}>
                                <p className={styles.hmp_subtitle}>Age:</p>
                                <p className={styles.hmp_title}>24</p>
                            </Stack>
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} sx={{ marginTop: '10px' }}>
                        <Grid item md={3} sm={4} xs={12}>
                            <Stack direction="row" spacing={3}>
                                <p className={styles.hmp_subtitle}>
                                    Ideal Body Weight:
                                </p>
                                <p className={styles.hmp_title}>68.1 Kg</p>
                            </Stack>
                        </Grid>
                        <Grid item md={3} sm={4} xs={12}>
                            <Stack direction="row" spacing={3}>
                                <p className={styles.hmp_subtitle}>Height:</p>
                                <p className={styles.hmp_title}>1.76 m</p>
                            </Stack>
                        </Grid>
                        <Grid item md={3} sm={4} xs={12}>
                            <Stack direction="row" spacing={3}>
                                <p className={styles.hmp_subtitle}>
                                    Dally Energy Intensity:
                                </p>
                                <p className={styles.hmp_title}>Moderate</p>
                            </Stack>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div
                className={styles.outer_div_padding}
                style={{ marginTop: '20px' }}
            >
                <p className={styles.hmp_title}>Weight and Body Build</p>
                <TableContainer sx={{ marginTop: '20px' }}>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    className={styles.table_head_cell_color}
                                    sx={{ borderRadius: '3px 0px 0px 0px' }}
                                >
                                    <p className={styles.table_head_cell}>
                                        Items
                                    </p>
                                </TableCell>
                                <TableCell
                                    className={styles.table_head_cell_color}
                                    width={'20%'}
                                >
                                    <p
                                        className={styles.table_head_cell}
                                        style={{ textAlign: 'center' }}
                                    >
                                        Current
                                    </p>
                                </TableCell>
                                <TableCell
                                    className={styles.table_head_cell_color}
                                    width={'20%'}
                                >
                                    <p
                                        className={styles.table_head_cell}
                                        style={{ textAlign: 'center' }}
                                    >
                                        Last
                                    </p>
                                </TableCell>
                                <TableCell
                                    className={styles.table_head_cell_color}
                                    sx={{ borderRadius: '0px 3px 0px 0px' }}
                                    width={'20%'}
                                >
                                    <p
                                        className={styles.table_head_cell}
                                        style={{ textAlign: 'center' }}
                                    >
                                        Previous
                                    </p>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {table_data.map((item: any, index: number) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell
                                            sx={{
                                                borderLeft:
                                                    '1px solid rgba(224, 224, 224, 1)',
                                                borderRight:
                                                    '1px solid rgba(224, 224, 224, 1)',
                                            }}
                                        >
                                            <p className={styles.hmp_subtitle}>
                                                {item.item}
                                            </p>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                borderRight:
                                                    '1px solid rgba(224, 224, 224, 1)',
                                            }}
                                        >
                                            <p
                                                style={{ textAlign: 'center' }}
                                                className={styles.hmp_title}
                                            >
                                                {item.current}
                                            </p>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                borderRight:
                                                    '1px solid rgba(224, 224, 224, 1)',
                                            }}
                                        >
                                            <p>{item.last}</p>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                borderRight:
                                                    '1px solid rgba(224, 224, 224, 1)',
                                            }}
                                        >
                                            <p>{item.previous}</p>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

            <div
                className={styles.outer_div_background}
                style={{ marginTop: '20px', marginBottom: '20px' }}
            >
                <div style={{ padding: '20px 35px' }}>
                    <p className={styles.hmp_title}>Your Body Build Indices</p>
                    <Grid container spacing={1} sx={{ marginTop: '10px' }}>
                        <Grid item md={3} sm={4} xs={12}>
                            <Stack direction="row" spacing={3}>
                                <p className={styles.hmp_subtitle}>
                                    Body Fat %
                                </p>
                                <p className={styles.hmp_title}>Standard</p>
                            </Stack>
                        </Grid>
                        <Grid item md={3} sm={4} xs={12}>
                            <Stack direction="row" spacing={3}>
                                <p className={styles.hmp_subtitle}>
                                    Body Mass Index
                                </p>
                                <p className={styles.hmp_title}>Standard</p>
                            </Stack>
                        </Grid>
                        <Grid item md={3} sm={4} xs={12}>
                            <Stack direction="row" spacing={3}>
                                <p className={styles.hmp_subtitle}>Result</p>
                                <p className={styles.hmp_title}>
                                    High Body Fat
                                </p>
                            </Stack>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default Page1
