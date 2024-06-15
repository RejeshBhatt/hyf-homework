//Event Application Function
function getEventWeekday(daysFromToday) {
  const dateToday = new Date(); //to get the exact date and time
  const dayNumber = dateToday.getDay(); //returns a number of days from 0-6 (starts from sunday)

  const nameOfDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const indexes = daysFromToday + dayNumber;
  if (indexes >= 7) {
    const r = indexes % 7; //since nameOfDays has only 7 elements need to find the remainder
    return nameOfDays[r];
  } else {
    return nameOfDays[indexes];
  }
}

// With todays weekday a friday
console.log(getEventWeekday(8)); // Logs out "Saturday"

// With todays weekday a Friday
console.log(getEventWeekday(2)); // Logs out "Sunday"