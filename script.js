function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  //pegar a tag img

  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, add a imagem light
    img.setAttribute("src", "./assets/avatar3.png")
  } else {
    //se tiver sem light mode, manter imagem normal
    img.setAttribute("src", "./assets/avatar2.png")
  }

  const texto = document.querySelector("#profile text")
    // substituir o texto
  if (html.classList.contains("light")) {
    //se tiver light mode, add o texto light
    texto.setAttribute("alt", "imagem de perfil-1")
  } else {
    //se tiver sem light mode, manter texto normal
    texto.setAttribute("alt", "imagem de perfil-2")
  }
}
