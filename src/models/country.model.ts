interface ICountry {
  alpha3Code: string;
  borders: string[];
  capital: string;
  currencies: { name: string }[];
  flag: string;
  languages: { name: string }[];
  name: string;
  population: number;
  region: string;
  isFavorite: boolean;
}

export default ICountry;
