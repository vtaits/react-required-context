import type {
  Context,
} from 'react';

import { jest } from '@jest/globals';

import { DEFAULT_VALUE } from '../constants';

jest.unstable_mockModule('react', () => ({
  useContext: jest.fn(),
}));

const {
  useContext: useContextBase,
} = await import('react');

const {
  useContext,
} = await import('../useContext');

const mockedUseContextBase = jest.mocked(useContextBase);

afterEach(() => {
  jest.resetAllMocks();
});

test('should throw error if `useContext` returns default value', () => {
  mockedUseContextBase.mockReturnValue(DEFAULT_VALUE);

  const testContext = Symbol('test context') as unknown as Context<unknown | typeof DEFAULT_VALUE>;

  expect(() => {
    useContext(testContext);
  }).toThrow();
});

test('should return result `useContext` if it is not default value', () => {
  const contextValue = Symbol('context value');

  mockedUseContextBase.mockReturnValue(contextValue);

  const testContext = Symbol('test context') as unknown as Context<
  typeof contextValue | typeof DEFAULT_VALUE
  >;

  const result = useContext(testContext);

  expect(result).toBe(contextValue);
  expect(mockedUseContextBase).toHaveBeenCalledTimes(1);
  expect(mockedUseContextBase).toHaveBeenCalledWith(testContext);
});
