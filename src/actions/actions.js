export const SET_FIRST_COLOR = 'SET_FIRST_COLOR';
export const SET_LAST_COLOR = 'SET_LAST_COLOR';

/**
 * Action to set the first color
 * @param {String} color the hecadecimal color
 * @returns {Actions}
 */
export function actionSetFirstColor(color) {
  return { type: SET_FIRST_COLOR, payload: color };
}
/**
 * Action to set the last color
 * @param {String} color the hecadecimal color
 * @returns {Actions}
 */
export function actionSetLastColor(color) {
  return { type: SET_LAST_COLOR, payload: color };
}
