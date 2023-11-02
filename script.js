function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  
  // Pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar imagem light
    img.setAttribute('src', './Assets/assets/assets/avatar1.png.png')
  } else {
    img.setAttribute("src", "./Assets/assets/assets/avatar1.png.png")
  }
  //se tiver light mode, adicionar imagem light
  //se tiver sem light mode, manter a imagem normal
}
