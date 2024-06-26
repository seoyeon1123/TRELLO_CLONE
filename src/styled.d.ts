import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    boardColor: string;
    cardColor: string;
    textColor: string;
    boardtextColor: string;
    deleteBtn: string;
    toggle: string;
    trash: string;
  }
}
