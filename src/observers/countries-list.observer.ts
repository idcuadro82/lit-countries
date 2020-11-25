import ICountry from '@models/country.model';
import { initRegions, IRegions } from '@models/region.model';
import deepClone from '@utils/deep-clone';
import { isValidRegion } from '@config/regions.config';
import { BaseObserver } from '@observers/base.observer';

const countryNameIncludeString = (countryName: string, filter: string) => {
  return filter ? countryName.toLowerCase().includes(filter.toLowerCase()) : true;
}

class CountriesListObserver extends BaseObserver<CountriesListObserver> {
  private static instance: CountriesListObserver;

  _currentFilter: string = '';
  _countriesList: ICountry[] = [];
  _regions: IRegions;

  static getInstance(): CountriesListObserver {
    this.instance = CountriesListObserver.instance || new CountriesListObserver();
    return this.instance;
  }

  constructor() {
    super();
    this._regions = deepClone(initRegions);
  }

  get regions(): IRegions {
    return this._regions;
  };

  set regions(regions: IRegions) {
    this._regions = deepClone(regions);
    this.notify(this._regions);
  }

  private _groupByRegion = (countries: ICountry[], countryName?: string) => {
    const regions: IRegions = deepClone(initRegions);
    countries.forEach((country: ICountry) => {
      if (isValidRegion(country.region) && countryNameIncludeString(country.name, countryName)) {
        regions[country.region].push(country);
      }
    });
    return regions;
  }

  setRegions = (countries: ICountry[]) => {
    this._countriesList = deepClone(countries);
    this.regions = this._groupByRegion(deepClone(countries));
  }

  hasCountries = () => {
    return Object.keys(this._regions).find(region => this._regions[region].length);
  }

  filterCountriesList = (countryName: string) => {
    this._currentFilter = countryName;
    this._regions = this._groupByRegion(this._countriesList, this._currentFilter);
    this.notify(this._regions);
  }

  setCountryFavoriteState = (selectedCountry: ICountry) => {
    let countryRef = this._countriesList.find(country => country.alpha3Code === selectedCountry.alpha3Code);
    countryRef.isFavorite = !countryRef.isFavorite;
    this.filterCountriesList(this._currentFilter)
  }
}

export default CountriesListObserver.getInstance();
