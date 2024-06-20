import { atom } from 'recoil';

export interface ITodo {
  id: number;
  text: string;
  isDelete: boolean;
}

export interface ITodoState {
  [key: string]: ITodo[];
}

export const toDoState = atom<ITodoState>({
  key: 'toDoState',
  default: {},
});

export const isDarkAtom = atom<boolean>({
  key: 'isDark',
  default: true,
});

export interface Todo {
  id: number;
  text: string;
  isDelete: boolean;
}
