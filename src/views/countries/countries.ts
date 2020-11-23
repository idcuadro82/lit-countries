import { LitElement, customElement, html } from 'lit-element';

@customElement('lit-countries')
export class Countries extends LitElement {

  render() {
    return html` 
      <div class="countries">
        <lit-searcher-bar></lit-searcher-bar>
      </div>
    `;
  }
}
