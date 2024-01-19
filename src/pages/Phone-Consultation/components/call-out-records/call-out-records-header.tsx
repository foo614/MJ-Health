import { Grid } from '@mui/material'
import CallOutRecordsHeaderTab from './call-out-records-header-tab'
import { Dispatch, SetStateAction, useState } from 'react'

type Props = {
    setDataType: Dispatch<SetStateAction<string>>
}

const CallOutRecordsHeader = (props: Props) => {
    const [accumulatedCount, setAccumulatedCount] = useState<number>(140)
    const [todayPendingCount, setTodayPendingCount] = useState<number>(24)
    const [todayCompletedCount, setTodayCompletedCount] = useState<number>(6)

    return (
        <>
            <Grid container spacing={2}>
                <Grid
                    item
                    xs={12}
                    md={4}
                    onClick={() => {
                        props.setDataType('accumulated')
                    }}
                >
                    <CallOutRecordsHeaderTab
                        count={accumulatedCount}
                        label="Accumulated Pending Call"
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={4}
                    onClick={() => {
                        props.setDataType('todayPending')
                    }}
                >
                    <CallOutRecordsHeaderTab
                        count={todayPendingCount}
                        label="Today’s Pending Call"
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={4}
                    onClick={() => {
                        props.setDataType('todayCompleted')
                    }}
                >
                    <CallOutRecordsHeaderTab
                        count={todayCompletedCount}
                        label="Today’s Completed Call"
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default CallOutRecordsHeader
