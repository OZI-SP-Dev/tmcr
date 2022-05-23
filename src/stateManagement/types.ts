import { Dispatch } from 'react';

export interface GlobalStateInterface {
  wizardOptions: any;
  wizardStep: number;
  wizardMaxStep: number;
}

export type ActionType = {
  type: string;
  payload?: any;
}

export type ContextType = {
  globalState: GlobalStateInterface;
  dispatch: Dispatch<ActionType>;
}
