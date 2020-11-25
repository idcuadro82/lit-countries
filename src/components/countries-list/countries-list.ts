import { customElement, html } from 'lit-element';

import { BaseElement } from '@components/base-element';
import countriesListObserver from '@observers/countries-list.observer';
import modalObserver from '@observers/modal.observer';
import ICountry from '@models/country.model';

import countriesListCSS from './countries-list.styles';
import iconsCSS from '@litStyles/icons.styles';
@customElement('lit-countries-list')
export class CountriesList extends BaseElement {
  static get styles() {
    return [BaseElement.styles, iconsCSS,  countriesListCSS];
  }

  constructor () {
    super();
    countriesListObserver.addSubscriber(this.countryObserverCallback);
  }

  render() {
    const { regions, hasCountries} = countriesListObserver;
    return html`
      <div class="countries-list">
        ${ hasCountries() ?
          Object.keys(regions).map((regionName: string) => {
            const region = regions[regionName];
            return region.length ? html`
              <div class="region">
                <h2 class="region__name">${regionName}</h2>
                ${
                  region.map((country: ICountry)=> {
                    return html `
                      <div class="country" @click=${() => this.handlerCountryClick(country)}>
                        <img class="country__flag" src=${country.flag} alt="flag">
                        <span class="country__name">${country.name}</span>
                        ${country.isFavorite ? html`<span class="star-checked-icon"></span>` : null}
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

  countryObserverCallback = () => {
    this.requestUpdate();
  }

  handlerCountryClick = (country: ICountry): void => {
    modalObserver.selectedCountry = country;
    modalObserver.isOpened = true;
  }

  disconnectedCallback() {
    countriesListObserver.removeSubscriber(this.countryObserverCallback);
    super.disconnectedCallback();
  }
}
