import type { TToken } from '@src/models/token';
import { writable } from 'svelte/store';
import { mapTokenRateFromApi } from './mapper';

export const tokenRateStore = writable<TToken[]>([]);

export const setTokenRate = (tokenRate: TToken[]) => {
  tokenRateStore.set(mapTokenRateFromApi(tokenRate));
};
