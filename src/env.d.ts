/// <reference types="@emotion/react/types/css-prop" />

declare module '*.svg' {
  export interface SpriteSymbol {
    id: string;
    viewBox: string;
    url: string;
  }
  const spriteSymbol: SpriteSymbol;
  export default spriteSymbol;
}
