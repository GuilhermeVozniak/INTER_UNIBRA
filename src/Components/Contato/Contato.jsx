import { Button, Box, TextField, Typography } from "@mui/material"

//Components
import { BreadCrumbs } from '../BreadCrumbs/BreadCrimbs'



export const Contato = () => {

    return (
        <>
            <BreadCrumbs pages={["Contato"]} className="crumbs" />

            <Typography variant="h4" sx={{ mt: 4, width: "100%", textAlign: "center" }}>CONTATO</Typography>

            <Typography variant="body1" sx={{ mt: 2, width: "100%", textAlign: "center" }}>Preencha o formulário abaixo e entre em contato conosco: </Typography>

            <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <Box sx={{ mt: 4, width: { xs: "100%", sm: "100%", md: "35%", lg: "23%", xl: "27%" }, display: "flex", flexDirection: "column", alingItems: "center" }}>
                    <TextField variant="filled" placeholder="Nome" fullWidth size="small" />
                    <TextField variant="filled" placeholder="E-mail" fullWidth />
                    <TextField variant="filled" placeholder="CPF ou CNPJ" fullWidth />
                    <TextField variant="filled" placeholder="Endereço" fullWidth />
                    <TextField variant="filled" placeholder="Referencia" fullWidth />
                    <Box sx={{ mt: { xs: 0, sm: 0, md: 0, lg: 0, xl: 2 } }} />
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                        <TextField fullwidth variant="filled" placeholder="Cep" />
                        <TextField fullwidth variant="filled" placeholder="Bairro" />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                        <TextField fullwidth variant="filled" placeholder="Cidade" />
                        <TextField fullwidth variant="filled" placeholder="Estado" />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                        <TextField fullwidth variant="filled" placeholder="Tel Residencial" />
                        <TextField fullwidth variant="filled" placeholder="Celular" />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                        <TextField fullwidth variant="filled" placeholder="Contribuicão" />
                        <TextField fullwidth variant="filled" placeholder="Carnê" />
                    </Box>

                    <Box sx={{ mt: 2, display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                        <Button variant="contained">Enviar</Button>
                        <Button variant="contained">Limpar</Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}