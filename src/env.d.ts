declare module '*.svg' {
  export interface SpriteSymbol {
    id: string;
    viewBox: string;
    url: string;
  }
  const spriteSymbol: SpriteSymbol;
  export default spriteSymbol;
}
