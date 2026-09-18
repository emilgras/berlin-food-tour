# Freddy Fresh · Berlin Food Tour

A mobile-first, dependency-free static guide for a group food tour in Berlin. The interface is in Danish and includes:

- a five-stop tour timeline with locally saved progress;
- concise explainers for nine Berlin/German dishes;
- Google Maps discovery links for each food category;
- useful German ordering phrases and practical tour tips;
- randomized group challenges;
- offline caching and installable PWA metadata.

## Local preview

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## GitHub Pages

The site is plain HTML/CSS/JavaScript. Publish the repository root with GitHub Pages, or use the included Actions workflow.

Tour times and map searches are intentionally presented as guidance. Replace them with confirmed addresses when the final route is known.
