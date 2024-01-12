import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import styles from '../../../_it-room-printing.module.scss'
import AddIcon from '@mui/icons-material/Add'
import Checkbox, { checkboxClasses } from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import RemoveIcon from '@mui/icons-material/Remove'
import { useState } from 'react'
type Props = {
    matches: boolean
    fakeData: any
}
const AreaTwoTable: React.FC<Props> = ({ matches, fakeData }: Props) => {
    const [areaTwoShow, setAreaTwoShow] = useState<boolean>(false)

    return (
        <>
            <TableContainer
                component={Paper}
                className={styles.itRoomPrintingTable}
            >
                <Table>
                    <TableHead
                        className={
                            areaTwoShow
                                ? styles.operatedTimeTableHeader
                                : styles.itRoomPrintingTableHead
                        }
                    >
                        <TableRow>
                            <TableCell
                                colSpan={2}
                                sx={{
                                    borderBottom: 'none',
                                    paddingBottom: areaTwoShow ? '0' : '16px',
                                    width: '50%',
                                }}
                            >
                                <p
                                    className={
                                        styles.operatedTimeListHeaderTitle
                                    }
                                >
                                    Area 2
                                </p>
                            </TableCell>
                            <TableCell
                                sx={{
                                    borderBottom: 'none',
                                    paddingBottom: areaTwoShow ? '0' : '16px',
                                }}
                            >
                                {areaTwoShow ? null : (
                                    <p>
                                        <span
                                            className={
                                                styles.itRoomPrintingTableHeadTitle
                                            }
                                        >
                                            Total Room:
                                        </span>
                                        {'  '}
                                        <span
                                            className={
                                                styles.operatedTimeListHeaderTitle
                                            }
                                            style={{ marginLeft: '10px' }}
                                        >
                                            4
                                        </span>
                                    </p>
                                )}
                            </TableCell>
                            <TableCell
                                sx={{
                                    textAlign: 'center',
                                    borderBottom: 'none',
                                    paddingBottom: areaTwoShow ? '0' : '16px',
                                }}
                            >
                                {areaTwoShow ? null : (
                                    <FormControlLabel
                                        value="start"
                                        control={
                                            <Checkbox
                                                sx={{
                                                    [`&, &.${checkboxClasses.checked}`]:
                                                        {
                                                            color: '#FFF',
                                                        },
                                                }}
                                            />
                                        }
                                        label="Select All"
                                        labelPlacement="start"
                                        sx={{ color: '#FFF' }}
                                    />
                                )}
                            </TableCell>
                            <TableCell
                                sx={{
                                    borderBottom: 'none',
                                    paddingBottom: areaTwoShow ? '0' : '16px',
                                }}
                            >
                                {areaTwoShow ? (
                                    <div
                                        onClick={() => setAreaTwoShow(false)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <RemoveIcon sx={{ color: '#FFF' }} />
                                    </div>
                                ) : (
                                    <div
                                        onClick={() => setAreaTwoShow(true)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <AddIcon sx={{ color: '#FFF' }} />
                                    </div>
                                )}
                            </TableCell>
                        </TableRow>
                        {areaTwoShow ? (
                            <>
                                <TableRow>
                                    <TableCell sx={{ paddingTop: '0' }}>
                                        <p
                                            className={
                                                styles.itRoomPrintingTableHeadTitle
                                            }
                                        >
                                            Room No.
                                        </p>
                                    </TableCell>

                                    <TableCell sx={{ paddingTop: '0' }}>
                                        <p
                                            className={
                                                styles.itRoomPrintingTableHeadTitle
                                            }
                                        >
                                            Room Name
                                        </p>
                                    </TableCell>
                                    <TableCell sx={{ paddingTop: '0' }}>
                                        <p
                                            className={
                                                styles.itRoomPrintingTableHeadTitle
                                            }
                                        >
                                            Current On Shift
                                        </p>
                                    </TableCell>
                                    <TableCell
                                        sx={{
                                            textAlign: 'center',
                                            paddingTop: '0',
                                        }}
                                    >
                                        <FormControlLabel
                                            value="start"
                                            control={
                                                <Checkbox
                                                    sx={{
                                                        [`&, &.${checkboxClasses.checked}`]:
                                                            {
                                                                color: '#FFF',
                                                            },
                                                    }}
                                                />
                                            }
                                            label="Select All"
                                            labelPlacement="start"
                                            sx={{ color: '#FFF' }}
                                        />
                                    </TableCell>
                                    <TableCell
                                        sx={{ paddingTop: '0' }}
                                    ></TableCell>
                                </TableRow>
                            </>
                        ) : null}
                    </TableHead>
                    <TableBody>
                        {areaTwoShow
                            ? fakeData.map((item: any, index: number) => {
                                  return (
                                      <TableRow key={index}>
                                          <TableCell>
                                              <p
                                                  className={
                                                      styles.tableCellValue
                                                  }
                                                  style={{ textAlign: 'left' }}
                                              >
                                                  {item.roomNo}
                                              </p>
                                          </TableCell>
                                          <TableCell>
                                              <p
                                                  className={
                                                      styles.tableCellBoldValue
                                                  }
                                              >
                                                  {item.roomName}
                                              </p>
                                          </TableCell>
                                          <TableCell>
                                              <p
                                                  className={
                                                      styles.tableCellValue
                                                  }
                                                  style={{ textAlign: 'left' }}
                                              >
                                                  {item.currentOnShift}
                                              </p>
                                          </TableCell>
                                          <TableCell
                                              sx={{ textAlign: 'center' }}
                                          >
                                              <Checkbox
                                                  sx={{
                                                      [`&, &.${checkboxClasses.checked}`]:
                                                          {
                                                              color: 'primary',
                                                          },
                                                  }}
                                              />
                                          </TableCell>
                                          <TableCell></TableCell>
                                      </TableRow>
                                  )
                              })
                            : null}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default AreaTwoTable