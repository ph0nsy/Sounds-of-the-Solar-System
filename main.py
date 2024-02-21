#!pip install numpy
import numpy as np
#!pip install astropy
from astropy.time import Time
#!pip install astroquery
from astroquery.jplhorizons import Horizons
from js import todayIs, console
#!pip install pyscript
from pyscript import document

date = "2024-02-21" #todayIs 

planets = []
for i, nasaid in enumerate([1, 2, 3, 4, 5, 6, 7, 8]):  # The 1st, 2nd, 3rd (etc) planet in solar system
    obj = Horizons(id=nasaid, location="@sun", epochs=Time(date).jd).vectors()
    planets.append([np.double(obj[xi]) for xi in ['x', 'y', 'z']])

planets = [coord[:2] for coord in planets]
planets = np.array(planets)
planets = planets/planets.max() # normalized planets
console.log(planets)

# vvvvv Identify sector vvvvv (?)