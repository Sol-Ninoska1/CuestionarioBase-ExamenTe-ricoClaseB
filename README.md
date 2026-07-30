# Exámenes teóricos · Licencia Clase B

App para practicar los 8 cuestionarios de conducción clase B (Chile).

**Sitio en vivo:** https://sol-ninoska1.github.io/CuestionarioBase-ExamenTe-ricoClaseB/

## Cómo correr

```bash
npm install
npm run dev
```

En local la app queda en:
`http://localhost:5173/CuestionarioBase-ExamenTe-ricoClaseB/`

## Contenido

- Home con 8 exámenes disponibles (35 preguntas c/u)
- Temporizador de 45 minutos
- Aprueba con **31/35** correctas
- Preguntas de selección simple y múltiple
- Historial por examen (aprobados / reprobados / intentos) en `localStorage`

## GitHub Pages

Cada push a `main` dispara el deploy automático (Actions → Deploy to GitHub Pages).

En el repo: **Settings → Pages → Source: GitHub Actions**.
