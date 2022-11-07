import type {
  Context,
} from 'react';

import { jest } from '@jest/globals';

import { DEFAULT_VALUE } from '../constants';

jest.unstable_mockModule('react', () => ({
  createContext: jest.fn(),
}));

const {
  createContext: createContextBase,
} = await import('react');

const {
  createContext,
} = await import('../createContext');

const mockedCreateContextBase = jest.mocked(createContextBase);

afterEach(() => {
  jest.resetAllMocks();
});

test('should create context with default value', () => {
  const resultContext = Symbol('result context');

  mockedCreateContextBase.mockReturnValue(resultContext as unknown as Context<unknown>);

  const result = createContext();

  expect(result).toBe(resultContext);
  expect(mockedCreateContextBase).toHaveBeenCalledTimes(1);
  expect(mockedCreateContextBase).toHaveBeenCalledWith(DEFAULT_VALUE);
});
