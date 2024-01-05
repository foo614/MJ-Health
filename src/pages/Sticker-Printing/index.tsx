import SearchIcon from '@mui/icons-material/Search'
import {
    Button,
    Container,
    Grid,
    InputAdornment,
    TextField,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import ResponsiveAppBar from 'components/AppBar'
import CustomHeader from 'components/CustomHeader'
import { useState } from 'react'
import styles from './_sticker-printing.module.scss'
import PrintBarcodeModal from './components/print-barcode-modal'
import PrintStickerModal from './components/print-sticker-modal'
import StickerPrintingTable from './components/sticker-printing-table'

const StickerPrinting = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const [openPrintStickerModal, setOpenPrintStickerModal] = useState(false)
    const [openPrintBarcodeModal, setOpenPrintBarcodeModal] = useState(false)
    const fakeData = [
        {
            seqNo: '001',
            name: 'Jeffery Mohamad Bin Christofa',
            ic: '830516015213',
            age: '54',
            gender: 'Male',
            package: 'K1',
            memberID: '0401101000073001',
            registerAt: '13:00',
        },
        {
            seqNo: '002',
            name: 'Wong Sin Yi',
            ic: '830516015213',
            age: '54',
            gender: 'Male',
            package: 'K1',
            memberID: '0401101000073001',
            registerAt: '13:00',
        },
        {
            seqNo: '003',
            name: 'Liu Yan',
            ic: '830516015213',
            age: '54',
            gender: 'Male',
            package: 'K1',
            memberID: '0401101000073001',
            registerAt: '13:00',
        },
        {
            seqNo: '004',
            name: 'Lok Wing Ching',
            ic: '830516015213',
            age: '54',
            gender: 'Male',
            package: 'K1',
            memberID: '0401101000073001',
            registerAt: '13:00',
        },
        {
            seqNo: '005',
            name: 'Angelica Lee',
            ic: '830516015213',
            age: '54',
            gender: 'Male',
            package: 'K1',
            memberID: '0401101000073001',
            registerAt: '-',
        },
        {
            seqNo: '006',
            name: 'Noraini Binti Hassan',
            ic: '830516015213',
            age: '54',
            gender: 'Male',
            package: 'K1',
            memberID: '0401101000073001',
            registerAt: '-',
        },
        {
            seqNo: '007',
            name: 'Grosen Edly Anak Henry',
            ic: '830516015213',
            age: '54',
            gender: 'Male',
            package: 'K1',
            memberID: '0401101000073001',
            registerAt: '-',
        },
        {
            seqNo: '008',
            name: 'Dato Hussin',
            ic: '830516015213',
            age: '54',
            gender: 'Male',
            package: 'K1',
            memberID: '0401101000073001',
            registerAt: '13:00',
        },
        {
            seqNo: '009',
            name: 'Chen Yu Lin',
            ic: '830516015213',
            age: '54',
            gender: 'Male',
            package: 'K1',
            memberID: '0401101000073001',
            registerAt: '13:00',
        },
        {
            seqNo: '010',
            name: 'Wang Jin Pyng',
            ic: '830516015213',
            age: '54',
            gender: 'Male',
            package: 'K1',
            memberID: '0401101000073001',
            registerAt: '13:00',
        },
    ]
    return (
        <>
            <ResponsiveAppBar />
            <CustomHeader to="" title="STICKER PRINTING" />
            <Container maxWidth="lg" style={{ marginTop: '1rem' }}>
                <Grid container spacing={2}>
                    <Grid item md={6} className={styles.marginAuto} xs={12}>
                        <TextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon
                                            className={styles.searchIcon}
                                        />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth
                            variant="outlined"
                            size="small"
                            margin="dense"
                            placeholder="Search..."
                            className={styles.stickerPrintingSearchInput}
                        />
                    </Grid>
                    <Grid item md={3} className={styles.marginAuto} xs={12}>
                        <Button
                            variant="contained"
                            fullWidth
                            className={styles.printBarcodeBttn}
                            onClick={() => setOpenPrintBarcodeModal(true)}
                        >
                            PRINT BARCODE STICKER
                        </Button>
                    </Grid>
                    <Grid item md={3} className={styles.marginAuto} xs={12}>
                        <Button
                            variant="contained"
                            fullWidth
                            className={styles.printStickerBttn}
                            onClick={() => setOpenPrintStickerModal(true)}
                        >
                            PRINT STICKER
                        </Button>
                    </Grid>
                </Grid>
                <div style={{ marginTop: '1rem' }}>
                    <StickerPrintingTable fakeData={fakeData} />
                </div>
                {openPrintStickerModal ? (
                    <PrintStickerModal
                        matches={matches}
                        open={openPrintStickerModal}
                        setOpen={setOpenPrintStickerModal}
                    />
                ) : null}
                {openPrintBarcodeModal ? (
                    <PrintBarcodeModal
                        matches={matches}
                        open={openPrintBarcodeModal}
                        setOpen={setOpenPrintBarcodeModal}
                    />
                ) : null}
            </Container>
        </>
    )
}

export default StickerPrinting
