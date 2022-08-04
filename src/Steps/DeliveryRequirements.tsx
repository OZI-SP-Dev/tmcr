import { ChangeEvent, FunctionComponent } from "react";
import { Delivery } from "../stateManagement/types";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";

export interface IDeliveryRequirements {
  delivery: Delivery;
  handleClick: any;
  i: number;
  deliveryName: string;
}

export const DeliveryRequirements: FunctionComponent<IDeliveryRequirements> = (
  props
) => {
  if (!props.delivery) {
    return <></>;
  }

  const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
    props.handleClick(e, props.deliveryName);
  };

  return (
    <Container>
      <Col>
        <Row>
          <InputGroup>
            <InputGroup.Text>Paper</InputGroup.Text>
            <Form.Control
              type="number"
              min="0"
              value={props.delivery.paper}
              id={props.deliveryName + "_paper_" + props.i}
              onChange={handleClick}
            />
          </InputGroup>
        </Row>
        <Form.Group>
          <Form.Label>SGML</Form.Label>
          <Form.Check
            inline
            type="switch"
            checked={props.delivery.sgml}
            id={props.deliveryName + "_sgml_" + props.i}
            onChange={handleClick}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>PDF</Form.Label>
          <Form.Check
            inline
            type="switch"
            checked={props.delivery.pdf}
            id={props.deliveryName + "_pdf_" + props.i}
            onChange={handleClick}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>XML</Form.Label>
          <Form.Check
            inline
            type="switch"
            checked={props.delivery.xml}
            id={props.deliveryName + "_xml_" + props.i}
            onChange={handleClick}
          />
        </Form.Group>
        <Row>
          <InputGroup>
            <InputGroup.Text>CD-DVD</InputGroup.Text>
            <Form.Control
              type="number"
              min="0"
              value={props.delivery.cddvd}
              id={props.deliveryName + "_cddvd_" + props.i}
              onChange={handleClick}
            />
          </InputGroup>
        </Row>
      </Col>
    </Container>
  );
};
