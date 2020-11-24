import API_CONFIG from '@config/api.config';
import Country from '@models/country.model';

export class CountriesService {
  private static instance: CountriesService;

  public static getInstance(): CountriesService {
    this.instance = CountriesService.instance || new CountriesService();
    return this.instance;
  }

  getAllCountries = (): Promise<Country[]> => {
    return fetch(API_CONFIG.GET_ALL_COUNTRIES).then(response => response.json());
  }
}

export default CountriesService.getInstance();
