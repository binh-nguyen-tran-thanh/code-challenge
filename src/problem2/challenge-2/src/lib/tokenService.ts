import type { TToken } from '@src/models/token';
import axios from 'axios';

export const getTokenRates = async () => {
  return await axios.get<TToken[]>(
    'https://interview.switcheo.com/prices.json'
  );
};
