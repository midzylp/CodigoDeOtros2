//La finalidad del codigo es que al mandar el botón de enviar se añada un invitado a la lista de abajo

//Cambie la variable del formulario para que se declare con let y no tengamos problemas mas adelante, ademas el query selector estaba mal
//porque hacia alusión a un id form, el cual no existía dentro del html, lo cambié por .formulario, haciendo alusión a la clase


//Dentro del html modifiqué el submit, para que en su lugar colocaramos un botón de tipo submit
//Le agregué al botón la función agregar un invitado

let formulario = document.querySelector(".formulario")

//Reemplacé todas las variables declaradas con var por let

//Cambie la declaración de prevent porque al hacer click en el botón solo se recargaba, la pagina
//Coloqué un preventDefault que es la declaración para que no recargue, ahora los datos ya se muestran en consola


//Cambie el .onsubmit por un addEventListener y convertí la función a un función flecha
formulario.addEventListener("submit",(e)=> {

  e.preventDefault();
  
  let n = formulario.elements[0]
  var e = formulario.elements[1]
  let na = formulario.elements[2]

  let nombre = n.value
  let edad = e.value

  let i = na.selectedIndex
  let nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)

  if (nombre.length === 0) {
    n.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
})


//Se cambio la declaración de variables en esta parte tambien
let botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"

let corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }


  //Se declararon de igual forma las variables con let y en general se continuó haciendo esto hasta el final del codigo
  //Se añadió al h2 del html Lista de invitados, un id con lista-de-invitados, ya que este ni siquiera existía en el html
  let lista = document.getElementById("lista-de-invitados")

//Se añadió .add en vez de .added ya que esa instrucción no existe
let elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista")
lista.appendChild(elementoLista)

let spanNombre = document.createElement("span")
let inputNombre = document.createElement("input")
let espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
let spanNombre = document.createElement("span")
let inputNombre = document.createElement("input")
let espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


let botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
let corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}

