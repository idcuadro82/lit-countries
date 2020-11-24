import { customElement, html } from 'lit-element';

import { BaseElement } from '@components/base-element';
import countriesListObserver from '@observers/countries-list.observer';
import modalObserver from '@observers/modal.observer';
import Country from '@models/country.model';

import countriesListCSS from './countries-list.styles';
@customElement('lit-countries-list')
export class CountriesList extends BaseElement {
  static get styles() {
    return [super.styles, countriesListCSS];
  }

  constructor () {
    super();
    countriesListObserver.addSubscriber(this.countryObserverCallback);
  }

  countryObserverCallback = () => {
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="countries-list">
        ${ countriesListObserver.hasCountries() ?
          Object.keys(countriesListObserver.countriesList).map((regionName) => {
            const region = countriesListObserver.countriesList[regionName];
            return region.length ? html`
              <div class="region">
                <h2 class="region__name">${regionName}</h2>
                ${
                  region.map((country: Country)=> {
                    return html `
                      <div class="country" @click=${() => this.handlerCountryClick(country)}>
                        <img class="country__flag" src=${country.flag} alt="flag">
                        <span class="country__name">${country.name}</span>
                      </div>
                    `;
                  })
                }
              </div>
            ` : null;
          }) : html`<span class="no-results">No results found</span>`
        }
      </div>
    `;
  }

  handlerCountryClick = (country: Country) => {
    modalObserver.selectedCountry = country;
    modalObserver.isOpened = true;
  }
}
