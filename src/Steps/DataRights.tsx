import { useContext } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { globalContext } from "../stateManagement/GlobalStore";

export const DataRights = () => {
  const { globalState, dispatch } = useContext(globalContext);

  return (
    <div className="m-3">
      <h1>Data Rights</h1>

      <Form.Group as={Row} className="mb-3" controlId="dataRights">
        <Form.Label column sm={2}>
          Data Rights
        </Form.Label>
        <Col>
          <Form.Select
            aria-label="Data Rights"
            value={globalState.wizardOptions[globalState.tmcrIndex].data_rights}
            onChange={(e) =>
              dispatch({
                type: "MERGE_OPTION",
                payload: { data_rights: e.target.value },
              })
            }
            required
          >
            <option></option>
            <option>Unlimited Rights</option>
            <option>Government Purpose Rights</option>
            <option>Limited Rights</option>
            <option>Specifically Negotiated License Rights</option>
            <option>Prior Government Rights</option>
            <option>Release from Liability</option>
          </Form.Select>
        </Col>
      </Form.Group>

      {globalState.wizardOptions[globalState.tmcrIndex].data_rights ===
        "Specifically Negotiated License Rights" && (
        <Form.Group as={Row} className="mb-3" controlId="specialDataRights">
          <Form.Label column sm={2}>
            Additional Information on Specifically Negotiated Rights
          </Form.Label>
          <Col>
            <Form.Control
              as="textarea"
              value={
                globalState.wizardOptions[globalState.tmcrIndex]
                  .special_data_rights
              }
              rows={3}
              onChange={(e) =>
                dispatch({
                  type: "MERGE_OPTION",
                  payload: { special_data_rights: e.target.value },
                })
              }
              required
            />
            <Form.Text style={{ float: "left" }}>
              This information will be appended to the data rights paragraph.
            </Form.Text>
          </Col>
        </Form.Group>
      )}
    </div>
  );
};
