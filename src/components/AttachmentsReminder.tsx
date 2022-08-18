import { FunctionComponent, useContext } from "react";
import { Toast, ToastContainer } from "react-bootstrap";
import { globalContext } from "../stateManagement/GlobalStore";

export interface IAttachmentsReminder {
  handleClose: VoidFunction;
  show: boolean;
}

export const AttachmentsReminder: FunctionComponent<IAttachmentsReminder> = (
  props
) => {
  const { globalState } = useContext(globalContext);
  const isS1000D =
    globalState.wizardOptions[0]?.tmcr_type === "S1000D" ||
    globalState.wizardOptions[1]?.tmcr_type === "S1000D";

  const isLinear =
    globalState.wizardOptions[0]?.tmcr_type === "Linear" ||
    globalState.wizardOptions[1]?.tmcr_type === "Linear";

  return (
    <ToastContainer position="middle-center">
      <Toast show={props.show} onClose={props.handleClose} animation={true}>
        <Toast.Header>
          Remember to attach the SIRs
          {isS1000D && " and S1000D Decision Point Tool"}
          {isLinear && " and TMSS Tailoring Tool"}.
        </Toast.Header>
      </Toast>
    </ToastContainer>
  );
};
