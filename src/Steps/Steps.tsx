import { Step1 } from "./Step1";
import { FinalStep } from "./FinalStep";

export const TMCRStepNames = ["Home", "TO Info", "TO Program Requirements", "TMSS Requirements", "IETM Functionaly Requirements", "Mandatory Requirements", "Configurable Requirements", "Delivery Requirements", "Spec/Std Interface Records (SIRS)", "Attachment 1", "Attachment 2", "Review/Print"];
export const TMCRFinalStep = 11;

export interface ITMCRWizardSteps {
  currentStep: number
}
const WizardSteps = [, <Step1 />, , , , , , , , , , <FinalStep />];
export const TMCRWizardSteps: React.FunctionComponent<ITMCRWizardSteps> = (props) => {
  return (
    <>
      {WizardSteps[props.currentStep]}
    </>
    );
}
