import React from "react";
import backgroundImage from "../images/4.jpg";
import profileImage from "../images/3.jpg";
import imagen1 from "../images/8.png";
import imagen2 from "../images/9.png";
import imagen3 from "../images/10.svg";
import imagen4 from "../images/11.png";
import imagen5 from "../images/12.png";
const imageAltText = "Fondo abstracto morado y azul";
const profileAltText = "Foto de Oscar Estrada - Desarrollador Full Stack";

const description =
  "Soy estudiante avanzado de Ingeniería en Sistemas en la Universidad Nacional Autónoma de Honduras (UNAH). Me apasiona la tecnología, el desarrollo de software y el tabajo en equipo. Tengo experiencia en reparación y mantenimiento de computadoras, así como en desarrollo web y backend. Además, complemento mi perfil profesional con habilidades en fotografía y producción audiovisual.";

const technicalSkills = {
  "Mantenimiento y Soporte": [
    { name: "Mantenimiento de Computadoras", percentage: 70, icon: imagen1 },
    { name: "Instalación de Software", percentage: 65, icon: imagen2 },
    { name: "Redes y Administración", percentage: 65, icon: "https://img.icons8.com/fluency/100/thin-client.png" }
  ],
  "Lenguajes de Programación": [
    { name: "JavaScript", percentage: 60, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", percentage: 50, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Java", percentage: 60, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "PL/SQL", percentage: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" }
  ],
  "Frameworks y Tecnologías": [
    { name: "Node.js", percentage: 65, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", percentage: 60, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "Spring Boot", percentage: 65, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { name: "Sequelize", percentage: 60, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" }
  ],
  "Bases de Datos": [
    { name: "Oracle", percentage: 70, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
    { name: "SQL Server", percentage: 50, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
    { name: "MongoDB", percentage: 45, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
  ],
  "DevOps y Despliegue": [
    { name: "Git", percentage: 60, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", percentage: 50, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Vercel", percentage: 60 ,icon:imagen3}
  ],
  "Desarrollo Web": [
    { name: "HTML", percentage: 50, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", percentage: 45, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
  ],
  "Metodologías y Herramientas": [
    { name: "Scrum", percentage: 80 ,icon:imagen5},
    { name: "Figma", percentage: 50, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "Photoshop", percentage: 75, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" },
    { name: "Lightroom", percentage: 70,icon:"https://img.icons8.com/?size=100&id=cAVP5AOANxnf&format=png&color=000000" },
    { name: "Herramientas Audiovisuales", percentage: 85, icon:imagen4}
  ]
};

const detailOrQuote =
  "Me motiva aprender constantemente y encontrar soluciones prácticas y eficientes a los problemas, manteniendo siempre disciplina, responsabilidad y compromiso con la calidad del trabajo.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={backgroundImage} alt={imageAltText} />
      <div id="info" className="about-container">
        <h2 style={{ marginBottom: '2rem' }}>Sobre Mi</h2>
        
        <div id="image" style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
          <img 
            src={profileImage} 
            alt={profileAltText}
            className="profile-image"
          />
        </div>
        

        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <p className="large" style={{ lineHeight: '1.7', marginBottom: '0' }}>
            {description}
          </p>
        </div>
        
        <hr style={{ width: '100%', margin: '2.5rem 0' }} />
        <h2 style={{ marginBottom: '1.5rem', color: '#3B0B9B' }}>Habilidades Técnicas</h2>
        
        
        <div className="skills-categories">
          {Object.entries(technicalSkills).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h4 className="category-title">{category}</h4>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-card">
                    {skill.icon && (
                      <img src={skill.icon} alt={skill.name} className="skill-icon" />
                    )}
                    <p className="skill-name">{skill.name}</p>
                    <div className="progress-container">
                      <div 
                        className="progress-bar" 
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <hr style={{ width: '100%', margin: '2.5rem 0' }} />
        <p className="about-quote">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;