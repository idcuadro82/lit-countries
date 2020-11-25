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
    width: 100%;
  }

  .searcher-bar__input {
    --input-group-width: 50%;
  }
`;

export default searcherBarCSS;
