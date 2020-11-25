import { customElement, html } from 'lit-element';

import ICONS from '@constants/icons';
import { BaseElement } from '@components/base-element';
import countriesListObserver from '@observers/countries-list.observer';
import debounce from '@utils/debounce';

import searcherBarCSS from './searcher-bar.style';

@customElement('lit-searcher-bar')
export class SearcherBar extends BaseElement {
  static get styles() {
    return [BaseElement.styles, searcherBarCSS];
  }

  render() {
    return html` 
      <header class="searcher-bar">
        <div class="searcher-bar__content">
          <lit-input-group
            icon=${ICONS.SEARCH}
            class="searcher-bar__input"
            placeholder="Search"
            @input-group-change=${debounce(this.filterCountries, 400)}>
          </lit-input-group>
        </div>
      </header>
    `;
  }

  private filterCountries = (event: CustomEvent): void => {
    countriesListObserver.filterCountriesList(event.detail.inputValue);
  }
}
