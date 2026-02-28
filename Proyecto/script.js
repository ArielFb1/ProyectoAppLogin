// ================================
//  Alternar mostrar/ocultar contraseña

function alternarContrasena() {
  const contrasena = document.getElementById('contrasena');
  const iconoOjo   = document.getElementById('iconoOjo');
  const estaOculta = contrasena.type === 'password';

  contrasena.type = estaOculta ? 'text' : 'password';

  iconoOjo.innerHTML = estaOculta
    ? `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94
         M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19
         m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
       <line x1="1" y1="1" x2="23" y2="23"/>`
    : `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
       <circle cx="12" cy="12" r="3"/>`;
}


function mostrarError(mensaje) {
  const mensajeError = document.getElementById('mensajeError');
  mensajeError.textContent = mensaje;
  mensajeError.style.display = 'block';
}


function marcarInputsError() {
  const inputCorreo      = document.getElementById('correo');
  const inputContrasena  = document.getElementById('contrasena');

  inputCorreo.style.borderColor     = 'var(--error)';
  inputContrasena.style.borderColor = 'var(--error)';

  setTimeout(() => {
    inputCorreo.style.borderColor     = '';
    inputContrasena.style.borderColor = '';
  }, 1500);
}


function manejarLogin(e) {
  e.preventDefault();

  const botonLogin = document.getElementById('botonLogin');
  const correo     = document.getElementById('correo').value.trim();
  const contrasena = document.getElementById('contrasena').value;

  document.getElementById('mensajeError').style.display = 'none';

  if (!correo || !contrasena) {
    mostrarError('Por favor, completa todos los campos.');
    return;
  }

  botonLogin.classList.add('loading');
  botonLogin.disabled = true;

  setTimeout(() => {
    botonLogin.classList.remove('loading');
    botonLogin.disabled = false;

    mostrarError('Correo o contraseña incorrectos. Contacta con el administrador');
    marcarInputsError();
  }, 1800);
}


function limpiarErrorAlEscribir() {
  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
      document.getElementById('mensajeError').style.display = 'none';
    });
  });
}


document.addEventListener('DOMContentLoaded', () => {
  const formulario   = document.getElementById('formularioLogin');
  const botonOjo     = document.getElementById('botonOjo');

  formulario.addEventListener('submit', manejarLogin);
  botonOjo.addEventListener('click', alternarContrasena);

  limpiarErrorAlEscribir();
});
