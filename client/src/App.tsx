import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/MainPage/Main";

function App() {
  return (
    <div className="App text-center flex flex-col h-screen justify between ">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
