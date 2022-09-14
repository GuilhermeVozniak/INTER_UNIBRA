import { Box, Button, Grid, Typography, Divider } from "@mui/material"
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import MyLocationIcon from '@mui/icons-material/MyLocation'
import MailOutlineIcon from '@mui/icons-material/MailOutline';


export const Footer = () => {


  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        bgcolor: "primary.main",
        color: "primary.contrastText",
        boxShadow: 3,
        p: 2,
        mt: 2,
      }}

    >
      <Grid container
        sm={12} md={6}
        sx={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Grid
          containner
          sm={12}
          sx={{
            display: "flex",
            justifyContent: "space-around"
          }}
          xs={12}
        >
          <Grid sx={{ textAlign: "left" }}>

            <Typography variant="h6" sx={{ p: 0.5 }}>Contato</Typography>
            <Divider sx={{ mb: 1 }} />

            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <Box sx={{ p: 0.5, pl: 0, display: "inline-flex", justifyContent: "center", alignItems: "center" }}>
                <MyLocationIcon />
                <Typography variant="body2">Estrada dos Remédios, 1558 </Typography>
              </Box>

              <Box sx={{ p: 0.5, pl: 0, display: "inline-flex", justifyContent: "center", alignItems: "center" }}>
                <LocalPhoneIcon />
                <Typography variant="body2">(81) 3428.2538</Typography>
              </Box>

              <Box sx={{ p: 0.5, pl: 0, display: "inline-flex", justifyContent: "center", alignItems: "center" }}>
                <MailOutlineIcon />
                <Typography variant="body2">contato@assobecer.org.br</Typography>
              </Box>

              <Box sx={{ p: 0.5, pl: 0, display: "inline-flex", justifyContent: "center", alignItems: "center" }}>
                <MailOutlineIcon />
                <Typography variant="body2">assobecer.ong@hotmail.com </Typography>
              </Box>
            </Box>

          </Grid>

          <Grid item sx={{ textAlign: "left" }}>
            <Typography variant="h6" sx={{ p: 0.5 }}>Redes Sociais</Typography>
            <Divider sx={{ mb: 1 }} />
            <Box sx={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}>
              <InstagramIcon sx={{ p: 0.5 }} fontSize="large" />
              <FacebookIcon sx={{ p: 0.5 }} fontSize="large" />
            </Box>
          </Grid>

        </Grid>

        <Grid item sx={{ mt: 2 }}>
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              bgcolor: "primary.contrastText",
              color: "primary.main",
            }}
          >
            Faca sua doação
          </Button>
        </Grid>

      </Grid>
    </Box >
  )
}