let libroActual = '';
let propietarioActual = '';

document.addEventListener('DOMContentLoaded', function() {
  actualizarContador();
});

function actualizarContador() {
  const librosCards = document.querySelectorAll('.libro-card');
  document.getElementById('libro-count').textContent = librosCards.length;
}

function solicitarLibro(tituloLibro, propietario) {
  libroActual = tituloLibro;
  propietarioActual = propietario;
  
  document.getElementById('modal-libro-titulo').textContent = tituloLibro;
  
  const modal = document.getElementById('modal-solicitud');
  modal.style.display = 'flex';
  

}

function cerrarModal() {
  document.getElementById('modal-solicitud').style.display = 'none';
}

document.getElementById('modal-solicitud')?.addEventListener('click', function(e) {
  if (e.target === this) {
    cerrarModal();
  }
});

function mostrarAlerta(tipo, mensaje) {
  const alertBox = document.getElementById('alert-box');
  const alertIcon = document.getElementById('alert-icon');
  const alertMessage = document.getElementById('alert-message');
  
  alertIcon.textContent = tipo === 'success' ? '✔️' : '⚠️';
  
  alertMessage.textContent = mensaje;
  
  alertBox.className = 'alert alert-' + tipo;
  
  alertBox.style.display = 'block';
  
  setTimeout(() => {
    cerrarAlerta();
  }, 5000);
}

function cerrarAlerta() {
  document.getElementById('alert-box').style.display = 'none';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    cerrarModal();
    cerrarAlerta();
  }
});

document.getElementById('nombre-solicitante')?.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    document.getElementById('comentario-solicitud')?.focus();
  }
});

function ofrecerLibro() {
  const titulo = '📚 Ofrecer Libro para la Biblioteca';
  const cuerpo = `**📖 Título del libro:**

**✍️ Autor/a (opcional):**

**👤 Tu nombre:**

**💬 Comentarios adicionales (opcional):**

---
*Oferta de libro generada desde la Biblioteca de Oficina Granada*`;
  
  const url = `https://github.com/DanielFontalva/DanielFontalva.github.io/issues/new?title=${encodeURIComponent(titulo)}&body=${encodeURIComponent(cuerpo)}&labels=ofrecer-libro`;
  
  window.open(url, '_blank');
  mostrarAlerta('success', '✅ Se abrirá GitHub para ofrecer tu libro');
}

function confirmarSolicitud() {
  const nombre = document.getElementById('nombre-solicitante')?.value.trim();
  const comentario = document.getElementById('comentario-solicitud')?.value.trim();
  
  if (!nombre) {
    mostrarAlerta('danger', '⚠️ Por favor ingresa tu nombre');
    return;
  }
  
  const titulo = `📚 Solicitud: ${libroActual}`;
  const cuerpo = `**📖 Libro solicitado:** ${libroActual}
**👤 Propietario:** ${propietarioActual}
**🙋 Solicitado por:** ${nombre}
${comentario ? `\n**💬 Comentario:** ${comentario}` : ''}

---
*Solicitud generada automáticamente desde la Biblioteca de Oficina Granada*`;
  
  const url = `https://github.com/DanielFontalva/DanielFontalva.github.io/issues/new?title=${encodeURIComponent(titulo)}&body=${encodeURIComponent(cuerpo)}&labels=solicitud-libro`;
  
  window.open(url, '_blank');
  
  cerrarModal();
  mostrarAlerta('success', '✅ Se abrirá GitHub para confirmar tu solicitud');
  
  document.getElementById('nombre-solicitante').value = '';
  document.getElementById('comentario-solicitud').value = '';
}
