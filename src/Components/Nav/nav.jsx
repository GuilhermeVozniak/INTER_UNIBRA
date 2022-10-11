import { useState } from "react"

//MUI
import { AppBar, Toolbar, Container } from "@mui/material"

//Components
import { Mobile } from './mobile/mobile'
import { Desktop } from './desktop/desktop'

const pages = ['Institucional', 'Estrutura', 'Eventos', 'Como Ajudar', 'Contato']
const settings = ['Modo Noturno', 'Inversão de Cores', 'Tamanho dos itens']

export const NavegationBar = () => {
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
                        settings={settings}
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