import MonthSeasons from '../alias/MonthSeasons';

interface SeasonsMapMonth {
  January: MonthSeasons,
  February: MonthSeasons,
  March: MonthSeasons,
  April: MonthSeasons,
  May: MonthSeasons,
  June: MonthSeasons,
  July: MonthSeasons,
  August: MonthSeasons,
  September: MonthSeasons,
  October: MonthSeasons,
  November: MonthSeasons,
  December: MonthSeasons,
}

export default interface SeasonsMap {
  North: SeasonsMapMonth,
  South: SeasonsMapMonth,
}