
//MUI
import { Box, Typography, useMediaQuery } from "@mui/material"

//Img
import imagem from '../../Assets/img.jpg'


export const Home = () => {
    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("sm"))

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>


            <Box component="img" src={imagem} sx={{ width: "100%" }} />


            <Box sx={{ mt: 2 }}>
                <Typography variant="h4" sx={{ mt: 2, mb: 2, color: "secondary.contrastText", textAlign: "center" }}> Quem somos?</Typography>
                <Typography
                    variant={"body1"}
                    sx={{ color: "black", textAlign: "justify", textIndent: "30px", fontWeight: "bold" }}
                >
                    A ASSOBECER é uma instituição que dá suporte para deficientes visuais que vem até Recife em busca de treinamento profissional.
                </Typography>
                <Typography
                    variant={"body1"}
                    sx={{ color: "black", textAlign: "justify", textIndent: "30px", fontWeight: "bold" }}
                >
                    A associação conta também com cursos de braille e informática, além de promover laser para os residentes.
                </Typography>

            </Box>


        </Box >
    )
}