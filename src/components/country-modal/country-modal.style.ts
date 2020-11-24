import { css } from 'lit-element';

const countryModalCSS = css`
  :host {
    --icon-size: 25px;
  }

  .close-icon {
    cursor: pointer;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: var(--icon-size);
    position: absolute;
    right: 15px;
    top: 15px;
    width: var(--icon-size);
    z-index: 10;
  }

  .modal-wrapper {
    display: none;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9;
  }

  .modal-opened {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .modal-container {
    background-color: var(--white);
    max-width: var(--breakpoint-md);
    padding: 50px;
    position: relative;
    width: 100%;
  }

  .modal-content {
    display: flex;
  }

  .modal-content .modal-row {
    align-items: center;
    display: flex;
    margin-bottom: 10px;
  }

  .modal-content .modal-row.title-row {
    margin-bottom: 20px;
  }

  .country-info-container {
    flex-grow: 1;
  }

  .country-flag-container {
    padding: 20px 0;
    margin: 0 20px;
    width: 200px;
  }

  .country-flag {
    width: 100%;
  }

  .country-name {
    font-size: 24px;
    line-height: 1.2;
    margin-right: 15px;
  }

  .subtitle {
    font-weight: 700;
    line-height: 1.2;
    margin-right: 5px;
  }

  .star-icon {
    background-repeat: no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
    height: var(--icon-size);
    width: var(--icon-size);
  }
`;

export default countryModalCSS;
