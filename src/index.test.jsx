import { expect, test } from "bun:test";
import { renderHook } from "@testing-library/react";
import { createContext } from "./createContext.js";
import { useContext } from "./index.js";

const Context = createContext();

test("should throw error if `useContext` returns default value", () => {
	expect(() => {
		renderHook(() => useContext(Context));
	}).toThrow();
});

test("should return result `useContext` if it is not default value", () => {
	const { result } = renderHook(() => useContext(Context), {
		wrapper: ({ children }) => <Context value="test">{children}</Context>,
	});

	expect(result.current).toBe("test");
});
