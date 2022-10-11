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
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          width: { md: "50%" }
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            justifyContent: "space-around",
          }}
        >
          <Grid item sx={{ textAlign: "left" }}>

            <Typography variant="h6" sx={{ p: 0.5, fontWeight: 'bold' }}>Contato</Typography>
            <Divider sx={{ mb: 1, borderBottomWidth: 2 }} />

            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <Box sx={{ p: 0.5, pl: 0, display: "inline-flex", justifyContent: "center", alignItems: "center" }}>
                <MyLocationIcon />
                <Typography variant="body2">&nbsp;Estrada dos Remédios, 1558 </Typography>
              </Box>

              <Box sx={{ p: 0.5, pl: 0, display: "inline-flex", justifyContent: "center", alignItems: "center" }}>
                <LocalPhoneIcon />
                <Typography variant="body2">&nbsp;(81) 3428.2538</Typography>
              </Box>

              <Box sx={{ p: 0.5, pl: 0, display: "inline-flex", justifyContent: "center", alignItems: "center" }}>
                <MailOutlineIcon />
                <Typography variant="body2">&nbsp;contato@assobecer.org.br</Typography>
              </Box>

              <Box sx={{ p: 0.5, pl: 0, display: "inline-flex", justifyContent: "center", alignItems: "center" }}>
                <MailOutlineIcon />
                <Typography variant="body2">&nbsp;assobecer.ong@hotmail.com </Typography>
              </Box>
            </Box>

          </Grid>

          <Grid item sx={{ textAlign: "left", mt: { xs: 2, sm: 2, md: 0 } }}>
            <Typography variant="h6" sx={{ p: 0.5, fontWeight: 'bold' }}>Redes Sociais</Typography>
            <Divider sx={{ mb: 1, borderBottomWidth: 2 }} />
            <Box sx={{ width: "100%", display: "flex", justifyContent: { xs: "left", sm: "left", md: "center" } }}>
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
              bgcolor: "primary.dark",
              color: "secondary.contrastText",
              boxShadow: 8,
            }}
          >
            Faca sua doação
          </Button>
        </Grid>

      </Grid>
    </Box >
  )
}