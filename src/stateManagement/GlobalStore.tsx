import { createContext, ReactElement, ReactNode, useReducer } from "react";
import Reducer from './reducer';
import { ContextType, GlobalStateInterface } from './types';

export function GlobalStore({ children }: { children: ReactNode }): ReactElement {
  const [globalState, dispatch] = useReducer(Reducer, initializeState());
  return <globalContext.Provider value={{ globalState, dispatch }}>{children}</globalContext.Provider>
}

export const globalContext = createContext({} as ContextType);

export const initialState: GlobalStateInterface = {
  wizardOptions: {
    program_mod_system_name: "",
    type_of_tmcr: ""
  },
  wizardStep: 1
}

function initializeState() {
  return initialState;
}
