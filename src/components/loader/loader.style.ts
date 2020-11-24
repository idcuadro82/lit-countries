import { css } from 'lit-element';

const loaderCSS = css`
  .loader-container {
    align-items: center;
    background-color: var(--white);
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 9;
  }

  .loader {
    animation: spin 2s linear infinite;
    border: 16px solid var(--light-gray);
    border-radius: 50%;
    border-top: 16px solid var(--gray);
    height: 120px;
    width: 120px;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default loaderCSS;
