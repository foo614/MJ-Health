import { ReceptionData } from 'types/QueueManagement/ReceptionData'
import styles from './_reception-counter.module.scss'
import QueueListAppBar from './components'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/system'
import RightArrow from 'images/right-arrow 2.png'

const mockData: ReceptionData[] = [
    {
        id: 1,
        patientName: 'Mohammad xxx',
        timeSlot: '08:15 AM - 08:30 AM',
        sequenceNo: '001',
        counter: '1',
    },
    {
        id: 2,
        patientName: 'Tan xxx',
        timeSlot: '08:15 AM - 08:30 AM',
        sequenceNo: '002',
        counter: '3',
    },
    {
        id: 3,
        patientName: 'Jaccob xxx',
        timeSlot: '08:15 AM - 08:30 AM',
        sequenceNo: '003',
        counter: '2',
    },
    {
        id: 4,
        patientName: 'Siti xxx',
        timeSlot: '08:15 AM - 08:30 AM',
        sequenceNo: '004',
        counter: undefined,
    },
    {
        id: 5,
        patientName: 'Lee xxx',
        timeSlot: '08:15 AM - 08:30 AM',
        sequenceNo: '005',
        counter: undefined,
    },
    {
        id: 6,
        patientName: 'Tan xxx',
        timeSlot: '08:30 AM - 08:45 AM',
        sequenceNo: '006',
        counter: undefined,
    },
    {
        id: 7,
        patientName: 'Teo xxx',
        timeSlot: '08:30 AM - 08:45 AM',
        sequenceNo: '007',
        counter: undefined,
    },
]

const OverlapGroup = ({ data }: { data: ReceptionData }): JSX.Element => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))

    return (
        <>
            <Grid xs={12} sx={{ mb: 3 }}>
                <Card>
                    <CardHeader
                        sx={{
                            background: 'var(--mj-deep-green)',
                            px: matches ? 7 : 2,
                        }}
                        action={
                            <div className={styles.dFlex}>
                                <div className={styles.group9}>
                                    <div className={styles.textWrapper12}>
                                        Doctor On Shift
                                    </div>
                                    <div className={styles.textWrapper11}>
                                        Dr. Lee Shen Long
                                    </div>
                                </div>
                            </div>
                        }
                        title={
                            <div className={styles.textWrapper4}>
                                {data.patientName}
                            </div>
                        }
                    />
                    <CardContent>
                        <Grid
                            container
                            justifyContent={matches ? 'space-between' : ''}
                            sx={{ px: matches ? 6 : 0 }}
                        >
                            <Grid xs={5} className={styles.receptionDetail}>
                                <div className={styles.sequenceNo}>
                                    {data.sequenceNo}
                                </div>
                                <div className={styles.label}>Sequence No.</div>
                            </Grid>
                            <Grid xs={2} className={styles.receptionDetail}>
                                <img
                                    src={RightArrow}
                                    className={styles.rightArrow}
                                />
                            </Grid>
                            <Grid xs={5} className={styles.receptionDetail}>
                                <div className={styles.counterNo}>
                                    {data.counter ?? '-'}
                                </div>
                                <div className={styles.label}>Counter</div>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}

function QueueManagementReceptionCounter() {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))

    return (
        <>
            <QueueListAppBar title="Reception" />

            <Grid container sx={{ px: matches ? 10 : 2, py: matches ? 5 : 2 }}>
                {mockData.map((data) => (
                    <OverlapGroup key={`reception${data.id}`} data={data} />
                ))}
            </Grid>
        </>
    )
}

export default QueueManagementReceptionCounter
