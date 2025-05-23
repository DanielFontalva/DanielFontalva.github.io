# 📚 Biblioteca de Kyndryl Granada - GitHub Pages

Esta es la versión estática del proyecto para desplegar en **GitHub Pages**.

## 🚀 Cómo agregar nuevos libros

Es muy fácil. Solo necesitas editar el archivo `index.html` y copiar el bloque de ejemplo.

### Paso 1: Abre index.html

Busca la sección que dice:

```html
<!-- ============================================ -->
<!-- 📖 EJEMPLO DE LIBRO - COPIA ESTE BLOQUE -->
<!-- ============================================ -->
```

### Paso 2: Copia todo el bloque del libro

Copia desde `<div class="libro-card">` hasta `</div>` (el que cierra libro-card).

### Paso 3: Pega el bloque copiado

Pégalo debajo de los libros existentes, antes del cierre de `</div>` del `libros-grid`.

### Paso 4: Edita los datos

Cambia:
- **Título**: `<h3>Tu Título Aquí</h3>`
- **Autor**: `<p class="autor">Autor/a: Nombre del Autor</p>`
- **Imagen**: `<img src="images/tu-imagen.jpg" ...>`
- **Donado por**: `<p class="propietario">Donado por: Tu Nombre</p>`
- **Notas**: `<p class="notas">Descripción del libro...</p>`
- **Función del botón**: `onclick="solicitarLibro('Título del Libro', 'Tu Nombre')"`

### Ejemplo completo:

```html
<div class="libro-card">
  <img src="images/mi-libro.jpg" alt="Mi Libro" class="libro-imagen">
  <h3>El Arte de la Guerra</h3>
  <p class="autor">Autor/a: Sun Tzu</p>
  <div class="libro-info">
    <p class="propietario">Donado por: María González</p>
  </div>
  <p class="notas">Edición comentada, perfecto estado.</p>
  <button class="btn-solicitar" onclick="solicitarLibro('El Arte de la Guerra', 'María González')">
    🚀 Solicitar Libro
  </button>
</div>
```

## 📸 Agregar imágenes

1. Coloca las imágenes de tus libros en la carpeta `images/`
2. Nombra tus imágenes de forma descriptiva: `clean-code.jpg`, `quijote.jpg`, etc.
3. Referencia la imagen en el HTML: `<img src="images/clean-code.jpg" ...>`

### Si no tienes imagen:

Usa el placeholder en lugar de `<img>`:

```html
<div class="libro-imagen-placeholder">📚</div>
```

## 🔖 Marcar un libro como solicitado

Si alguien ya solicitó el libro:

1. **Añade el badge "Solicitado"**:
```html
<div class="libro-info">
  <span class="badge solicitado">⏳ Solicitado</span>
  <p class="propietario">Donado por: Tu Nombre</p>
</div>
```

2. **Cambia el botón por el bloque de info**:
```html
<!-- En lugar del botón, usa esto: -->
<div class="libro-solicitado-info">
  <p>👤 Solicitado por: Nombre de quien lo solicitó</p>
</div>
```

## 🌐 Desplegar en GitHub Pages

### Opción A: Usando tu cuenta personal de GitHub

Si quieres usar una cuenta diferente a la de empresa:

```bash
cd github-pages-version

# Configurar cuenta personal SOLO para este proyecto
git config user.name "TuNombrePersonal"
git config user.email "tu-email-personal@gmail.com"

git init
git add .
git commit -m "Biblioteca Kyndryl"
git remote add origin https://github.com/TU-USUARIO-PERSONAL/biblioteca-kyndryl.git
git push -u origin main
```

**Ver guía completa en:** [PUBLICAR_CON_OTRA_CUENTA.md](PUBLICAR_CON_OTRA_CUENTA.md)

### Opción B: Usando tu cuenta actual

```bash
cd github-pages-version
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

### 2. Activa GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings**
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona **main** (o **master**)
5. Selecciona la carpeta **/ (root)**
6. Click en **Save**

### 3. Tu sitio estará disponible en:

```
https://TU-USUARIO.github.io/TU-REPO/
```

## 📨 Alternativas para recibir solicitudes (opcional)

Actualmente las solicitudes se hacen por **Teams** (recomendado para uso interno).

Si quieres recibir solicitudes de otras formas:

### 1. GitHub Issues (Gratis, requiere cuenta GitHub)
```html
<a href="https://github.com/TU-USUARIO/TU-REPO/issues/new" target="_blank">
  Solicitar Libro
</a>
```

### 2. Google Forms (Gratis, sin límites)
Crea un formulario en Google Forms y enlázalo

### 3. Formspree (Gratis hasta 50/mes)
Formulario que envía emails a tu correo

**Ver detalles en:** [PUBLICAR_CON_OTRA_CUENTA.md](PUBLICAR_CON_OTRA_CUENTA.md)

## 📝 Campos opcionales

Puedes omitir estos elementos si no los necesitas:

- `<p class="autor">` - Si no sabes el autor
- `<p class="propietario">` - Si no quieres mostrar quién donó
- `<p class="notas">` - Si no hay descripción adicional

## 🎨 Personalización

### Cambiar colores:

Edita `styles.css` y busca:
- `#FF462D` - Color principal (rojo Kyndryl)
- `#0066CC` - Color de botones (azul)

### Cambiar logo:

Reemplaza `images/logo.png` con tu propio logo.

## 📁 Estructura de archivos

```
github-pages-version/
│
├── index.html          ← EDITA AQUÍ para agregar libros
├── styles.css          ← Estilos (generalmente no necesitas tocar)
├── script.js           ← JavaScript (generalmente no necesitas tocar)
├── README.md           ← Este archivo
│
└── images/             ← COLOCA AQUÍ las imágenes de los libros
    ├── logo.png
    ├── ejemplo-libro.jpg
    └── ...
```

## ✅ Checklist antes de publicar

- [ ] Agregué las imágenes en la carpeta `images/`
- [ ] Actualicé los títulos de los libros
- [ ] Actualicé los autores
- [ ] Cambié las rutas de las imágenes
- [ ] Actualicé los nombres en "Donado por"
- [ ] Actualicé la función `solicitarLibro()` en cada botón
- [ ] Coloqué el logo de Kyndryl en `images/logo.png`
- [ ] Probé el sitio localmente (abriendo index.html en el navegador)

## 💡 Consejos

1. **Copia el bloque completo**: No intentes escribirlo desde cero
2. **Usa nombres descriptivos**: Para las imágenes usa nombres como `clean-code.jpg` en lugar de `img1.jpg`
3. **Mantén el orden**: Los libros aparecerán en el orden que los coloques en el HTML
4. **Prueba localmente**: Abre `index.html` en tu navegador antes de subir a GitHub

---

**¿Problemas?** Abre un issue en el repositorio original del proyecto completo.
