import { customElement, html } from 'lit-element';

import { BaseElement } from '@components/base-element';

import loaderCSS from './loader.style';

@customElement('lit-loader')
export class Loader extends BaseElement {
  static get styles() {
    return [super.styles, loaderCSS];
  }

  render() {
    return html` 
      <div class="loader-container">
        <div class="loader"></div>
      </div>
    `;
  }
}
