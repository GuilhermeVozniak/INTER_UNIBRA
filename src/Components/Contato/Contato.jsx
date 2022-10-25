import { Button, Box, TextField, Typography } from "@mui/material"



export const Contato = () => {

    return (
        <>
            <Typography variant="h3">Contato</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>Preencha o formulário abaixo e entre em contato conosco, use o mesmo para se tornar um voluntário:</Typography>

            <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <Box sx={{ mt: 4, width: { xs: "100%", sm: "100%", md: "35%" }, display: "flex", flexDirection: "column", alingItems: "center" }}>
                    <TextField variant="filled" placeholder="Nome" fullWidth size="small" />
                    <TextField variant="filled" placeholder="E-mail" fullWidth />
                    <TextField variant="filled" placeholder="CPF ou CNPJ" fullWidth />
                    <TextField variant="filled" placeholder="Endereço" fullWidth />
                    <TextField variant="filled" placeholder="Referencia" fullWidth />
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <TextField variant="filled" placeholder="Cep" />
                        <TextField variant="filled" placeholder="Bairro" />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <TextField variant="filled" placeholder="Cidade" />
                        <TextField variant="filled" placeholder="Estado" />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <TextField variant="filled" placeholder="Tel Residencial" />
                        <TextField variant="filled" placeholder="Celular" />
                    </Box>
                    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <TextField variant="filled" placeholder="Contribuicão" />
                        <TextField variant="filled" placeholder="Carnê" />
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