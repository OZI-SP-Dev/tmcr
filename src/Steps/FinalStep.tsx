import { FunctionComponent } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

export interface IFinalStep {
  options: any,
  setOptions: any
}

export const FinalStep: FunctionComponent<IFinalStep> = (props) => {
  return (
    <div>
      <h1>Some more data entry, maybe based on prior data...</h1>

      <Form.Group as={Row} className="mb-3" controlId="typeOfContract">
        <Form.Label column sm={2}>Type of Contract</Form.Label>
        <Col auto>
          <Form.Select aria-label="Type of Contract select"
            onChange={e => props.setOptions({ ...props.options, type_of_contract: e.target.value })}>
            <option>Firm Fixed Price</option>
            <option>Cost Reimbursement</option>
            <option>Time and Materials</option>
          </Form.Select>
        </Col>
      </Form.Group>
    </div>
  );
}
