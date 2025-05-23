# 📚 Sistema de Solicitudes de Libros

## Cómo funciona

### Para solicitar un libro:
1. Haz clic en "🚀 Solicitar Libro" en la tarjeta del libro
2. Completa tu nombre y opcionalmente un comentario
3. Se abrirá GitHub para crear un issue con tu solicitud
4. Confirma el issue

### Automatización con GitHub Actions:

Cuando se crea un issue con la etiqueta `solicitud-libro`:

1. ✅ Se agrega un comentario automático confirmando la solicitud
2. 🏷️ Se añade la etiqueta `pendiente`
3. 📧 El propietario recibe notificación (si está suscrito al repo)

### Gestión de solicitudes:

Los propietarios pueden:
- Ver todas las solicitudes en [Issues](https://github.com/DanielFontalva/DanielFontalva.github.io/issues?q=is%3Aissue+is%3Aopen+label%3Asolicitud-libro)
- Contactar al solicitante por Teams
- Cerrar el issue cuando se entregue el libro
- Agregar etiquetas como `entregado`, `cancelado`, etc.

### Labels disponibles:
- `solicitud-libro`: Issue generado desde la web
- `pendiente`: Solicitud sin procesar
- `entregado`: Libro ya entregado
- `cancelado`: Solicitud cancelada

---

**Nota:** Todo es gratuito usando GitHub Pages + GitHub Actions 🎉
