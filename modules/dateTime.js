// Importing DateTime function from luxon library
import { DateTime } from '../node_modules/luxon/src/luxon.js';

const getCurrentDate = () => {
  // get the current time
  const now = DateTime.now();
  const formattedDate = now.toLocaleString(DateTime.DATETIME_MED);
  return formattedDate;
};

export { getCurrentDate as default };