import numpy as np

from astropy.time import Time
from astroquery.jplhorizons import Horizons

from datetime import datetime, timedelta
import json

date_itr = datetime.strptime('2024-01-01','%Y-%m-%d')

dates = {}
planet_octn = []

for x in range(0,365):
    
    planet_octn = []
    
    for i, nasaid in enumerate([1, 2, 3, 4, 5, 6, 7, 8]):  # The 1st, 2nd, 3rd (etc) planet in solar system
        obj = Horizons(id=nasaid, location="@sun", epochs=Time(date_itr).jd).vectors()
        planets_raw = [np.double(obj[xi]) for xi in ['x', 'y']]
        planet_octn.append(int(np.floor(9 * (np.rad2deg(np.arctan2(planets_raw[0],planets_raw[1]))%360) / 360)))

    dates[date_itr.strftime('%Y-%m-%d')] = planet_octn
    with open("2024_planets_octants.json", "w") as outfile: 
        json.dump(dates, outfile)
    
    date_itr += timedelta(days = 1)

print(dates)