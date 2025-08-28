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

const projectList = [
  {
    title: "Sistema de facturación y gestión de inventario",
    description:
      "Parte del grupo de trabajo del proyecto 'Sistema de facturación y gestión de inventario' en la clase Ingeniería de Software de la UNAH",
    url: "https://proyectoingenieria-fe.onrender.com/",
    preview: image2,
    images: [image2, image10, image11,image12,image13],
    role: "En este proyecto, participé en el desarrollo del módulo de facturación y la integración con el sistema de inventario. Colaboré en el diseño de la base de datos y la implementación de la API REST.",
    challenges: [
      "Sincronización en tiempo real entre el inventario y las facturas",
      "Implementación de permisos y roles de usuario",
      "Generación de reportes en PDF con datos actualizados",
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "React", "Bootstrap"],
  },
  {
    title: "Aplicacion Full Stack tipo Deezer",
    description:
      "Parte del grupo de trabajo del proyecto 'Aplicacion Full Stack tipo Deezer' en la clase Bases de Datos I de la UNAH",
    url: "https://proyectoingenieria-fe.onrender.com/",
    preview: image3,
    images: [image3, image8, image9],
    role: "Desarrollé la funcionalidad de listas de reproducción y el sistema de recomendaciones basado en el historial de escucha. También participé en el diseño del esquema de la base de datos.",
    challenges: [
      "Manejo de archivos de audio y metadatos",
      "Algoritmos de recomendación eficientes",
      "Sistema de streaming optimizado para diferentes calidades",
    ],
    technologies: ["Node.js", "Express", "MongoDB", "React", "Web Audio API"],
  },
  {
    title: "Topologia de red telefonica para una empresa pequeña",
    description:
      "Parte del grupo de trabajo del proyecto 'Topologia de red telefonica'en la clase Redes de Datos I de la UNAH",
    url: "https://github.com/AdrianJMendez/PixelCrafters.git",
    preview: image4,
    images: [image4],
    role: "Diseñé la topología de red y calculé los requisitos de ancho de banda. Implementé la configuración de los equipos de red y realicé pruebas de estrés.",
    challenges: [
      "Optimización del ancho de banda para voz y datos",
      "Configuración de QoS para priorizar tráfico de voz",
      "Plan de contingencia para fallos en la red",
    ],
    technologies: ["Cisco Packet Tracer"],
  },
  {
    title: "Topologia de red cableada/inalambrica para una empresa mediana",
    description:
      "Parte del grupo de trabajo del proyecto 'Topologia de red cableada/inalambrica'en la clase Redes de Datos II de la UNAH",
    url: "https://github.com/AdrianJMendez/PixelCrafters.git",
    preview: image5,
    images: [image5],
    role: "Lideré el diseño de la red híbrida cableada/inalámbrica y coordine las pruebas de penetración y seguridad. Documenté toda la infraestructura de red.",
    challenges: [
      "Integración segura entre red cableada e inalámbrica",
      "Plan de escalabilidad para crecimiento futuro",
      "Implementación de políticas de seguridad consistentes",
    ],
    technologies: ["Cisco Packet Tracer"],
  },
  {
    title: "Aplicacion Full Stack tipo E-commerce",
    description:
      "Parte del grupo de trabajo del proyecto 'Aplicacion Full Stack tipo E-commerce'en la clase POO de la UNAH",
    url: "https://github.com/AdrianJMendez/PixelCrafters.git",
    preview: image1,
    images: [image1, image6,image7],
    role: "Participé en el diseño de las tablas para una estructura eficiente. También Coordiné la organización del equipo de 4 personas para una mejor distribución de tareas. Del lado del frontend Contribuí en el desarrollo de diversas funcionalidades clave como el login, el renderizado de contenido integrando con la API las funcionalidades a mostrar como la lógica para la gestión de múltiples perfiles por usuario y la creación de listas personalizadas.",
    challenges: [
      "Dado que era un proyecto de una clase, el tiempo de entrega era de 2 semanas y media, el cual se logró.",
      "Manejo de estados en frontend, para actualizar en tiempo real la interfaz según el usuario que se logueara.",
      "Consumo de API, haciendo una integración correcta entre el backend, base de datos y frontend.",
      "Implementación de búsqueda y filtrado, de contenido para mejorar la experiencia del usuario.",
      "Investigación sobre cómo funcionan los procesos de pago con tarjetas, en el caso de Netflix para compra de cuentas (No implementado).",
    ],
    technologies: ["SpringBoot", "MySQL", "Laravel + PHP"],
  },
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