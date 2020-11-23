import { LitElement, customElement, html } from 'lit-element';

@customElement('lit-app')
export class App extends LitElement {

  render() {
    return html` 
      <lit-countries></lit-countries>
    `;
  }
}
