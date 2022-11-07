import { createContext as createContextBase } from 'react';

import {
  DEFAULT_VALUE,
} from './constants';

export const createContext = <
ValueType,
>() => createContextBase<ValueType | typeof DEFAULT_VALUE>(DEFAULT_VALUE);
