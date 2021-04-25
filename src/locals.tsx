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

export const zhHans: Partial<Translation> = {
  Home: '主页',
  languageName: '中文',
  Internationalization: '国际化',
  'Error Handling': '错误处理',
  'Page Loading': '全页载入',
  Sandbox: '沙盒',
  Controls: '控件',
};

export const ja: Partial<Translation> = {
  Home: 'ホーム',
  languageName: '日本語',
  Internationalization: '国際化',
  Controls: 'ウィジェット',
  'Page Loading': '読み込み',
  Sandbox: 'サンドボックス',
  'Error Handling': 'エラー処理',
};
