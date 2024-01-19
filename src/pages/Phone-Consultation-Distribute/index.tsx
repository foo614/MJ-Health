import { PhoneConsultationDistributeData } from './type/PhoneConsultationDistributeData'
import styles from './_phone-consultation-distribute.module.scss'
import ResponsiveAppBar from 'components/AppBar'
import CustomHeader from 'components/CustomHeader'
import {
    PHONE_CONSULTATION_DISTRIBUTE_PAGE,
    PHONE_CONSULTATION_PAGE,
} from 'constant'
import {
    Button,
    Container,
    FormControl,
    MenuItem,
    Paper,
    Select,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material'

const PhoneConsultationDistribute = () => {
    const data: PhoneConsultationDistributeData[] = [
        {
            seqNo: '001',
            name: 'Jeffery Mohamad Bin Christofa',
            memberId: '0401101024673001',
            gender: 'Male',
            requiredNC: '',
            consultant: '',
        },
        {
            seqNo: '002',
            name: 'Wong Sin Yi',
            memberId: '0401101006000001',
            gender: 'Female',
            requiredNC: '',
            consultant: '',
        },
        {
            seqNo: '003',
            name: 'Liu Yan',
            memberId: '0401101006800001',
            gender: 'Male',
            requiredNC: '',
            consultant: '',
        },
        {
            seqNo: '004',
            name: 'Lok Wing Ching',
            memberId: '0401101116873001',
            gender: 'Female',
            requiredNC: '',
            consultant: '',
        },
        {
            seqNo: '005',
            name: 'Angelica Lee',
            memberId: '0401101002273001',
            gender: 'Female',
            requiredNC: '',
            consultant: '',
        },
        {
            seqNo: '006',
            name: 'Noraini Binti Hassan',
            memberId: '0401101006123001',
            gender: 'Female',
            requiredNC: '',
            consultant: '',
        },
        {
            seqNo: '007',
            name: 'Grosen Edly Anak Henry',
            memberId: '0401101002486001',
            gender: 'Male',
            requiredNC: '',
            consultant: '',
        },
        {
            seqNo: '008',
            name: 'Dato Hussin',
            memberId: '5040110100678001',
            gender: 'Male',
            requiredNC: '',
            consultant: '',
        },
        {
            seqNo: '009',
            name: 'Abu Bakar',
            memberId: '0401101000073001',
            gender: 'Female',
            requiredNC: '',
            consultant: '',
        },
        {
            seqNo: '010',
            name: 'Aurelius Marcus',
            memberId: '0401101002486001',
            gender: 'Male',
            requiredNC: '',
            consultant: '',
        },
        {
            seqNo: '011',
            name: 'Sanjay Adrian',
            memberId: '0040110100678584',
            gender: 'Female',
            requiredNC: '',
            consultant: '',
        },
        {
            seqNo: '012',
            name: 'Kayden Choi',
            memberId: '0401101002273001',
            gender: 'Male',
            requiredNC: '',
            consultant: '',
        },
    ]

    const consultants: { id: number; name: string }[] = [
        {
            id: 1,
            name: 'Lee Shen Long',
        },
        {
            id: 2,
            name: 'Wong Xing Ling',
        },
        {
            id: 3,
            name: 'Liu Bii',
        },
        {
            id: 4,
            name: 'Lok Cat Wang',
        },
        {
            id: 5,
            name: 'Angelina Shabby',
        },
        {
            id: 6,
            name: 'Siti Bin Aidin',
        },
        {
            id: 7,
            name: 'Alfred de Saiyanrito',
        },
        {
            id: 8,
            name: 'Wong Xing Ling',
        },
        {
            id: 9,
            name: 'Marine Albrado',
        },
        {
            id: 10,
            name: 'Luciano Helbe',
        },
    ]

    return (
        <>
            <ResponsiveAppBar />

            <CustomHeader
                to={PHONE_CONSULTATION_PAGE}
                title="PHONE CONSULTATION"
            />

            <Container>
                <TableContainer component={Paper} className={styles.dataTable}>
                    <Table stickyHeader>
                        <TableHead className={styles.dataTableHead}>
                            <TableRow>
                                <TableCell>
                                    <p className={styles.dataTableHeadTitle}>
                                        Seq No.
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p className={styles.dataTableHeadTitle}>
                                        Name
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p className={styles.dataTableHeadTitle}>
                                        Member ID
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p className={styles.dataTableHeadTitle}>
                                        Gender
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p className={styles.dataTableHeadTitle}>
                                        Required NC
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p className={styles.dataTableHeadTitle}>
                                        Consultant
                                    </p>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((item, index: number) => {
                                return (
                                    <TableRow
                                        key={index}
                                        className={''}
                                        sx={{ cursor: 'pointer' }}
                                        // onClick={() =>
                                        //     navigate(
                                        //         `${MEMBER_PROFILE_PAGE}/${item.id}`
                                        //     )
                                        // }
                                    >
                                        <TableCell>
                                            <p
                                                className={
                                                    styles.tableCellBoldValue
                                                }
                                            >
                                                {item.seqNo}
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <p
                                                className={
                                                    styles.tableCellBoldValue
                                                }
                                            >
                                                {item.name}
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <p
                                                className={
                                                    styles.tableCellValue
                                                }
                                            >
                                                {item.memberId}
                                            </p>
                                        </TableCell>
                                        <TableCell>
                                            <p
                                                className={
                                                    styles.tableCellValue
                                                }
                                            >
                                                {item.gender}
                                            </p>
                                        </TableCell>

                                        <TableCell>
                                            <FormControl
                                                size="small"
                                                margin="dense"
                                                fullWidth
                                            >
                                                <Select
                                                    className={
                                                        styles.inputField
                                                    }
                                                    name=""
                                                    value={''}
                                                    displayEmpty
                                                    // value={currentSelectedOption}
                                                    // onChange={handleChange}
                                                >
                                                    <MenuItem value="">
                                                        -
                                                    </MenuItem>
                                                    <MenuItem
                                                        value={1}
                                                        key={index}
                                                        className={
                                                            styles.inputField
                                                        }
                                                    >
                                                        Yes
                                                    </MenuItem>
                                                    <MenuItem
                                                        value={1}
                                                        key={index}
                                                        className={
                                                            styles.inputField
                                                        }
                                                    >
                                                        No
                                                    </MenuItem>
                                                </Select>
                                            </FormControl>
                                        </TableCell>

                                        <TableCell>
                                            <FormControl
                                                size="small"
                                                margin="dense"
                                                fullWidth
                                            >
                                                <Select
                                                    name="consultant"
                                                    value={''}
                                                    displayEmpty
                                                    className={
                                                        styles.consultantSelect
                                                    }
                                                >
                                                    <MenuItem value="">
                                                        -
                                                    </MenuItem>
                                                    {consultants.map((item) => (
                                                        <MenuItem
                                                            value={item.id}
                                                            key={index}
                                                            className={
                                                                styles.inputField
                                                            }
                                                        >
                                                            {item.name}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    )
}

export default PhoneConsultationDistribute
