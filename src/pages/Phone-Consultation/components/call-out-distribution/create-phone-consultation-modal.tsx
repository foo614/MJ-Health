import {
    Box,
    FormControl,
    TextField,
    InputAdornment,
    FormLabel,
    Grid,
    Button,
    Typography,
    Autocomplete,
    createFilterOptions,
} from '@mui/material'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import ConfirmationModal from 'components/ConfirmationModal'
import CustomModal from 'components/Modal'
import dayjs from 'dayjs'
import { Dispatch, SetStateAction, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import AcceptIcon from 'images/accept.png'
import styles from './_call-out-distribution.module.scss'

type Props = {
    openCreateModal: boolean
    setOpenCreateModal: Dispatch<SetStateAction<boolean>>
}

const CreatePhoneConsultationModal = ({
    openCreateModal,
    setOpenCreateModal,
}: Props) => {
    const [openConfirmationModal, setOpenConfirmationModal] =
        useState<boolean>(false)
    const [consultationDate, setConsultationDate] = useState<Date>(new Date())
    const [memberValue, setMemberValue] = useState<number>()

    const memberData = [
        {
            id: 1,
            name: 'Jeffery Mohamad Bin Christofa',
            gender: 'Male',
            age: 54,
            memberId: '0401101024673001',
            icNo: '830516015213',
        },
        {
            id: 2,
            name: 'Jeffery Michael',
            gender: 'Male',
            age: 22,
            memberId: '0401101024673001',
            icNo: 'S693118A',
        },
        {
            id: 3,
            name: 'Stevey Jeffery',
            gender: 'Male',
            age: 40,
            memberId: '0401101024673001',
            icNo: '150103197908131040',
        },
        {
            id: 4,
            name: 'Nurul Miss binti Jeffery',
            gender: 'Female',
            age: 54,
            memberId: '0401101024673001',
            icNo: '286730572532',
        },
        {
            id: 5,
            name: 'Jeffery Hamilton',
            gender: 'Male',
            age: 30,
            memberId: '0401101024673001',
            icNo: '111000105757',
        },
        {
            id: 6,
            name: 'Jeffery Shamizah binti Sulaiman',
            gender: 'Female',
            age: 40,
            memberId: '0401101024673001',
            icNo: '690602136118',
        },
        {
            id: 7,
            name: 'Jeffery Sufia',
            gender: 'Female',
            age: 56,
            memberId: '0401101024673001',
            icNo: '900311136671',
        },
        {
            id: 8,
            name: 'Dukiman Jeffery',
            gender: 'Male',
            age: 19,
            memberId: '0401101024673001',
            icNo: '510317135131',
        },
        {
            id: 9,
            name: 'Jeffery Long Kim Tong',
            gender: 'Male',
            age: 24,
            memberId: '0401101024673001',
            icNo: 'A234567890',
        },
        {
            id: 10,
            name: 'Jeffery Wong',
            gender: 'Male',
            age: 28,
            memberId: '0401101024673001',
            icNo: '111000105757',
        },
    ]

    return (
        <>
            <CustomModal
                setOpen={setOpenCreateModal}
                open={openCreateModal}
                title="Create Phone Consultation"
                width={'lg'}
            >
                <Box>
                    <FormControl fullWidth sx={{ marginTop: '1rem' }}>
                        {/* <TextField
                            placeholder="Search Member Name, ID or IC No...."
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="outlined"
                        /> */}

                        <Autocomplete
                            id="input-member"
                            options={memberData}
                            autoHighlight
                            getOptionLabel={(option) =>
                                // `${option.name} ${option.gender} ${option.age} ${option.memberId} ${option.icNo}`
                                option.memberId
                            }
                            getOptionKey={(option) => option.id}
                            filterOptions={createFilterOptions({
                                matchFrom: 'any',
                                stringify: (option) =>
                                    `${option.name} ${option.gender} ${option.age} ${option.memberId} ${option.icNo}`,
                            })}
                            renderOption={(props, option) => (
                                <Box component="li" {...props}>
                                    <Grid container spacing={1}>
                                        <Grid item xs>
                                            {option.name}
                                        </Grid>
                                        <Grid item xs>
                                            {option.gender}
                                        </Grid>
                                        <Grid item xs>
                                            {option.age}
                                        </Grid>
                                        <Grid item xs>
                                            {option.memberId}
                                        </Grid>
                                        <Grid item xs>
                                            {option.icNo}
                                        </Grid>
                                    </Grid>
                                </Box>
                            )}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    placeholder="Search Member Name, ID or IC No...."
                                    inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                    }}
                                    InputProps={{
                                        ...params.InputProps,
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            )}
                            onChange={(event: any, newValue) => {
                                setMemberValue(newValue?.id)
                            }}
                        />
                    </FormControl>

                    <FormControl fullWidth sx={{ marginTop: '2rem' }}>
                        <FormLabel
                            id="input-title"
                            className={styles.createModalInputLabel}
                        >
                            Title
                        </FormLabel>
                        <TextField
                            name="title"
                            // value={''}
                            id="input-title"
                            variant="outlined"
                            // error={
                            //     formik.touched.title &&
                            //     Boolean(formik.errors.title)
                            // }
                            // helperText={
                            //     formik.touched.title &&
                            //     formik.errors.title
                            // }
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                        />
                    </FormControl>

                    <FormControl fullWidth sx={{ marginTop: '2rem' }}>
                        <FormLabel
                            id="input-remarks"
                            className={styles.createModalInputLabel}
                        >
                            Remarks
                        </FormLabel>
                        <TextField
                            name="remarks"
                            // value={''}
                            id="input-remarks"
                            variant="outlined"
                            rows={5}
                            multiline
                            // error={
                            //     formik.touched.remarks &&
                            //     Boolean(formik.errors.remarks)
                            // }
                            // helperText={
                            //     formik.touched.remarks &&
                            //     formik.errors.remarks
                            // }
                            // onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                        />
                    </FormControl>

                    <Grid
                        container
                        spacing={2}
                        sx={{ marginTop: '2rem' }}
                        alignItems={'center'}
                        justifyContent={'flex-end'}
                    >
                        <Grid item xs={12} sm={6} md={3}>
                            <FormControl fullWidth>
                                <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                >
                                    <DatePicker
                                        name="date"
                                        value={dayjs(consultationDate)}
                                        readOnly
                                        closeOnSelect
                                        format="DD-MM-YYYY (ddd)"
                                        slotProps={{
                                            inputAdornment: {
                                                position: 'start',
                                            },
                                        }}
                                    />
                                </LocalizationProvider>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Button
                                fullWidth
                                variant="contained"
                                onClick={() => setOpenConfirmationModal(true)}
                            >
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </CustomModal>

            <ConfirmationModal
                title={'Confirm Data'}
                context={
                    <Typography>
                        You are about to save this phone consultation call on
                        <strong style={{ color: 'var(--label-color)' }}>
                            {dayjs(consultationDate).format('DD-MM-YYYY')}
                        </strong>{' '}
                        . Select confirm to complete the action.
                    </Typography>
                }
                image={AcceptIcon}
                decline={() => setOpenConfirmationModal(false)}
                accept={() => {
                    setOpenConfirmationModal(false)
                    setOpenCreateModal(false)
                }}
                setOpen={setOpenConfirmationModal}
                open={openConfirmationModal}
                width="md"
                acceptText="YES, CONFIRM."
                declineText="CANCEL"
            />
        </>
    )
}

export default CreatePhoneConsultationModal
