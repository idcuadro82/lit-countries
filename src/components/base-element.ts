import { LitElement } from 'lit-element';
import resetCSS from '../lit-styles/reset.style';

export class BaseElement extends LitElement {
  public static get styles(): any {
    return [resetCSS];
  }
}
