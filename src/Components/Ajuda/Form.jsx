//MUI
import { FormControl, Button, Grid, TextField } from '@mui/material'

export const Form = () => {
    return (
        <>
            <Grid 
                spancing={6} gap={3} container 
                sx={{ 
                    display: "flex",
                    justifyContent: 'center'
                }}
            >
                <Grid item xs={12} sm={12} md={3}>
                    <FormControl>
                        <TextField id="name" label="Nome" variant="outlined" />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <FormControl>
                        <TextField id="email" label="E-mail" variant="outlined" />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <FormControl>
                        <TextField id="cpf" label="CPF ou CNPJ" variant="outlined" />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <FormControl>
                        <TextField id="address" label="Endereço" variant="outlined" />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} md={3}>
                    <FormControl>
                        <TextField id="reference" label="Referência" variant="outlined" />
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