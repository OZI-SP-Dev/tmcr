import { FunctionComponent } from "react";
import { Col, Form, Row } from "react-bootstrap";

export interface IStep1 {
  options: any,
  setOptions: any
}

export const Step1: FunctionComponent<IStep1> = (props) => {
  return (
    <div className="m-3">
      <h1>Basic data entry</h1>
      <h3>we can put anything in here we'd like</h3>

      <Form.Group as={Row} className="mb-3" controlId="programModSystemName">
        <Form.Label column sm={2}>System Name</Form.Label>
        <Col auto>
          <Form.Control type="text"
            onChange={e => props.setOptions({ ...props.options, program_mod_system_name: e.target.value })} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="includeStuff">
        <Form.Label column sm={2}>Include optional section</Form.Label>
        <Col auto>
          <Form.Check
            style={{ textAlign: 'left' }}
            checked={props.options.include_stuff}
            onChange={e => props.setOptions({ ...props.options, include_stuff: e.target.checked })} />
        </Col>
      </Form.Group>
    </div>
  );
}
