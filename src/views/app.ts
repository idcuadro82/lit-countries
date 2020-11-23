import { LitElement, customElement, html } from 'lit-element';

import resetCSS from '@styles/reset.scss';
import appCSS from '@views/app.scss';

@customElement('lit-app')
export class App extends LitElement {

  static get styles() {
    return [resetCSS, appCSS];
  }

  render() {
    return html` 
      <h1 class="title">App</h1>
    `;
  }
}
