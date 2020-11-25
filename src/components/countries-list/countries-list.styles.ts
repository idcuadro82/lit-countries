import { css, CSSResult } from 'lit-element';

const countriesListCSS: CSSResult = css`
  :host {
    --star-icon-size: 12px;
    --region-width: calc(var(--xl-content-width)/5);
  }

  .countries-list {
    align-items: flex-start;
    display: flex;
    padding: 0 var(--content-lateral-padding);
    position: relative;
    width: 100%;
  }

  @media (max-width: 1280px) {
    .countries-list {
      display: grid;
      grid-template-columns: repeat(3, var(--region-width));
      justify-content: space-between;
      row-gap: 50px;
    }
  }

  @media (max-width: 1024px) {
    .countries-list {
      grid-template-columns: repeat(2, var(--region-width));
      justify-content: space-around;
    }
  }

  @media (max-width: 560px) {
    .countries-list {
      grid-template-columns: 100%;
    }
  }

  .region {
    max-width: var(--region-width);
    padding: 0 10px;
    width: 100%;
  }

  @media (max-width: 1280px) {
    .region {
      max-width: none;
      padding: 0;
      width: 100%;
    }
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
    height: var(--star-icon-size);
    width: var(--star-icon-size);
  }
`;

export default countriesListCSS;
