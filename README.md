# News Automalia

Sitio público mínimo para el piloto editorial de Automalia: noticias, guías y señales prácticas sobre IA aplicada y automatización.

## Desarrollo

```bash
npm install
npm run dev
npm run build
```

## Estructura

- `src/pages/` — páginas Astro y RSS.
- `src/content/noticias/` — posts Markdown.
- `src/layouts/BaseLayout.astro` — layout base compartido.

## Despliegue

El repositorio incluye un workflow de GitHub Pages en `.github/workflows/deploy.yml`.

- Cada push a `main` ejecuta `npm ci`, `npm run build` y publica `dist/`.
- `public/CNAME` fija el dominio previsto: `news.automalia.ai`.
- Hostinger tiene creado el sitio `news.automalia.ai`; el despliegue directo por Hosting API quedó pendiente porque el endpoint de subida de archivo NodeJS devolvió un desafío Cloudflare desde este entorno.
