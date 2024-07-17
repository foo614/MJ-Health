import {
    Box,
    Button,
    Divider,
    Grid as Grid2,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import ResponsiveAppBar from 'components/AppBar'
import CustomModal from 'components/Modal'
import ScreeningRoomInfoHeader from 'components/ScreeningRoom/InfoHeader'
import ViewCommentModal from 'components/ScreeningRoom/ViewCommentModal'
import UserHeader from 'components/UserHeader'
import { SONOGRAPHY_PAGE } from 'constant'

import AddOnService from 'components/AddonService'
import CommentAndSuggestion from 'components/CommentAndSuggestion'
import ButtonCard from 'pages/Radiology-Reporting/components/details/buttonCard'
import { useState } from 'react'
import styles from './_sonography-detail.module.scss'
import SonographyExamReport from './components/exam-report'

const SonographyDetail = () => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const [openMedicalHistory, setOpenMedicalHistory] = useState<boolean>(false)
    const [openAllergyDrugHx, setOpenAllergyDrugHx] = useState<boolean>(false)
    const [openViewComment, setOpenViewComment] = useState<boolean>(false)

    const [openPersonalComplaint, setOpenPersonalComplaint] =
        useState<boolean>(false)
    const [selectedType, setSelectedType] = useState('report')
    const [editMode, setEditMode] = useState<boolean>(false)

    const handleButtonChange = (type: string) => {
        setSelectedType(type)
    }

    const RowButtonOptions = () => {
        return (
            <>
                <Grid xs={12} sx={{ p: 3 }}>
                    <Button
                        variant="contained"
                        size={matches ? 'medium' : 'small'}
                        sx={{
                            background:
                                selectedType === 'report' ? '#fff' : '#EDEDED',
                            boxShadow:
                                '0px 3px 6px rgba(0, 0, 0, 0.10) !important',
                            borderRadius: '5px',
                            color:
                                selectedType === 'report'
                                    ? '#211D4E'
                                    : '#5A567B',
                            fontWeight: 600,
                            marginRight: '1em',
                            '&:hover': {
                                color: '#fff', // Change font color to white on hover
                            },
                        }}
                        onClick={() => handleButtonChange('report')}
                    >
                        Exam. Report
                    </Button>
                    <Button
                        variant="contained"
                        size={matches ? 'medium' : 'small'}
                        sx={{
                            background:
                                selectedType === 'addon' ? '#fff' : '#EDEDED',
                            boxShadow:
                                '0px 3px 6px rgba(0, 0, 0, 0.10) !important',
                            borderRadius: '5px',
                            color:
                                selectedType === 'addon'
                                    ? '#211D4E'
                                    : '#5A567B',
                            fontWeight: 600,
                            marginRight: '1em',
                            '&:hover': {
                                color: '#fff', // Change font color to white on hover
                            },
                        }}
                        onClick={() => handleButtonChange('addon')}
                    >
                        Add On Service
                    </Button>
                    <Button
                        variant="contained"
                        size={matches ? 'medium' : 'small'}
                        sx={{
                            background:
                                selectedType === 'comment' ? '#fff' : '#EDEDED',
                            boxShadow:
                                '0px 3px 6px rgba(0, 0, 0, 0.10) !important',
                            borderRadius: '5px',
                            color:
                                selectedType === 'comment'
                                    ? '#211D4E'
                                    : '#5A567B',
                            fontWeight: 600,
                            '&:hover': {
                                color: '#fff', // Change font color to white on hover
                            },
                        }}
                        onClick={() => handleButtonChange('comment')}
                    >
                        Comment & Suggestion
                    </Button>
                </Grid>
            </>
        )
    }

    return (
        <>
            <ResponsiveAppBar />
            <UserHeader />
            <ScreeningRoomInfoHeader title="SONOGRAPHY" to={SONOGRAPHY_PAGE} />
            <Grid container sx={{ background: '#EDEDED' }}>
                <Grid xs={12} md={2} sx={{ mt: matches ? 4 : 2 }}>
                    <Stack
                        direction={{ xs: 'row', sm: 'column' }}
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={2}
                        p={{
                            xs: 1,
                        }}
                    >
                        <ButtonCard
                            label="Medical History"
                            onClick={() => setOpenMedicalHistory(true)}
                        />
                        <ButtonCard
                            label="Allergy/ Drug Hx"
                            onClick={() => setOpenAllergyDrugHx(true)}
                        />
                        <ButtonCard
                            label="Personal Complaint"
                            onClick={() => setOpenPersonalComplaint(true)}
                        />
                        <ButtonCard
                            label="View Comment"
                            onClick={() => setOpenViewComment(true)}
                        />
                    </Stack>
                </Grid>
                <Grid xs={12} md={10}>
                    <Box sx={{ bgcolor: '#fff', mt: 5 }}>
                        <Grid container>
                            <RowButtonOptions />

                            {selectedType === 'report' && (
                                <SonographyExamReport />
                            )}
                            {selectedType === 'report' && (
                                <Grid xs={12} sx={{ p: 3 }}>
                                    <Grid xs={12}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: '#219B8E',
                                                fontSize: '20px',
                                                fontWeight: 600,
                                            }}
                                        >
                                            Other Comment
                                        </Typography>
                                    </Grid>
                                    <Grid xs={12}>
                                        <TextField
                                            sx={{
                                                borderRadius: '8px',
                                                background: '#F9F9F9',
                                                boxShadow:
                                                    '0px 2px 2px 1px rgba(0, 0, 0, 0.05) inset',
                                            }}
                                            fullWidth
                                            id="outlined-multiline-static"
                                            multiline
                                            rows={4}
                                            defaultValue="Type in your message & recommendation."
                                        />
                                    </Grid>
                                    <Grid
                                        container
                                        spacing={2}
                                        justifyContent={'flex-end'}
                                    >
                                        <Grid xs={12} md={3}>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                fullWidth
                                                sx={{ mt: 3 }}
                                            >
                                                Save
                                            </Button>
                                        </Grid>
                                        <Grid xs={12} md={3}>
                                            <Button
                                                size="small"
                                                variant="contained"
                                                fullWidth
                                                sx={{ mt: 3 }}
                                            >
                                                Confirm
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            )}
                            {selectedType === 'addon' && <AddOnService />}
                            {selectedType === 'comment' && (
                                <CommentAndSuggestion />
                            )}
                        </Grid>
                    </Box>
                </Grid>
            </Grid>

            {openMedicalHistory && (
                <CustomModal
                    open={openMedicalHistory}
                    setOpen={setOpenMedicalHistory}
                    title="Medical History"
                    width="md"
                >
                    <Grid container>
                        <Grid xs={12}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#219B8E',
                                    fontSize: '20px',
                                    fontWeight: 600,
                                }}
                            >
                                Medical History
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            sx={{
                                pl: 5,
                                mt: 1,
                                lineHeight: '2em',
                                fontWeight: 600,
                            }}
                        >
                            <ul>
                                <li>Diabetes</li>
                                <li>Uraemia</li>
                            </ul>
                        </Grid>
                        <Grid xs={12}>
                            <Divider sx={{ my: 2 }} />
                        </Grid>
                        <Grid xs={12}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#219B8E',
                                    fontSize: '20px',
                                    fontWeight: 600,
                                }}
                            >
                                Previous Surgery
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            sx={{
                                pl: 5,
                                mt: 1,
                                lineHeight: '2em',
                                fontWeight: 600,
                            }}
                        >
                            <ul>
                                <li>Kidney Surgery</li>
                            </ul>
                        </Grid>
                        <Grid xs={12}>
                            <Divider sx={{ my: 2 }} />
                        </Grid>
                        <Grid xs={12}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#219B8E',
                                    fontSize: '20px',
                                    fontWeight: 600,
                                }}
                            >
                                Family Medical History
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            sx={{
                                pl: 5,
                                mt: 1,
                                lineHeight: '2em',
                                fontWeight: 600,
                            }}
                        >
                            <ul>
                                <li>High Blood Pressure</li>
                                <li>Type 2 Diabetes</li>
                                <li>Cardiovascular Disease</li>
                                <li>Obesity</li>
                                <li>Myocarditis</li>
                                <li>High Blood Pressure</li>
                                <li>Type 2 Diabetes</li>
                                <li>Cardiovascular Disease</li>
                                <li>Obesity</li>
                                <li>Myocarditis</li>
                                <li>High Blood Pressure</li>
                                <li>Type 2 Diabetes</li>
                                <li>Cardiovascular Disease</li>
                                <li>Obesity</li>
                                <li>Myocarditis</li>
                            </ul>
                        </Grid>
                    </Grid>
                </CustomModal>
            )}

            {openAllergyDrugHx && (
                <CustomModal
                    open={openAllergyDrugHx}
                    setOpen={setOpenAllergyDrugHx}
                    title="Allergy/Drug Hx"
                    width="md"
                >
                    <Grid container>
                        <Grid xs={12}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#219B8E',
                                    fontSize: '20px',
                                    fontWeight: 600,
                                }}
                            >
                                Medication
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            sx={{
                                pl: 5,
                                mt: 1,
                                lineHeight: '2em',
                                fontWeight: 600,
                            }}
                        >
                            <ul>
                                <li>Calories Control</li>
                                <li>Blood Pressure Control</li>
                                <li>Glycemia Manager</li>
                            </ul>
                        </Grid>
                        <Grid xs={12}>
                            <Divider sx={{ my: 2 }} />
                        </Grid>
                        <Grid xs={12}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#219B8E',
                                    fontSize: '20px',
                                    fontWeight: 600,
                                }}
                            >
                                Allergy History
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            sx={{
                                pl: 5,
                                mt: 1,
                                lineHeight: '2em',
                                fontWeight: 600,
                            }}
                        >
                            <ul>
                                <li>Milk sensitization reaction</li>
                                <li>Logan pulp sensitization reaction</li>
                                <li>
                                    Severe snow fungus sensitization reaction
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                </CustomModal>
            )}

            {openPersonalComplaint && (
                <CustomModal
                    open={openPersonalComplaint}
                    setOpen={setOpenPersonalComplaint}
                    title="Personal Complaints"
                    width="md"
                >
                    <Grid container>
                        <Grid xs={12}>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: '#219B8E',
                                    fontSize: '20px',
                                    fontWeight: 600,
                                }}
                            >
                                Personal Complaints
                            </Typography>
                        </Grid>
                        <Grid
                            xs={12}
                            sx={{
                                mt: 1,
                                lineHeight: '2em',
                                fontWeight: 600,
                            }}
                        >
                            <TextField
                                variant="outlined"
                                size="small"
                                margin="dense"
                                multiline
                                rows={8}
                                name="complaint"
                                fullWidth
                                InputProps={{
                                    readOnly: !editMode,
                                }}
                                value="lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et"
                            />
                        </Grid>
                        <Grid2
                            container
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Grid2 item>
                                <Stack spacing={2} direction={'row'}>
                                    <Typography variant="caption">
                                        <b>last update:</b> {'11:11 22-09-2022'}
                                    </Typography>
                                    <Typography variant="caption">
                                        <b>Staff ID:</b> {'0000-0000-0000-0000'}
                                    </Typography>
                                </Stack>
                            </Grid2>
                            <Grid2 item>
                                <Stack spacing={2} direction={'row'}>
                                    <Button
                                        variant="contained"
                                        className={
                                            editMode
                                                ? styles.cancelButton
                                                : styles.editButton
                                        }
                                        onClick={() => setEditMode(!editMode)}
                                    >
                                        {editMode ? 'Cancel' : 'Edit'}
                                    </Button>
                                    <Button
                                        variant="contained"
                                        className={styles.saveButton}
                                        disabled={!editMode}
                                        onClick={() =>
                                            setOpenPersonalComplaint(false)
                                        }
                                    >
                                        Save
                                    </Button>
                                </Stack>
                            </Grid2>
                        </Grid2>
                    </Grid>
                </CustomModal>
            )}

            {openViewComment && (
                <ViewCommentModal
                    open={openViewComment}
                    handleClose={() => setOpenViewComment(false)}
                />
            )}
        </>
    )
}

export default SonographyDetail
