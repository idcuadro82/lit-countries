import { LitElement, customElement, html } from 'lit-element';

import loaderObserver from '@observers/loader.observer';

@customElement('lit-app')
export class App extends LitElement {
  isLoading: boolean = false;

  constructor() {
    super();
    loaderObserver.addSubscriber(this.setLoading);
  }

  setLoading = (isLoading: boolean) => {
    this.isLoading = isLoading;
    this.requestUpdate();
  }

  render() {
    return html`
      <lit-loader .hidden=${!this.isLoading}></lit-loader>
      <lit-countries .hidden=${this.isLoading}></lit-countries>
    `;
  }
}
