import "./App.css";
import Service_box from "./components/Service_box";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";
import Team from "./components/Team";
import Home from "./components/Home";
import { createTheme, ThemeProvider } from "@material-ui/core";
const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <Navbar />
        <Home />
        <About />
        <Services />
        <Team />
      </div>
    </ThemeProvider>
  );
}

export default App;
