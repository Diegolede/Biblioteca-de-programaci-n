const books = [
    {
      title: "Bash para profesionales",
      author: "GoalKicker",
      description: "Una guía práctica y de referencia diseñada para ayudar a profesionales a profesionalizar sus habilidades en el uso de Bash y herramientas relacionadas con Linux.",
      filePath: "assets/books/BashParaProEs.pdf",
    },
    {
      title: "Linux para profesionales",
      author: "GoalKicker",
      description:
        "Instructivo que aborda desde el manejo de permisos y directorios hasta la gestión de seguridad con GnuPG, pasando por comandos básicos y herramientas para detectar información sobre el sistema operativo.",
      filePath: "assets/books/LinuxParaProfesionales.pdf",
    },
    {
      title: "Html5 para profesionales",
      author: "GoalKicker",
      description: "Aborda el uso y la estructura de los elementos HTML5 como sección, artículo y navegación, enfocándose en cómo estas etiquetas contribuyen a una mejor comprensión del contenido y mejora la experiencia del usuario. Además, se analiza la importancia de las metaetiquetas para la optimización de motores de búsqueda y su influencia en la accesibilidad, particularmente para personas con problemas de visión que utilizan lectores de pantalla..",
      filePath: "assets/books/HTML5ParaProfesionales.pdf",
    },
    {
      title: "Css para profesionales",
      author: "GoalKicker",
      description: "El contenido aborda temas fundamentales y avanzados de CSS, incluyendo el diseño responsivo, la configuración de dispositivos como pantallas Retina y no Retina, y la optimización de la presentación de contenidos en diferentes dispositivos.",
      filePath: "assets/books/CSSParaProfesionales.pdf",
    },
    {
      title: "JS para profesionales",
      author: "GoalKicker",
      description:
        "El libro cubre una variedad de temas relacionados con JavaScript, desde introducciones básicas hasta aplicaciones más avanzadas, ofreciendo un punto de vista práctico y orientado a la solución de problemas comunes.",
      filePath: "assets/books/JSParaProfesionales.pdf",
    },
    {
      title: "TypeScript para profesionales",
      author: "GoalKicker",
      description: "Está compilado a partir de la documentación de Stack Overflow y escrito por los miembros de esta comunidad.",
      filePath: "assets/books/TypeScriptParaProfesionales.pdf",
    },
  ]
  
  document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle")
    const mainTitle = document.getElementById("mainTitle")
    const bookList = document.getElementById("bookList")
    const currentYear = document.getElementById("currentYear")
  
    // Set current year in footer
    currentYear.textContent = new Date().getFullYear()
  
    // Animate main title
    const titleText = "</Biblioteca de Programación>"
    let titleIndex = 0
  
    function animateTitle() {
      if (titleIndex < titleText.length) {
        mainTitle.textContent += titleText.charAt(titleIndex)
        titleIndex++
        setTimeout(animateTitle, 100)
      }
    }
  
    animateTitle()
  
  
    // Render books
    books.forEach((book, index) => {
      const bookCard = document.createElement("div")
      bookCard.classList.add("book-card")
      bookCard.innerHTML = `
              <h2 class="book-title">${book.title}</h2>
              <p class="book-author">${book.author}</p>
              <button class="toggle-description" data-index="${index}">
                  Ver Descripción
              </button>
              <p class="book-description" id="description-${index}">${book.description}</p>
              <a href="${book.filePath}" download class="download-book">
                  Descargar Libro
                  <i data-lucide="download"></i>
              </a>
          `
      bookList.appendChild(bookCard)
    })
  
    // Toggle description visibility
    bookList.addEventListener("click", (e) => {
      if (e.target.classList.contains("toggle-description")) {
        const index = e.target.getAttribute("data-index")
        const description = document.getElementById(`description-${index}`)
        const icon = e.target.querySelector("i")
  
        if (description.style.display === "none" || description.style.display === "") {
          description.style.display = "block"
          e.target.textContent = "Mostrar menos"
        } else {
          description.style.display = "none"
          e.target.textContent = "Ver Descripción"
        }
        e.target.appendChild(icon)
        lucide.createIcons()
      }
    })
  
    // Initialize Lucide icons
    lucide.createIcons()
  })
  
  