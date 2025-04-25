// Espera a que todo el contenido del DOM se haya cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", () => {
  
    // Obtiene el nombre del archivo de la URL actual (por ejemplo, "contacto.html")
    const currentPath = window.location.pathname.split("/").pop();
  
    // Selecciona todos los enlaces dentro del contenedor con clase "nav-links"
    document.querySelectorAll(".nav-links a").forEach(link => {
  
      // Obtiene el valor del atributo href de cada enlace
      const href = link.getAttribute("href");
  
      // Si el href es "#", se interpreta como "index.html"; si no, se extrae el nombre del archivo
      //const linkPath = href === "#" ? "index.html" : href.split("/").pop();//
      const linkPath = href === "#" ? currentPath : href.split("/").pop();

  
      // Compara el archivo actual con el del enlace. Si coinciden, o si estamos en la raíz y el enlace es a "index.html"...
      if (linkPath === currentPath || (currentPath === "" && linkPath === "index.html")) {
        // ...añade la clase "active" al enlace para resaltarlo (por ejemplo, cambiar el color o el estilo)
        link.classList.add("active");
      }
    });
  });
  