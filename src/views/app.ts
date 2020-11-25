import { LitElement, customElement, html } from 'lit-element';
import loaderObserver from '@observers/loader.observer';

@customElement('lit-app')
export class App extends LitElement {
  isLoading: boolean = false;

  constructor() {
    super();
    loaderObserver.addSubscriber(this.setLoading);
  }

  render() {
    return html`
      <lit-loader .hidden=${!this.isLoading}></lit-loader>
      <lit-countries .hidden=${this.isLoading}></lit-countries>
      <lit-country-modal></lit-country-modal>
    `;
  }

  setLoading = (isLoading: boolean): void => {
    this.isLoading = isLoading;
    this.requestUpdate();
  }
}
