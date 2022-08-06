export const SET_FIRST_COLOR = 'SET_FIRST_COLOR';
export const SET_LAST_COLOR = 'SET_LAST_COLOR';
export const CHANGE_DIRECTION = 'CHANGE_DIRECTION';
export const CHANGE_INPUT = 'CHANGE_INPUT';

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
/**
 * Action to change the direction of the gradient (in degree)
 * @param {Number} degree the degree of the direction
 * @returns {Actions}
 */
export function actionChangeDirection(degree) {
  return { type: CHANGE_DIRECTION, payload: degree };
}
/**
 * Action to change the value of the input (controlled component)
 * @param {Number} inputValue the current value of the input (type number)
 * @returns {Action}
 */
export function actionChangeInput(inputValue) {
  return { type: CHANGE_INPUT, payload: inputValue };
}
