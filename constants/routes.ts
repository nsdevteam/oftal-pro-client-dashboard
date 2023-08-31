/**
 * @RoutesEnum is a custom data type
 * Description: this data type will help us to uniformize our route names
 */
export enum RoutesEnum {
  Home = 'home',
  SignIn = 'sign-in',
  ResetPassword = 'reset-password',
  ResetPasswordNotification = 'reset-password-notification',
}

/**
 * @Routes is the constant with our internal or external routes
 * Description: this constant will help us to create standard routes
 */
export const RoutePaths: Record<RoutesEnum, string> = {
  [RoutesEnum.Home]: '/',
  [RoutesEnum.SignIn]: '/sign-in',
  [RoutesEnum.ResetPassword]: '/reset-password',
  [RoutesEnum.ResetPasswordNotification]: '/reset-password-notification',
};

export const routesList = Object.keys(RoutePaths) as ReadonlyArray<RoutesEnum>;
