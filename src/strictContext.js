import { createContext } from "preact";
import { useContext } from "preact/hooks";

export function createStrictContext(options = {}) {
  const Context = createContext(undefined);
  Context.displayName = options.name; // for DevTools

  function useContextHook() {
    const context = useContext(Context);
    if (context === undefined) {
      throw new Error(
        options.errorMessage ||
          `${options.name || ""} Context Provider is missing`
      );
    }
    return context;
  }

  return [Context.Provider, useContextHook];
}
