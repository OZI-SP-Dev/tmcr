import { useContext } from "react";
import { Button } from "react-bootstrap";
import { globalContext } from '../stateManagement/GlobalStore';
import { TMCRStepNames } from '../Steps/Steps';
import './AppLeftNav.css';

export const AppLeftNav = () => {
  const { globalState, dispatch } = useContext(globalContext);
  
  let steps = TMCRStepNames;

  return (
    <div className="sidebar-sticky bg-light">
      <h5 className="mt-5">Jump to Section</h5>
      <div className="d-grid gap-2 m-2">
        {steps.map( (element, i) => <Button key={element} disabled={globalState.wizardMaxStep < i} variant={globalState.wizardStep===i ? "success" : globalState.wizardMaxStep >= i ? "primary" : "secondary"} className="text-start" onClick={e => dispatch({ type: 'GOTO_STEP', payload: { 'wizardStep': i } })}>{element}</Button>)}
      </div>
    </div>
  );
}

