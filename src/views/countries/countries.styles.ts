import { css } from 'lit-element';

const countriesCSS = css`
  .countries {
    display: flex;
    flex-direction: column;
  }

  .countries-main {
    display: flex;
    justify-content: center;
  }

  .countries-content {
    max-width: var(--xl-content-width);
    padding-top: 40px;
    width: 100%;
  }
`;

export default countriesCSS;
