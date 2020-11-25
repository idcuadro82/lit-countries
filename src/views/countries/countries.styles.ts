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

  @media (max-width: 1280px) {
    .countries-content {
      max-width: var(--lg-content-width);
      width: 100%;
    }
  }

  @media (max-width: 1024px) {
    .countries-content {
      max-width: var(--md-content-width);
      width: 100%;
    }
  }

  @media (max-width: 560px) {
    .countries-content {
      max-width: none;
      width: 100%;
    }
  }
`;

export default countriesCSS;
