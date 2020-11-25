import { css, CSSResult } from 'lit-element';

const inputGroupCSS: CSSResult = css`
  :host {
    --input-control-lateral-padding: 15px;
    --form-icon-size: 25px;
  }

  .input-group {
    position: relative;
    width: var(--input-group-width, 100%);
  }

  .form-control {
    background-color: var(--white);
    border: 1px solid var(--gray);
    border-radius: 5px;
    padding: 10px var(--input-control-lateral-padding);
    width: 100%;
  }

  .form-control.has-icon {
    padding-right: calc(var(--input-control-lateral-padding) + var(--form-icon-size));
  }

  .form-icon {
    background-repeat: no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
    height: var(--form-icon-size);
    position: absolute;
    right: var(--input-control-lateral-padding);
    top: 50%;
    transform: translateY(-50%);
    width: var(--form-icon-size);
  }
`;

export default inputGroupCSS;
