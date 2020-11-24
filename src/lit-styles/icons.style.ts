import { css } from 'lit-element';

import '@assets/close-icon.png';
import '@assets/search-icon.png';
import '@assets/star-icon.svg';
import '@assets/star-checked-icon.svg';

const iconsCSS = css`
  .close-icon {
    background-image: url('assets/close-icon.png');
  }

  .search-icon {
    background-image: url('assets/search-icon.png');
  }

  .star-icon {
    background-image: url('assets/star-icon.svg');
  }

  .star-checked-icon {
    background-image: url('assets/star-checked-icon.svg');
  }
`;

export default iconsCSS;
