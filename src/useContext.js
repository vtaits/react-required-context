import { useContext as useContextBase } from "react";
import { DEFAULT_VALUE, ERROR_MESSAGE } from "./constants.js";

/**
 * @import { Context } from "react"
 */

/**
 * @template ValueType
 * @param {Context<ValueType>} context
 */
export function useContext(context) {
	const contextValue = useContextBase(context);

	if (contextValue === DEFAULT_VALUE) {
		throw new Error(ERROR_MESSAGE);
	}

	return contextValue;
}
