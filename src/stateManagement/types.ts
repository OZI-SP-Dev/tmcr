import { Dispatch } from "react";

export interface GlobalStateInterface {
  wizardOptions: any;
  wizardStep: number;
  wizardMaxStep: [number, number];
  tmcrIndex: number;
  program_mod_system_name: string;
  rfp_contract: string;
  tmcr_date: string;
  toma_name: string;
  toma_office_symbol: string;
  toma_address: string;
  toma_phone: string;
}

export type ActionType = {
  type: string;
  payload?: any;
};

export type ContextType = {
  globalState: GlobalStateInterface;
  dispatch: Dispatch<ActionType>;
};

export type Delivery = {
  paper: number;
  sgml: boolean;
  pdf: boolean;
  xml: boolean;
  cddvd: number;
};
