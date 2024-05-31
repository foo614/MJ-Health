import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Checkbox, { checkboxClasses } from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useState } from 'react'
import styles from '../../../_it-room-printing.module.scss'
type Props = {
    matches: boolean
    fakeData: any
}
const FirstAreaTable: React.FC<Props> = ({ matches, fakeData }: Props) => {
    const [firstAreaShow, setFirstAreaShow] = useState<boolean>(false)

    return (
        <>
            <TableContainer
                component={Paper}
                className={styles.itRoomPrintingTable}
            >
                <Table>
                    <TableHead
                        className={
                            firstAreaShow
                                ? styles.operatedTimeTableHeader
                                : styles.itRoomPrintingTableHead
                        }
                    >
                        <TableRow>
                            <TableCell
                                colSpan={2}
                                sx={{
                                    borderBottom: 'none',
                                    paddingBottom: firstAreaShow ? '0' : '16px',
                                    width: 200,
                                }}
                            >
                                <p
                                    className={
                                        styles.operatedTimeListHeaderTitle
                                    }
                                >
                                    Front Area
                                </p>
                            </TableCell>
                            <TableCell
                                sx={{
                                    borderBottom: 'none',
                                    paddingBottom: firstAreaShow ? '0' : '16px',
                                    width: 180,
                                }}
                            >
                                {firstAreaShow ? null : (
                                    <p>
                                        <span
                                            className={
                                                styles.itRoomPrintingTableHeadTitle
                                            }
                                        >
                                            Total Counter:
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
                                    paddingBottom: firstAreaShow ? '0' : '16px',
                                }}
                            >
                                {firstAreaShow ? null : (
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
                                    paddingBottom: firstAreaShow ? '0' : '16px',
                                }}
                            >
                                {firstAreaShow ? (
                                    <div
                                        onClick={() => setFirstAreaShow(false)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <RemoveIcon sx={{ color: '#FFF' }} />
                                    </div>
                                ) : (
                                    <div
                                        onClick={() => setFirstAreaShow(true)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <AddIcon sx={{ color: '#FFF' }} />
                                    </div>
                                )}
                            </TableCell>
                        </TableRow>
                        {firstAreaShow ? (
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
                        {firstAreaShow
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
export default FirstAreaTable
