import { createContext as createContextBase } from "react";

import { DEFAULT_VALUE } from "./constants";

export const createContext = <ValueType>() =>
	createContextBase<ValueType>(DEFAULT_VALUE as unknown as ValueType);
