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
        ...state, wizardStep: state.wizardStep + 1
      }
    case 'PREV_STEP':
      return {
        ...state, wizardStep: state.wizardStep - 1
      }
    case 'PURGE_STATE':
      return initialState;
    default:
      return state;

  }

}

export default Reducer;