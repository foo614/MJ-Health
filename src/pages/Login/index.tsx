import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import CustomButton from 'components/CustomButton'
import { useFormik } from 'formik'
import Logo from 'images/asset-2-1@2x.png'
import LoginIcon from 'images/login-1@2x.png'
import Banner from 'images/mask-group@2x.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import styles from './_login.module.scss'
import Branch from './components/Branch'
// ----------------------------------------------------------------------

export default function LoginView() {
    const [showPassword, setShowPassword] = useState(false)
    const theme = useTheme()
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false)
    }
    const handleOpen = () => {
        setOpen(true)
    }
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    const formik = useFormik({
        initialValues: {
            staffId: '',
            password: '',
        },
        validationSchema: Yup.object({
            staffId: Yup.string().required('Staff ID is required'),
            password: Yup.string().required('Password is required'),
        }),
        onSubmit: (values) => {
            // Handle login logic here
            console.log('Form submitted with values:', values)
            handleOpen()
            // navigate('/dashboard')
        },
    })

    const renderForm = (
        <form onSubmit={formik.handleSubmit}>
            <Stack spacing={4}>
                <Box
                    sx={{
                        display: 'flex',
                    }}
                >
                    <Typography>
                        <PersonOutlineRoundedIcon
                            sx={{
                                fontSize: 32,
                                color: '#219b8e',
                                verticalAlign: 'middle',
                                marginRight: 0.5,
                            }}
                        />
                        Staff ID:
                    </Typography>
                </Box>
                <TextField
                    name="staffId"
                    label=""
                    size="small"
                    placeholder="Please enter Staff ID."
                    margin="none"
                    style={{
                        marginTop: '10px',
                    }}
                    value={formik.values.staffId}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                        formik.touched.staffId && Boolean(formik.errors.staffId)
                    }
                    helperText={formik.touched.staffId && formik.errors.staffId}
                />
                <Box
                    sx={{
                        display: 'flex',
                    }}
                >
                    <Typography>
                        <LockOutlinedIcon
                            sx={{
                                ffontSize: 32,
                                color: '#219b8e',
                                verticalAlign: 'middle',
                                marginRight: 0.5,
                            }}
                        />
                        Password:
                    </Typography>
                </Box>
                <TextField
                    name="password"
                    placeholder="Please enter your password."
                    type={showPassword ? 'text' : 'password'}
                    style={{
                        marginTop: '10px',
                    }}
                    size="small"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    edge="end"
                                >
                                    {showPassword ? (
                                        <VisibilityOff />
                                    ) : (
                                        <Visibility />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                        formik.touched.password &&
                        Boolean(formik.errors.password)
                    }
                    helperText={
                        formik.touched.password && formik.errors.password
                    }
                />
                {!matches ? null : <Box sx={{ mt: 3 }}></Box>}
                <CustomButton
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                >
                    Login
                </CustomButton>
            </Stack>
            <Backdrop
                sx={{
                    color: '#fff',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={open}
                // onClick={handleClose}
            >
                <Branch handleClose={handleClose} open={open} />
            </Backdrop>
        </form>
    )

    return (
        <Box>
            <img className={styles.maskGroupIcon} alt="" src={Banner} />
            <div className={styles.loginChild} />
            <Grid container>
                <Grid
                    xs={12}
                    md={3}
                    mdOffset={3}
                    justifyContent="center"
                    alignItems="center"
                    display="flex"
                >
                    <img alt="login" className={styles.imgSize} src={Logo} />
                </Grid>
                <Grid
                    xs={12}
                    md={6}
                    justifyContent={matches ? 'flex-start' : 'center'}
                    alignItems={matches ? 'flex-start' : 'center'}
                    display="flex"
                >
                    <Stack
                        justifyContent="flex-start"
                        alignItems="center"
                        mt={{ xs: 3, md: 10 }}
                    >
                        <Paper
                            sx={{
                                p: 5,
                                mt: 3,
                                borderRadius: 4,
                                height: matches ? 600 : 'auto',
                                minWidth: matches ? 500 : '100%',
                                maxWidth: 600,
                                zIndex: 1,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mt: 2,
                                    mb: 7,
                                }}
                            >
                                <Typography variant="h4">LOGIN</Typography>
                                <img
                                    className={styles.login1Icon}
                                    alt=""
                                    src={LoginIcon}
                                />
                            </Box>
                            {renderForm}
                        </Paper>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}
