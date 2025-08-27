import React from "react";

const Header = () => {
  const handleSmoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth", 
        block: "start"
      });
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <button 
        onClick={() => handleSmoothScroll("home")}
        style={linkButtonStyle}
      >
        Inicio
      </button>
      <button 
        onClick={() => handleSmoothScroll("info")}
        style={linkButtonStyle}
      >
        Acerca De
      </button>
      <button 
        onClick={() => handleSmoothScroll("portfolio")}
        style={linkButtonStyle}
      >
        Portafolio
      </button>
      <button 
        onClick={() => handleSmoothScroll("footer")}
        style={linkButtonStyle}
      >
        Contacto
      </button>
    </div>
  );
};


const linkButtonStyle = {
  background: "none",
  border: "none",
  color: "#333",
  cursor: "pointer",
  fontSize: "1rem",
  fontWeight: "500",
  padding: "0.5rem 1rem",
  borderRadius: "4px",
  transition: "all 0.3s ease",
};

export default Header;