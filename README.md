# Freddy Fresh · Berlin Food Tour

A mobile-first, dependency-free social game and guide for a group food tour in Berlin. The interface is in Danish and includes:

- a three-team scoreboard with editable team names and a custom prize;
- randomized photo, performance, food, Berlin, and optional beer challenges;
- secret team missions, a forbidden-word rule, photo evidence, and a winner ceremony;
- a five-stop tour timeline with locally saved progress;
- concise explainers for nine Berlin/German dishes;
- Google Maps discovery links for each food category;
- useful German ordering phrases and practical tour tips;
- offline caching and installable PWA metadata.

The game is designed around one shared “referee” phone. Scores, settings, and progress stay in that browser. Alcohol challenges are optional, work with non-alcoholic drinks, and never require speed drinking.

## Local preview

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## GitHub Pages

The site is plain HTML/CSS/JavaScript. Publish the repository root with GitHub Pages, or use the included Actions workflow.

Tour times and map searches are intentionally presented as guidance. Replace them with confirmed addresses when the final route is known.
