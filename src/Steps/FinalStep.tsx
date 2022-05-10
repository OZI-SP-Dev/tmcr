import { useContext } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { globalContext } from '../stateManagement/GlobalStore';

export const FinalStep = () => {
  const { globalState, dispatch } = useContext(globalContext);
  return (
    <div>
      <h1>Some more data entry, maybe based on prior data...</h1>

      <Form.Group as={Row} className="mb-3" controlId="typeOfContract">
        <Form.Label column sm={2}>Type of Contract</Form.Label>
        <Col>
          <Form.Select aria-label="Type of Contract select"
            value={globalState.wizardOptions.type_of_contract}
            onChange={e => dispatch({ type: 'MERGE_OPTION', payload: {'type_of_contract': e.target.value}})}>
            <option>Firm Fixed Price</option>
            <option>Cost Reimbursement</option>
            <option>Time and Materials</option>
          </Form.Select>
        </Col>
      </Form.Group>
    </div>
  );
}
