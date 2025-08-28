import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Modal from "./Modal";
import image1 from "../images/5.png";
import image2 from "../images/6.png";
import image3 from "../images/7.png";
import image4 from "../images/13.png";
import image5 from "../images/14.png";
import image6 from "../images/15.png";
import image7 from "../images/16.png";
import image8 from "../images/17.png";
import image9 from "../images/18.png";
import image10 from "../images/19.png";
import image11 from "../images/20.png";
import image12 from "../images/21.png";
import image13 from "../images/22.png";
import image14 from "../images/23.png";

  const projectList = [ {
    title: "Sistema de facturación y gestión de inventario",
    description:
      "Proyecto desarrollado en la clase de Ingeniería de Software en la UNAH: 'Sistema de facturación y gestión de inventario'.",
    url: "https://proyectoingenieria-fe.onrender.com/",
    preview: image2,
    images: [image2, image10, image11, image12, image13],
    role: "En este proyecto participé en el desarrollo del módulo de facturación y en la integración con el sistema de inventario de una granja porcina. Colaboré en el diseño de la base de datos, la implementación de la arquitectura de software y la creación de la lógica de negocio.",
    challenges: [
      "Sincronización en tiempo real entre el inventario y las facturas",
      "Implementación de permisos y roles de usuario",
      "Generación de facturas en PDF",
      "Dockerización del proyecto",
    ],
    technologies: ["Sequelize", "SQL Server", "Docker", "React", "JWT"]
  },
  {
    title: "Aplicación Full Stack tipo Deezer",
    description:
      "Proyecto desarrollado en la clase de Bases de Datos I en la UNAH: 'Aplicación Full Stack tipo Deezer'.",
    url: "https://github.com/Cronoscar/deezer.git",
    preview: image3,
    images: [image3, image8, image9, image14],
    role: "Desarrollé la funcionalidad de los módulos de autenticación, registro y recomendaciones. Además, diseñé el esquema de la base de datos.",
    challenges: [
      "Manejo de archivos de audio y metadatos",
      "Investigación sobre el dominio del proyecto"
    ],
    technologies: ["Spring Boot", "Oracle", "JavaScript"]
}
,
  {
    title: "Topología de red telefónica para una empresa pequeña",
    description:
      "Proyecto desarrollado en la clase de Redes de Datos I en la UNAH: 'Topología de red telefónica para una empresa pequeña'.",
    url: "https://github.com/Cronoscar/Redes.git",
    preview: image4,
    images: [image4],
    role: "Investigué acerca de la configuración de teléfonos IP, y colaboré en el diseño de la topología y la configuración de los equipos de red.",
    challenges: [
      "Investigación sobre las configuraciones de teléfonos IP",
      "Definición de protocolos a utilizar"
    ],
    technologies: ["Cisco Packet Tracer"]
},
    {
    title: "Topología de red cableada/inalámbrica para una empresa mediana",
    description:
      "Proyecto desarrollado en la clase de Redes de Datos II en la UNAH: 'Topología de red cableada/inalámbrica para una empresa mediana'.",
    url: "https://github.com/Cronoscar/Redes.git",
    preview: image5,
    images: [image5],
    role: "Lideré el diseño de la red híbrida cableada/inalámbrica y coordiné las pruebas de seguridad, la configuración de la red inalámbrica y la configuración de los equipos.",
    challenges: [
      "Integración segura entre la red cableada e inalámbrica",
      "Investigación de conceptos como 'Redundancia en capa 3'",
      "Configuración de asignación automática de direcciones IP para los dispositivos inalámbricos"
    ],
    technologies: ["Cisco Packet Tracer"]
  },
  {
    title: "Aplicación Full Stack tipo E-commerce",
    description:
      "Proyecto desarrollado en la clase de Programación Orientada a Objetos (POO) en la UNAH: 'Aplicación Full Stack tipo E-commerce'.",
    url: "https://github.com/AdrianJMendez/PixelCrafters.git",
    preview: image1,
    images: [image1, image6, image7],
    role: "Participé en el diseño de las tablas para garantizar una estructura eficiente. Contribuí en el desarrollo de funcionalidades clave como el inicio de sesión, el renderizado de contenido y el diseño de las interfaces de usuario.",
    challenges: [
      "Tiempo reducido para la entrega del proyecto",
      "Investigación sobre el dominio del proyecto",
      "Diseño de logo, eslogan y nombre de la empresa"
    ],
    technologies: ["TypeScript", "Express.js", "Node.js", "MongoDB", "Trello"]
  }
,
];

const Portfolio = ({ onModalStateChange }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    onModalStateChange(true);
  };

  const handleModalClose = () => {
    setSelectedProject(null);
    onModalStateChange(false);
  };

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
              <div
                key={project.title}
                className="portfolio-slide"
                role="button"
                tabIndex={0}
                onClick={() => handleProjectSelect(project)}
                onKeyPress={(e) =>
                  e.key === "Enter" || e.key === " " ? handleProjectSelect(project) : null
                }
              >
                <img
                  src={project.preview}
                  alt={project.title}
                  className="portfolio-image"
                />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      
      <Modal
        project={selectedProject}
        onClose={handleModalClose}
      />
    </section>
  );
};

export default Portfolio;