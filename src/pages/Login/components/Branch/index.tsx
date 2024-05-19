import CloseIcon from '@mui/icons-material/Close'
import { useMediaQuery } from '@mui/material'
import Box from '@mui/material/Box'
import ButtonBase from '@mui/material/ButtonBase'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import IconButton from '@mui/material/IconButton'
import { styled, useTheme } from '@mui/material/styles'
import { DASHBOARD_PAGE } from 'constant'
import Background1 from 'images/background-img1.png'
import Background2 from 'images/background-img2.png'
import Icon from 'images/icon.png'
import Johor from 'images/johor.png'
import Selangor from 'images/selangor.png'
import { useNavigate } from 'react-router-dom'
import styles from './_branch.module.scss'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}))
const images = [
    {
        url: Background1,
        title: 'MJ HEALTH CENTRE',
        flag: Selangor,
    },
    {
        url: Background2,
        title: 'MJ HEALTH SOUTHERN',
        flag: Johor,
    },
]

const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 220,
    [theme.breakpoints.down('sm')]: {
        width: '260px', // Overrides inline-style
        height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
        zIndex: 1,
        '& .MuiImageBackdrop-root': {
            opacity: 1.5,
            background:
            'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(144.7deg, rgba(58, 222, 187, 0.5) -0.38%, rgba(0, 174, 233, 0.5) 92.44%)',
        },
        '& .MuiImageMarked-root': {
            opacity: 0,
        },
        '& .MuiTypography-root': {
            border: '4px solid currentColor',
        },
    },
}))

const ImageSrc = styled('span')({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
})

const Image = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
}))

const ImageBackdrop = styled('span')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background:
        'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(144.7deg, rgba(58, 222, 187, 0.5) -0.38%, rgba(0, 174, 233, 0.5) 92.44%)',
    // backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
}))

type Props = {
    handleClose: () => void
    open: boolean
}

const Branch = (props: Props) => {
    const navigate = useNavigate()
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    return (
        <BootstrapDialog
            aria-labelledby="customized-dialog-title"
            open={props.open}
        >
            <DialogTitle />
            <IconButton
                aria-label="close"
                onClick={() => props.handleClose()}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent>
                <div className={styles.chooseBranch}>
                    <Box
                        noValidate
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            m: 'auto',
                            width: 'fit-content',
                        }}
                    >
                        <b className={styles.chooseBranch1}>Choose Branch</b>
                        <div className={styles.chooseBranchChild} />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            minHeight: matches ? 300 : 280,
                            gap: matches ? 4 : 2,
                            mx: 6,
                            overflowX: 'hidden',
                            marginBottom: matches ? '4rem' : '0',
                            marginTop: matches ? '0' : '1rem',
                            placeContent: 'space-evenly',
                        }}
                    >
                        {images.map((image) => (
                            <ImageButton
                                focusRipple
                                style={{
                                    width: matches ? '220px' : '260px',
                                }}
                                onClick={() => navigate(DASHBOARD_PAGE)}
                                key={image.title}
                            >
                                <ImageSrc
                                    style={{
                                        backgroundImage: `url(${image.url})`,
                                    }}
                                />
                                <ImageBackdrop className="MuiImageBackdrop-root" />
                                <Image>
                                    <img
                                        className={styles.clipPathGroup}
                                        alt=""
                                        src={image.flag}
                                    />
                                    <img
                                        className={styles.chooseBranchItem}
                                        alt=""
                                        src={Icon}
                                    />
                                    {matches ? (
                                        <>
                                            <div className={styles.groupItem} />
                                            <b
                                                className={
                                                    styles.mjHealthCentre
                                                }
                                            >
                                                {image.title}
                                            </b>
                                        </>
                                    ) : null}
                                </Image>
                            </ImageButton>
                        ))}
                    </Box>
                    <DialogContentText id="alert-dialog-description"></DialogContentText>
                </div>
            </DialogContent>
        </BootstrapDialog>
    )
}

export default Branch
