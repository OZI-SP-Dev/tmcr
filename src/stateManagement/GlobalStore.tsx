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
    toma_phone: ""
  },
  wizardStep: 0,
  wizardMaxStep: 0
}

function initializeState() {
  const fromLocalStorage = JSON.parse(localStorage.getItem('tmcrGlobalState') as string);
  return fromLocalStorage || initialState;
}
