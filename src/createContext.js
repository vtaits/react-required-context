import { createContext as createContextBase } from "react";
import { DEFAULT_VALUE } from "./constants.js";

/**
 * @template ValueType
 */
export function createContext() {
	return createContextBase(
		/** @type {ValueType} */ (/** @type {unknown} */ (DEFAULT_VALUE)),
	);
}
