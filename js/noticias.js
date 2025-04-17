fetch('./data/blog.json')  // Nos aseguramos de que la ruta sea correcta
        .then(response => response.json())  // Convierte la respuesta en un objeto JSON
        .then(data => {
          const grid = document.getElementById('blog-grid');  // El contenedor donde se agregarán las tarjetas

          data.forEach(item => {
            // Crea un nuevo artículo (tarjeta del blog)
            const card = document.createElement('article');
            card.classList.add('blog-card');  // Agrega la clase de estilo a la tarjeta

            // Inserta contenido dinámicamente en la tarjeta
            card.innerHTML = `
              <img src="${item.imagen}" alt="${item.titulo}">
              <div class="blog-content">
                <h3>${item.titulo}</h3>
                <p>${item.descripcion}</p>
                <a href="${item.enlace}" class="read-more">Leer más</a>
              </div>
            `;

            // Agrega la tarjeta al contenedor
            grid.appendChild(card);
          });
        })
        .catch(error => {
          console.error("Error al cargar el blog:", error);
        });
