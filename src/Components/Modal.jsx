import React, { useEffect, useRef } from "react";

const Modal = ({ project, onClose }) => {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

  
    const previousActiveElement = document.activeElement;

    document.addEventListener("keydown", handleEscape);

    // Enfocar el botón de cerrar al abrir el modal
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      
      // Devolver el foco al elemento anterior
      if (previousActiveElement) {
        previousActiveElement.focus();
      }
    };
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!project) return null;

  return (
    <div 
      className="modal-overlay" 
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-content" ref={modalRef}>
        <button 
          ref={closeButtonRef}
          className="modal-close" 
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          ✖
        </button>

        <div className="modal-header">
          <h2 id="modal-title">{project.title}</h2>
          <p className="modal-description">{project.description}</p>
        </div>

        <div className="modal-body">
        
          {project.role && (
            <div className="modal-section">
              <h3>Mi Rol</h3>
              <p>{project.role}</p>
            </div>
          )}

        
          {project.challenges && project.challenges.length > 0 && (
            <div className="modal-section">
              <h3>Desafíos y Soluciones</h3>
              <ul>
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}

          
          {project.technologies && project.technologies.length > 0 && (
            <div className="modal-section">
              <h3>Tecnologías utilizadas</h3>
              <div className="technologies-grid">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

         
          {project.images && project.images.length > 0 && (
            <div className="modal-section">
              <h3>Fotos del proyecto</h3>
              <div className="modal-gallery">
                {project.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${project.title}-${index}`}
                    className="gallery-image"
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="modal-footer">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-link"
          >
            Ver Proyecto
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;