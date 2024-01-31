import { Container, Card, Button } from '@mui/material'
import ResponsiveAppBar from 'components/AppBar'
import CustomHeader from 'components/CustomHeader'
import UserHeader from 'components/UserHeader'
import { FINAL_REPORT } from 'constant'
import styles from './_paps-smear-exam.module.scss'
import MemberEditPNG from '../../../images/member-edit.png'
import { useState } from 'react'
import StaffEditModal from 'components/StaffEditModal'

const PapsSmearExam = () => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [openEditModal, setOpenEditModal] = useState<boolean>(false)

    const handleConfirmEdit = (confirm: boolean) => {
        setOpenEditModal(false)
        setEditMode(true)
    }
    return (
        <>
            <ResponsiveAppBar />
            <UserHeader />
            <CustomHeader
                title="PAP’S SMEAR EXAM. REPORT - FINAL REPORT"
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
                    <div
                        style={{ height: '500px' }}
                        className={styles.paddingSection}
                    >
                        <div style={{ textAlign: 'end' }}>
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
                                        <img src={MemberEditPNG} alt="edit" />
                                    }
                                    onClick={() => setOpenEditModal(true)}
                                >
                                    Edit
                                </Button>
                            )}
                        </div>
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

export default PapsSmearExam
