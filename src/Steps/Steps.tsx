import { Preface } from "./Preface";
import { TOInfo } from "./TOInfo";
import { TOProgramReqs } from "./TOProgramReqs";
import { TMSSReqs } from "./TMSSReqs";
import { FinalStep } from "./FinalStep";

export const TMCRStepNames = ["Home", "TO Info", "TO Program Requirements", "TMSS Requirements", "IETM Functionaly Requirements", "Mandatory Requirements", "Configurable Requirements", "Delivery Requirements", "Spec/Std Interface Records (SIRS)", "Attachment 1", "Attachment 2", "Review/Print"];
export const TMCRFinalStep = 11;

export interface ITMCRWizardSteps {
  currentStep: number
}
const WizardSteps = [<Preface />, <TOInfo />, <TOProgramReqs />, <TMSSReqs />, , , , , , , , <FinalStep />];
export const TMCRWizardSteps: React.FunctionComponent<ITMCRWizardSteps> = (props) => {
  return (
    <>
      {WizardSteps[props.currentStep]}
    </>
    );
}
