import React from "react";
import image from "../images/5.png";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "CoFundador de Pixelcrafters",
    description:
      "Cofundador de la emprese llamada PixelCrafters destinada a la distribucion de productos con estampados y diseño en PixelArt",
    url: "https://github.com/AdrianJMendez/PixelCrafters.git",
  },
  {
    title: "App de lista de contactos",
    description:
      "Parte del grupo de trabajo del poryecto 'Lista de Contactos' de la Clase Algoritmos y Estructura de Datos de la UNAH",
    url: "https://github.com/AdrianJMendez/Proyecto_1.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portafolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
