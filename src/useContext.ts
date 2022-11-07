import { useContext as useContextBase } from 'react';
import type {
  Context,
} from 'react';

import {
  DEFAULT_VALUE,
  ERROR_MESSAGE,
} from './constants';

export const useContext = <ValueType>(context: Context<ValueType | typeof DEFAULT_VALUE>) => {
  const contextValue = useContextBase(context);

  if (contextValue === DEFAULT_VALUE) {
    throw new Error(ERROR_MESSAGE);
  }

  return contextValue;
};
