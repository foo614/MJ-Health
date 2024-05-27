import styles from '../../_it-room-printing.module.scss'
import FirstAreaTable from './components/first-area-table'
import AreaOneTable from './components/area-one-table'
import { Stack } from '@mui/material'
import AreaTwoTable from './components/area-two-table'
import DiningArea from './components/dining-area-table'
import PhysicianConsultationArea from './components/physician-consultation-area-table'
import LifeStyleArea from './components/life-style-consulting-area-table'
import Button from '@mui/material/Button'
import { useState } from 'react'
import PrintListModal from '../print-list-modal'
type Props = {
    matches: boolean
}
const OperatedTimeList: React.FC<Props> = ({ matches }: Props) => {
    const [openPrintModal, setOpenPrintModal] = useState<boolean>(false)
    const roomData = [
        {
            roomNo: 'A-01',
            roomName: 'Interview Room',
            currentOnShift: 'Abubakhar Hin Nel',
        },
        {
            roomNo: 'A-01',
            roomName: 'Interview Room',
            currentOnShift: 'Abubakhar Hin Nel',
        },
        {
            roomNo: 'A-01',
            roomName: 'Interview Room',
            currentOnShift: 'Abubakhar Hin Nel',
        },
        {
            roomNo: 'A-01',
            roomName: 'Interview Room',
            currentOnShift: 'Abubakhar Hin Nel',
        },
        {
            roomNo: 'A-01',
            roomName: 'Interview Room',
            currentOnShift: 'Abubakhar Hin Nel',
        },
        {
            roomNo: 'A-01',
            roomName: 'Interview Room',
            currentOnShift: 'Abubakhar Hin Nel',
        },
        {
            roomNo: 'A-01',
            roomName: 'Interview Room',
            currentOnShift: 'Abubakhar Hin Nel',
        },
    ]

    return (
        <>
            <Stack direction="column" rowGap={2}>
                <FirstAreaTable matches={matches} fakeData={roomData} />
                <AreaOneTable matches={matches} fakeData={roomData} />
                <AreaTwoTable matches={matches} fakeData={roomData} />
                <DiningArea matches={matches} fakeData={roomData} />
                <PhysicianConsultationArea
                    matches={matches}
                    fakeData={roomData}
                />
                <LifeStyleArea matches={matches} fakeData={roomData} />
            </Stack>
            <div
                style={{
                    display: matches ? 'flex' : 'block',
                    paddingTop: '1rem',
                    paddingBottom: '1rem',
                    columnGap: '15px',
                }}
            >
                <Stack
                    direction="row"
                    columnGap={4}
                    sx={{ paddingTop: '10px', paddingBottom: '10px' }}
                >
                    <p style={{ margin: 'auto' }}>
                        <span className={styles.ctScanBottomText}>Date:</span>
                        <span className={styles.ctScanBottomValue}>
                            12-12-2022 Wednesday
                        </span>
                    </p>
                    <p style={{ margin: 'auto' }}>
                        <span className={styles.ctScanBottomText}>
                            Print Time Stamp:
                        </span>
                        <span className={styles.ctScanBottomValue}>12:12</span>
                    </p>
                </Stack>
                <Stack
                    direction="row"
                    sx={{
                        marginLeft: 'auto',
                        paddingTop: '10px',
                    }}
                    columnGap={2}
                >
                    <Button
                        variant="contained"
                        className={styles.ctScanExamDateBttn}
                        fullWidth
                    >
                        Exam. Date
                    </Button>
                    <Button
                        variant="contained"
                        className={styles.ctScanPrintBttn}
                        fullWidth
                        onClick={() => setOpenPrintModal(true)}
                    >
                        Export as PDF
                    </Button>
                </Stack>
            </div>
            <div
                style={{
                    paddingBottom: '10px',
                    paddingTop: '10px',
                    textAlign: 'end',
                }}
            >
                <p>
                    <span className={styles.operatedTimeListPrintSelectedText}>
                        Total Prints Selected:
                    </span>{' '}
                    <span className={styles.operatedTimeListPrintSelectedValue}>
                        0
                    </span>
                </p>
            </div>
            {openPrintModal ? (
                <PrintListModal
                    matches={matches}
                    open={openPrintModal}
                    setOpen={setOpenPrintModal}
                />
            ) : null}
        </>
    )
}
export default OperatedTimeList
