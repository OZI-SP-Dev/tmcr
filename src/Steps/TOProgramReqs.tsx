import { useContext } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { globalContext } from "../stateManagement/GlobalStore";

export const TOProgramReqs = () => {
  const { globalState, dispatch } = useContext(globalContext);
  return (
    <div className="m-3">
      <h1>TOMA Details</h1>
      <h3>TO Manager details to be added to document(s)...</h3>

      <Form.Group as={Row} className="mb-3" controlId="tomaName">
        <Form.Label column sm={2}>
          TOMA Name
        </Form.Label>
        <Col>
          <Form.Control
            type="text"
            value={globalState.toma_name}
            onChange={(e) =>
              dispatch({
                type: "MERGE_GLOBAL_OPTION",
                payload: { toma_name: e.target.value },
              })
            }
            readOnly={globalState.tmcrIndex === 1}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="tomaOfficeSymbol">
        <Form.Label column sm={2}>
          TOMA Office Symbol
        </Form.Label>
        <Col>
          <Form.Control
            type="text"
            value={globalState.toma_office_symbol}
            onChange={(e) =>
              dispatch({
                type: "MERGE_GLOBAL_OPTION",
                payload: { toma_office_symbol: e.target.value },
              })
            }
            readOnly={globalState.tmcrIndex === 1}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="tomaAddress">
        <Form.Label column sm={2}>
          TOMA Address
        </Form.Label>
        <Col>
          <Form.Control
            as="textarea"
            value={globalState.toma_address}
            rows={3}
            onChange={(e) =>
              dispatch({
                type: "MERGE_GLOBAL_OPTION",
                payload: { toma_address: e.target.value },
              })
            }
            readOnly={globalState.tmcrIndex === 1}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="tomaPhone">
        <Form.Label column sm={2}>
          TOMA Phone Number (Commercial)
        </Form.Label>
        <Col>
          <Form.Control
            type="text"
            value={globalState.toma_phone}
            onChange={(e) =>
              dispatch({
                type: "MERGE_GLOBAL_OPTION",
                payload: { toma_phone: e.target.value },
              })
            }
            readOnly={globalState.tmcrIndex === 1}
          />
        </Col>
      </Form.Group>
    </div>
  );
};
