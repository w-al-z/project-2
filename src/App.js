import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import SubCard from "./Components/SubCard";
import About from "./Components/About";
import Form from "./Components/Form";
import Card from "./Components/Card";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <SubCard />
      <About />
      <Form />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
