import Button from '@mui/material/Button'
import styles from './_lab.module.scss'
import test from './lab-test-1.svg'
import Container from '@mui/material/Container'
import { Grid } from '@mui/material'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import CompleteStatus from './components/statusComponent'
import CheckOutModal from './components/checkoutModal'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LAB_TEST_SINGLE_ITEM_PAGE, LAB_TEST_INFO_PAGE } from 'constant'
const LabPage = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const [checkOutModalOpen, setCheckOutModalOpen] = useState(false)
    const navigate = useNavigate()
    const fakeData = [
        {
            seqNo: '001',
            name: 'Jeffery Mohamad Bin Christofa',
            age: 54,
            gender: 'Male',
            package: 'K1',
            blood_sampling: 1,
            hematology: 1,
            immunology: 1,
            biochemistry: 1,
            urine_stool: 1,
            optional_items: 1,
        },
        {
            seqNo: '002',
            name: 'Wong Sin Yi',
            age: 64,
            gender: 'Female',
            package: 'K2',
            blood_sampling: 1,
            hematology: 1,
            immunology: 0,
            biochemistry: 1,
            urine_stool: 0,
            optional_items: 1,
        },
        {
            seqNo: '003',
            name: 'Liu Yan',
            age: 24,
            gender: 'Male',
            package: 'K3',
            blood_sampling: 1,
            hematology: 0,
            immunology: 0,
            biochemistry: 1,
            urine_stool: 0,
            optional_items: 0,
        },
        {
            seqNo: '004',
            name: 'Lok Wing Ching',
            age: 77,
            gender: 'Female',
            package: 'K3',
            blood_sampling: 1,
            hematology: 0,
            immunology: 0,
            biochemistry: 1,
            urine_stool: 0,
            optional_items: 0,
        },
        {
            seqNo: '005',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K2',
            blood_sampling: 1,
            hematology: 0,
            immunology: 0,
            biochemistry: 1,
            urine_stool: 0,
            optional_items: 0,
        },
        {
            seqNo: '006',
            name: 'Noraini Binti Hassan',
            age: 37,
            gender: 'Female',
            package: 'K2',
            blood_sampling: 0,
            hematology: 0,
            immunology: 0,
            biochemistry: 0,
            urine_stool: 0,
            optional_items: 0,
        },
        {
            seqNo: '007',
            name: 'Grosen Edly Anak Henry',
            age: 45,
            gender: 'Male',
            package: 'K1',
            blood_sampling: 0,
            hematology: 0,
            immunology: 0,
            biochemistry: 0,
            urine_stool: 0,
            optional_items: 0,
        },
        {
            seqNo: '008',
            name: 'Dato Hussin',
            age: 42,
            gender: 'Male',
            package: 'K2',
            blood_sampling: 0,
            hematology: 0,
            immunology: 0,
            biochemistry: 0,
            urine_stool: 0,
            optional_items: 0,
        },
        {
            seqNo: '009',
            name: 'Chen Yu Lin',
            age: 37,
            gender: 'Female',
            package: 'K2',
            blood_sampling: 0,
            hematology: 0,
            immunology: 0,
            biochemistry: 0,
            urine_stool: 0,
            optional_items: 0,
        },
        {
            seqNo: '010',
            name: 'Wang Jin Pyng',
            age: 35,
            gender: 'Male',
            package: 'K1',
            blood_sampling: 2,
            hematology: 0,
            immunology: 0,
            biochemistry: 0,
            urine_stool: 0,
            optional_items: 0,
        },
        {
            seqNo: '011',
            name: 'Chen Yu Lin',
            age: 37,
            gender: 'Female',
            package: 'K2',
            blood_sampling: 0,
            hematology: 0,
            immunology: 0,
            biochemistry: 0,
            urine_stool: 0,
            optional_items: 0,
        },
        {
            seqNo: '012',
            name: 'Lok Wing Ching',
            age: 77,
            gender: 'Female',
            package: 'K3',
            blood_sampling: 1,
            hematology: 0,
            immunology: 0,
            biochemistry: 1,
            urine_stool: 0,
            optional_items: 0,
        },
        {
            seqNo: '012',
            name: 'Lok Wing Ching',
            age: 77,
            gender: 'Female',
            package: 'K3',
            blood_sampling: 1,
            hematology: 0,
            immunology: 0,
            biochemistry: 1,
            urine_stool: 0,
            optional_items: 0,
        },
        {
            seqNo: '012',
            name: 'Lok Wing Ching',
            age: 77,
            gender: 'Female',
            package: 'K3',
            blood_sampling: 1,
            hematology: 0,
            immunology: 0,
            biochemistry: 1,
            urine_stool: 0,
            optional_items: 0,
        },
    ]

    return (
        <>
            <section className={styles.labTestSection}>
                <div className={styles.labTestTitleDiv}>
                    <div
                        className={
                            matches
                                ? styles.labTestTitleButtonDiv
                                : styles.labTestTitleButtonDivMobile
                        }
                    >
                        <Button
                            variant="contained"
                            className={
                                matches
                                    ? styles.labTestTitleButton
                                    : styles.labTestTitleButtonMobile
                            }
                            startIcon={<img src={test} />}
                            onClick={() => setCheckOutModalOpen(true)}
                        >
                            Check Out
                        </Button>
                    </div>
                    <div className={styles.labTestTitle}>
                        <p>LAB TEST</p>
                    </div>
                </div>
                <Container maxWidth="xl">
                    <div className={styles.mt2}>
                        <Grid container spacing={2}>
                            <Grid item md={2}>
                                <Button
                                    variant="contained"
                                    className={styles.singleItemBttn}
                                    onClick={() =>
                                        navigate(LAB_TEST_SINGLE_ITEM_PAGE)
                                    }
                                >
                                    Single Items
                                </Button>
                            </Grid>
                            <Grid item md={2}>
                                <Button
                                    variant="contained"
                                    className={styles.outsourceItemBttn}
                                >
                                    Outsource Test
                                </Button>
                            </Grid>
                            <Grid item md={8} className={styles.searchFieldDiv}>
                                <TextField
                                    sx={{
                                        width: matches ? '350px' : 'auto',
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon
                                                    className={
                                                        styles.searchIcon
                                                    }
                                                />
                                            </InputAdornment>
                                        ),
                                        style: {
                                            borderRadius: '0',
                                        },
                                    }}
                                    variant="outlined"
                                    className={styles.searchField}
                                    placeholder="Search..."
                                />
                            </Grid>
                        </Grid>
                    </div>
                    <div className={styles.mt2}>
                        <TableContainer
                            component={Paper}
                            style={{ maxHeight: 600 }}
                            className={styles.labTestTable}
                        >
                            <Table sx={{ minWidth: 650 }}>
                                <TableHead
                                    className={styles.labTestTableHeader}
                                >
                                    <TableRow>
                                        <TableCell
                                            className={
                                                styles.labTestTableColumn
                                            }
                                        >
                                            Seq No.
                                        </TableCell>
                                        <TableCell
                                            className={
                                                styles.labTestTableColumn
                                            }
                                        >
                                            Name
                                        </TableCell>
                                        <TableCell
                                            className={
                                                styles.labTestTableColumn
                                            }
                                        >
                                            Age
                                        </TableCell>
                                        <TableCell
                                            className={
                                                styles.labTestTableColumn
                                            }
                                        >
                                            Gender
                                        </TableCell>
                                        <TableCell
                                            className={
                                                styles.labTestTableColumn
                                            }
                                        >
                                            Package
                                        </TableCell>
                                        <TableCell
                                            className={
                                                styles.labTestTableColumn
                                            }
                                        >
                                            Blood Sampling
                                        </TableCell>
                                        <TableCell
                                            className={
                                                styles.labTestTableColumn
                                            }
                                        >
                                            Hematology
                                        </TableCell>
                                        <TableCell
                                            className={
                                                styles.labTestTableColumn
                                            }
                                        >
                                            Immunology
                                        </TableCell>
                                        <TableCell
                                            className={
                                                styles.labTestTableColumn
                                            }
                                        >
                                            Biochemistry
                                        </TableCell>
                                        <TableCell
                                            className={
                                                styles.labTestTableColumn
                                            }
                                        >
                                            Urine & Stool
                                        </TableCell>
                                        <TableCell
                                            className={
                                                styles.labTestTableColumn
                                            }
                                        >
                                            Optional Items
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {fakeData.map((row) => (
                                        <TableRow
                                            key={row.seqNo}
                                            className={styles.infoTableTR}
                                            onClick={() =>
                                                navigate(LAB_TEST_INFO_PAGE)
                                            }
                                        >
                                            <TableCell
                                                className={styles.fontBold}
                                            >
                                                {row.seqNo}
                                            </TableCell>
                                            <TableCell
                                                className={styles.fontBold}
                                            >
                                                {row.name}
                                            </TableCell>
                                            <TableCell
                                                className={styles.fontBold}
                                            >
                                                {row.age}
                                            </TableCell>
                                            <TableCell
                                                className={styles.fontBold}
                                            >
                                                {row.gender}
                                            </TableCell>
                                            <TableCell
                                                className={styles.fontBold}
                                            >
                                                {row.package}
                                            </TableCell>
                                            <TableCell>
                                                <CompleteStatus
                                                    status={row.blood_sampling}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <CompleteStatus
                                                    status={row.hematology}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <CompleteStatus
                                                    status={row.immunology}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <CompleteStatus
                                                    status={row.biochemistry}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <CompleteStatus
                                                    status={row.urine_stool}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <CompleteStatus
                                                    status={row.optional_items}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <CheckOutModal
                        open={checkOutModalOpen}
                        setOpen={setCheckOutModalOpen}
                    />
                </Container>
            </section>
        </>
    )
}

export default LabPage
