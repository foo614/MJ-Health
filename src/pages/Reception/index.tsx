import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Box } from '@mui/system'
import ResponsiveAppBar from 'components/AppBar'
import CustomHeader from 'components/CustomHeader'
import CustomHeaderSearchInput from 'components/CustomHeader/EndAdornment/SearchInput'
import ReceptionTable from './components/reception-table'
const Reception = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('md'))

    const lgUp = useMediaQuery(theme.breakpoints.up('lg'))
    const fakeData = [
        {
            id: 1,
            slot: '08:00 AM',
            name: 'Jeffery Mohamad Bin Christofa',
            icNo: '830516015213',
            age: '54',
            gender: 'Male',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '001',
            checkInAt: '08:00',
            registerAt: null,
            completeAt: null,
        },
        {
            id: 2,
            slot: '08:00 AM',
            name: 'Wong Sin Yi',
            icNo: 'S693118A',
            age: '54',
            gender: 'Female',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '002',
            checkInAt: '08:00',
            registerAt: '08:20',
            completeAt: null,
        },
        {
            id: 3,
            slot: '08:00 AM',
            name: 'Liu Yan',
            icNo: '150103197908131051',
            age: '54',
            gender: 'Male',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '003',
            checkInAt: '08:00',
            registerAt: '08:20',
            completeAt: '08:20',
        },
        {
            id: 4,
            slot: '08:00 AM',
            name: 'Lok Wing Ching',
            icNo: '286730572532',
            age: '54',
            gender: 'Male',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '004',
            checkInAt: '08:00',
            registerAt: '08:20',
            completeAt: '08:20',
            isHighlighted: true,
        },
        {
            id: 5,
            slot: '08:00 AM',
            name: 'Angelica Lee',
            icNo: '111000105757',
            age: '54',
            gender: 'Male',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '-',
            checkInAt: null,
            registerAt: null,
            completeAt: null,
            isHighlighted: true,
        },
        {
            id: 6,
            slot: '08:00 AM',
            name: 'Noraini Binti Hassan',
            icNo: '690602136118',
            age: '54',
            gender: 'Male',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '005',
            checkInAt: '08:00',
            registerAt: '08:20',
            completeAt: null,
            isHighlighted: true,
        },
        {
            id: 7,
            slot: '08:00 AM',
            name: 'Grosen Edly Anak Henry',
            icNo: '900311136671',
            age: '54',
            gender: 'Male',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '-',
            checkInAt: null,
            registerAt: null,
            completeAt: null,
        },
        {
            id: 8,
            slot: '08:00 AM',
            name: 'Dato Hussin',
            icNo: '510317-13-5131',
            age: '54',
            gender: 'Male',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '006',
            checkInAt: '08:00',
            registerAt: '08:20',
            completeAt: null,
        },
        {
            id: 9,
            slot: '08:00 AM',
            name: 'Chen Yu Lin',
            icNo: 'A234567890',
            age: '54',
            gender: 'Male',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '007',
            checkInAt: '08:00',
            registerAt: '08:20',
            completeAt: null,
            isHighlighted: true,
        },
        {
            id: 10,
            slot: '08:00 AM',
            name: 'Deen Zhen',
            icNo: '111000105757',
            age: '54',
            gender: 'Male',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '008',
            checkInAt: '08:00',
            registerAt: '08:20',
            completeAt: null,
        },
        {
            id: 11,
            slot: '08:00 AM',
            name: 'Ramasamy Lispra',
            icNo: '900311136671',
            age: '54',
            gender: 'Male',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '009',
            checkInAt: '08:00',
            registerAt: '08:20',
            completeAt: null,
        },
        {
            id: 12,
            slot: '08:00 AM',
            name: 'Mohammad Ismail',
            icNo: '690602136118',
            age: '54',
            gender: 'Male',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '-',
            checkInAt: null,
            registerAt: null,
            completeAt: null,
            isHighlighted: true,
        },
        {
            id: 13,
            slot: '08:00 AM',
            name: 'Sanjay Adam',
            icNo: 'S693118A',
            age: '54',
            gender: 'Male',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '010',
            checkInAt: '08:00',
            registerAt: '08:20',
            completeAt: null,
        },
        {
            id: 14,
            slot: '08:00 AM',
            name: 'Abu Bakar',
            icNo: '830516-01-5213',
            age: '54',
            gender: 'Male',
            package: 'K3',
            memberID: '040110100073001',
            seqNo: '011',
            checkInAt: '08:00',
            registerAt: null,
            completeAt: null,
            isHighlighted: true,
        },
    ]
    return (
        <>
            <ResponsiveAppBar />
            <CustomHeader
                title="RECEPTION COUNTER"
                endAdornment={
                    <CustomHeaderSearchInput placeholder="Search..." />
                }
            />
            <Box
                sx={{
                    paddingLeft: '3rem',
                    paddingRight: '3rem',
                    marginTop: '2rem',
                    paddingBottom: '2rem',
                }}
            >
                <ReceptionTable fakeData={fakeData} />
            </Box>
        </>
    )
}

export default Reception
