import { useContext } from "react";
import { globalContext } from "../stateManagement/GlobalStore";

export const FinalStep = () => {
  const { globalState } = useContext(globalContext);
  return (
    <div className="m-3">
      <h1>TMCR Template Steps Complete</h1>
      {globalState.tmcrIndex === 0 && globalState.wizardOptions.length === 1 && (
        <ul className="text-start">
          <li>
            When TMCR is completed, document can be generated with “Generate
            Document” selection
          </li>
          <li>
            When TMCR is completed, second document (pdf/flight manual) can be
            created with “Add second TMCR” selection
          </li>
          <li>
            When finished with TMCR Template select “Close and Reset” to clear
            all user input
          </li>
        </ul>
      )}
      {globalState.tmcrIndex === 0 && globalState.wizardOptions.length > 1 && (
        <ul className="text-start">
          <li>Activate the second TMCR in order to generate your document.</li>
        </ul>
      )}
      {globalState.tmcrIndex === 1 && globalState.wizardOptions.length !== 1 && (
        <ul className="text-start">
          <li>
            When TMCR is completed, document can be generated with “Generate
            Document” selection
          </li>
          <li>
            When finished with TMCR Template select “Close and Reset” to clear
            all user input
          </li>
        </ul>
      )}
    </div>
  );
};
