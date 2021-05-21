import { ALERT_HIDE, ALERT_SHOW } from "../types";

export default (state, action) => {
  switch (action.type) {
    case ALERT_SHOW:
      return {
        alert: action.payload,
      };
    case ALERT_HIDE:
      return {
        alert: null,
      };
    default:
      return state;
  }
};
