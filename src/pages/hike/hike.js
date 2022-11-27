import { hadleScroll } from '@src/utils/hadleScroll.utils';
import { handleAnchorClick } from '@src/utils/handleAnchorClick.utils';
import { handleDropdownClick } from '@src/utils/handleDropdownClick.utils';
import { renderTimer } from '@src/utils/renderTimer.utils';
import { handleFormSubmit } from '@src/utils/handleFormSubmit.utils';

import '@src/assets/styles/global/index.scss';

window.addEventListener('load', () => {
  renderTimer();
  handleAnchorClick();

  document.addEventListener('click', handleDropdownClick);
  window.addEventListener('scroll', hadleScroll);
  document.getElementById('form').addEventListener('submit', handleFormSubmit);
});
