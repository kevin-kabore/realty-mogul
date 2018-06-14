import { TOGGLE_PANEL, PARSE_JSON } from './types';

export const togglePanel = () => {
  return {
    type: TOGGLE_PANEL
  };
}

export const parseJSON = (json) => {
  let data = JSON.parse(json);
  return {
    type: PARSE_JSON,
    data
  };
}
