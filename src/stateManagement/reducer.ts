import { ActionType, GlobalStateInterface } from "./types";
import { initialState } from "./GlobalStore";

const Reducer = (state: GlobalStateInterface, action: ActionType): any => {
  switch (action.type) {
    case 'MERGE_OPTION':
      let payload = action.payload;
      return {
        ...state, wizardOptions: {...state.wizardOptions, ...payload}
      };
    case 'NEXT_STEP':
      return {
        ...state,
        wizardStep: state.wizardStep + 1,
        wizardMaxStep: state.wizardStep === state.wizardMaxStep ? state.wizardMaxStep + 1 : state.wizardMaxStep
      }
    case 'PREV_STEP':
      return {
        ...state, wizardStep: state.wizardStep - 1
      }
    case 'GOTO_STEP':
      return {
        //...state, wizardStep: 1
        ...state, ...action.payload
      }
    case 'PURGE_STATE':
      return initialState;
    case 'ADD_TMCR':
      // #TODO Future feature to run through wizard a second time for a 2nd TMCR 
      return state;
    default:
      return state;

  }

}

export default Reducer;