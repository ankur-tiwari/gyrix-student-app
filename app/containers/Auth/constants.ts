/* Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const AUTH_ACTION: string = "courses/Auth/AUTH_ACTION";
export const AUTH_ACTION_SUCCESS: string = "courses/Auth/AUTH_ACTION_SUCCESS";
export const AUTH_ACTION_ERROR: string = "courses/Auth/AUTH_ACTION_ERROR";
export const USER_ACTION: string = "courses/Auth/USER_ACTION";

export interface userLoginInterface {
  username: string;
  password: string;
}