import france from './icons8-france-96.png';
import uk from './icons8-great-britain-96.png';
import italy from './icons8-italy-96.png';
import netherlands from './icons8-netherlands-96.png';
import norway from './icons8-norway-96.png';
import portugal from './icons8-portugal-96.png';
import scotland from './icons8-scotland-96.png';
import spain from './icons8-spain-flag-96.png';
import usa from './icons8-usa-96.png';
const collection = {
  'FRA': france, 
  'UK': uk, 
  'ITA': italy, 
  'NED': netherlands,
  'NOR': norway,
  'POR': portugal, 
  'SCO': scotland, 
  'SPA': spain, 
  'USA': usa
}

const flagIDs = Object.keys(collection)
const flagIMGs = Object.values(collection)
export {flagIDs, flagIMGs}

