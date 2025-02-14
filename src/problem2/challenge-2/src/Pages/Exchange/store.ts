import type { TToken } from '@src/models/token';
import { writable } from 'svelte/store';

export const tokenRateStore = writable<TToken[]>([]);
