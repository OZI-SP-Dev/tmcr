import { Preface } from "./Preface";
import { TOInfo } from "./TOInfo";
import { TOProgramReqs } from "./TOProgramReqs";
import { TMSSReqs } from "./TMSSReqs";
import { Table2 } from "./Table2";
import { Sec2B2 } from "./Sec2B2";
import { Table4 } from "./Table4";
import { Attachment1Graphics } from "./Attachment1Graphics";
import { FinalStep } from "./FinalStep";

export const TMCRStepNames = ["Home", "TO Info", "TO Program Requirements", "TMSS Requirements", "IETM Functional Requirements", "Configurable Requirements", "Delivery Requirements", "Attachment 1", "Review/Print"];
export const TMCRFinalStep = TMCRStepNames.length-1;

const WizardSteps = [<Preface />, <TOInfo />, <TOProgramReqs />, <TMSSReqs />, <Table2 />, <Sec2B2 />, <Table4 />, <Attachment1Graphics />, <FinalStep />];
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
