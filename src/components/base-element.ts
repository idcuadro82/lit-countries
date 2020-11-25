import { CSSResultArray, LitElement, CSSResult } from 'lit-element';
import resetCSS from '@litStyles/reset.styles';

export class BaseElement extends LitElement {
  static get styles(): CSSResultArray | CSSResult {
    return [resetCSS];
  }
}
