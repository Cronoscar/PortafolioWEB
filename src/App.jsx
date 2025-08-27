import React from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import "./styles.css";

const siteProps = {
  name: "Oscar Estrada",
  title: "Desarrollador Full Stack",
  email: "oestradae@unah.hn",
  gitHub: "Cronoscar",
  instagram: "oscardaniel_e/",
  linkedIn: "oscar-euceda-4405a628a/",
  medium: "",
  twitter: "OscarEstrada34",
  youTube: "@ErickVladimirReyesMarin",
};

const primaryColor = "#3B0B9B";
const secondaryColor = "#AE87E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;