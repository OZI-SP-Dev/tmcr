export interface TMCRError {
  errortext: string;
  tmcrindex: number;
}

export function CheckComplete(globalState: any) {
  let errors = [] as TMCRError[];

  /* TOInfo checks */

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

  /* TOMA checks */
  if (
    !globalState.toma_name ||
    !globalState.toma_office_symbol ||
    !globalState.toma_address ||
    !globalState.toma_phone
  ) {
    errors.push({
      errortext: "Complete TOMA details are required",
      tmcrindex: 0,
    });
  }

  /* TMSS Requirements */
  // No required fields on this page

  /* Table 2 */
  // No required fields on this page

  /* Configurable Requirements */
  // No required fields on this page

  /* Delivery Requirements */
  globalState.wizardOptions.forEach((item: any, index: number) => {
    /*Required fields for S1000D only */
    if (item.tmcr_type === "S1000D") {
      if (!item.delivery_address) {
        errors.push({
          errortext: "A Delivery Requirements delivery address must be entered",
          tmcrindex: index,
        });
      }
    }
  });

  /* Attachment 1 */
  // No required fields on this page

  return errors;
}
