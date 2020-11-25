import { html, customElement, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

import { BaseElement } from '@components/base-element';
import modalObserver from '@observers/modal.observer';
import countriesListObserver from '@observers/countries-list.observer';
import { joinWithCommas } from '@utils/array.utils';
import countriesService from '@services/countries.service';
import ICONS from '@constants/icons';

import countryModalCSS from './country-modal.styles';
import iconsCSS from '@litStyles/icons.styles';
import { populationFilter } from '../../utils/pupulation.filter';

@customElement('lit-country-modal')
export class CountryModal extends BaseElement {
  opened: boolean;

  static get styles() {
    return [BaseElement.styles, iconsCSS, countryModalCSS];
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
          <span class=${ICONS.CLOSE} @click=${this.resolveCloseModal}></span>
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
                    <span>${populationFilter(selectedCountry.population)}</span>
                  </div>
                  <div class="modal-row">
                    <span class="subtitle">Capital:</span>
                    <span>${selectedCountry.capital}</span>
                  </div>
                  <div class="modal-row">
                    <span class="subtitle">Currency:</span>
                    <span>${joinWithCommas(selectedCountry.currencies)}</span>
                  </div>
                  <div class="modal-row">
                    <span class="subtitle">Language:</span>
                    <span>${joinWithCommas(selectedCountry.languages)}</span>
                  </div>
                  <p class="modal-paragraph">
                    <span class="subtitle">Boarder Countries:</span>
                    <span>${joinWithCommas(countriesService.getBorderCountries(selectedCountry))}</span>
                  </p>
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

  resolveModalState = (opened: boolean): void => {
    this.opened = opened;
    const body = document.body;
    body.style.overflowY = opened ? 'hidden' : '';
    this.requestUpdate();
  }

  resolveCloseModal = (): void => {
    modalObserver.selectedCountry = null;
    modalObserver.isOpened = false;
  }

  handleFavoriteClick = (): void => {
    const { selectedCountry } = modalObserver;
    selectedCountry.isFavorite = !selectedCountry.isFavorite;
    countriesListObserver.setCountryFavoriteState(selectedCountry);
    this.requestUpdate();
  }

  resolveModalClasses = (opened: boolean): Function => {
    return classMap({ 'modal-wrapper': true, 'modal-opened': opened });
  }

  resolveFavoriteClasses = (isFavorite: boolean): Function => {
    return classMap({ [ICONS.STAR]: true, [ICONS.STAR_CHECKED]: isFavorite });
  }

  disconnectedCallback() {
    modalObserver.removeSubscriber(this.resolveModalState);
    super.disconnectedCallback();
  }
}
