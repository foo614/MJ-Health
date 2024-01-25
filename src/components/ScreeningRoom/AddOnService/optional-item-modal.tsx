import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import * as React from 'react'
import styles from './_add-on-service.module.scss'
import { Box, TextField } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Checkbox from '@mui/material/Checkbox'

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

type Props = {
    open: boolean
    setOpen: any
    optionalItems: any
}
const OptionalItemModal: React.FC<Props> = ({
    open,
    setOpen,
    optionalItems,
}: Props) => {
    const [checkItem, setCheckItem] = React.useState<any>([])

    const handleCheckItem = (item: any) => {
        const itemExist = checkItem?.includes(item)
        if (!itemExist) {
            setCheckItem((oldArray: any) => [...oldArray, item])
        } else {
            const filterArray = checkItem?.filter((x: any) => x.id !== item.id)
            setCheckItem(filterArray)
        }
    }

    return (
        <>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                classes={{ paper: styles.optionalItemModal }}
                onClose={() => setOpen(false)}
            >
                <DialogTitle sx={{ backgroundColor: '#fff' }}>
                    <p className={styles.optionalItemTitle}>Optional Items</p>
                </DialogTitle>
                <DialogContent
                    className={styles.optionalItemModalDialogContent}
                >
                    <Box sx={{ padding: '15px' }}>
                        <TextField
                            InputProps={{
                                classes: { input: styles.searchInputField },
                            }}
                            variant="outlined"
                            margin="dense"
                            fullWidth
                            name="searchField"
                            className={styles.modalFormField}
                            placeholder="Search..."
                            size="small"
                        />
                    </Box>
                    <Box sx={{ paddingLeft: '35px', paddingRight: '35px' }}>
                        <TableContainer className={styles.optionalModalTable}>
                            <Table stickyHeader>
                                <TableHead
                                    className={styles.optionalItemTableHeader}
                                >
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                padding: '5px',
                                                background: '#f5f5f5',
                                            }}
                                            width="70%"
                                        >
                                            <p
                                                className={
                                                    styles.memberProfileFieldTitle
                                                }
                                            >
                                                Items
                                            </p>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                padding: '5px',
                                                background: '#f5f5f5',
                                            }}
                                            width="20%"
                                        >
                                            <p
                                                className={
                                                    styles.memberProfileFieldTitle
                                                }
                                            >
                                                Price (RM)
                                            </p>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                padding: '5px',
                                                background: '#f5f5f5',
                                            }}
                                            width="10%"
                                        >
                                            <p
                                                className={
                                                    styles.memberProfileFieldTitle
                                                }
                                            >
                                                Checkbox
                                            </p>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {optionalItems.map(
                                        (item: any, index: number) => {
                                            return (
                                                <TableRow key={index}>
                                                    <TableCell>
                                                        <p
                                                            className={
                                                                styles.tableValue
                                                            }
                                                        >
                                                            {item.item}
                                                        </p>
                                                    </TableCell>
                                                    <TableCell>
                                                        <p
                                                            className={
                                                                styles.tableValue
                                                            }
                                                        >
                                                            {item.price}
                                                        </p>
                                                    </TableCell>
                                                    <TableCell>
                                                        <Checkbox
                                                            checked={
                                                                checkItem?.includes(
                                                                    item
                                                                )
                                                                    ? true
                                                                    : false
                                                            }
                                                            name="optionalItemCheck"
                                                            onChange={() =>
                                                                handleCheckItem(
                                                                    item
                                                                )
                                                            }
                                                        />
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </DialogContent>
                <DialogActions
                    sx={{
                        display: 'block',
                        paddingLeft: '20px',
                        background: '#fff',
                        paddingRight: '20px',
                        paddingTop: '15px',
                        paddingBottom: '15px',
                    }}
                >
                    <p className={styles.optionalItemModalBottomText}>
                        {checkItem?.length} item selected.
                    </p>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default OptionalItemModal
