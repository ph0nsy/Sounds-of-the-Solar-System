import numpy as np

from astropy.time import Time

from astroquery.jplhorizons import Horizons
from datetime import date

print(date.today().strftime('%Y-%m-%d'))
planets_obj = []
planets = []
for i, nasaid in enumerate([1, 2, 3, 4, 5, 6, 7, 8]):  # The 1st, 2nd, 3rd (etc) planet in solar system
    obj = Horizons(id=nasaid, location="@sun", epochs=Time(date.today().strftime('%Y-%m-%d')).jd).vectors()
    planets_obj.append(obj)
    planets.append([np.double(obj[xi]) for xi in ['x', 'y']])
print(planets)

#print(planets_obj)
#planets = [coord[:2] for coord in planets]
#planets = np.array(planets)
#planets = planets/planets.max() # normalized planets
#print(planets)

# vvvvv Identify sector vvvvv (?)