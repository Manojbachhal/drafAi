import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import Rouer from "./AllRoutes/Rouer";
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Navbar />
        <Rouer />
        <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
