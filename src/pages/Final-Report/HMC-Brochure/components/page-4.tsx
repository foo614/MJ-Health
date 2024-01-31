import styles from '../_hmp-brochure.module.scss'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Stack } from '@mui/material'
const Page4 = () => {
    const diatery_recommendation = [
        {
            id: 1,
            type: 'Intake of Fat',
            recommendation:
                'High intake of bad fats will lead to chronic inflammation, please consume adequate amount of good fats and avoid consumption of processed cooking oils.',
        },
        {
            id: 2,
            type: 'Intake of Sodium',
            recommendation:
                'Please restrict your intake of sodium and seasoning to ease the burden on the body.',
        },
        {
            id: 3,
            type: 'Intake of Refined Sugar',
            recommendation:
                'Your sugar intake condition is satisfied, please maintain the current standard.',
        },
        {
            id: 4,
            type: 'Intake of Fiber and Antioxidants in Vegetables and Fruits',
            recommendation:
                'Quantity and type of vegetables and fruits are essential, please pay attention to the current situation.',
        },
        {
            id: 5,
            type: 'Water Intake',
            recommendation:
                'Adequate amount of water intake boosts metabolic reactions and enhances waste disposal.',
        },
    ]

    const nutrient_recommendation = [
        {
            id: 1,
            type: 'Diabetes Mellitus',
            recommendation:
                'High intake of bad fats will lead to chronic inflammation, please consume adequate amount of good fats and avoid consumption of processed cooking oils.',
        },
        {
            id: 2,
            type: 'Obesity',
            recommendation:
                'Probiotics, Resveratrol, Vitamin B-complex, Zinc, Chromium, Fiber',
        },
    ]

    const health_information = [
        {
            id: 1,
            factor: 'Ischaemic Heart Disease',
            cause: '14.6%',
        },
        {
            id: 2,
            factor: 'Transport Accident',
            cause: '12.0%',
        },
        {
            id: 3,
            factor: 'Septicemia',
            cause: '5.5%',
        },
        {
            id: 4,
            factor: 'Pneumonia',
            cause: '5.2%',
        },
        {
            id: 5,
            factor: 'Cerebrovascular disease',
            cause: '5.1%',
        },
    ]
    return (
        <>
            <div className={styles.outer_div_background}>
                <div className={styles.paddingSection}>
                    <p className={styles.hmp_title}>
                        Health Management Instruction
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
                            To Improve your lifestyle and health, you should:
                        </p>
                        <p className={styles.page_3_sub_title}>
                            Follow-up uric acid tests regularly, Do more
                            exercise.
                        </p>
                    </Stack>
                    <p
                        className={styles.hmp_subtitle}
                        style={{ marginTop: '10px', marginBottom: '10px' }}
                    >
                        Dietary Recommedation:
                    </p>
                    <div
                        style={{
                            paddingLeft: '15px',
                            paddingRight: '15px',
                        }}
                    >
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell
                                            className={
                                                styles.table_head_cell_color
                                            }
                                            sx={{
                                                borderRadius: '3px 3px 0px 0px',
                                            }}
                                            colSpan={2}
                                        >
                                            <p
                                                className={
                                                    styles.table_head_cell
                                                }
                                                style={{ textAlign: 'center' }}
                                            >
                                                Recommendation
                                            </p>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {diatery_recommendation.map(
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
                                                        width="30%"
                                                    >
                                                        <p
                                                            className={
                                                                styles.hmp_subtitle
                                                            }
                                                        >
                                                            {item.type}
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
                                                        <p
                                                            className={
                                                                styles.page_3_sub_title
                                                            }
                                                        >
                                                            {
                                                                item.recommendation
                                                            }
                                                        </p>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>

                    <p
                        className={styles.hmp_subtitle}
                        style={{ marginTop: '10px', marginBottom: '10px' }}
                    >
                        Nutrient Recommendation:
                    </p>
                    <div
                        style={{
                            paddingLeft: '15px',
                            paddingRight: '15px',
                        }}
                    >
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell
                                            className={
                                                styles.table_head_cell_color
                                            }
                                            sx={{
                                                borderRadius: '3px 0px 0px 0px',
                                            }}
                                            width="30%"
                                        >
                                            <p
                                                className={
                                                    styles.table_head_cell
                                                }
                                                style={{ textAlign: 'center' }}
                                            >
                                                Health Risk Groups
                                            </p>
                                        </TableCell>
                                        <TableCell
                                            className={
                                                styles.table_head_cell_color
                                            }
                                            sx={{
                                                borderRadius: '0px 3px 0px 0px',
                                            }}
                                            width="70%"
                                        >
                                            <p
                                                className={
                                                    styles.table_head_cell
                                                }
                                                style={{ textAlign: 'center' }}
                                            >
                                                Recommended Nutrient Supplements
                                            </p>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {nutrient_recommendation.map(
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
                                                                styles.hmp_subtitle
                                                            }
                                                        >
                                                            {item.type}
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
                                                        <p
                                                            className={
                                                                styles.page_3_sub_title
                                                            }
                                                        >
                                                            {
                                                                item.recommendation
                                                            }
                                                        </p>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
            <div className={styles.paddingSection}>
                <p className={styles.hmp_title}>Health Information</p>
                <div
                    style={{
                        paddingLeft: '15px',
                        paddingRight: '15px',
                        marginTop:"10px"
                    }}
                >
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        className={styles.table_head_cell_color}
                                        sx={{
                                            borderRadius: '3px 0px 0px 0px',
                                        }}
                                        width="50%"
                                    >
                                        <p style={{ textAlign: 'center' }}>
                                            <span
                                                className={
                                                    styles.table_head_cell
                                                }
                                            >
                                                The five major causes of death
                                                for people in your age group
                                                (from
                                            </span>
                                            <span
                                                className={
                                                    styles.table_head_number
                                                }
                                            >
                                                19
                                            </span>
                                            <span
                                                className={
                                                    styles.table_head_cell
                                                }
                                            >
                                                to
                                            </span>
                                            <span
                                                className={
                                                    styles.table_head_number
                                                }
                                            >
                                                24
                                            </span>
                                            <span
                                                className={
                                                    styles.table_head_cell
                                                }
                                            >
                                                within ten years
                                            </span>
                                        </p>
                                    </TableCell>
                                    <TableCell
                                        className={styles.table_head_cell_color}
                                        sx={{
                                            borderRadius: '0px 3px 0px 0px',
                                        }}
                                        width="50%"
                                    >
                                        <p
                                            className={styles.table_head_cell}
                                            style={{ textAlign: 'center' }}
                                        >
                                            Cause of Death/ All-cause Death
                                        </p>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {health_information.map(
                                    (item: any, index: number) => {
                                        return (
                                            <TableRow key={index}>
                                                <TableCell
                                                    sx={{
                                                        borderRight:
                                                            '1px solid rgba(224, 224, 224, 1)',
                                                        borderLeft:
                                                            '1px solid rgba(224, 224, 224, 1)',
                                                        background: '#FDFDFD',
                                                    }}
                                                >
                                                    <p
                                                        className={
                                                            styles.page_3_sub_title
                                                        }
                                                    >
                                                        {item.factor}
                                                    </p>
                                                </TableCell>
                                                <TableCell
                                                    sx={{
                                                        borderRight:
                                                            '1px solid rgba(224, 224, 224, 1)',
                                                        background: '#FDFDFD',
                                                    }}
                                                >
                                                    <p
                                                        className={
                                                            styles.page_3_sub_title
                                                        }
                                                        style={{
                                                            textAlign: 'center',
                                                        }}
                                                    >
                                                        {item.cause}
                                                    </p>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    }
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </>
    )
}

export default Page4
