# Sounds-of-the-Solar-System

This Outer Wilds-inspired planetary music website employs Astropy's *astroquery* package to query NASA's JPL Horizons for real-time planetary positions relative to the sun. Utilizing the acquired coordinates, each planet (representing a specific note) is categorized into one of nine nonants, representing distinct pitches in the Scientific Pitch Notation.

**File guide**:

+ `scripts/generateDatesData.py` → Using *astroquery*'s "Horizon" to get the relative coordinates of the planets (by date) generate a JSON file with the nonnat derived from those cordinates.
+ `assets/data/` → Generated JSON files with planets' nonant by date (every other file on the assets folder is an image).
+ `scripts/canvas.js` → Drawing background of the canvas.
+ `script/planets_n_sounds.js` → Assigning frequencies to each planet and positioning them in their place according to the data from the corresponding date on the JSON file.
+ `index.html` → Main website file.

<hr>

**This website employs the following technologies**:

<p align="center"> <img src="https://skillicons.dev/icons?i=html,css,bootstrap,js,py&perline=5" /> </p>

**Useful sites & references**:

+ Simulating a real solar system with 70 lines of Python code - ChongChong He <a href="https://medium.com/analytics-vidhya/simulating-the-solar-system-with-under-100-lines-of-python-code-5c53b3039fc6">🔗</a>
+ Play Musical Notes with JavaScript - Youths Forum <a href="https://youthsforum.com/programming/javascript/play-musical-notes-with-javascript/">🔗</a>
+ HTML References - W3schools <a href="https://www.w3schools.com/tags/default.asp">🔗</a>
+ Bootstrap 5.3 Docs <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/">🔗</a>
