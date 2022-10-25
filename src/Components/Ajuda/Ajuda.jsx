
//MUI
import { useMediaQuery, Typography, Box, Container } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

//Components
import { BreadCrumbs } from '../BreadCrumbs/BreadCrimbs'
import { Form } from './Form'

//Styles
import { Wrapper } from "../Ajuda/Ajuda.styles"


export const Ajuda = () => {
    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("sm"))

    return (
        <Wrapper>
            <BreadCrumbs pages={["Ajuda"]} className="crumbs" />

            <Box sx={{ width: "100%", textAlign: "center" }}>
                <Typography variant='h4' sx={{ mt: 4, color: "secondary.contrastText", fontFamily: "Verdana, serif" }}>SEJA UM DOADOR</Typography>
            </Box>

            <Box sx={{ mt: 4 }}>
                <Typography variant={"h6"} sx={{ ml: 2, color: "secondary.contrastText" }}>Escolha a melhor forma de doar:</Typography>
                <Typography variant={isSmallScreen ? "body2" : "body1"} sx={{ mt: 2, color: "secondary.contrastText", textAlign: "justify", textIndent: "30px", fontWeight: "semibold" }}>
                    Pelo nosso telefone: (81) 3428-2538
                </Typography>
                <Typography variant={isSmallScreen ? "body2" : "body1"} sx={{ mt: 2, color: "secondary.contrastText", textAlign: "justify", textIndent: "30px", fontWeight: "semibold" }}>
                    Pelo cartão de crédito (nosso pessoal do telemarketing vai entrar em contato para confirmar seus dados)
                </Typography>
                <Typography variant={isSmallScreen ? "body2" : "body1"} sx={{ mt: 2, color: "secondary.contrastText", textAlign: "justify", textIndent: "30px", fontWeight: "semibold" }}>
                    Por depósito ou transferência em nome da ASSOBECER:
                    <Typography>CNPJ: 11.868.882/0001-28</Typography>
                    <Typography>Depósito Bancário</Typography>
                    <Typography>Banco: CAIXA</Typography>
                    <Typography>AG: 0046</Typography>
                    <Typography>OP: 003</Typography>
                    <Typography>C/C: 26289-2</Typography>
                </Typography>
                <Typography variant={isSmallScreen ? "body2" : "body1"} sx={{ mt: 2, color: "secondary.contrastText", textAlign: "justify", textIndent: "30px", fontWeight: "semibold" }}>
                    Por meio da nossa chave Pix: 81986521038
                </Typography>
                <Typography variant={isSmallScreen ? "body2" : "body1"} sx={{ mt: 2, color: "secondary.contrastText", textAlign: "justify", textIndent: "30px", fontWeight: "semibold" }}>
                    Por carnê através do nosso formulário abaixo:
                </Typography>
            </Box>

            <Box sx={{ mt: 4 }}>
                {/*
                    Nome, email, cpf ou cnpj, endereço, referencia
                    cep, bairro, cidade, estado, tel recidencial, celular, contribuição, carnê 
                */}
                <Container>
                    <Form />
                </Container>
            </Box>

        </Wrapper>

    )
}