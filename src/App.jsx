import { useState } from "react"
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
import { Ajuda } from "./Components/Ajuda/Ajuda"
import { Contato } from "./Components/Contato/Contato"


//Theme
import { ThemeProvider } from "@mui/material"
import { theme, themeDark } from "./theme"

//MUI
import { Box } from "@mui/material"
import { useEffect } from "react"

function App() {

  //theme
  const [onUseTheme, setOnUseTheme] = useState(theme)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    darkMode ? setOnUseTheme(themeDark) : setOnUseTheme(theme)
  }, [darkMode])

  return (
    <ThemeProvider theme={onUseTheme}>
      <BrowserRouter>

        <NavegationBar darkMode={darkMode} setDarkMode={setDarkMode} />

        <Box sx={{
          backgroundColor: "secondary.main",
          width: { xs: "80%", sm: "80%", md: "80%" },
          p: { xs: 3, sm: 3, md: 4 },
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
            <Route path="/ajuda" element={<Ajuda />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/*" element={<div>404</div>} />

          </Routes>

        </Box>

        <Footer />

      </BrowserRouter>

    </ThemeProvider>
  )
}

export default App;
