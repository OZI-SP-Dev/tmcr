import { useContext } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { globalContext } from '../stateManagement/GlobalStore';

export const Step1 = () => {
  const { globalState, dispatch } = useContext(globalContext);
  return (
    <div className="m-3">
      <h1>Basic data entry</h1>
      <h3>we can put anything in here we'd like</h3>

      <Form.Group as={Row} className="mb-3" controlId="programModSystemName">
        <Form.Label column sm={2}>System Name</Form.Label>
        <Col>
          <Form.Control required type="text"
            value={globalState.wizardOptions.program_mod_system_name}
            onChange={e => dispatch({ type: 'MERGE_OPTION', payload: {'program_mod_system_name': e.target.value}})} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="typeOfTmcr">
        <Form.Label column sm={2}>Type of TMCR</Form.Label>
        <Col>
          <Form.Select required aria-label="Type of TMCR"
            value={globalState.wizardOptions.type_of_tmcr}
            onChange={e => dispatch({ type: 'MERGE_OPTION', payload: { 'type_of_tmcr': e.target.value }})}>
            <option>S1000D</option>
            <option>Linear</option>
            <option>CDA</option>
          </Form.Select>
        </Col>
      </Form.Group>
    </div>
  );
}
