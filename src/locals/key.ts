export type TextKey =
  | 'Home'
  | 'languageName'
  | 'Internationalization'
  | 'Controls'
  | 'Sandbox'
  | 'Error Handling'
  | 'Page Loading';

export type Translation = {
  [key in TextKey]: string;
};
