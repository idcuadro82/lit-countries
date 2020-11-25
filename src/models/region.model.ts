import ICountry from '@models/country.model';

export interface IRegions {
  [key: string]: ICountry[];
  Africa: ICountry[];
  Americas: ICountry[];
  Asia: ICountry[];
  Europe: ICountry[];
  Oceania: ICountry[];
}

export const initRegions: IRegions = {
  Africa: [],
  Americas: [],
  Asia: [],
  Europe: [],
  Oceania: []
}
