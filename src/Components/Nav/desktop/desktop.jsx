import { Link } from "react-router-dom"

//MUI
import { Box, Typography, Button } from "@mui/material"
import CameraAltIcon from '@mui/icons-material/CameraAlt'

//Components
import { Switching } from '../Switching'

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
                        color: "common.white",
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
                            sx={{ my: 2, color: 'common.white', display: 'block' }}
                            title={page}
                        >
                            {page}
                        </Button>
                    </Link>
                ))}
            </Box>

            <Box>
                <input id="camera" type="file" accept="image/*" capture='environment' style={{ display: "none" }} />
                <label for="camera">
                    <CameraAltIcon sx={{ mr: 2 }} />
                </label>
            </Box>


            <Switching darkMode={props.darkMode} setDarkMode={props.setDarkMode} />

        </>
    )

}