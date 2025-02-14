import type { TErrorLevel } from '@src/models/error';
import { writable } from 'svelte/store';

export const loadingState = writable<boolean>(false);
export const errorState = writable<string>('');
export const errorLevel = writable<TErrorLevel>('info');

export const showLoading = () => {
  loadingState.set(true);
};

export const hideLoading = () => {
  loadingState.set(false);
};

export const setError = (message: string, level: TErrorLevel) => {
  errorState.set(message);
  errorLevel.set(level);
};

export const setSuccessMessage = (message: string) => {
  errorState.set(message);
  errorLevel.set('success');
};

export const clearError = () => {
  errorState.set('');
  errorLevel.set('info');
};
