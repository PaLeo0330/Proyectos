const carrito = document.querySelector('#carrito');
const lista_cursos = document.querySelector('#lista-cursos');
const contenedor_carrito = document.querySelector('#lista-carrito tbody');
const vaciar_carrito_btn = document.querySelector('#vaciar-carrito'); 
let articulos_carrito = [];

cargarEventListeners();

function cargarEventListeners() {
     // Dispara cuando se presiona "Agregar Carrito"
     lista_cursos.addEventListener('click', agregar_curso);

     // Cuando se elimina un curso del carrito
     carrito.addEventListener('click', eliminar_curso);

     // Al Vaciar el carrito
     vaciar_carrito_btn.addEventListener('click', vaciar_carrito);

}

function agregar_curso(e) {
  e.preventDefault();
  if(e.target.classList.contains('agregar-carrito')) {
    const curso = e.target.parentElement.parentElement;

      leer_datos_curso(curso);
    }    
}

function leer_datos_curso(curso) {
  const info_curso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'), 
    cantidad: 1
}

if( articulos_carrito.some( curso => curso.id === info_curso.id ) ) { 
  const cursos = articulos_carrito.map( curso => {
       if( curso.id === info_curso.id ) {
            curso.cantidad++;
             return curso;
        } else {
             return curso;
     }
  })
  articulos_carrito = [...cursos];
}  else {
  articulos_carrito = [...articulos_carrito, info_curso];
}

carrito_html();
}

function eliminar_curso(e) {
  e.preventDefault();
  if(e.target.classList.contains('borrar-curso') ) {
       const curso_id = e.target.getAttribute('data-id')
       
       articulos_carrito = articulos_carrito.filter(curso => curso.id !== curso_id);

       carrito_html();
  }
}

function carrito_html() {

  vaciar_carrito();

  articulos_carrito.forEach(curso => {
       const row = document.createElement('tr');
       row.innerHTML = `
            <td>  
                 <img src="${curso.imagen}" width=100>
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad} </td>
            <td>
                 <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
            </td>
       `;
       contenedor_carrito.appendChild(row);
  });
}

function vaciar_carrito() {
  while(contenedor_carrito.firstChild) {
       contenedor_carrito.removeChild(contenedor_carrito.firstChild);
   }
}