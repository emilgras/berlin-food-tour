# Freddy Fresh · Berlin Food Tour

A mobile-first social game and guide for a 40-person developer trip to Berlin, including a 12-person food-tour subgroup. The interface is in Danish and includes:

- an 18-location sightseeing competition with real attractions and hidden gems;
- persistent on-device photo proof, optional GPS verification, and a generated shareable scorecard;
- a three-team scoreboard with editable team names and a custom prize;
- randomized photo, performance, food, Berlin, and optional beer challenges;
- secret team missions, a forbidden-word rule, photo evidence, and a winner ceremony;
- an interactive Leaflet/OpenStreetMap tourist map with live, on-device GPS;
- filters for attractions, popular food spots, and less obvious Berlin gems;
- progressive mystery-stop clues that sharpen as the group approaches the destination;
- a five-stop tour timeline with locally saved progress;
- concise explainers for nine Berlin/German dishes;
- Google Maps discovery links for each food category;
- useful German ordering phrases and practical tour tips;
- offline caching and installable PWA metadata.

The city hunt runs independently in every participant's browser. Alias, progress, and compressed proof photos stay in local storage; there is no account or central leaderboard. Participants share their generated scorecard in the trip's group chat. The food-tour game remains designed around one shared “referee” phone. Alcohol challenges are optional, work with non-alcoholic drinks, and never require speed drinking.

## Local preview

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## GitHub Pages

The site is plain HTML/CSS/JavaScript. Publish the repository root with GitHub Pages, or use the included Actions workflow.

Tour times and map searches are intentionally presented as guidance. Replace them with confirmed addresses when the final route is known.

## Adding mystery stops

Add confirmed stops to the `mysteryStops` array near the top of `app.js`. Each stop accepts `name`, `lat`, `lng`, `district`, `clueFar`, and `clueNear`. The normal UI shows only a fuzzy search area and progressively sharper clues; the exact name and marker appear inside 60 metres.

Because GitHub Pages is a public static host, coordinates included in JavaScript can be found by a technically determined visitor. The interface prevents casual spoilers, but cryptographically private stops would require a small authenticated API.

Location readings stay in the visitor's browser and are not transmitted to the site owner. OpenStreetMap tiles and the Leaflet library are loaded from their public services, so the map itself requires a connection.
