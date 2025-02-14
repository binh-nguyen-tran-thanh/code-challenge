import type { TExchangeTokenRequest } from '@src/models/request';
import type { TToken } from '@src/models/token';
import { hideLoading, showLoading } from '@src/store/globalState';
import axios from 'axios';

export const getTokenRates = async () => {
  return await axios.get<TToken[]>(
    'https://interview.switcheo.com/prices.json'
  );
};

export const postExchangeToken = async (data: TExchangeTokenRequest) => {
  showLoading();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  hideLoading();
  return {
    status: 200,
    data: {
      message: 'Exchange successful'
    }
  };
};
