# 🔐 Cómo publicar este proyecto con otra cuenta de GitHub

## Opción 1: Cambiar cuenta temporalmente en Git (Recomendado)

### Paso 1: Configurar otra cuenta SOLO para este repositorio

```bash
cd github-pages-version

# Configurar usuario y email SOLO para este repo (no global)
git config user.name "TuNombrePersonal"
git config user.email "tu-email-personal@gmail.com"

# Verificar que se configuró correctamente
git config user.name
git config user.email
```

### Paso 2: Crear repositorio en tu cuenta personal de GitHub

1. Ve a https://github.com (asegúrate de estar con tu cuenta personal)
2. Click en el **+** → **New repository**
3. Nombre: `biblioteca-kyndryl` (o el que quieras)
4. Público
5. **NO** inicialices con README (ya tienes archivos)

### Paso 3: Subir el proyecto

```bash
cd github-pages-version

# Si no has hecho git init aún:
git init

# Agregar archivos
git add .
git commit -m "Biblioteca Kyndryl Granada"

# Conectar con tu repo personal
git remote add origin https://github.com/TU-USUARIO-PERSONAL/biblioteca-kyndryl.git

# Subir
git push -u origin main
```

### Paso 4: Activar GitHub Pages

1. Ve al repositorio en GitHub
2. **Settings** → **Pages**
3. Source: **main** → **/ (root)** → **Save**
4. Tu sitio estará en: `https://TU-USUARIO-PERSONAL.github.io/biblioteca-kyndryl/`

---

## Opción 2: Usar GitHub CLI con otra cuenta

```bash
# Desloguear cuenta actual
gh auth logout

# Loguear con tu cuenta personal
gh auth login
# Selecciona: GitHub.com → HTTPS → Yes → Login with browser

# Luego sigue los pasos normales
cd github-pages-version
git init
git add .
git commit -m "Biblioteca Kyndryl Granada"

# Crear repo directamente desde CLI
gh repo create biblioteca-kyndryl --public --source=. --push
```

---

## Opción 3: Usar SSH con claves diferentes

### Generar clave SSH para cuenta personal

```bash
ssh-keygen -t ed25519 -C "tu-email-personal@gmail.com" -f ~/.ssh/id_ed25519_personal
```

### Agregar a GitHub

1. Copia la clave pública:
```bash
cat ~/.ssh/id_ed25519_personal.pub
```

2. En GitHub (cuenta personal): **Settings** → **SSH Keys** → **New SSH key**

### Configurar SSH config

Edita o crea `~/.ssh/config`:

```
# Cuenta de empresa
Host github.com-work
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519

# Cuenta personal
Host github.com-personal
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_personal
```

### Usar el host correcto

```bash
cd github-pages-version
git init
git add .
git commit -m "Biblioteca Kyndryl Granada"

# Usar el host 'github.com-personal'
git remote add origin git@github.com-personal:TU-USUARIO-PERSONAL/biblioteca-kyndryl.git
git push -u origin main
```

---

## 📨 Opciones para recibir comunicaciones desde GitHub Pages

### ✅ Opción 1: GitHub Issues (GRATIS y nativo)

**Ventajas:**
- Gratis
- Integrado en GitHub
- Puedes recibir notificaciones por email
- Los usuarios pueden crear "Issues" para solicitar libros

**Cómo hacerlo:**
1. Activa Issues en tu repositorio (Settings → General → Features → Issues)
2. Agrega un botón en tu sitio que enlace a crear un Issue:

```html
<a href="https://github.com/TU-USUARIO/biblioteca-kyndryl/issues/new?template=solicitud-libro.md" 
   class="btn-solicitar" target="_blank">
   📝 Solicitar via GitHub
</a>
```

**Desventaja:** Usuarios necesitan cuenta de GitHub

---

### ✅ Opción 2: Formspree (GRATIS hasta 50 envíos/mes)

**Ventajas:**
- Formulario funcional
- Envía emails directamente a tu correo
- No requiere backend
- Fácil de implementar

**Cómo hacerlo:**

1. Regístrate en https://formspree.io
2. Crea un formulario
3. Usa su endpoint en tu HTML:

```html
<form action="https://formspree.io/f/TU-ID-FORMSPREE" method="POST">
  <input type="text" name="nombre" placeholder="Tu nombre" required>
  <input type="text" name="libro" placeholder="Libro que solicitas" required>
  <textarea name="mensaje" placeholder="¿Cuándo puedes recogerlo?"></textarea>
  <button type="submit">Enviar Solicitud</button>
</form>
```

---

### ✅ Opción 3: Google Forms

**Ventajas:**
- Completamente gratis
- Sin límites
- Respuestas en Google Sheets
- No requiere cuenta de GitHub

**Cómo hacerlo:**

1. Crea un Google Form
2. En el botón, enlaza al formulario:

```html
<a href="https://forms.gle/TU-FORMULARIO" 
   class="btn-solicitar" target="_blank">
   📝 Solicitar Libro
</a>
```

---

### ✅ Opción 4: Email directo (mailto:)

**La más simple:**

```html
<a href="mailto:daniel.fontalva@kyndryl.com?subject=Solicitud%20Libro:%20TITULO&body=Hola,%20me%20gustaría%20solicitar%20el%20libro..."
   class="btn-solicitar">
   📧 Solicitar por Email
</a>
```

---

## 🎯 Recomendación

**Para tu caso específico:**

1. **Publicar repo:** Usa **Opción 1** (config local de git)
2. **Recibir solicitudes:** Mantén **Teams** como está ahora, o usa **Google Forms** si quieres algo más formal

**¿Por qué?**
- La cuenta personal de GitHub solo afectará este proyecto
- Teams ya funciona bien internamente en Kyndryl
- Google Forms sería backup si Teams falla

---

## ⚠️ Importante

Si usas configuración local (Opción 1), cada vez que trabajes en ESTE proyecto usará tu cuenta personal, pero todos los DEMÁS proyectos seguirán usando tu cuenta de empresa.

Verifica con:
```bash
# En este proyecto
cd github-pages-version
git config user.email  # Mostrará tu email personal

# En otro proyecto
cd ../otro-proyecto
git config user.email  # Mostrará tu email de empresa
```
