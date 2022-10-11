import { Link } from "react-router-dom"

//MUI
import { Box, IconButton, Typography, Menu, Button, Tooltip, MenuItem } from "@mui/material"
import SettingsIcon from '@mui/icons-material/Settings'

export const Desktop = ({ ...props }) => {
    return (
        <>
            <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
                <Typography
                    variant="h6"
                    noWrap
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                    title="Botão Home"
                >

                    ASSOBECER
                </Typography>
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {props.pages.map((page) => (
                    <Link key={page} to={`/${page}`} style={{ textDecoration: "none", color: "black" }}>
                        <Button
                            onClick={props.handleCloseNavMenu}
                            sx={{ my: 2, color: 'common.black', display: 'block' }}
                            title={page}
                        >
                            {page}
                        </Button>
                    </Link>
                ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Configurações">
                    <IconButton onClick={props.handleOpenUserMenu} sx={{ p: 0 }}>
                        <SettingsIcon sx={{ color: "common.black" }} />
                    </IconButton>
                </Tooltip>
                <Menu
                    sx={{ mt: '45px' }}
                    id="Menu"
                    anchorEl={props.anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(props.anchorElUser)}
                    onClose={props.handleCloseUserMenu}
                >
                    {props.settings.map((setting) => (
                        <MenuItem key={setting} onClick={props.handleCloseUserMenu}>
                            <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>

        </>
    )

}