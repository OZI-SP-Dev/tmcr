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
export const defaultOptions = {
  attachment: "",
  cdrl_sequence_number: "",
  exhibit: "",
  clin: "",
  contract_type: "",
  new_revision: "",
  tmcr_type: "",
}

export const initialState: GlobalStateInterface = {
  wizardOptions: [{...defaultOptions}],
  wizardStep: 0,
  wizardMaxStep: [0, 1],
  tmcrIndex: 0,
  program_mod_system_name: "",
  rfp_contract: "",
  tmcr_date: "",
  toma_name: "",
  toma_office_symbol: "",
  toma_address: "",
  toma_phone: "",
}

/* 
// Changed the format of the object saved in the global store
// That object gets stringified and saved to local storage
// Below we import that object from local storage
// Old object is no longer compatible with our app
// Check for and clear local storage if old format
*/

const isOldFormat = (fls: any) => {
  return !Array.isArray(fls.wizardOptions);
}

function initializeState() {
  let fromLocalStorage = JSON.parse(localStorage.getItem('tmcrGlobalState') as string);
  if (fromLocalStorage && isOldFormat(fromLocalStorage)) {
    console.log("Old state object format detected, removing..")
    localStorage.removeItem('tmcrGlobalState');
    fromLocalStorage = null;
  }
  return fromLocalStorage || initialState;
}

