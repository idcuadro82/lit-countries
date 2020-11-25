import { customElement, html } from 'lit-element';

import ICONS from '@constants/icons';
import { BaseElement } from '../base-element';
import countriesListObserver from '@observers/countries-list.observer';
import debounce from '@utils/debounce';

import searcherBarCSS from '@components/searcher-bar/searcher-bar.style';

@customElement('lit-searcher-bar')
export class SearcherBar extends BaseElement {
  static get styles() {
    return [super.styles, searcherBarCSS];
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

  private filterCountries = (event: CustomEvent) => {
    countriesListObserver.filterCountriesList(event.detail.inputValue);
  }
}
