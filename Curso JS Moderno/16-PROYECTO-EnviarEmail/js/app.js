document.addEventListener('DOMContentLoaded', function(){
  const input_email = document.querySelector('#email');
  const input_asunto = document.querySelector('#asunto');
  const input_mensaje = document.querySelector('#mensaje');
  const formulario = document.querySelector('#formulario')

  input_email.addEventListener('blur', validar);
  input_asunto.addEventListener('blur', validar);
  input_mensaje.addEventListener('blur', validar);

  function validar(e) {
    const id_name = e.target.id;

    if (e.target.value.trim() === ''){
      mostrar_alerta(`El campo ${id_name} es obligatorio`);
    }

    if(e.target.value.trim() !== ''){
      console.log('si hay')
    }
  }

  function mostrar_alerta(mensaje){
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('bg-red-600', 'text-white', 'text-center', 'p-2');

    formulario.appendChild(error);
  }
})