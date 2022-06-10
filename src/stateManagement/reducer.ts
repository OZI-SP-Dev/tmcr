import { ActionType, GlobalStateInterface } from "./types";
import { defaultOptions, initialState } from "./GlobalStore";

const Reducer = (state: GlobalStateInterface, action: ActionType): any => {
  switch (action.type) {
    case 'MERGE_OPTION':
      let wizardOptions = state.wizardOptions;
      wizardOptions[state.tmcrIndex] = {...state.wizardOptions[state.tmcrIndex], ...action.payload};
      return {
        ...state, wizardOptions
      };
    case 'NEXT_STEP':
      let wizardMaxStep = state.wizardMaxStep;
      if ( wizardMaxStep[state.tmcrIndex] <= state.wizardStep) {
        wizardMaxStep[state.tmcrIndex] = state.wizardStep + 1;
      }
      return {
        ...state,
        wizardStep: state.wizardStep + 1,
        wizardMaxStep
      }
    case 'PREV_STEP':
      return {
        ...state, wizardStep: state.wizardStep - 1
      }
    case 'GOTO_STEP':
      return {
        ...state, ...action.payload
      }
    case 'PURGE_STATE':
      return initialState;
    case 'ADD_TMCR':
      // #TODO Future feature to run through wizard a second time for a 2nd TMCR 
      if (state.wizardOptions.length === 1) {
        let wizardOptions = [...state.wizardOptions];
        wizardOptions.push({...defaultOptions});
        return {
          ...state,
          wizardOptions,
          wizardStep: 1,
          tmcrIndex: 1
        }
      }
      return state;
    case 'LOAD_TMCR':
      let wizardStep = state.wizardStep;
      if ( wizardStep > state.wizardMaxStep[action.payload] ) {
        wizardStep = state.wizardMaxStep[action.payload];
      }
      return {...state, tmcrIndex: action.payload, wizardStep }
    default:
      return state;

  }

}

export default Reducer;
