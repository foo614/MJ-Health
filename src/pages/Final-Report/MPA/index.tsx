import { Button, Card, Container, Stack, Divider } from '@mui/material'
import ResponsiveAppBar from 'components/AppBar'
import CustomHeader from 'components/CustomHeader'
import UserHeader from 'components/UserHeader'
import { FINAL_REPORT } from 'constant'
import { useState } from 'react'
import MemberEditPNG from '../../../images/member-edit.png'
import StaffEditModal from 'components/StaffEditModal'
import styles from './_mpa.module.scss'
import Metabolic from './components/metabolic'
import Inflammation from './components/inflammation'
import Hormonal from './components/hormonal'

const MPA = () => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [selectedSection, setSelectedSection] = useState<number>(1)
    const [openEditModal, setOpenEditModal] = useState<boolean>(false)

    const handleChangeSection = (sectionToDisplay: number) => {
        setSelectedSection(sectionToDisplay)
    }

    const displaySection = () => {
        switch (selectedSection) {
            case 1:
                return <Metabolic editMode={editMode} />
            case 2:
                return <Inflammation editMode={editMode} />
            case 3:
                return <Hormonal editMode={editMode} />
            default:
                return null
        }
    }

    const handleConfirmEdit = (confirm: boolean) => {
        setEditMode(confirm)
    }

    return (
        <>
            <ResponsiveAppBar />
            <UserHeader />
            <CustomHeader
                title="MICRO PHYSIOLOGICAL ASSESSMENT - FINAL REPORT"
                to={FINAL_REPORT}
                endAdornment={
                    editMode ? (
                        <Button
                            variant="contained"
                            disabled
                            className={styles.view_bttn}
                        >
                            Print
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
                                Metabolic
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
                                Inflammation
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
                                Hormonal
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
                        {displaySection()}
                    </div>
                </Card>
            </Container>
            {openEditModal ? (
                <StaffEditModal
                    open={openEditModal}
                    setOpen={setOpenEditModal}
                    title="Edit Report Data"
                    handleConfirmEdit={handleConfirmEdit}
                />
            ) : null}
        </>
    )
}

export default MPA
