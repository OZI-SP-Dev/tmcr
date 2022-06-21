import { useContext } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { globalContext } from '../stateManagement/GlobalStore';

export const FinalStep = () => {
  const { globalState, dispatch } = useContext(globalContext);
  return (
    <div className="m-3">
      <h1>TMCR Template Steps Complete</h1>
      {globalState.tmcrIndex === 0 && globalState.wizardOptions.length === 1 &&
        <h3>You may add a second TMCR, or generate a document based on your inputs.</h3>}
      {globalState.tmcrIndex === 0 && globalState.wizardOptions.length !== 1 &&
        <h3>Activate the second TMCR in order to generate your document.</h3>}
      {globalState.tmcrIndex === 1 && globalState.wizardOptions.length !== 1 &&
        <h3>You may generate a document based on your inputs.</h3>}
    </div>
  );
}
