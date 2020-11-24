import { customElement, html, property } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';

import KEY_CODES from '@constants/key-codes';
import { BaseElement } from '@components/base-element';
import LIT_EVENTS from '@constants/lit-events';

import inputGroupCSS from '@components/input-group/input-group.style';
import iconsCSS from '@litStyles/icons.style';

@customElement('lit-input-group')
export class InputGroup extends BaseElement {
  @property({ type: String })
  icon: String = '';
  @property({ type: String })
  type: String = 'text';
  @property({ type: String })
  placeholder: String = '';
  @property({ type: String, reflect: true },)
  value: String = '';

  static get styles() {
    return [super.styles, iconsCSS, inputGroupCSS];
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

  private resolveIconClasses = (icon: String) => {
    let classes: any = { 'form-icon': true };
    classes[icon as string] = true;
    return classMap(classes);
  }

  private resolveInputClasses = (icon: String) => {
    return classMap({ 'form-control': true, 'has-icon': !!icon });
  }

  private handleInputOnChange = (event: Event) => {
    this.value = (event.target as HTMLInputElement).value;
  }

  private handleInputKeyUp = (event: KeyboardEvent) => {
    if (event.keyCode === KEY_CODES.ENTER) {
      event.preventDefault();
      this.dispatchEvent(
        new CustomEvent(LIT_EVENTS.FORM_GROUP_INPUT_ENTER, { 
          detail: { inputValue: this.value },
          bubbles: true, 
          composed: true 
        })
      );
    }
  }

  private handleIconClick = () => {      
    this.dispatchEvent(
      new CustomEvent(LIT_EVENTS.FORM_GROUP_ICON_CLICK, { 
        detail: { inputValue: this.value },
        bubbles: true, 
        composed: true 
      })
    );
  }
}
