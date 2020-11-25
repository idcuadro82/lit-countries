import API_CONFIG from '@config/api.config';
import ICountry from '@models/country.model';
import countriesListObserver from '@observers/countries-list.observer';

export class CountriesService {
  private static instance: CountriesService;

  public static getInstance(): CountriesService {
    this.instance = CountriesService.instance || new CountriesService();
    return this.instance;
  }

  getAllCountries = (): Promise<ICountry[]> => {
    return fetch(API_CONFIG.GET_ALL_COUNTRIES).then(response => response.json());
  }

  getBorderCountries = (country: ICountry): ICountry[] => {
    return country.borders.length ? countriesListObserver.countries
      .filter((currentCountry: ICountry) => {
        return country.borders.some((border) => currentCountry.alpha3Code === border);
      }) : [];
  }
}

export default CountriesService.getInstance();
