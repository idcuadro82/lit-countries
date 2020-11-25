export interface IRegionsConfig {
  AFRICA: String,
  AMERICAS: String,
  ASIA: String,
  EUROPE: String,
  OCEANIA: String
}

const REGIONS_CONFIG: IRegionsConfig = {
  AFRICA: 'Africa',
  AMERICAS: 'Americas',
  ASIA: 'Asia',
  EUROPE: 'Europe',
  OCEANIA: 'Oceania'
}

export const isValidRegion = (regionName: string): boolean => {
  return Object.keys(REGIONS_CONFIG).some((region: string) => region.toLocaleLowerCase() === regionName.toLocaleLowerCase());
}

export default REGIONS_CONFIG;
