
//MUI
import { useMediaQuery, Typography, Box } from '@mui/material'

//Components
import { BreadCrumbs } from '../BreadCrumbs/BreadCrimbs'

//Styles
import { Wrapper } from "../Institucional/Institucional.styles"


export const Institucional = () => {
    const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down("sm"))

    return (
        <Wrapper>
            <BreadCrumbs pages={["Institucional"]} className="crumbs" />

            <Box sx={{ width: "100%", textAlign: "center" }}>
                <Typography variant='h4' sx={{ mt: 4, color: "white", fontFamily: "Verdana, serif" }}>SOBRE A ASSOBECER</Typography>
            </Box>

            <Box sx={{ mt: 4 }}>
                <Typography variant={"h6"} sx={{ ml: 2, color: "secondary.contrastText" }}>NOSSA HISTÓRIA</Typography>
                <Typography variant={isSmallScreen ? "body2" : "body1"} sx={{ mt: 2, color: "secondary.contrastText", textAlign: "justify", textIndent: "30px" }}>
                    A associação Beneficente dos Cegos do Recife, fundada no dia 12 de maio de 1928, por iniciativa do Sr. Manoel Vitoriano
                    da Silva, com sede na Estrada dos Remédios – Nº 1558, no bairro de Afogados – Recife – PE, doravante adotando a sigla
                    ASSOBECER, é uma associação civil de direito privado, com personalidade jurídica, sem fins lucrativos, sem discriminação
                    de raça, cor, religião, origem e convicções filosóficas, de duração indeterminada, que tem por finalidade prestar atendimento
                    a pessoas cegas e/ou com baixa visão, por ações efetivas nas áreas de educação, reabilitação, profissionalização e assistência social.
                </Typography>
            </Box>

            <Box sx={{ mt: 4 }}>
                <Typography variant={"h6"} sx={{ ml: 2, color: "secondary.contrastText" }}>MISSÃO</Typography>
                <Typography variant={isSmallScreen ? "body2" : "body1"} sx={{ mt: 2, color: "secondary.contrastText", textAlign: "justify", textIndent: "30px" }}>
                    Ajudar as pessoas cegas e/ou com baixa visão, cuidando e capacitando-as para serem incluídas à sociedade para que
                    possam ter melhores perspectivas e qualidade de vida.
                </Typography>
            </Box>

            <Box sx={{ mt: 4 }}>
                <Typography variant={"h6"} sx={{ ml: 2, color: "secondary.contrastText" }}>VISÃO</Typography>
                <Typography variant={isSmallScreen ? "body2" : "body1"} sx={{ mt: 2, color: "secondary.contrastText", textAlign: "justify", textIndent: "30px" }}>
                    Torna-se referência em ONG que presta atendimento de qualidade e solidário onde o foco são as pessoas que precisam de atenção e toda
                    a assistência necessária para seguir. Todos os nosso esforços é para criar o melhor ambiente possível. Continuaremos neste caminho.
                </Typography>
            </Box>

            <Box sx={{ mt: 4 }}>
                <Typography variant={"h6"} sx={{ ml: 2, color: "secondary.contrastText" }}>VALORES</Typography>
                <Typography variant={isSmallScreen ? "body2" : "body1"} sx={{ mt: 2, color: "secondary.contrastText", textAlign: "justify", textIndent: "30px" }}>
                    Bem estar de nossos colaboradores, parceiros e amigos. Confiança mútua, respeito às pessoas que precisam de ajuda. Esses são os
                    ideais do nosso fundador e os nossos ideais também.
                </Typography>
            </Box>



            <Box sx={{ width: "100%", textAlign: "center" }}>
                <Typography
                    variant='h4'
                    sx={{
                        mt: 4,
                        fontFamily: "Verdana, serif",
                        color: "white",
                        fontWeight: 500
                    }}
                >
                    DIRETORIA
                </Typography>
            </Box>

            <Box sx={{ mt: 4 }}>
                <Typography variant={"h6"} sx={{ ml: 2, color: "secondary.contrastText" }}>CONSELHO DIRETOR</Typography>
                <Typography variant={isSmallScreen ? "body2" : "body1"} sx={{ mt: 2, color: "secondary.contrastText", textAlign: "justify" }}>

                    <ul>
                        <li>Presidente: José Roberto Dias</li>
                        <li>Vice-presidente: Jackson José Alves</li>
                        <li>1ª Secretária: Ediane Conceição da Silva</li>
                        <li>2º Secretário: Edvaldo Cícero Correia</li>
                        <li>1º Tesoureiro: Fernando Dias da Silva</li>
                        <li>2º Tesoureiro: Diego Teixeira da Silva Araújo</li>
                    </ul>
                </Typography>
            </Box>

            <Box sx={{ mt: 4 }}>
                <Typography variant={"h6"} sx={{ ml: 2, color: "secondary.contrastText" }}>CONSELHO FISCAL:</Typography>
                <Typography variant={isSmallScreen ? "body2" : "body1"} sx={{ mt: 2, color: "secondary.contrastText", textAlign: "justify", textIndent: "10px" }}>
                    - Titulares
                </Typography>
                <Typography variant={isSmallScreen ? "body2" : "body1"} sx={{ color: "secondary.contrastText", textAlign: "justify" }}>
                    <ul>
                        <li>José Messias Bernardo</li>
                        <li>Madilson Carlos da Silva</li>
                        <li>Sivonaldo Teodoro da Silva</li>
                    </ul>
                </Typography>

                <Typography variant={isSmallScreen ? "body2" : "body1"} sx={{ mt: 2, color: "secondary.contrastText", textAlign: "justify", textIndent: "10px" }}>
                    - Suplentes
                </Typography>
                <Typography variant={isSmallScreen ? "body2" : "body1"} sx={{ color: "secondary.contrastText", textAlign: "justify" }}>
                    <ul>
                        <li>1º Severino Benedito da Silva</li>
                        <li>2º Lourinaldo Ferreira de Lima</li>
                        <li>3º Adriano Antônio de Oliveira
                        </li>
                    </ul>
                </Typography>
            </Box>

            <Box sx={{ mt: 4 }}>
                <Typography variant={"h6"} sx={{ ml: 2, color: "secondary.contrastText" }}>ASSESSORIAS:</Typography>
                <Typography variant={isSmallScreen ? "body2" : "body1"} sx={{ mt: 2, color: "secondary.contrastText", textAlign: "justify" }}>

                    <ul>
                        <li>Assessoria da Mulher – Bruna Alves</li>
                        <li>Assessoria de Controle Interno – Antônio José dos Santos</li>
                        <li>Assessoria de Eventos e Lazer – José Roberto Dias</li>
                        <li>Assessoria para Assuntos Jurídicos – Dr. Paulo Roberto Siqueira Campos</li>
                        <li>Assessoria de Marketing – Wilson Teixeira</li>
                    </ul>

                </Typography>



            </Box>


        </Wrapper>

    )
}