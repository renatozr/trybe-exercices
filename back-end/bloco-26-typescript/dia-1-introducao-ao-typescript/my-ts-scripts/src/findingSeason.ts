const readlineSync = require('readline-sync');
import Months from "./types/enums/Months";
import WeatherSeasons from "./types/enums/WeatherSeasons";
import Hemisphere from "./types/enums/Hemisphere";
import SeasonsMap from "./types/interfaces/SeasonsMap";
import MonthSeasons from "./types/alias/MonthSeasons";

const seasonsMap: SeasonsMap = {
  North: {
    January: [WeatherSeasons.Winter],
    February: [WeatherSeasons.Winter],
    March: [WeatherSeasons.Winter, WeatherSeasons.Spring],
    April: [WeatherSeasons.Spring],
    May: [WeatherSeasons.Spring],
    June: [WeatherSeasons.Spring, WeatherSeasons.Summer],
    July: [WeatherSeasons.Summer],
    August: [WeatherSeasons.Summer],
    September: [WeatherSeasons.Summer, WeatherSeasons.Fall],
    October: [WeatherSeasons.Fall],
    November: [WeatherSeasons.Fall],
    December: [WeatherSeasons.Fall, WeatherSeasons.Winter],
  },
  South: {
    January: [WeatherSeasons.Summer],
    February: [WeatherSeasons.Summer],
    March: [WeatherSeasons.Summer, WeatherSeasons.Fall],
    April: [WeatherSeasons.Fall],
    May: [WeatherSeasons.Fall],
    June: [WeatherSeasons.Fall, WeatherSeasons.Winter],
    July: [WeatherSeasons.Winter],
    August: [WeatherSeasons.Winter],
    September: [WeatherSeasons.Winter, WeatherSeasons.Spring],
    October: [WeatherSeasons.Spring],
    November: [WeatherSeasons.Spring],
    December: [WeatherSeasons.Spring, WeatherSeasons.Summer],
  },
}

function monthQuestion(): Months {
  const months: Array<Months> = Object.values(Months);

  const index: number = readlineSync.keyInSelect(
    months,
    'Which month?',
  );
  
  return months[index];
}

function hemisphereQuestion(): Hemisphere {
  const hemispheres: [Hemisphere, Hemisphere] = [Hemisphere.North, Hemisphere.South];

  const index: number = readlineSync.keyInSelect(
    hemispheres,
    'Which hemisphere?',
  );

  return hemispheres[index];
};

function findSeasons(month: Months, hemisphere: Hemisphere): MonthSeasons {
  return seasonsMap[hemisphere][month];
}

function main() {
  console.log('\nFinding out the season of...')

  const chosenMonth: Months = monthQuestion();
  console.log(chosenMonth);

  console.log('\nOn hemisphere');

  const chosenHemisphere: Hemisphere = hemisphereQuestion();
  console.log(chosenHemisphere);

  const seasons: MonthSeasons = findSeasons(chosenMonth, chosenHemisphere);

  if (seasons.length === 1) {
    console.log(`\nThe season of month(${chosenMonth}) on hemisphere(${chosenHemisphere}) is ${seasons[0]}.`);
  } else {
    console.log(`\nThe seasons of month(${chosenMonth}) on hemisphere(${chosenHemisphere}) are ${seasons[0]} and ${seasons[1]}.`);
  }
}

main();