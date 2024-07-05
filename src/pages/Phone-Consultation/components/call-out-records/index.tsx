import { CallOutRecordData } from 'pages/Phone-Consultation/types/CallOutRecordData'
import CallOutRecordsHeader from './call-out-records-header'
import { useEffect, useState } from 'react'
import CallOutRecordsTable from './call-out-records-table'
import useTheme from '@mui/material/styles/useTheme'
import useMediaQuery from '@mui/material/useMediaQuery'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import styles from './_call-out-records.module.scss'
import SearchInput from 'components/Input/search-input'

const CallOutRecords = () => {
    const theme = useTheme()
    const lgUp = useMediaQuery(theme.breakpoints.up('lg'))

    const [dataType, setDataType] = useState<string>('accumulated')
    const [data, setData] = useState<CallOutRecordData[]>([])

    const accumulatedData: CallOutRecordData[] = [
        {
            name: 'Jeffery Mohamad Bin Christofa',
            memberId: '0401101024673001',
            icNo: '510317135131',
            gender: 'Male',
            contactNo: '+60-100600660',
            date: '01-04-2023',
        },
        {
            name: 'Wong Sin Yi',
            memberId: '0401101006000001',
            icNo: 'S693118A',
            gender: 'Female',
            contactNo: '+60-100000000',
            date: '01-04-2023',
        },
        {
            name: 'Liu Yan',
            memberId: '0401101006800001',
            icNo: '150103197908131051',
            gender: 'Male',
            contactNo: '+60-118000000',
            date: '01-04-2023',
        },
        {
            name: 'Syahmi Sulaiman bin Abdullah',
            memberId: '0405432024671002',
            icNo: 'S8076606H',
            gender: 'Male',
            contactNo: '+60-100600660',
            date: '01-04-2023',
        },
        {
            name: 'Thai Chong Sam',
            memberId: '0456789006000456',
            icNo: 'S693118A',
            gender: 'Female',
            contactNo: '+60-100000000',
            date: '01-04-2023',
        },
        {
            name: 'Moon Sturr Beig',
            memberId: '0401101006800789',
            icNo: '1234567890123456',
            gender: 'Male',
            contactNo: '+60-100000001',
            date: '01-04-2023',
        },
        {
            name: 'Thong De Mun',
            memberId: '0901101216873456',
            icNo: '65453556',
            gender: 'Female',
            contactNo: '+60-100000002',
            date: '01-04-2023',
        },
        {
            name: 'Michael Angelo',
            memberId: '0801101803456002',
            icNo: 'K12345678',
            gender: 'Female',
            contactNo: '+60-100000003',
            date: '01-04-2023',
        },
        {
            name: 'Bohdi Surv Gorgh',
            memberId: '0401999008883007',
            icNo: '000392217',
            gender: 'Female',
            contactNo: '+60-100000004',
            date: '01-04-2023',
        },
    ]

    const todayPendingData: CallOutRecordData[] = [
        {
            name: 'Jeffery Mohamad Bin Christofa',
            memberId: '0401101024673001',
            icNo: '510317135131',
            gender: 'Male',
            contactNo: '+60-100600660',
            date: '01-04-2023',
        },
        {
            name: 'Wong Sin Yi',
            memberId: '0401101006000001',
            icNo: 'S693118A',
            gender: 'Female',
            contactNo: '+60-100000000',
            date: '01-04-2023',
        },
        {
            name: 'Liu Yan',
            memberId: '0401101006800001',
            icNo: '150103197908131051',
            gender: 'Male',
            contactNo: '+60-118000000',
            date: '01-04-2023',
        },
        {
            name: 'Syahmi Sulaiman bin Abdullah',
            memberId: '0405432024671002',
            icNo: 'S8076606H',
            gender: 'Male',
            contactNo: '+60-100600660',
            date: '01-04-2023',
        },
        {
            name: 'Thai Chong Sam',
            memberId: '0456789006000456',
            icNo: 'S693118A',
            gender: 'Female',
            contactNo: '+60-100000000',
            date: '01-04-2023',
        },
        {
            name: 'Moon Sturr Beig',
            memberId: '0401101006800789',
            icNo: '1234567890123456',
            gender: 'Male',
            contactNo: '+60-100000001',
            date: '01-04-2023',
        },
        {
            name: 'Bohdi Surv Gorgh',
            memberId: '0401999008883007',
            icNo: '000392217',
            gender: 'Female',
            contactNo: '+60-100000004',
            date: '01-04-2023',
        },
    ]

    const todayCompletedData: CallOutRecordData[] = [
        {
            name: 'Syahmi Sulaiman bin Abdullah',
            memberId: '0405432024671002',
            icNo: 'S8076606H',
            gender: 'Male',
            contactNo: '+60-100600660',
            date: '01-04-2023',
        },
        {
            name: 'Thai Chong Sam',
            memberId: '0456789006000456',
            icNo: 'S693118A',
            gender: 'Female',
            contactNo: '+60-100000000',
            date: '01-04-2023',
        },
        {
            name: 'Moon Sturr Beig',
            memberId: '0401101006800789',
            icNo: '1234567890123456',
            gender: 'Male',
            contactNo: '+60-100000001',
            date: '01-04-2023',
        },
        {
            name: 'Thong De Mun',
            memberId: '0901101216873456',
            icNo: '65453556',
            gender: 'Female',
            contactNo: '+60-100000002',
            date: '01-04-2023',
        },
        {
            name: 'Michael Angelo',
            memberId: '0801101803456002',
            icNo: 'K12345678',
            gender: 'Female',
            contactNo: '+60-100000003',
            date: '01-04-2023',
        },
        {
            name: 'Bohdi Surv Gorgh',
            memberId: '0401999008883007',
            icNo: '000392217',
            gender: 'Female',
            contactNo: '+60-100000004',
            date: '01-04-2023',
        },
    ]

    useEffect(() => {
        switch (dataType) {
            case 'todayPending':
                setData(todayPendingData)
                break
            case 'todayCompleted':
                setData(todayCompletedData)
                break
            case 'accumulated':
            default:
                setData(accumulatedData)
        }
    }, [dataType])

    return (
        <>
            <CallOutRecordsHeader setDataType={setDataType} />

            <Grid container sx={{ my: 2 }}>
                <Grid xs={12} lg={5}>
                    <Typography className={styles.searchLabel}>
                        Member Name, Member ID or IC no.
                    </Typography>
                    <SearchInput />
                </Grid>
            </Grid>

            <CallOutRecordsTable data={data} />
        </>
    )
}

export default CallOutRecords
