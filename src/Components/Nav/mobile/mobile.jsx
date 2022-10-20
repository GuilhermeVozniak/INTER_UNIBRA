import { Link } from "react-router-dom"

//MUI
import { Box, IconButton, Typography, Menu, MenuItem } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'

export const Mobile = ({ ...props }) => {

    return (
        <>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="Configurações"
                    aria-controls="Menu"
                    aria-haspopup="true"
                    onClick={props.handleOpenNavMenu}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="Menu"
                    anchorEl={props.anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(props.anchorElNav)}
                    onClose={props.handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    {props.pages.map((page) => (
                        <Link key={page} to={`/${page}`} style={{ textDecoration: "none", color: "black" }}>
                            <MenuItem onClick={props.handleCloseNavMenu}>
                                <Typography textAlign="center">{page}</Typography>
                            </MenuItem>
                        </Link>
                    ))}
                </Menu>
            </Box>


            <Typography
                variant="h5"
                noWrap
                sx={{
                    mr: 1,
                    ml: 1,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                    ASSOBECER
                </Link>
            </Typography>

        </>
    )
}