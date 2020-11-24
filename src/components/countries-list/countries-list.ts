import { customElement, html } from 'lit-element';

import { BaseElement } from '@components/base-element';
import countriesListObserver from '@observers/countries-list.observer';

import countriesListCSS from './countries-list.styles';
import Country from '@models/country.model';


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
        ${ 
          Object.keys(countriesListObserver.countriesList).map((region) => {
            return html`
              <div class="region">
                <h2 class="region__name">${region}</h2>
                ${
                  countriesListObserver.countriesList[region].map((country: Country)=> {
                    return html `
                      <div class="country">
                        <img class="country__flag" src=${country.flag} alt="">
                        <span class="country__name">${country.name}</span>
                      </div>
                    `;
                  })
                }
              </div>
            `;
          }) 
        }
      </div>
    `;
  }
}
