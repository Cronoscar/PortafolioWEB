import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../images/5.png";
import image2 from "../images/6.png";
import image3 from "../images/7.png";
import image4 from "../images/13.png";
import image5 from "../images/14.png";

// eslint-disable-next-line no-sparse-arrays
const projectList = [

  {
    title: "Sistema de facturación y gestión de inventario",
    description:
      "Parte del grupo de trabajo del proyecto 'Sistema de facturación y gestión de inventario' en la clase Ingeniería de Software de la UNAH",
    url: "https://proyectoingenieria-fe.onrender.com/",
    preview: image2,
  },
  {
    title: "Aplicacion Full Stack tipo Deezer",
    description:
      "Parte del grupo de trabajo del proyecto 'Aplicacion Full Stack tipo Deezer' en la clase Bases de Datos I de la UNAH",
    url: "https://proyectoingenieria-fe.onrender.com/",
    preview: image3,
  }, 
  {
    title: "Topologia de red telefonica para una empresa pequeña",
    description:
      "Parte del grupo de trabajo del proyecto 'Topologia de red telefonica'en la clase Redes de Datos I de la UNAH",
    url: "https://github.com/AdrianJMendez/PixelCrafters.git",
    preview: image4,
  },
  {
    title: "Topologia de red cableada/inalambrica para una empresa mediana",
    description:
      "Parte del grupo de trabajo del proyecto 'Topologia de red cableada/inalambrica'en la clase Redes de Datos II de la UNAH",
    url: "https://github.com/AdrianJMendez/PixelCrafters.git",
    preview: image5,
  },
  {
    title: "Aplicacion Full Stack tipo E-commerce",
    description:
      "Parte del grupo de trabajo del proyecto 'Aplicacion Full Stack tipo E-commerce'en la clase Pogranacion Orientada a Objetos de la UNAH",
    url: "https://github.com/AdrianJMendez/PixelCrafters.git",
    preview: image1,
  },
];

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    adaptiveHeight: true,
  };

  return (
    <section className="padding" id="portfolio">
      <div className="portfolio-container">
        <h2>Portafolio</h2>
        <div className="portfolio-slider">
          <Slider {...settings}>
            {projectList.map((project) => (
              <div key={project.title} className="portfolio-slide">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.preview}
                    alt={project.title}
                    className="portfolio-image"
                  />
                  <h3>{project.title}</h3>
                </a>
                <p>{project.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;