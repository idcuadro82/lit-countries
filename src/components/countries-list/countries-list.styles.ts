import { css } from 'lit-element';

const countriesListCSS = css`
  .countries-list {
    align-items: flex-start;
    display: flex;
    position: relative;
    width: 100%;
  }

  .region {
    max-width: calc(var(--xl-content-width)/5);
    padding: 0 10px;
    width: 100%
  }

  .region__name {
    font-size: 16px;
    font-weight: Bold;
    margin-bottom: 30px
  }

  .country {
    align-items: center;
    display: flex;
    margin: 10px 0;
  }

  .country__flag {
    margin-right: 5px;
    width: 20px;
  }

  .country__name {
    line-height: 1.2;
  }

  .no-results {
    font-size: 20px;
    font-weight: Bold;
    line-height: 1.6;
  }
`;

export default countriesListCSS;