import { css } from 'lit-element';

const countriesListCSS = css`
  .countries-list {
    align-items: flex-start;
    display: flex;
    justify-content: space-between;
    position: relative;
    width: 100%;
  }

  .region {
    padding: 0 10px;
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
`;

export default countriesListCSS;
