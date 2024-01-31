import { Button, Card, Container, Stack, Divider } from '@mui/material'
import ResponsiveAppBar from 'components/AppBar'
import CustomHeader from 'components/CustomHeader'
import UserHeader from 'components/UserHeader'
import { FINAL_REPORT } from 'constant'
import styles from './_hmp-brochure.module.scss'
import { useState } from 'react'
import Page1 from './components/page-1'
import Page2 from './components/page-2'
import Page3 from './components/page-3'
import Page4 from './components/page-4'
import MemberEditPNG from '../../../images/member-edit.png'
import StaffEditModal from 'components/StaffEditModal'
import FinishEditModal from './components/finish-edit-modal'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
const HMPBrochure = () => {
    const [selectedSection, setSelectedSection] = useState<number>(1)
    const [editMode, setEditMode] = useState<boolean>(false)
    const [openEditModal, setOpenEditModal] = useState<boolean>(false)
    const [openFinishModal, setOpenFinishModal] = useState<boolean>(false)
    const theme = useTheme()
    const mdUp = useMediaQuery(theme.breakpoints.up('md'))
    const displaySection = () => {
        switch (selectedSection) {
            case 1:
                return <Page1 />
            case 2:
                return <Page2 />
            case 3:
                return <Page3 />
            case 4:
                return <Page4 />
            default:
                return null
        }
    }

    const handleConfirmEdit = (confirm: boolean) => {
        setEditMode(confirm)
        setSelectedSection(2)
    }

    const handleExitEdit = (confirm: boolean) => {
        setEditMode(confirm)
        setOpenFinishModal(confirm)
    }

    const handleChangeSection = (sectionToDisplay: number) => {
        if (editMode) {
            setOpenFinishModal(true)
        } else {
            setSelectedSection(sectionToDisplay)
        }
    }
    return (
        <>
            <ResponsiveAppBar />
            <UserHeader />
            <CustomHeader
                title="HMP BROCHURE - FINAL REPORT"
                to={FINAL_REPORT}
                endAdornment={
                    editMode ? (
                        <Button
                            variant="contained"
                            disabled
                            className={styles.view_bttn}
                        >
                            View
                        </Button>
                    ) : (
                        <a
                            href="https://www.soundczech.cz/temp/lorem-ipsum.pdf"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {' '}
                            <Button
                                variant="contained"
                                className={styles.print_bttn}
                            >
                                Print
                            </Button>
                        </a>
                    )
                }
            />
            <Container maxWidth="xl">
                <Card className={styles.card}>
                    <div className={styles.paddingSection}>
                        <Stack
                            direction={{
                                xs: 'column',
                                sm: 'column',
                                md: 'row',
                                lg: 'row',
                                xl: 'row',
                            }}
                            alignItems="center"
                            spacing={3}
                        >
                            <Button
                                variant="contained"
                                className={
                                    selectedSection === 1
                                        ? styles.selectedBttn
                                        : styles.unSelectedBttn
                                }
                                onClick={() => handleChangeSection(1)}
                            >
                                Page 1
                            </Button>
                            <Button
                                variant="contained"
                                className={
                                    selectedSection === 2
                                        ? styles.selectedBttn
                                        : styles.unSelectedBttn
                                }
                                onClick={() => handleChangeSection(2)}
                            >
                                Page 2
                            </Button>
                            <Button
                                variant="contained"
                                className={
                                    selectedSection === 3
                                        ? styles.selectedBttn
                                        : styles.unSelectedBttn
                                }
                                onClick={() => handleChangeSection(3)}
                            >
                                Page 3
                            </Button>
                            <Button
                                variant="contained"
                                className={
                                    selectedSection === 4
                                        ? styles.selectedBttn
                                        : styles.unSelectedBttn
                                }
                                onClick={() => handleChangeSection(4)}
                            >
                                Page 4
                            </Button>
                            <div style={{ marginLeft: 'auto' }}>
                                {editMode ? (
                                    <Button
                                        variant="contained"
                                        className={styles.confirm_changes_bttn}
                                        onClick={() => setEditMode(false)}
                                    >
                                        Confirm Changes
                                    </Button>
                                ) : (
                                    <Button
                                        variant="text"
                                        className={styles.edit_bttn}
                                        endIcon={
                                            <img
                                                src={MemberEditPNG}
                                                alt="edit"
                                            />
                                        }
                                        onClick={() => setOpenEditModal(true)}
                                    >
                                        Edit
                                    </Button>
                                )}
                            </div>
                        </Stack>
                        <Divider className={styles.divLine} />
                    </div>

                    {displaySection()}
                </Card>
            </Container>
            {openEditModal ? (
                <StaffEditModal
                    open={openEditModal}
                    setOpen={setOpenEditModal}
                    handleConfirmEdit={handleConfirmEdit}
                    title="Edit Report Data"
                />
            ) : null}
            {openFinishModal ? (
                <FinishEditModal
                    open={openFinishModal}
                    setOpen={setOpenFinishModal}
                    handleExitEdit={handleExitEdit}
                    matches={mdUp}
                />
            ) : null}
        </>
    )
}

export default HMPBrochure
