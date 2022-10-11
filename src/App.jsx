import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"


//Componets
import { Footer } from "./Components/Footer/footer"
import { NavegationBar } from "./Components/Nav/nav"
import { Home } from "./Components/Home/Home"


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
          p: 3,
          margin: "0 auto",
          mt: 4,
          mb: 4,
          boxShadow: 10,
          borderRadius: 2,
        }}>


          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/Institucional" element={<div>Institucional</div>} />
            <Route path="/*" element={<div>404</div>} />

          </Routes>

        </Box>

        <Footer />

      </BrowserRouter>

    </ThemeProvider>
  )
}

export default App;
