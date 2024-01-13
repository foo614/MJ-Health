import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'
import styles from '../_physician-consultation-info.module.scss'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import DialogTitle from '@mui/material/DialogTitle'
import CircleIcon from '@mui/icons-material/Circle'
import {
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ListSubheader,
} from '@mui/material'
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />
})

type Props = {
    matches: any
    setOpen: any
    open: any
}

const AllergyModal: React.FC<Props> = ({ matches, setOpen, open }: Props) => {
    const handleClose = () => {
        setOpen(false)
    }

    const listData = [
        {
            title: 'Medication',
            listItem: [
                {
                    item: 'Calories Control',
                },
                {
                    item: 'Blood Pressure Control',
                },
                {
                    item: 'Glycemia Manager',
                },
            ],
        },
        {
            title: 'Allergy History',
            listItem: [
                {
                    item: 'Milk sensitization reaction',
                },
                {
                    item: 'Longan pulp sensitization reaction',
                },
                {
                    item: 'Severe snow fungus sensitization reaction',
                },
            ],
        },
    ]
    return (
        <React.Fragment>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                classes={{ paper: styles.medicalHistoryModal }}
            >
                <DialogTitle className={styles.infoModalColor}>
                    <p className={styles.infoModalTitle}>Allergy/ Drug Hx</p>
                </DialogTitle>
                <IconButton
                    onClick={() => setOpen(!open)}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 15,
                        color: (theme: any) => theme?.palette?.grey[500],
                    }}
                >
                    <CloseIcon className={styles.closeIcon} />
                </IconButton>
                <DialogContent
                    className={styles.medicalHistoryModalDialogContent}
                >
                    {listData.map((topItem: any, index: number) => {
                        return (
                            <List
                                key={index}
                                sx={{
                                    width: '100%',
                                    padding: '15px',
                                    borderBottom: '2px solid #EDEDED',
                                }}
                                subheader={
                                    <ListSubheader
                                        component="div"
                                        disableSticky
                                    >
                                        <p
                                            className={
                                                styles.medicalHistoryModalItemText
                                            }
                                        >
                                            {topItem.title}
                                        </p>
                                    </ListSubheader>
                                }
                            >
                                {topItem.listItem.map(
                                    (subItem: any, index: number) => {
                                        return (
                                            <ListItemButton
                                                key={index}
                                                className={
                                                    styles.medicalHistoryModalItemButton
                                                }
                                            >
                                                <ListItemIcon
                                                    sx={{
                                                        justifyContent:
                                                            'center',
                                                    }}
                                                >
                                                    <CircleIcon
                                                        sx={{ fontSize: '8px' }}
                                                    />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={subItem.item}
                                                />
                                            </ListItemButton>
                                        )
                                    }
                                )}
                            </List>
                        )
                    })}
                </DialogContent>
            </Dialog>
        </React.Fragment>
    )
}
export default AllergyModal
