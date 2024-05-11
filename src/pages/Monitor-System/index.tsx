import { Button, Grid, Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import ResponsiveAppBar from 'components/AppBar'
import CustomHeader from 'components/CustomHeader'
import CustomHeaderSearchInput from 'components/CustomHeader/EndAdornment/SearchInput'
import { useState } from 'react'
import styles from './_monitor-system.module.scss'
import ChangeStationModal from './components/change-station-modal'
import FlowModifierModal from './components/flow-modifier-modal'
import MonitorSystemBottomTable from './components/monitor-system-bottom-table'
import MonitorSystemTopTable from './components/monitor-system-top-table'
const MonitorSystem = () => {
    const topFakeData = [
        {
            roomNo: 'A-01',
            examRoom: 'ENT Examination',
            seqNo: '001',
            currentServing: 'Jeffery Mohamad Bin Christofa',
            doctor: 'Grosen Edly Anak Henry',
            servingTime: '00:00:45',
            waiting: 1,
            completed: 1,
        },
        {
            roomNo: 'A-02',
            examRoom: 'ENT Examination 2',
            seqNo: '-',
            currentServing: '-',
            doctor: '-',
            servingTime: '-',
            waiting: '-',
            completed: '-',
        },
        {
            roomNo: 'A-03',
            examRoom: 'Pulmonary Function',
            seqNo: '002',
            currentServing: 'Wong Sin Yi',
            doctor: 'Lee Shen Long',
            servingTime: '00:05:00',
            waiting: 10,
            completed: 16,
        },
        {
            roomNo: 'A-04',
            examRoom: 'Bone Mineral Density',
            seqNo: '003',
            currentServing: 'Lok Wing Ching',
            doctor: 'Noraini Binti Hassan',
            servingTime: '00:01:25',
            waiting: 1,
            completed: 5,
        },
        {
            roomNo: 'A-05',
            examRoom: 'Audiometry 1',
            seqNo: '004',
            currentServing: 'Noraini Binti Hassan',
            doctor: 'Chen Yu Lin',
            servingTime: '00:14:45',
            waiting: 3,
            completed: 9,
        },
        {
            roomNo: 'A-06',
            examRoom: 'Pulmonary Function',
            seqNo: '005',
            currentServing: 'Angelica Lee',
            doctor: 'Abubakhar Hin Nel',
            servingTime: '00:05:00',
            waiting: 2,
            completed: 6,
        },
        {
            roomNo: 'A-07',
            examRoom: 'Bone Mineral Density',
            seqNo: '006',
            currentServing: 'Lok Wing Ching',
            doctor: 'Alfred de Saiyanrito',
            servingTime: '00:01:45',
            waiting: 10,
            completed: 12,
        },
        {
            roomNo: 'A-08',
            examRoom: 'Audiometry 2',
            seqNo: '007',
            currentServing: 'Dato Hussin',
            doctor: 'Chen Xiao Chun',
            servingTime: '00:14:45',
            waiting: 3,
            completed: 8,
        },
        {
            roomNo: 'A-09',
            examRoom: 'Pulmonary Function',
            seqNo: '008',
            currentServing: 'Wang Jin Pyng',
            doctor: 'Liu Bii',
            servingTime: '00:05:00',
            waiting: 2,
            completed: 12,
        },
        {
            roomNo: 'A-10',
            examRoom: 'Bone Mineral Density',
            seqNo: '009',
            currentServing: 'Grosen Edly Anak Henry',
            doctor: 'Lok Cat Wang',
            servingTime: '00:01:45',
            waiting: 1,
            completed: 4,
        },
    ]

    const bottomFakeData = [
        {
            id: 1,
            seqNo: '001',
            name: 'Jeffery Mohamad Bin Christofa',
            age: 54,
            gender: 'Male',
            package: 'K1',
            status: 1,
            currentStation: 'A-01 Interview',
            nextStation: 'A-02 General Measurement',
        },
        {
            id: 2,
            seqNo: '002',
            name: 'Wong Sin Yi',
            age: 54,
            gender: 'Female',
            package: 'K2',
            status: 0,
            currentStation: 'A-02 General Measurement',
            nextStation: '-',
        },
        {
            id: 3,
            seqNo: '003',
            name: 'Liu Yan',
            age: 54,
            gender: 'Male',
            package: 'K3',
            status: 1,
            currentStation: 'A-03 Eletrocardiagram',
            nextStation: 'A-04 Vision & Ocular Tension Test',
        },
        {
            id: 4,
            seqNo: '004',
            name: 'Lok Wing Ching',
            age: 54,
            gender: 'Female',
            package: 'K3',
            status: 0,
            currentStation: 'A-04 Vision & Ocular Tension Test',
            nextStation: '-',
        },
        {
            id: 5,
            seqNo: '005',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K2',
            status: 0,
            currentStation: 'A-05 Bone Mineral Density',
            nextStation: '-',
        },
        {
            id: 6,
            seqNo: '005',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K2',
            status: 0,
            currentStation: 'A-05 Bone Mineral Density',
            nextStation: '-',
        },
        {
            id: 7,
            seqNo: '005',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K2',
            status: 0,
            currentStation: 'A-05 Bone Mineral Density',
            nextStation: '-',
        },
        {
            id: 8,
            seqNo: '005',
            name: 'Angelica Lee',
            age: 54,
            gender: 'Female',
            package: 'K2',
            status: 0,
            currentStation: 'A-05 Bone Mineral Density',
            nextStation: '-',
        },
    ]

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))

    const lgUp = useMediaQuery(theme.breakpoints.up('lg'))

    const [currentSelectedItem, setCurrentSelectedItem] = useState(
        bottomFakeData?.[0]
    )

    const [openFlowModifierModal, setOpenFlowModifierModal] =
        useState<boolean>(false)
    const [openChangeStationModal, setOpenChangeStationModal] =
        useState<boolean>(false)

    return (
        <>
            <ResponsiveAppBar />
            <CustomHeader
                title="MONITOR SYSTEM"
                endAdornment={
                    <CustomHeaderSearchInput placeholder="Search Member Seq No..." />
                }
            />
            <div className={styles.monitorSystemDiv}>
                <Grid container columnSpacing={2}>
                    <Grid item md={2} sx={{ marginBottom: '15px' }} xs={12}>
                        <Button
                            variant="contained"
                            fullWidth
                            className={
                                matches
                                    ? styles.selectedBttn
                                    : styles.selectedBttnMobile
                            }
                            size="small"
                        >
                            Lobby
                        </Button>
                    </Grid>
                    <Grid item md={2} sx={{ marginBottom: '15px' }} xs={12}>
                        <Button
                            variant="contained"
                            fullWidth
                            className={
                                matches
                                    ? styles.unselectedBttn
                                    : styles.unselectedBttnMobile
                            }
                            size="small"
                        >
                            Zone 1
                        </Button>
                    </Grid>
                    <Grid item md={2} sx={{ marginBottom: '15px' }} xs={12}>
                        <Button
                            variant="contained"
                            fullWidth
                            className={
                                matches
                                    ? styles.unselectedBttn
                                    : styles.unselectedBttnMobile
                            }
                            size="small"
                        >
                            Zone 2
                        </Button>
                    </Grid>
                    <Grid item md={2} sx={{ marginBottom: '15px' }} xs={12}>
                        <Button
                            variant="contained"
                            fullWidth
                            className={
                                matches
                                    ? styles.unselectedBttn
                                    : styles.unselectedBttnMobile
                            }
                            size="small"
                        >
                            Dining Area
                        </Button>
                    </Grid>
                    <Grid item md={2} sx={{ marginBottom: '15px' }} xs={12}>
                        <Button
                            variant="contained"
                            fullWidth
                            className={
                                matches
                                    ? styles.unselectedBttn
                                    : styles.unselectedBttnMobile
                            }
                            size="small"
                        >
                            Physician Consultation Zone
                        </Button>
                    </Grid>
                    <Grid item md={2} sx={{ marginBottom: '15px' }} xs={12}>
                        <Button
                            variant="contained"
                            fullWidth
                            className={
                                matches
                                    ? styles.unselectedBttn
                                    : styles.unselectedBttnMobile
                            }
                            size="small"
                        >
                            HMC Zone
                        </Button>
                    </Grid>
                </Grid>
                <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                    <MonitorSystemTopTable fakeData={topFakeData} />
                </div>
                <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                    <MonitorSystemBottomTable
                        fakeData={bottomFakeData}
                        currentSelectedItem={currentSelectedItem}
                        setCurrentSelectedItem={setCurrentSelectedItem}
                        setOpenFlowModifierModal={setOpenFlowModifierModal}
                        setOpenChangeStationModal={setOpenChangeStationModal}
                    />
                </div>

                {openChangeStationModal ? (
                    <ChangeStationModal
                        open={openChangeStationModal}
                        setOpen={setOpenChangeStationModal}
                        matches={matches}
                        currentItem={currentSelectedItem}
                    />
                ) : null}

                {openFlowModifierModal ? (
                    <FlowModifierModal
                        open={openFlowModifierModal}
                        setOpen={setOpenFlowModifierModal}
                        matches={matches}
                        currentItem={currentSelectedItem}
                    />
                ) : null}
            </div>
        </>
    )
}

export default MonitorSystem
