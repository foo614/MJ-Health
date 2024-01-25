import styles from './_add-on-service.module.scss'
import SearchIcon from 'images/reception-search.png'
import { TextField, InputAdornment, Button } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { useState } from 'react'
import SignatureModal from 'components/SignatureModal'
import OptionalItemModal from './optional-item-modal'

const AddOnService = () => {
    const [openSignatureModal, setOpenSignatureModal] = useState<boolean>(false)
    const [openOptionalItemModal, setOpenOptionalItemModal] =
        useState<boolean>(false)
    const fake_data = [
        {
            id: 1,
            item: 'Gynecological Sonography',
            price: 120,
        },
        {
            id: 2,
            item: 'Body Composition Test',
            price: 120,
        },
        {
            id: 3,
            item: 'Gynecological Sonography',
            price: 120,
        },
        {
            id: 4,
            item: 'Gynecological Sonography',
            price: 120,
        },
        {
            id: 5,
            item: 'Gynecological Sonography',
            price: 120,
        },
        {
            id: 6,
            item: 'Gynecological Sonography',
            price: 120,
        },
        {
            id: 7,
            item: 'Gynecological Sonography',
            price: 120,
        },
        {
            id: 8,
            item: 'Gynecological Sonography',
            price: 120,
        },
        {
            id: 9,
            item: 'Gynecological Sonography',
            price: 120,
        },
    ]
    return (
        <>
            <div style={{ paddingLeft: '30px', paddingRight: '30px' }}>
                <p className={styles.medical_content_title}>Add On Service</p>
                <div className={styles.add_on_service_div}>
                    <div className={styles.add_on_service_op_item_div}>
                        <p className={styles.add_on_service_op_item_text}>
                            Optional Items
                        </p>
                    </div>
                    <div style={{ padding: '20px 30px' }}>
                        <TextField
                            InputProps={{
                                classes: {
                                    input: styles.inputField,
                                    adornedEnd: styles.adornedEndCss,
                                },
                                endAdornment: (
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignContent: 'center',
                                            backgroundColor: '#3adebb',
                                            height: 42,
                                            width: 100,
                                            borderRadius: '0px 5px 5px 0px',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() =>
                                            setOpenOptionalItemModal(true)
                                        }
                                    >
                                        <InputAdornment
                                            position="start"
                                            sx={{ marginRight: '0' }}
                                        >
                                            <img
                                                src={SearchIcon}
                                                width="25"
                                                height="25"
                                                style={{
                                                    marginLeft: 'auto',
                                                    marginRight: 'auto',
                                                }}
                                            />
                                        </InputAdornment>
                                    </div>
                                ),
                            }}
                            name="optionalItems"
                            fullWidth
                            variant="outlined"
                            size="small"
                            margin="dense"
                            className={styles.modalFormField}
                            placeholder="Search..."
                        />
                        <TableContainer className={styles.add_on_service_table}>
                            <Table size="small" stickyHeader>
                                <TableHead>
                                    <TableRow>
                                        <TableCell
                                            sx={{ background: '#FDFDFD' }}
                                        >
                                            <p
                                                className={
                                                    styles.add_on_service_table_head
                                                }
                                            >
                                                Items
                                            </p>
                                        </TableCell>
                                        <TableCell
                                            colSpan={2}
                                            sx={{ background: '#FDFDFD' }}
                                        >
                                            <p
                                                className={
                                                    styles.add_on_service_table_head
                                                }
                                            >
                                                Price (RM)
                                            </p>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {fake_data.map(
                                        (item: any, index: number) => {
                                            return (
                                                <TableRow key={index}>
                                                    <TableCell>
                                                        <p
                                                            className={
                                                                styles.add_on_service_table_value
                                                            }
                                                        >
                                                            {item.item}
                                                        </p>
                                                    </TableCell>
                                                    <TableCell>
                                                        <p
                                                            className={
                                                                styles.add_on_service_table_value
                                                            }
                                                        >
                                                            {item.price}
                                                        </p>
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{
                                                            textAlign: 'end',
                                                        }}
                                                    >
                                                        <Button
                                                            variant="text"
                                                            className={
                                                                styles.add_on_service_table_delete_bttn
                                                            }
                                                        >
                                                            Delete
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }
                                    )}
                                    <TableRow
                                        sx={{ position: 'sticky', bottom: '0' }}
                                    >
                                        <TableCell
                                            sx={{
                                                background: '#FDFDFD',
                                                paddingTop: '20px',
                                                paddingBottom: '20px',
                                                borderBottom: '0',
                                            }}
                                        >
                                            <p
                                                className={
                                                    styles.add_on_service_table_total_item
                                                }
                                            >
                                                Total Item Selected: 6
                                            </p>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                background: '#FDFDFD',
                                                paddingTop: '20px',
                                                paddingBottom: '20px',
                                                borderBottom: '0',
                                            }}
                                            colSpan={2}
                                        >
                                            <p
                                                className={
                                                    styles.add_on_service_table_total_item
                                                }
                                            >
                                                Total Amount: 500
                                            </p>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
                <div style={{ marginTop: '2rem', textAlign: 'end' }}>
                    <Button
                        variant="contained"
                        className={styles.interview_info_save_bttn}
                        sx={{ width: '220px', height: '64px' }}
                        onClick={() => setOpenSignatureModal(true)}
                    >
                        Save
                    </Button>
                </div>
            </div>
            {openSignatureModal ? (
                <SignatureModal
                    open={openSignatureModal}
                    setOpen={setOpenSignatureModal}
                    title="Digital Sign"
                />
            ) : null}
            {openOptionalItemModal ? (
                <OptionalItemModal
                    open={openOptionalItemModal}
                    setOpen={setOpenOptionalItemModal}
                    optionalItems={fake_data}
                />
            ) : null}
        </>
    )
}

export default AddOnService
