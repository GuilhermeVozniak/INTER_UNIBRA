//MUI
import { FormControl, Button, Grid, TextField, InputLabel } from '@mui/material'

export const Form = () => {
    const styleCenter = {
        display: "flex",
        justifyContent: "center",
    }

    return (
        <>
            <Grid
                spancing={6} gap={2} container
                sx={{
                    display: "flex",
                    justifyContent: 'center'
                }}
            >
                <Grid item xs={12} sm={12} md={3} sx={styleCenter}>
                    <FormControl>
                        <TextField id="name" label="Nome" variant="filled" />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={3} sx={styleCenter}>
                    <FormControl>
                        <TextField id="email" label="E-mail" variant="filled" />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={3} sx={styleCenter}>
                    <FormControl>
                        <TextField id="cpf" label="CPF ou CNPJ" variant="filled" />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={3} sx={styleCenter}>
                    <FormControl>
                        <TextField id="address" label="Endereço" variant="filled" />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={3} sx={styleCenter}>
                    <FormControl>
                        <TextField id="reference" label="Referência" variant="filled" />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={3} sx={styleCenter}>
                    <FormControl>
                        <TextField id="cep" label="Cep" variant="filled" />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={3} sx={styleCenter}>
                    <FormControl>
                        <TextField id="bairro" label="Bairro" variant="filled" />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={3} sx={styleCenter}>
                    <FormControl>
                        <TextField id="cidade" label="Cidade" variant="filled" />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={3} sx={styleCenter}>
                    <FormControl>
                        <TextField id="estado" label="Estado" variant="filled" />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={3} sx={styleCenter}>
                    <FormControl>
                        <TextField id="telresidencial" label="Tel Residencial" variant="filled" />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={3} sx={styleCenter}>
                    <FormControl>
                        <TextField id="celular" label="Celular" variant="filled" />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={3} sx={styleCenter}>
                    <FormControl>
                        <TextField id="contribuicao" label="Contribuição" variant="filled" />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={3} sx={styleCenter}>
                    <FormControl>
                        <TextField id="carne" label="Carnê" variant="filled" />
                    </FormControl>
                </Grid>
            </Grid>
            <Grid
                sx={{
                    mt: 4,
                    gap: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Button variant="contained">Enviar</Button>
                <Button variant="contained">Limpar</Button>
            </Grid>
        </>
    )
}