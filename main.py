#!pip install numpy
import numpy as np
#!pip install astropy
from astropy.time import Time
#!pip install astroquery
from astroquery.jplhorizons import Horizons
from datetime import date

planets = []
for i, nasaid in enumerate([1, 2, 3, 4, 5, 6, 7, 8]):  # The 1st, 2nd, 3rd (etc) planet in solar system
    obj = await Horizons(id=nasaid, location="@sun", epochs=Time(date.today()).jd)
    planets.append([np.double(obj.vectors()[xi]) for xi in ['x', 'y']])

#planets = [coord[:2] for coord in planets]
planets = np.array(planets)
planets = planets/planets.max() # normalized planets
print(planets)

# vvvvv Identify sector vvvvv (?)