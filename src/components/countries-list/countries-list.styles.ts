import { css, CSSResult } from 'lit-element';

const countriesListCSS: CSSResult = css`
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
    cursor: pointer;
    display: flex;
    margin: 10px 0;
    width: fit-content;
  }

  .country:hover .country__name {
    color: blue;
  }

  .country__flag {
    margin-right: 5px;
    width: 20px;
  }

  .country__name {
    line-height: 1.2;
    margin-right: 5px;
  }

  .no-results {
    font-size: 20px;
    font-weight: Bold;
    line-height: 1.6;
  }

  .star-checked-icon {
    background-repeat: no-repeat;
    background-size: 100% 100%;
    flex-shrink: 0;
    height: 10px;
    width: 10px;
  }
`;

export default countriesListCSS;
