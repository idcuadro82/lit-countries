import Country from '@models/country.model';
import REGIONS_CONFIG from '@config/regions.config';
import { IFilteredCountries, initFilteredCountries } from '@models/filtered-countries.model';
import deepClone from '@utils/deep-clone';

class CountriesListObserver {
  private static instance: CountriesListObserver;

  _currentFilter: String = '';
  _countriesList: Country[] = [];
  _filteredCountriesList: IFilteredCountries = {};
  _subscribers: any[] = [];

  static getInstance(): CountriesListObserver {
    this.instance = CountriesListObserver.instance || new CountriesListObserver();
    return this.instance;
  }

  constructor() {
    this._filteredCountriesList = deepClone(initFilteredCountries);
  }

  get countriesList(): Country[] {
    return this._filteredCountriesList;
  };

  set countriesList(countriesList: Country[]) {
    this._countriesList = deepClone(countriesList);
    this._filteredCountriesList = this._groupByRegion(deepClone(countriesList));
    this.notify();
  }

  private _groupByRegion = (countriesList: Country[], countryName?: String) => {
    const regions: IFilteredCountries = deepClone(initFilteredCountries);
    countriesList.forEach((country: Country) => {
      const validRegion = country.region && country.region !== REGIONS_CONFIG.POLAR;
      const validName = countryName ? country.name.toLowerCase().includes(countryName.toLowerCase()) : true;
      validRegion && validName && regions[country.region].push(country);
    });
    return regions;
  }

  hasCountries = () => {
    return Object.keys(this._filteredCountriesList).find(region => this._filteredCountriesList[region].length);
  }

  filterCountriesList = (countryName?: String) => {
    if (countryName) this._currentFilter = countryName;
    this._filteredCountriesList = this._groupByRegion(this._countriesList, this._currentFilter);
    this.notify();
  }

  addSubscriber = (callback: Function) => {
    this._subscribers.push(callback);
  }

  setCountryFavoriteState = (selectedCountry: Country) => {
    let countryRef = this._countriesList.find(country => country.alpha3Code === selectedCountry.alpha3Code);
    countryRef.isFavorite = !countryRef.isFavorite;
    this.filterCountriesList()
  }

  notify = () => {
    this._subscribers.forEach(subscriber => {
      subscriber(this.countriesList);
    });
  }
}

export default CountriesListObserver.getInstance();
