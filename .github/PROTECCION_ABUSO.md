# 🛡️ Protección contra Abuso del Sistema de Solicitudes

## Medidas implementadas:

### 1. **Límite de solicitudes por usuario**
- Máximo **5 solicitudes abiertas simultáneamente** por usuario
- Solicitudes adicionales se cierran automáticamente
- Etiqueta `spam-bloqueado` añadida a solicitudes rechazadas

### 2. **Permisos mínimos**
- El workflow solo tiene permiso de `issues: write`
- No puede modificar código ni otros recursos

### 3. **Concurrency control**
- Previene ejecuciones duplicadas del mismo issue
- Ahorra minutos de GitHub Actions

### 4. **Autenticación requerida**
- Solo usuarios con cuenta de GitHub pueden crear issues
- Rastro de auditoría completo

## Cómo ajustar el límite:

Edita `.github/workflows/process-book-requests.yml` línea:
```yaml
const LIMITE_SOLICITUDES = 5;  // Cambia este número
```

## Bloquear usuarios problemáticos:

Si un usuario específico abusa del sistema:

1. Ve a Settings → Moderation → Blocked users
2. Añade el usuario a la lista de bloqueados
3. No podrá crear issues

## Monitoreo:

- Ver issues con spam: https://github.com/DanielFontalva/DanielFontalva.github.io/issues?q=label:spam-bloqueado
- Ver uso de Actions: https://github.com/DanielFontalva/DanielFontalva.github.io/actions

## Límites de GitHub (gratuitos):

- **2000 minutos/mes** de Actions (repos públicos)
- Tu workflow usa ~0.5 min por solicitud
- Límite efectivo: ~4000 solicitudes/mes
- Con protección: máximo ~800 solicitudes/mes (si 160 usuarios crean 5 cada uno)
