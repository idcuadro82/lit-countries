import { css, CSSResult } from 'lit-element';

const searcherBarCSS: CSSResult = css`
  .searcher-bar {
    background-color: var(--gray);
    display: flex;
    justify-content: center;
    padding: 50px 0;
  }

  .searcher-bar__content {
    max-width: var(--xl-content-width);
    padding: 0 var(--content-lateral-padding);
    width: 100%;
  }

  @media (max-width: 1280px) {
    .searcher-bar__content {
      max-width: var(--lg-content-width);
    }
  }

  @media (max-width: 1024px) {
    .searcher-bar__content {
      max-width: var(--md-content-width);
    }
  }

  @media (max-width: 560px) {
    .searcher-bar__content {
      max-width: none;
      width: 100%;
    }
  }

  .searcher-bar__input {
    --input-group-width: 50%;
  }

  @media (max-width: 1280px) {
    .searcher-bar__input {
      --input-group-width: var(--sm-content-width);
    }
  }

  @media (max-width: 560px) {
    .searcher-bar__input {
      --input-group-width: 100%;
    }
  }
`;

export default searcherBarCSS;
