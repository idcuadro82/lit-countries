import { customElement, html, property, query } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

import { BaseElement } from '@components/base-element';
import LIT_EVENTS from '@constants/lit-events';

import inputGroupCSS from '@components/input-group/input-group.styles';
import iconsCSS from '@litStyles/icons.styles';

@customElement('lit-input-group')
export class InputGroup extends BaseElement {
  @property({ type: String })
  icon: string = '';
  @property({ type: String })
  type: String = 'text';
  @property({ type: String })
  placeholder: string = '';
  @property({ type: String, reflect: true },)
  value: string = '';

  @query('input')
  private inputRef: HTMLInputElement;

  static get styles() {
    return [BaseElement.styles, iconsCSS, inputGroupCSS];
  }

  render() {
    return html`
      <div class="input-group">
        <input
          class=${this.resolveInputClasses(this.icon)}
          placeholder=${this.placeholder}
          type=${this.type}
          .value=${this.value}
          @change=${this.handleInputOnChange}
          @keyup=${this.handleInputKeyUp}
        >
        ${this.icon ?
          html`<span class=${this.resolveIconClasses(this.icon)} @click=${this.handleIconClick}></span>`
          : null
        }
      </div>
    `;
  }

  private resolveIconClasses = (icon: string): Function => {
    let classes: any = { 'form-icon': true };
    classes[icon as string] = true;
    return classMap(classes);
  }

  private resolveInputClasses = (icon: string): Function => {
    return classMap({ 'form-control': true, 'has-icon': !!icon });
  }

  private handleInputOnChange = (event: Event): void => {
    this.value = (event.target as HTMLInputElement).value;
  }

  private handleInputKeyUp = (event: KeyboardEvent): void => {
    event.preventDefault();
    this.value = this.inputRef.value;
    this.dispatchEvent(
      new CustomEvent(LIT_EVENTS.FORM_GROUP_INPUT, { 
        detail: { inputValue: this.value },
        bubbles: true, 
        composed: true 
      })
    );
  }

  private handleIconClick = (): void => {      
    this.dispatchEvent(
      new CustomEvent(LIT_EVENTS.FORM_GROUP_ICON_CLICK, { 
        detail: { inputValue: this.value },
        bubbles: true, 
        composed: true 
      })
    );
  }
}
