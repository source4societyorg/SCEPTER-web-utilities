import { isEmpty } from '@source4society/scepter-utility-lib';
export const mediaQuery = (choices, dimensions) => {
  let selectedChoice = choices[0];
  if (!isEmpty(dimensions)) {
    dimensions.forEach((query, index) => {
      if (window.matchMedia(query).matches) {
        selectedChoice = choices[index + 1];
      }
    });
  }

  return selectedChoice;
};

export default mediaQuery;
