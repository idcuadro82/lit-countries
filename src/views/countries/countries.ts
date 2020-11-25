import { customElement, html } from 'lit-element';

import { BaseElement } from '@components/base-element';
import countriesService, { CountriesService } from '@services/countries.service';
import ICountry from '@models/country.model';
import countriesListObserver from '@observers/countries-list.observer';
import loaderObserver from '@observers/loader.observer';

import countriesCSS from './countries.styles';

@customElement('lit-countries')
export class Countries extends BaseElement {
  countriesService: CountriesService = countriesService;

  static get styles() {
    return [BaseElement.styles, countriesCSS];
  }

  constructor() {
    super();
    loaderObserver.isLoading = true;
    this.countriesService.getAllCountries()
      .then((response: ICountry[]) => {
        countriesListObserver.setRegions(response);
      })
      .finally(() => loaderObserver.isLoading = false);
  }

  render() {
    return html` 
      <div class="countries">
        <lit-searcher-bar></lit-searcher-bar>
        <main class="countries-main">
          <div class="countries-content">
            <lit-countries-list></lit-countries-list>
          </div>
        </main>
      </div>
    `;
  }
}
