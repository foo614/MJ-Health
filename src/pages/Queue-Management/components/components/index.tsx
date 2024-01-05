import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { LOGIN_PAGE } from 'constant'
import AppIcon from 'images/app-icon.png'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './_appBar.module.scss'

const settings = ['Setting', 'Logout']
const drawerWidth = 240

const QueueListAppBar = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false)
    const navigate = useNavigate()

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState)
    }

    const logout = () => {
        navigate(LOGIN_PAGE)
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MJ Health
            </Typography>
            <Divider />
            <List>
                {settings.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText
                                primary={item}
                                onClick={() => logout()}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    const container =
        window !== undefined ? () => window.document.body : undefined

    return (
        <>
            <AppBar
                position="static"
                sx={{
                    background:
                        'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),linear-gradient(90deg, #3adebb, #00aee9)',
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                mr: 1,
                            }}
                            disableRipple
                        >
                            <img
                                src={AppIcon}
                                alt="app-icon"
                                style={{ width: '50px' }}
                            />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/dashboard"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                lineHeight: '1',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            MJ HEALTH <br />
                            美兆国际健康管理
                        </Typography>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'flex', md: 'none' },
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleDrawerToggle}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                container={container}
                                variant="temporary"
                                open={mobileOpen}
                                onClose={handleDrawerToggle}
                                ModalProps={{
                                    keepMounted: true, // Better open performance on mobile.
                                }}
                                sx={{
                                    display: { xs: 'block', sm: 'none' },
                                    '& .MuiDrawer-paper': {
                                        boxSizing: 'border-box',
                                        width: drawerWidth,
                                    },
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </Box>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
                        >
                            <img
                                src={AppIcon}
                                alt="app-icon"
                                style={{ width: '50px' }}
                            />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                lineHeight: '1',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            MJ HEALTH <br />
                            美兆国际健康管理
                        </Typography>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                                textAlign: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    color: 'white',
                                }}
                            >
                                <b>AREA 1</b>
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                flexGrow: 0,
                                display: { xs: 'none', md: 'flex' },
                            }}
                        >
                            <div>
                                <p className={styles.time}>01:00 PM</p>
                                <p className={styles.date}>30 JUL 2022</p>
                            </div>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
export default QueueListAppBar
