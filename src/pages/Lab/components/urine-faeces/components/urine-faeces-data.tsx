import TextField from '@mui/material/TextField'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import styles from '../_urine-faeces.module.scss'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Button from '@mui/material/Button'
import { useState } from 'react'
import CancelIcon from '@mui/icons-material/Cancel'
import AddCircleIcon from '@mui/icons-material/AddCircle'

type UrineFaecesDataProps = {
    editMode: boolean
    matches: boolean
}

const UrineFaecesData: React.FC<UrineFaecesDataProps> = ({
    editMode,
    matches,
}: UrineFaecesDataProps) => {
    const [othersItem, setOthersItem] = useState<any>([])
    const [otherItemCurrentSelectValue, setOtherItemCurrentSelectValue] =
        useState('')
    const selectOptions = [
        {
            label: '-',
            value: 0,
        },
        {
            label: 'Positive',
            value: 1,
        },
        {
            label: 'Negative',
            value: 2,
        },
        {
            label: 'Clear',
            value: 3,
        },
    ]

    const OtherItemSelectOptions = [
        {
            id: 1,
            label: 'Cellular Casts',
        },
        {
            id: 2,
            label: 'Hyaline Casts',
        },
    ]

    const handleValueChange = (e: SelectChangeEvent) => {
        console.log(e.target.value)
    }

    const handleOtherItemsValueChange = (e: SelectChangeEvent) => {
        setOtherItemCurrentSelectValue(e.target.value)
    }

    const handleAddItem = () => {
        const currentOtherItems = [...othersItem]
        const existingItem = currentOtherItems.find(
            (x) => x.value === otherItemCurrentSelectValue
        )
        if (!existingItem) {
            const item = {
                value: otherItemCurrentSelectValue,
            }
            setOtherItemCurrentSelectValue('')
            setOthersItem((oldArray: any) => [...oldArray, item])
        }
    }

    const handleRemoveOtherItems = (id: number) => {
        const currentOtherItems = [...othersItem]
        const filterArray = currentOtherItems.filter((x) => x.value !== id)
        setOthersItem(filterArray)
    }

    const handleUpdateOtherItemSelectOptions = (
        e: SelectChangeEvent,
        index: number
    ) => {
        const currentArray = [...othersItem]
        const existingItem = currentArray.find(
            (x) => x.value === e.target.value
        )
        if (!existingItem) {
            currentArray[index].value = e.target.value

            setOthersItem(currentArray)
        }
    }
    return (
        <Table
            style={matches ? { tableLayout: 'fixed' } : { width: '800px' }}
            className={styles.dataTable}
        >
            <TableHead>
                <TableRow>
                    <TableCell style={{ border: '0' }}></TableCell>
                    <TableCell
                        style={{
                            border: '0',
                            borderRadius: '8px 8px 0px 0px',
                        }}
                        className={styles.currentDataBackgroundColor}
                    >
                        <p className={styles.dataTitleColumn}>Current</p>
                    </TableCell>
                    <TableCell
                        style={{
                            border: '0',
                            borderRadius: '8px 8px 0px 0px',
                        }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <p className={styles.dataTitleColumn}>22-09-2022</p>
                    </TableCell>
                    <TableCell
                        style={{
                            border: '0',
                            borderRadius: '8px 8px 0px 0px',
                        }}
                        className={styles.existingDataBackgroundColor}
                    >
                        <p className={styles.dataTitleColumn}>22-09-2018</p>
                    </TableCell>
                    <TableCell style={{ width: '0', border: '0' }}></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell
                        style={{
                            border: '0',
                            paddingLeft: '10px',
                            paddingRight: '10px',
                        }}
                    >
                        <p className={styles.dataTitle}>Urine Routine</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    ></TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    ></TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    ></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>Appearance</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <FormControl
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            className={styles.textFieldProps}
                        >
                            <Select
                                className={styles.fieldCss}
                                // value={age}
                                onChange={handleValueChange}
                            >
                                {selectOptions.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.value}
                                                key={index}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <FormControl
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            className={styles.textFieldProps}
                        >
                            <Select
                                className={styles.fieldCss}
                                // value={age}
                                onChange={handleValueChange}
                            >
                                {selectOptions.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.value}
                                                key={index}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <FormControl
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            className={styles.textFieldProps}
                        >
                            <Select
                                className={styles.fieldCss}
                                // value={age}
                                onChange={handleValueChange}
                            >
                                {selectOptions.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.value}
                                                key={index}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>Protein</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <FormControl
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            className={styles.textFieldProps}
                        >
                            <Select
                                className={styles.fieldCss}
                                // value={age}
                                onChange={handleValueChange}
                            >
                                {selectOptions.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.value}
                                                key={index}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <FormControl
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            className={styles.textFieldProps}
                        >
                            <Select
                                className={styles.fieldCss}
                                // value={age}
                                onChange={handleValueChange}
                            >
                                {selectOptions.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.value}
                                                key={index}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <FormControl
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            className={styles.textFieldProps}
                        >
                            <Select
                                className={styles.fieldCss}
                                // value={age}
                                onChange={handleValueChange}
                            >
                                {selectOptions.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.value}
                                                key={index}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>Glucose</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <FormControl
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            className={styles.textFieldProps}
                        >
                            <Select
                                className={styles.fieldCss}
                                // value={age}
                                onChange={handleValueChange}
                            >
                                {selectOptions.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.value}
                                                key={index}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <FormControl
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            className={styles.textFieldProps}
                        >
                            <Select
                            className={styles.fieldCss}
                                // value={age}
                                onChange={handleValueChange}
                            >
                                {selectOptions.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.value}
                                                key={index}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <FormControl
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            className={styles.textFieldProps}
                        >
                            <Select
                            className={styles.fieldCss}
                                // value={age}
                                onChange={handleValueChange}
                            >
                                {selectOptions.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.value}
                                                key={index}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>Bilirubin</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <FormControl
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            className={styles.textFieldProps}
                        >
                            <Select
                            className={styles.fieldCss}
                                // value={age}
                                onChange={handleValueChange}
                            >
                                {selectOptions.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.value}
                                                key={index}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <FormControl
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            className={styles.textFieldProps}
                        >
                            <Select
                            className={styles.fieldCss}
                                // value={age}
                                onChange={handleValueChange}
                            >
                                {selectOptions.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.value}
                                                key={index}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <FormControl
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            className={styles.textFieldProps}
                        >
                            <Select
                            className={styles.fieldCss}
                                // value={age}
                                onChange={handleValueChange}
                            >
                                {selectOptions.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.value}
                                                key={index}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>Urobilinogen</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <FormControl
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            className={styles.textFieldProps}
                        >
                            <Select
                            className={styles.fieldCss}
                                // value={age}
                                onChange={handleValueChange}
                            >
                                {selectOptions.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.value}
                                                key={index}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <FormControl
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            className={styles.textFieldProps}
                        >
                            <Select
                            className={styles.fieldCss}
                                // value={age}
                                onChange={handleValueChange}
                            >
                                {selectOptions.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.value}
                                                key={index}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <FormControl
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            className={styles.textFieldProps}
                        >
                            <Select
                            className={styles.fieldCss}
                                // value={age}
                                onChange={handleValueChange}
                            >
                                {selectOptions.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.value}
                                                key={index}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>Occult Blood</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <FormControl
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            className={styles.textFieldProps}
                        >
                            <Select
                            className={styles.fieldCss}
                                // value={age}
                                onChange={handleValueChange}
                            >
                                {selectOptions.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.value}
                                                key={index}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <FormControl
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            className={styles.textFieldProps}
                        >
                            <Select
                            className={styles.fieldCss}
                                // value={age}
                                onChange={handleValueChange}
                            >
                                {selectOptions.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.value}
                                                key={index}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <FormControl
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            className={styles.textFieldProps}
                        >
                            <Select
                            className={styles.fieldCss}
                                // value={age}
                                onChange={handleValueChange}
                            >
                                {selectOptions.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.value}
                                                key={index}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>Ketone</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <FormControl
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            className={styles.textFieldProps}
                        >
                            <Select
                            className={styles.fieldCss}
                                // value={age}
                                onChange={handleValueChange}
                            >
                                {selectOptions.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.value}
                                                key={index}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <FormControl
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            className={styles.textFieldProps}
                        >
                            <Select
                            className={styles.fieldCss}
                                // value={age}
                                onChange={handleValueChange}
                            >
                                {selectOptions.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.value}
                                                key={index}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <FormControl
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            className={styles.textFieldProps}
                        >
                            <Select
                            className={styles.fieldCss}
                                // value={age}
                                onChange={handleValueChange}
                            >
                                {selectOptions.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.value}
                                                key={index}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>Leukocytes</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <FormControl
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            className={styles.textFieldProps}
                        >
                            <Select
                            className={styles.fieldCss}
                                // value={age}
                                onChange={handleValueChange}
                            >
                                {selectOptions.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.value}
                                                key={index}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <FormControl
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            className={styles.textFieldProps}
                        >
                            <Select
                            className={styles.fieldCss}
                                // value={age}
                                onChange={handleValueChange}
                            >
                                {selectOptions.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.value}
                                                key={index}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <FormControl
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            className={styles.textFieldProps}
                        >
                            <Select
                            className={styles.fieldCss}
                                // value={age}
                                onChange={handleValueChange}
                            >
                                {selectOptions.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.value}
                                                key={index}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>Specific Gravity</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>PH</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell
                        style={{
                            border: '0',
                            paddingLeft: '10px',
                            paddingRight: '10px',
                        }}
                    >
                        <p className={styles.dataTitle}>Urine Sediments</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    ></TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    ></TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    ></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>RBC</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <div className={styles.flexCell}>
                            <div>
                                <TextField
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    disabled={editMode ? false : true}
                                    InputProps={{
                                        className: styles.textFieldProps,
                                    }}
                                />
                            </div>
                            <div>
                                <TextField
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    disabled={editMode ? false : true}
                                    InputProps={{
                                        className: styles.textFieldProps,
                                    }}
                                />
                            </div>
                        </div>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <div className={styles.flexCell}>
                            <div>
                                <TextField
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    disabled={editMode ? false : true}
                                    InputProps={{
                                        className: styles.textFieldProps,
                                    }}
                                />
                            </div>
                            <div>
                                <TextField
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    disabled={editMode ? false : true}
                                    InputProps={{
                                        className: styles.textFieldProps,
                                    }}
                                />
                            </div>
                        </div>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <div className={styles.flexCell}>
                            <div>
                                <TextField
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    disabled={editMode ? false : true}
                                    InputProps={{
                                        className: styles.textFieldProps,
                                    }}
                                />
                            </div>
                            <div>
                                <TextField
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    disabled={editMode ? false : true}
                                    InputProps={{
                                        className: styles.textFieldProps,
                                    }}
                                />
                            </div>
                        </div>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>WBC</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <div className={styles.flexCell}>
                            <div>
                                <TextField
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    disabled={editMode ? false : true}
                                    InputProps={{
                                        className: styles.textFieldProps,
                                    }}
                                />
                            </div>
                            <div>
                                <TextField
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    disabled={editMode ? false : true}
                                    InputProps={{
                                        className: styles.textFieldProps,
                                    }}
                                />
                            </div>
                        </div>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <div className={styles.flexCell}>
                            <div>
                                <TextField
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    disabled={editMode ? false : true}
                                    InputProps={{
                                        className: styles.textFieldProps,
                                    }}
                                />
                            </div>
                            <div>
                                <TextField
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    disabled={editMode ? false : true}
                                    InputProps={{
                                        className: styles.textFieldProps,
                                    }}
                                />
                            </div>
                        </div>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <div className={styles.flexCell}>
                            <div>
                                <TextField
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    disabled={editMode ? false : true}
                                    InputProps={{
                                        className: styles.textFieldProps,
                                    }}
                                />
                            </div>
                            <div>
                                <TextField
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    disabled={editMode ? false : true}
                                    InputProps={{
                                        className: styles.textFieldProps,
                                    }}
                                />
                            </div>
                        </div>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>Epithelial Cells</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <div className={styles.flexCell}>
                            <div>
                                <TextField
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    disabled={editMode ? false : true}
                                    InputProps={{
                                        className: styles.textFieldProps,
                                    }}
                                />
                            </div>
                            <div>
                                <TextField
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    disabled={editMode ? false : true}
                                    InputProps={{
                                        className: styles.textFieldProps,
                                    }}
                                />
                            </div>
                        </div>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <div className={styles.flexCell}>
                            <div>
                                <TextField
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    disabled={editMode ? false : true}
                                    InputProps={{
                                        className: styles.textFieldProps,
                                    }}
                                />
                            </div>
                            <div>
                                <TextField
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    disabled={editMode ? false : true}
                                    InputProps={{
                                        className: styles.textFieldProps,
                                    }}
                                />
                            </div>
                        </div>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <div className={styles.flexCell}>
                            <div>
                                <TextField
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    disabled={editMode ? false : true}
                                    InputProps={{
                                        className: styles.textFieldProps,
                                    }}
                                />
                            </div>
                            <div>
                                <TextField
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    disabled={editMode ? false : true}
                                    InputProps={{
                                        className: styles.textFieldProps,
                                    }}
                                />
                            </div>
                        </div>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>Cast</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <div className={styles.flexCell}>
                            <div>
                                <TextField
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    disabled={editMode ? false : true}
                                    InputProps={{
                                        className: styles.textFieldProps,
                                    }}
                                />
                            </div>
                            <div>
                                <TextField
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    disabled={editMode ? false : true}
                                    InputProps={{
                                        className: styles.textFieldProps,
                                    }}
                                />
                            </div>
                        </div>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <div className={styles.flexCell}>
                            <div>
                                <TextField
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    disabled={editMode ? false : true}
                                    InputProps={{
                                        className: styles.textFieldProps,
                                    }}
                                />
                            </div>
                            <div>
                                <TextField
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    disabled={editMode ? false : true}
                                    InputProps={{
                                        className: styles.textFieldProps,
                                    }}
                                />
                            </div>
                        </div>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <div className={styles.flexCell}>
                            <div>
                                <TextField
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    disabled={editMode ? false : true}
                                    InputProps={{
                                        className: styles.textFieldProps,
                                    }}
                                />
                            </div>
                            <div>
                                <TextField
                                    size="small"
                                    fullWidth
                                    margin="dense"
                                    disabled={editMode ? false : true}
                                    InputProps={{
                                        className: styles.textFieldProps,
                                    }}
                                />
                            </div>
                        </div>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>Bacteria</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell
                        style={{
                            border: '0',
                            paddingLeft: '10px',
                            paddingRight: '10px',
                            paddingBottom: '0',
                        }}
                    >
                        <p
                            className={styles.dataCategory}
                            style={{ border: '0' }}
                        >
                            Others
                        </p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    ></TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    ></TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    ></TableCell>
                </TableRow>
                {othersItem?.length > 0
                    ? othersItem.map(
                          (currentListItem: any, currentListIndex: number) => {
                              return (
                                  <TableRow key={currentListIndex}>
                                      <TableCell
                                          style={{ border: '0' }}
                                          className={styles.ptpb0}
                                      ></TableCell>
                                      <TableCell
                                          style={{ border: '0' }}
                                          className={
                                              styles.currentDataBackgroundColor +
                                              ' ' +
                                              styles.ptpb0
                                          }
                                      >
                                          <FormControl
                                              size="small"
                                              fullWidth
                                              margin="dense"
                                              disabled={editMode ? false : true}
                                              className={styles.textFieldProps}
                                          >
                                              <Select
                                              className={styles.fieldCss}
                                                  value={currentListItem.value}
                                                  onChange={(e) =>
                                                      handleUpdateOtherItemSelectOptions(
                                                          e,
                                                          currentListIndex
                                                      )
                                                  }
                                              >
                                                  {OtherItemSelectOptions.map(
                                                      (
                                                          item: any,
                                                          index: number
                                                      ) => {
                                                          return (
                                                              <MenuItem
                                                                  value={
                                                                      item.id
                                                                  }
                                                                  key={index}
                                                              >
                                                                  {item.label}
                                                              </MenuItem>
                                                          )
                                                      }
                                                  )}
                                              </Select>
                                          </FormControl>
                                      </TableCell>
                                      <TableCell
                                          style={{ border: '0' }}
                                          className={
                                              styles.existingDataBackgroundColor +
                                              ' ' +
                                              styles.ptpb0
                                          }
                                      >
                                          <FormControl
                                              size="small"
                                              fullWidth
                                              margin="dense"
                                              disabled={true}
                                              className={styles.textFieldProps}
                                          >
                                              <Select
                                              className={styles.fieldCss}
                                                  // value={age}
                                                  onChange={handleValueChange}
                                              >
                                                  {selectOptions.map(
                                                      (
                                                          item: any,
                                                          index: number
                                                      ) => {
                                                          return (
                                                              <MenuItem
                                                                  value={
                                                                      item.value
                                                                  }
                                                                  key={index}
                                                              >
                                                                  {item.label}
                                                              </MenuItem>
                                                          )
                                                      }
                                                  )}
                                              </Select>
                                          </FormControl>
                                      </TableCell>
                                      <TableCell
                                          style={{ border: '0' }}
                                          className={
                                              styles.existingDataBackgroundColor +
                                              ' ' +
                                              styles.ptpb0
                                          }
                                      >
                                          <FormControl
                                              size="small"
                                              fullWidth
                                              margin="dense"
                                              disabled={true}
                                              className={styles.textFieldProps}
                                          >
                                              <Select
                                              className={styles.fieldCss}
                                                  // value={age}
                                                  onChange={handleValueChange}
                                              >
                                                  {selectOptions.map(
                                                      (
                                                          item: any,
                                                          index: number
                                                      ) => {
                                                          return (
                                                              <MenuItem
                                                                  value={
                                                                      item.value
                                                                  }
                                                                  key={index}
                                                              >
                                                                  {item.label}
                                                              </MenuItem>
                                                          )
                                                      }
                                                  )}
                                              </Select>
                                          </FormControl>
                                      </TableCell>
                                      <TableCell
                                          style={{
                                              paddingLeft: '0',
                                              paddingRight: '0',
                                              border: '0',
                                          }}
                                      >
                                          <CancelIcon
                                              style={{
                                                  color: '#DE4E3A',
                                                  marginTop: '5px',
                                                  cursor: 'pointer',
                                              }}
                                              onClick={() =>
                                                  handleRemoveOtherItems(
                                                      currentListItem.value
                                                  )
                                              }
                                          />
                                      </TableCell>
                                  </TableRow>
                              )
                          }
                      )
                    : null}
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <Button
                            variant="contained"
                            fullWidth
                            onClick={handleAddItem}
                            className={styles.addNewButton}
                            startIcon={
                                <AddCircleIcon className={styles.addNewIcon} />
                            }
                            disabled={
                                otherItemCurrentSelectValue ? false : true
                            }
                        >
                            Add New
                        </Button>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <FormControl
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            className={styles.textFieldProps}
                        >
                            <Select
                            className={styles.fieldCss}
                                value={otherItemCurrentSelectValue}
                                onChange={handleOtherItemsValueChange}
                            >
                                {OtherItemSelectOptions.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.id}
                                                key={index}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <FormControl
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={true}
                            className={styles.textFieldProps}
                        >
                            <Select
                            className={styles.fieldCss}
                                // value={age}
                                onChange={handleValueChange}
                            >
                                {selectOptions.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.value}
                                                key={index}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <FormControl
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={true}
                            className={styles.textFieldProps}
                        >
                            <Select
                            className={styles.fieldCss}
                                // value={age}
                                onChange={handleValueChange}
                            >
                                {selectOptions.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.value}
                                                key={index}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell
                        style={{
                            border: '0',
                            paddingLeft: '10px',
                            paddingRight: '10px',
                        }}
                    >
                        <p className={styles.dataTitle}>FOBT</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    ></TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    ></TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    ></TableCell>
                </TableRow>

                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>FOBT</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <FormControl
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            className={styles.textFieldProps}
                        >
                            <Select
                            className={styles.fieldCss}
                                // value={age}
                                onChange={handleValueChange}
                            >
                                {selectOptions.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.value}
                                                key={index}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <FormControl
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            className={styles.textFieldProps}
                        >
                            <Select
                            className={styles.fieldCss}
                                // value={age}
                                onChange={handleValueChange}
                            >
                                {selectOptions.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.value}
                                                key={index}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <FormControl
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            className={styles.textFieldProps}
                        >
                            <Select
                            className={styles.fieldCss}
                                // value={age}
                                onChange={handleValueChange}
                            >
                                {selectOptions.map(
                                    (item: any, index: number) => {
                                        return (
                                            <MenuItem
                                                value={item.value}
                                                key={index}
                                            >
                                                {item.label}
                                            </MenuItem>
                                        )
                                    }
                                )}
                            </Select>
                        </FormControl>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ border: '0' }} className={styles.ptpb0}>
                        <p className={styles.dataCategory}>Value</p>
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.currentDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                    <TableCell
                        style={{ border: '0' }}
                        className={
                            styles.existingDataBackgroundColor +
                            ' ' +
                            styles.ptpb0
                        }
                    >
                        <TextField
                            size="small"
                            fullWidth
                            margin="dense"
                            disabled={editMode ? false : true}
                            InputProps={{
                                className: styles.textFieldProps,
                            }}
                        />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}
export default UrineFaecesData
