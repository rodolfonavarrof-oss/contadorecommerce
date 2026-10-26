# contadorecommerce.cl

Sitio de Contador Ecommerce hecho en Astro. Se publica en Cloudflare.

## Antes de publicar

Completa en `src/config.ts`:

- `WHATSAPP_NUMBER`: número de WhatsApp Business, solo dígitos con código de país (ej. 569XXXXXXXX). Mientras esté vacío, los botones llevan al final de la portada.
- `MAILERLITE_ACCOUNT_ID` y `MAILERLITE_FORM_ID`: formulario de MailerLite que suscribe al grupo "Leads newsletter" (ya configurado).

Y en `src/pages/privacidad.astro` y `src/pages/terminos.astro`, los datos entre corchetes (razón social, RUT, correo, plazos).

La foto: reemplaza el recuadro `[FOTO DE RODOLFO]` en `src/pages/index.astro` por `<img src="/rodolfo.jpg" alt="Rodolfo Navarro">` y deja la foto en `public/rodolfo.jpg`.

## Publicar un artículo del blog

1. Copia `src/content/blog/plantilla-articulo.md` con un nombre nuevo, por ejemplo `factura-de-compra-meta-ads.md`. Ese nombre es la dirección: contadorecommerce.cl/blog/factura-de-compra-meta-ads.
2. Completa título, descripción, fecha, etiquetas y preguntas frecuentes.
3. Cambia `draft: true` a `draft: false`.
4. Sube el cambio a GitHub. Cloudflare publica solo en uno o dos minutos.

## Comandos

```
npm install       # instalar dependencias
npm run dev       # ver el sitio en http://localhost:4321 mientras editas
npm run build     # generar el sitio en la carpeta dist
```

## Configuración en Cloudflare

- Proyecto de Workers conectado a este repositorio (rama `main`).
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy` (lee `wrangler.jsonc`, que publica la carpeta `dist`).
- Dominio personalizado: `contadorecommerce.cl` y `www.contadorecommerce.cl`
