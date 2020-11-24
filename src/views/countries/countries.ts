import { customElement, html } from 'lit-element';

import { BaseElement } from '@components/base-element';
import countriesService, { CountriesService } from '@services/countries.service';
import Country from '@models/country.model';
import countriesListObserver from '@observers/countries-list.observer';

import countriesCSS from './countries.styles';

@customElement('lit-countries')
export class Countries extends BaseElement {
  countriesService: CountriesService = countriesService;

  static get styles() {
    return [super.styles, countriesCSS];
  }

  constructor() {
    super();
    this.countriesService.getAllCountries()
      .then((response: Country[]) => {
        countriesListObserver.countriesList = response;
      });
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
