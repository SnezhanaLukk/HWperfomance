import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Footer from "./components/footer/Footer";
import MainMenu from "./components/main/MainMenu";
import Header from "./components/header/Header";
import "./index.css";
// import App from "./App.jsx";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Header />
    <MainMenu />

    <Footer />
  </StrictMode>
);
