import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"


//Componets
import { Footer } from "./Components/Footer/footer"
import { NavegationBar } from "./Components/Nav/nav"
import { Home } from "./Components/Home/Home"
import { Institucional } from "./Components/Institucional/Institucional"
import { Estrutura } from "./Components/Estrutura/Estrutura"
import { Eventos } from "./Components/Eventos/Eventos"


//Theme
import { ThemeProvider } from "@mui/material"
import { theme } from "./theme"

//MUI
import { Box } from "@mui/material"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>

        <NavegationBar />

        <Box sx={{
          backgroundColor: "secondary.main",
          width: { xs: "80%", sm: "80%", md: "80%" },
          p: 4,
          margin: "0 auto",
          mt: 4,
          mb: 4,
          boxShadow: 10,
          borderRadius: 2,
        }}>


          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/institucional" element={<Institucional />} />
            <Route path="/estrutura" element={<Estrutura />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/ajuda" element={<Institucional />} />
            <Route path="/contato" element={<Institucional />} />
            <Route path="/*" element={<div>404</div>} />

          </Routes>

        </Box>

        <Footer />

      </BrowserRouter>

    </ThemeProvider>
  )
}

export default App;
