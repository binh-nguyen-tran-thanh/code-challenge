import type { TToken } from '@src/models/token';
import uniqueBy from 'lodash.uniqby';

export const mapTokenRateFromApi = (data: TToken[]): TToken[] => {
  const mappedData = data.map((token) => ({
    currency: token.currency,
    data: token.data,
    price: token.price,
    src: `/tokens/${token.currency}.svg`
  }));

  return uniqueBy(mappedData, 'currency');
};
