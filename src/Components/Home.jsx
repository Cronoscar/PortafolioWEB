import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import image from "../images/1.png";

const Home = ({ name, title }) => {

  const scrollToAbout = () => {
    const about = document.getElementById("info");
    if (about) {
      about.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


  const scrollToPortfolio = () => {
    const portfolio = document.getElementById("portfolio");
    if (portfolio) {
      portfolio.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  
  const handleKeyDown = (e, callback) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      callback();
    }
  };

  return (
    <section id="home" className="min-height">
      <img
        className="background"
        src={image}
        alt="Fondo de pantalla abstracto"
        style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute" }}
      />

      <div className="home-content">
        <h1 className="home-title">{name}</h1>
        <h2 className="home-subtitle">{title}</h2>

    
        <div
          className="home-button"
          onClick={scrollToPortfolio}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => handleKeyDown(e, scrollToPortfolio)}
          style={{ cursor: "pointer", display: "inline-block" }}
          aria-label="Ver proyectos de portafolio"
        >
          Ver Portafolio
        </div>


        <div
          className="home-arrow"
          onClick={scrollToAbout}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => handleKeyDown(e, scrollToAbout)}
          style={{ cursor: "pointer" }}
          aria-label="Ir a la sección Sobre Mí"
        >
          <img 
            src={arrowSvg} 
            style={{ height: "2.5rem", width: "2.5rem", opacity: "0.85" }} 
            alt="Flecha para bajar a la sección Sobre Mí" 
          />
        </div>
      </div>
    </section>
  );
};

Home.defaultProps = { name: "", title: "" };
Home.propTypes = { name: PropTypes.string.isRequired, title: PropTypes.string.isRequired };

export default Home;