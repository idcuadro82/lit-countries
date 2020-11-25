export const populationFilter = (population: number) => {
  const limit = 1000000;
  return population > limit ? `${Math.trunc(population / limit)}M` : population;
}
