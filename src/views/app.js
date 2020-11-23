import { LitElement, html } from 'lit-element';

import resetCSS from '../styles/reset.scss';
import appCSS from './app.scss';

class App extends LitElement {

  static get styles() {
    return [resetCSS, appCSS];
  }

  render() {
    return html` 
      <h1 class="title">App</h1>
    `;
  }
}

customElements.define('lit-app', App); 
