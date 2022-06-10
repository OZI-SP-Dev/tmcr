import { createContext, ReactElement, ReactNode, useEffect, useReducer, useRef } from "react";
import Reducer from './reducer';
import { ContextType, GlobalStateInterface } from './types';

export function GlobalStore({ children }: { children: ReactNode }): ReactElement {
  const [globalState, dispatch] = useReducer(Reducer, initializeState());
  const initialRenderGlobalState = useRef(true);

  useEffect(() => {
    if (initialRenderGlobalState.current) {
      initialRenderGlobalState.current = false;
    } else {
      localStorage.setItem('tmcrGlobalState', JSON.stringify(globalState));
    }

  }, [globalState]);

  return <globalContext.Provider value={{ globalState, dispatch }}>{children}</globalContext.Provider>
}

export const globalContext = createContext({} as ContextType);

export const initialState: GlobalStateInterface = {
  wizardOptions: {
    program_mod_system_name: "",
    attachment: "",
    cdrl_sequence_number: "",
    exhibit: "",
    rfp_contract: "",
    clin: "",
    tmcr_date: "",
    contract_type: "",
    new_revision: "",
    tmcr_type: "",
    toma_name: "",
    toma_office_symbol: "",
    toma_address: "",
    toma_phone: "",
    "tmss-1-a": false,
    "tmss-1-b": false,
    "tmss-1-c": false,
    "tmss-1-d": false,
    "tmss-1-e": false,
    "tmss-2-a": false,
    "tmss-2-b": false,
    "tmss-2-c": false,
    "tmss-3-a": false,
    "tmss-3-b": false,
    "tmss-4-a": false,
    "tmss-4-b": false,
    "tmss-4-c": false,
    "tmss-4-d": false,
    "tmss-4-e": false,
    "tmss-5-a": false,
    "tmss-6-a": false,
    "tmss-7-a": false,
    "tmss-7-b": false,
    "tmss-7-c": false,
    "tmss-7-d": false,
    "tmss-7-e": false,
    "tmss-7-f": false,
    "tmss-7-g": false,
    "tmss-7-h": false,
    "tmss-7-i": false,
    "tmss-7-j": false,
    "tmss-7-k": false,
    "tmss-7-l": false,
    "tmss-7-m": false,
    "tmss-8-a": false,
    "tmss-9-a": false,
    "tmss-9-b": false,
    "tmss-9-c": false,
    "tmss-9-d": false,
    "tmss-9-e": false,
    "tmss-9-f": false,
    "tmss-9-g": false,
    "tmss-9-h": false,
    "tmss-10-a": false,
    "tmss-10-b": false,
    "tmss-10-c": false,
    "tmss-11-a": false,
    "tmss-12-a": false,
    "tmss-12-b": false,
    "tmss-13-a": false,
    "tmss-14-a": false,
    "tmss-15-a": false,
    "tmss-15-b": false,
    "tmss-15-c": false,
    "tmss-15-d": false,
    "tmss-15-e": false,
    "tmss-15-f": false,
    "tmss-15-g": false,
    "tmss-15-h": false,
    "tmss-16-a": false,
    "tmss-16-a-1": false,
    "tmss-16-a-2": false,
    "tmss-16-a-3": false,
    "tmss-16-a-4": false,
    "tmss-16-a-5": false,
    "tmss-16-b": false,
    "tmss-16-c": false,
    "tmss-16-c-1": false,
    "tmss-16-c-2": false,
    "tmss-16-c-3": false,
    "tmss-16-c-4": false,
    "tmss-16-c-5": false,
    "tmss-16-c-6": false,
    "tmss-16-c-7": false,
    "tmss-16-c-8": false,
    "tmss-16-c-9": false,
    "tmss-16-c-10": false,
    "tmss-16-c-11": false,
    "tmss-16-d": false,
    "tmss-17-a": false

  },
  wizardStep: 0,
  wizardMaxStep: 0
}

function initializeState() {
  const fromLocalStorage = JSON.parse(localStorage.getItem('tmcrGlobalState') as string);
  return fromLocalStorage || initialState;
}
