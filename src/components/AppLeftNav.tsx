import { useContext } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { globalContext } from '../stateManagement/GlobalStore';
import './AppLeftNav.css';

export const AppLeftNav = () => {
  const { globalState, dispatch } = useContext(globalContext);

  return (
    <div className="sidebar-sticky bg-light">
      <h5 className="mt-5 ml-2">Jump to TMCR Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link" onClick={e => dispatch({ type: 'GOTO_STEP', payload: { 'wizardStep': 1 } })}>Step 1</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={e => dispatch({ type: 'GOTO_STEP', payload: { 'wizardStep': 2 } })}>Final Step</a>
        </li>
      </ul>
    </div>
  );
}

