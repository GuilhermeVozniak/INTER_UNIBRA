import { useState } from "react"

//MUI
import { AppBar, Toolbar, Container } from "@mui/material"

//Components
import { Mobile } from './mobile/mobile'
import { Desktop } from './desktop/desktop'

//any
import CameraAltIcon from '@mui/icons-material/CameraAlt';



const pages = ['Institucional', 'Estrutura', 'Eventos', 'Ajuda', 'Contato']

export const NavegationBar = (props) => {
   /*  const { darkMode, setDarkMode } = props */

    const [anchorElNav, setAnchorElNav] = useState(null)
    const [anchorElUser, setAnchorElUser] = useState(null)

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget)
    }
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    return (


        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Mobile
                        pages={pages}
                        handleOpenNavMenu={handleOpenNavMenu}
                        anchorElNav={anchorElNav}
                        handleCloseNavMenu={handleCloseNavMenu}
                    />

                    <Desktop
                        darkMode={props.darkMode}
                        setDarkMode={props.setDarkMode}
                        pages={pages}
                        handleOpenNavMenu={handleOpenNavMenu}
                        anchorElNav={anchorElNav}
                        handleCloseNavMenu={handleCloseNavMenu}
                        anchorElUser={anchorElUser}
                        handleOpenUserMenu={handleOpenUserMenu}
                        handleCloseUserMenu={handleCloseUserMenu}
                    />



                </Toolbar>
            </Container>
        </AppBar>
    )
}