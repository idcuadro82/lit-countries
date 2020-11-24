import { html, customElement, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

import { BaseElement } from '@components/base-element';
import modalObserver from '@observers/modal.observer';
import countriesListObserver from '@observers/countries-list.observer';

import countryModalCSS from './country-modal.style';
import iconsCSS from '@litStyles/icons.style';

@customElement('lit-country-modal')
export class CountryModal extends BaseElement {
  opened: boolean;

  static get styles() {
    return [super.styles, iconsCSS, countryModalCSS];
  }

  constructor() {
    super();
    this.opened = modalObserver.isOpened;
    modalObserver.addSubscriber(this.resolveModalState);
  }

  render() {
    const { selectedCountry } = modalObserver;
    return html`
      <div class=${this.resolveModalClasses(this.opened)}>
        <div class="modal-container">
          <span class="close-icon" @click=${this.resolveCloseModal}></span>
          <div class="modal-content">
            ${ 
              selectedCountry ? 
              html`
                <div class="country-info-container">
                  <div class="modal-row title-row">
                    <h2 class="country-name">${selectedCountry.name}</h2>
                    <span
                      class=${this.resolveFavoriteClasses(selectedCountry.isFavorite)}
                      @click=${this.handleFavoriteClick}>
                    </span>
                  </div>
                  <div class="modal-row">
                    <span class="subtitle">Region:</span>
                    <span>${selectedCountry.region}</span>
                  </div>
                  <div class="modal-row">
                    <span class="subtitle">Population:</span>
                    <span>${selectedCountry.population}</span>
                  </div>
                  <div class="modal-row">
                    <span class="subtitle">Capital:</span>
                    <span>${selectedCountry.capital}</span>
                  </div>
                  <div class="modal-row">
                    <span class="subtitle">Currency:</span>
                    <span>${this.joinWithCommas(selectedCountry.currencies)}</span>
                  </div>
                  <div class="modal-row">
                    <span class="subtitle">Language:</span>
                    <span>${this.joinWithCommas(selectedCountry.languages)}</span>
                  </div>
                </div>
                <div class="country-flag-container">
                  <img class="country-flag" src=${selectedCountry.flag} alt="flag">
                </div>
              </div>
              ` : null
            }
        </div>
      </div>
    `;
  }

  joinWithCommas = (dataList: any[], fieldName: string = 'name'): String => {
      return dataList.reduce((accumulator, currentValue, index) => {
        if (index > 0) accumulator += ', ';
        accumulator += currentValue[fieldName];
        return accumulator;
      }, '');
  }

  resolveModalState = (opened: boolean) => {
    this.opened = opened;
    const body = document.body;
    body.style.overflowY = opened ? 'hidden' : '';
    this.requestUpdate();
  }

  resolveCloseModal = () => {
    modalObserver.selectedCountry = null;
    modalObserver.isOpened = false;
  }

  handleFavoriteClick = () => {
    const { selectedCountry } = modalObserver;
    selectedCountry.isFavorite = !selectedCountry.isFavorite;
    countriesListObserver.setCountryFavoriteState(selectedCountry);
    this.requestUpdate();
  }

  resolveModalClasses = (opened: boolean) => {
    return classMap({ 'modal-wrapper': true, 'modal-opened': opened });
  }

  resolveFavoriteClasses = (isFavorite: boolean) => {
    return classMap({ 'star-icon': true, 'star-checked-icon': isFavorite });
  }
}
