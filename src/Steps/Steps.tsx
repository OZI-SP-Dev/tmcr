import { Preface } from "./Preface";
import { TOInfo } from "./TOInfo";
import { TOProgramReqs } from "./TOProgramReqs";
import { TMSSReqs } from "./TMSSReqs";
import { Table2 } from "./Table2";
import { ConfigurableRequirements } from "./ConfigurableRequirements";
import { DeliveryRequirementsContainer } from "./DeliveryRequirementsContainer";
import { Attachment1Graphics } from "./Attachment1Graphics";
import { FinalStep } from "./FinalStep";

export const TMCRStepNames = [
  "Home",
  "TMCR Information",
  "TOMA Details",
  "TMSS Requirements",
  "Table 2",
  "Configurable Requirements",
  "Delivery Requirements",
  "Attachment 1",
  "Complete",
];
export const TMCRFinalStep = TMCRStepNames.length - 1;

const WizardSteps = [
  <Preface />,
  <TOInfo />,
  <TOProgramReqs />,
  <TMSSReqs />,
  <Table2 />,
  <ConfigurableRequirements />,
  <DeliveryRequirementsContainer />,
  <Attachment1Graphics />,
  <FinalStep />,
];
// #TODO merge step names and wizard steps into a single object

export interface ITMCRWizardSteps {
  currentStep: number;
}

export const TMCRWizardSteps: React.FunctionComponent<ITMCRWizardSteps> = (
  props
) => {
  return <>{WizardSteps[props.currentStep]}</>;
};
