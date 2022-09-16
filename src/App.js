import { Footer } from "./Components/Footer/footer"
import { NavegationBar } from "./Components/Nav/nav"
import { Home } from "./Components/Home/Home"

//Theme
import { ThemeProvider } from "@mui/material"
import { theme } from "./theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavegationBar />
      <Home />
      <Footer />
    </ThemeProvider>
  )
}

export default App;
