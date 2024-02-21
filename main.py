#!pip install numpy
import numpy as np
#!pip install astropy
from astropy.time import Time
#!pip install astroquery <<<<
from astroquery.jplhorizons import Horizons
from js import todayIs, console
from pyscript import document

date = todayIs #"2024-02-21"

planets = []
for i, nasaid in enumerate([1, 2, 3, 4, 5, 6, 7, 8]):  # The 1st, 2nd, 3rd (etc) planet in solar system
    obj = Horizons(id=nasaid, location="@sun", epochs=Time(date).jd, id_type='id').vectors()
    planets.append([np.double(obj[xi]) for xi in ['x', 'y', 'z']])
    planets[-1] = planets[-1].pop()

planets = np.divide(planets, np.max(planets)) # normalized planets

console.log(planets)

# vvvvv Identify sector vvvvv (?)