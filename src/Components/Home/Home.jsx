
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
                <Typography
                    variant={isSmallScreen ? "body2" : "body1"}
                    sx={{ color: "secondary.contrastText", textAlign: "justify", textIndent: "30px" }}
                >
                    Hoje com 93 anos de existência e muitas vitórias alcançadas, a associação já atendeu centenas de
                    pessoas e atualmente presta em média 30 atendimentos por dia através do seu Serviço Social.
                    A ASSOBECER recebe pessoas com deficiência visual do sexo masculino dos 18 aos 60 anos, como residentes,
                    abrangendo seus atendimentos também ao sexo feminino, que tem sua característica como circulante.
                    A associação é a única no Recife a funcionar com esse sistema de hospedagem, assistência, treinamento e
                    capacitação profissionalizante.
                </Typography>
                <Typography
                    variant={isSmallScreen ? "body2" : "body1"}
                    sx={{ color: "secondary.contrastText", textAlign: "justify", textIndent: "30px" }}
                >
                    A casa tem capacidade de abrigar 20 pessoas, oferecendo serviços de lavanderia,
                    alimentação e inserção no mercado de trabalho, entre outras atribuições. São oferecidas em torno de, aproximadamente,
                    130 refeições ao dia, podendo ser variável em dias de grandes eventos em nossa instituição.
                </Typography>
            </Box>


        </Box >
    )
}