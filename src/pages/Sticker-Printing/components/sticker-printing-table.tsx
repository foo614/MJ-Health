import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import styles from '../_sticker-printing.module.scss'
import Paper from '@mui/material/Paper'
import Checkbox from '@mui/material/Checkbox'

type Props = {
    fakeData: any
}
const StickerPrintingTable: React.FC<Props> = ({ fakeData }: Props) => {
    return (
        <TableContainer
            component={Paper}
            className={styles.stickerPrintingTable}
        >
            <Table>
                <TableHead className={styles.stickerPrintingTableHead}>
                    <TableRow>
                        <TableCell>
                            <p
                                className={styles.stickerPrintingTableHeadTitle}
                                style={{ textAlign: 'center' }}
                            >
                                Seq No.
                            </p>
                        </TableCell>
                        <TableCell>
                            <p className={styles.stickerPrintingTableHeadTitle}>
                                Name
                            </p>
                        </TableCell>
                        <TableCell>
                            <p
                                className={styles.stickerPrintingTableHeadTitle}
                                style={{ textAlign: 'end' }}
                            >
                                IC No.
                            </p>
                        </TableCell>
                        <TableCell>
                            <p
                                className={styles.stickerPrintingTableHeadTitle}
                                style={{ textAlign: 'center' }}
                            >
                                Age
                            </p>
                        </TableCell>
                        <TableCell>
                            <p
                                className={styles.stickerPrintingTableHeadTitle}
                                style={{ textAlign: 'center' }}
                            >
                                Gender
                            </p>
                        </TableCell>
                        <TableCell>
                            <p
                                className={styles.stickerPrintingTableHeadTitle}
                                style={{ textAlign: 'center' }}
                            >
                                Package
                            </p>
                        </TableCell>
                        <TableCell>
                            <p
                                className={styles.stickerPrintingTableHeadTitle}
                                style={{ textAlign: 'center' }}
                            >
                                Member ID
                            </p>
                        </TableCell>
                        <TableCell>
                            <p
                                className={styles.stickerPrintingTableHeadTitle}
                                style={{ textAlign: 'center' }}
                            >
                                Register At
                            </p>
                        </TableCell>
                        <TableCell>
                            <p
                                className={styles.stickerPrintingTableHeadTitle}
                                style={{ textAlign: 'center' }}
                            >
                                Select
                            </p>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {fakeData.map((item: any, index: number) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>
                                    <p className={styles.tableCellValue}>
                                        {item.seqNo}
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p className={styles.tableCellBoldValue}>
                                        {item.name}
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p className={styles.tableCellValue}>
                                        {item.ic}
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p className={styles.tableCellValue}>
                                        {item.age}
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p className={styles.tableCellValue}>
                                        {item.gender}
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p
                                        className={styles.tableCellValue}
                                        style={{ textAlign: 'center' }}
                                    >
                                        {item.package}
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p className={styles.tableCellValue}>
                                        {item.memberID}
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <p className={styles.tableCellValue}>
                                        {item.registerAt}
                                    </p>
                                </TableCell>
                                <TableCell>
                                    <Checkbox />
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default StickerPrintingTable
