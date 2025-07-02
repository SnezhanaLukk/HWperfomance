import Footer from "./components/footer/Footer";
import MainMenu from "./components/main/MainMenu";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <div id="app">
        <Header />
        <MainMenu />
      </div>

      <Footer />
    </>
  );
}

export default App;
