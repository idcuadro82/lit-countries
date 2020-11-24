import Country from '@models/country.model';

export interface IFilteredCountries {
  Africa: Country[];
  Americas: Country[];
  Asia: Country[];
  Europe: Country[];
  Oceania: Country[];
}

export const initFilteredCountries: IFilteredCountries = {
  Africa: [],
  Americas: [],
  Asia: [],
  Europe: [],
  Oceania: []
}
