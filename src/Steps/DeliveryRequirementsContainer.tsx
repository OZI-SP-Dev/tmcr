import { useContext } from "react";
import { globalContext } from "../stateManagement/GlobalStore";
import { TMDeliveryRequirementsS1000D } from "./TMDeliveryRequirementsS1000D";
import { TMDeliveryRequirements } from "./TMDeliveryRequirements";

export const DeliveryRequirementsContainer = () => {
  const { globalState } = useContext(globalContext);
  if (globalState.wizardOptions[globalState.tmcrIndex].tmcr_type === "S1000D")
    return <TMDeliveryRequirementsS1000D />;
  return <TMDeliveryRequirements />;
};
