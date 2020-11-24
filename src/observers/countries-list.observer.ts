import Country from '@models/country.model';
import REGIONS_CONFIG from '@config/regions.config';
import { IFilteredCountries, initFilteredCountries } from '@models/filtered-countries.model';

class CountriesListObserver {
  private static instance: CountriesListObserver;

  _countriesList: Country[] = [];
  _countriesFilteredList: IFilteredCountries = initFilteredCountries;
  _subscribers: any[] = [];

  public static getInstance(): CountriesListObserver {
    this.instance = CountriesListObserver.instance || new CountriesListObserver();
    return this.instance;
  }

  get countriesList(): Country[] {
    return this._countriesFilteredList;
  };

  set countriesList(countriesList: Country[]) {
    this._countriesList = JSON.parse(JSON.stringify(countriesList));
    this._countriesFilteredList = this._groupByRegion(JSON.parse(JSON.stringify(countriesList)));
    this.notify();
  }

  private _groupByRegion = (countriesList: Country[]) => {
    const regions: IFilteredCountries = initFilteredCountries;
    countriesList.forEach((country: Country) => {
      const validRegion = country.region && country.region !== REGIONS_CONFIG.POLAR;
      validRegion && regions[country.region].push(country);
    });
    return regions;
  }

  addSubscriber = (callback: Function) => {
    this._subscribers.push(callback);
  }

  notify = () => {
    this._subscribers.forEach(subscriber => {
      subscriber(this.countriesList);
    });
  }
}

export default CountriesListObserver.getInstance();
