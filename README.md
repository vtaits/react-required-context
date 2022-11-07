[![NPM](https://img.shields.io/npm/v/@vtaits/create-required-context.svg)](https://www.npmjs.com/package/@vtaits/create-required-context)

# @vtaits/react-required-context

React context that has no default value and must be defined to be used.

You shouldn't make fallback for complex structure, or write extra code to check if context is defined or not.

```typescript
import {
  createContext,
  useContext,
} from '@vtaits/react-required-context';
```

## Examples

### With defined provider of context

```typescript
import {
  createContext,
  useContext,
} from '@vtaits/react-required-context';

const Context = createContext<VeryComplesStructure>(); // You shouldn't define fallback or something like `null` value

function ChildComponent() {
  const value = useContext(Context); // `value` is equal to `complexValue` that provided below

  return <div />;
}

function App() {
  return (
    <Context.Provider value={complexValue}> // complexValue muse be of type `VeryComplesStructure`
      <ChildComponent />
    </Context.Provider>
  );
}
```

### Without defined provider of context

```typescript
import {
  createContext,
  useContext,
} from '@vtaits/react-required-context';

const Context = createContext<VeryComplesStructure>(); // You shouldn't define fallback or something like `null` value

function App() {
  const value = useContext(Context); // throws an error because there is no provider for this context

  return (
    <div />
  );
}
```
