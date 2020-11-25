import { css, CSSResult } from 'lit-element';

const countriesCSS: CSSResult = css`
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
    padding: 40px 0;
    width: 100%;
  }
`;

export default countriesCSS;
