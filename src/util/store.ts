import { writable } from 'svelte/store';
import type { TODOItem } from './types';

export const taskStore = writable<TODOItem[]>([
  {
    id: '1',
    title: 'TODO 1',
    body: 'This is a test',
    isDone: false,
  },
  {
    id: '2',
    title: 'TODO 2',
    body: 'This is a test',
    isDone: true,
  },
]);
