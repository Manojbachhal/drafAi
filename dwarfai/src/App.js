import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Home />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
