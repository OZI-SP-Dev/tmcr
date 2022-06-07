import { Preface } from "./Preface";
import { TOInfo } from "./TOInfo";
import { TOProgramReqs } from "./TOProgramReqs";
import { TMSSReqs } from "./TMSSReqs";
import { Table2 } from "./Table2";
import { FinalStep } from "./FinalStep";

export const TMCRStepNames = ["Home", "TO Info", "TO Program Requirements", "TMSS Requirements", "IETM Functionaly Requirements", "Mandatory Requirements", "Configurable Requirements", "Delivery Requirements", "Spec/Std Interface Records (SIRS)", "Attachment 1", "Attachment 2", "Review/Print"];
export const TMCRFinalStep = TMCRStepNames.length-1;
const WizardSteps = [<Preface />, <TOInfo />, <TOProgramReqs />, <TMSSReqs />, <Table2 />, , , , , , , <FinalStep />];
// #TODO merge step names and wizard steps into a single object

export interface ITMCRWizardSteps {
  currentStep: number
}

export const TMCRWizardSteps: React.FunctionComponent<ITMCRWizardSteps> = (props) => {
  return (
    <>
      {WizardSteps[props.currentStep]}
    </>
    );
}
