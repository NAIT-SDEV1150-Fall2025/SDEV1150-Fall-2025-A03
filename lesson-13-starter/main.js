// let's use our new package.
// taking a look at now docs: https://day.js.org/docs/en/parse/now
import dayjs from 'dayjs'; // this can be used because we have "type": "module" in the package.json.
// the modern way to import js modules.

// let's get todays date
let now = dayjs();

// let's format this string to show the current day and time
console.log('A Small node example');
// using the docs here: https://day.js.org/docs/en/display/format
// let's display date and time.
console.log('the date is');
console.log(now.format('YYYY-MM-DD'));
console.log('the time right now is');
console.log(now.format('HH:mm:ss'));
