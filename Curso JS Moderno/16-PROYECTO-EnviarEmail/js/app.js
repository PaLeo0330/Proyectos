document.addEventListener('DOMContentLoaded', function(){
  const input_email = document.querySelector('#email');
  const input_asunto = document.querySelector('#asunto');
  const input_mensaje = document.querySelector('#mensaje');
  const formulario = document.querySelector('#formulario')
  const btn_submit = document.querySelector('#formulario button[type= "submit"]')
  const email = {
    email: '',
    asunto: '',
    mensaje: ''
  }

  input_email.addEventListener('blur', validar);
  input_asunto.addEventListener('blur', validar);
  input_mensaje.addEventListener('blur', validar);

  function validar(e) {
    const id_name = e.target.id;

    if (e.target.value.trim() === ''){
      mostrar_alerta(`El campo ${id_name} es obligatorio`, e.target.parentElement);
      email[e.target.name] = '';
      comprobar_email();
      return;
    }
      
    
    if(e.target.id === 'email' && !valida_email( e.target.value)){
      mostrar_alerta('El email no es valido', e.target.parentElement);
      email[e.target.name] = '';
      comprobar_email();
      return;
    }

    limpiar_alerta(e.target.parentElement)

    email[e.target.name] = e.target.value.trim().toLowerCase();
   comprobar_email()
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

  function valida_email(email) {
    const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return resultado;
  };

  function comprobar_email() {
    if (Object.values(email).includes('')){
      btn_submit.classList.add('opacity-50');
      btn_submit.disabled = false;
      return;
    }
      btn_submit.classList.remove('opacity-50');
      btn_submit.disabled = true;
  }
})