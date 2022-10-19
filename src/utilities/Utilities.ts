export interface TMCRError {
  errortext: string;
  tmcrindex: number;
}

export function CheckComplete(globalState: any) {
  let errors = [] as TMCRError[];

  /* TOInfo checks */

  /* program_mod_system_name
  /  Handled at the form level as this is a basic requirement
  */

  //globalState.rfp_contract
  if (!globalState.rfp_contract) {
    errors.push({ errortext: "An RFP/Contract is required", tmcrindex: 0 });
  }

  globalState.wizardOptions.forEach((item: any, index: number) => {
    //cdrl_sequence_number
    if (!item.cdrl_sequence_number) {
      errors.push({
        errortext: "A CDRL Sequence number is required",
        tmcrindex: index,
      });
    }

    //globalState.wizardOptions[globalState.tmcrIndex].clin
    if (!item.clin) {
      errors.push({
        errortext: "A CLIN is required",
        tmcrindex: index,
      });
    }
    //globalState.wizardOptions[globalState.tmcrIndex].contract_type
    if (!item.contract_type) {
      errors.push({
        errortext: "A contract Type must be selected",
        tmcrindex: index,
      });
    }
    //globalState.wizardOptions[globalState.tmcrIndex].contract_type === "Other"
    //    globalState.wizardOptions[globalState.tmcrIndex].other_contract_type
    if (item.contract_type === "Other" && !item.other_contract_type) {
      errors.push({
        errortext: "A contract type must be selected",
        tmcrindex: index,
      });
    }
  });

  return errors;
}
