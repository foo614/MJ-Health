import { Button, Card, Container, Stack, Divider } from '@mui/material'
import ResponsiveAppBar from 'components/AppBar'
import CustomHeader from 'components/CustomHeader'
import UserHeader from 'components/UserHeader'
import { FINAL_REPORT } from 'constant'
import styles from './_hmc-brochure.module.scss'
import { useState } from 'react'
import Page1 from './components/page-1'
import Page2 from './components/page-2'
import Page3 from './components/page-3'
import Page4 from './components/page-4'
import MemberEditPNG from '../../../images/member-edit.png'
const HMPBrochure = () => {
    const [selectedSection, setSelectedSection] = useState<number>(1)

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
    return (
        <>
            <ResponsiveAppBar />
            <UserHeader />
            <CustomHeader
                title="HMP BROCHURE - FINAL REPORT"
                to={FINAL_REPORT}
                endAdornment={
                    <Button variant="contained" className={styles.print_bttn}>
                        Print
                    </Button>
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
                                onClick={() => setSelectedSection(1)}
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
                                onClick={() => setSelectedSection(2)}
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
                                onClick={() => setSelectedSection(3)}
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
                                onClick={() => setSelectedSection(4)}
                            >
                                Page 4
                            </Button>
                            <div style={{ marginLeft: 'auto' }}>
                                <Button
                                    variant="text"
                                    className={styles.edit_bttn}
                                    endIcon={
                                        <img src={MemberEditPNG} alt="edit" />
                                    }
                                >
                                    Edit
                                </Button>
                            </div>
                        </Stack>
                        <Divider className={styles.divLine} />
                    </div>

                    {displaySection()}
                </Card>
            </Container>
        </>
    )
}

export default HMPBrochure
