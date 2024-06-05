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
      mostrar_alerta(`El campo ${id_name} es obligatorio`, e.target.parentElement);
      return;
    }
      
      limpiar_alerta(e.target.parentElement)
   
  }

  function mostrar_alerta(mensaje, referencia){
limpiar_alerta(referencia)
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('bg-red-600', 'text-white', 'text-center', 'p-2');

    referencia.appendChild(error);
  }

  function limpiar_alerta(referencia) {
    const alerta = referencia.querySelector('.bg-red-600')

    if (alerta) {
      alerta.remove();
    }
  }
})