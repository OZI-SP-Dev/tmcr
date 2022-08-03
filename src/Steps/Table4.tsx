import { useContext, useEffect } from "react";
import { Button, Col, Form, InputGroup, Row, Table } from "react-bootstrap";
import { globalContext } from "../stateManagement/GlobalStore";

export const Table4 = () => {
  const { globalState, dispatch } = useContext(globalContext);
  useEffect(() => {
    let pdr_days: number | undefined =
      globalState.wizardOptions[globalState.tmcrIndex].pdr_days;
    if (pdr_days === undefined) {
      const payload: any = {
        pdr_days: 0,
        cdr_days: 0,
        process_review_days: 0,
        verification_days: 0,
        prepub_review_days: 0,
      };
      dispatch({ type: "MERGE_OPTION", payload });
    }
  });

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Bit hacky here using the any type, but it allows us to dynamically name the payload attributes
    let payload: any = {};
    payload[e.target.id] = e.target.checked;

    dispatch({ type: "MERGE_OPTION", payload });
  };

  const handleCustomClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    // placeholder
    let payload: any = {};
    const payloadName = e.target.id.slice(0, e.target.id.lastIndexOf("_"));
    const index = e.target.id.substr(e.target.id.lastIndexOf("_") + 1);

    payload.table4_custom = [
      ...globalState.wizardOptions[globalState.tmcrIndex].table4_custom,
    ];
    payload.table4_custom[index][payloadName] =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    dispatch({ type: "MERGE_OPTION", payload });
  };

  const addRow = () => {
    let payload: any = {};
    const newEntry = {
      Text: "",
      pdr: false,
      cdr: false,
      process_review: false,
      verification: false,
      prepub_review: false,
      final_delivery: false,
    };

    if (!globalState.wizardOptions[globalState.tmcrIndex].table4_custom) {
      payload.table4_custom = [];
    } else {
      payload.table4_custom = [
        ...globalState.wizardOptions[globalState.tmcrIndex].table4_custom,
      ];
    }
    payload.table4_custom.push(newEntry);

    dispatch({ type: "MERGE_OPTION", payload });
  };

  const knownDeliverables = [
    {
      Id: "cdsb",
      Text: "Common Source Data Base (CDSB)",
    },
    {
      Id: "brex",
      Text: "Business Rules Exchange (BREX) files",
    },
    {
      Id: "dmrl",
      Text: "Data Management Requirements List (DMRL)",
    },
    {
      Id: "stylesheets",
      Text: "Stylesheets",
    },
    {
      Id: "generation",
      Text: "Output Generation Tools/Files",
    },
    {
      Id: "multimedia",
      Text: "Multimedia Files",
    },
    {
      Id: "graphics",
      Text: "Graphic Files",
    },
    {
      Id: "auth_guide",
      Text: "Authoring Guide(s)",
    },
    {
      Id: "product_plan",
      Text: "Technical Manual Content and Product Plan",
    },
    {
      Id: "cm_plan",
      Text: "Configuration Control Management Plan",
    },
  ];

  return (
    <div className="m-3">
      <h1>ITEM Functionality Requirements</h1>
      <h3>Table 4 - S1000D TM Delivery Requirements</h3>
      <br />
      <h5>NOTES:</h5>
      <ul className="text-start">
        <li>
          <h5>Select deliverable for required event</h5>
        </li>
      </ul>

      <Form.Group as={Row} className="mb-3" controlId="deliveryAddress">
        <Form.Label column sm={2}>
          Delivery address
        </Form.Label>
        <Col>
          <Form.Control
            required
            as="textarea"
            value={
              globalState.wizardOptions[globalState.tmcrIndex].delivery_address
            }
            rows={4}
            placeholder="Enter physical mailing address, electronic delivery location or web access point"
            onChange={(e) =>
              dispatch({
                type: "MERGE_OPTION",
                payload: { delivery_address: e.target.value },
              })
            }
          />
        </Col>
      </Form.Group>
      <Table bordered hover responsive>
        <thead>
          <tr>
            <th></th>
            <th colSpan={6}>Number of days data required prior to event</th>
          </tr>
          <tr>
            <th></th>
            <th>PDR (Preliminary Design Review)</th>
            <th>CDR (Critical Design Review)</th>
            <th>In Process Review(s)</th>
            <th>Verification </th>
            <th>Prepublication Review</th>
            <th>Final Delivery</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td style={{ minWidth: "8em" }}>
              <InputGroup>
                <Form.Control
                  required
                  type="number"
                  value={
                    globalState.wizardOptions[globalState.tmcrIndex].pdr_days ||
                    0
                  }
                  onChange={(e) =>
                    dispatch({
                      type: "MERGE_OPTION",
                      payload: { pdr_days: e.target.value },
                    })
                  }
                />
                <InputGroup.Text>Days</InputGroup.Text>
              </InputGroup>
            </td>
            <td style={{ minWidth: "8em" }}>
              <InputGroup>
                <Form.Control
                  required
                  type="number"
                  value={
                    globalState.wizardOptions[globalState.tmcrIndex].cdr_days ||
                    0
                  }
                  onChange={(e) =>
                    dispatch({
                      type: "MERGE_OPTION",
                      payload: { cdr_days: e.target.value },
                    })
                  }
                />
                <InputGroup.Text>Days</InputGroup.Text>
              </InputGroup>
            </td>
            <td style={{ minWidth: "8em" }}>
              <InputGroup>
                <Form.Control
                  required
                  type="number"
                  value={
                    globalState.wizardOptions[globalState.tmcrIndex]
                      .process_review_days || 0
                  }
                  onChange={(e) =>
                    dispatch({
                      type: "MERGE_OPTION",
                      payload: { process_review_days: e.target.value },
                    })
                  }
                />
                <InputGroup.Text>Days</InputGroup.Text>
              </InputGroup>
            </td>
            <td style={{ minWidth: "8em" }}>
              <InputGroup>
                <Form.Control
                  required
                  type="number"
                  value={
                    globalState.wizardOptions[globalState.tmcrIndex]
                      .verification_days || 0
                  }
                  onChange={(e) =>
                    dispatch({
                      type: "MERGE_OPTION",
                      payload: { verification_days: e.target.value },
                    })
                  }
                />
                <InputGroup.Text>Days</InputGroup.Text>
              </InputGroup>
            </td>
            <td style={{ minWidth: "8em" }}>
              <InputGroup>
                <Form.Control
                  required
                  type="number"
                  value={
                    globalState.wizardOptions[globalState.tmcrIndex]
                      .prepub_review_days || 0
                  }
                  onChange={(e) =>
                    dispatch({
                      type: "MERGE_OPTION",
                      payload: { prepub_review_days: e.target.value },
                    })
                  }
                />
                <InputGroup.Text>Days</InputGroup.Text>
              </InputGroup>
            </td>
            <td></td>
          </tr>
          <tr>
            <th>Deliverable</th>
          </tr>
          {knownDeliverables.map((element, i) => (
            <tr key={element.Id}>
              <td>{element.Text}</td>
              <td>
                <Form.Check
                  type="switch"
                  checked={
                    globalState.wizardOptions[globalState.tmcrIndex][
                      element.Id + "_pdr"
                    ] || false
                  }
                  id={element.Id + "_pdr"}
                  onChange={handleClick}
                />
              </td>
              <td>
                <Form.Check
                  type="switch"
                  checked={
                    globalState.wizardOptions[globalState.tmcrIndex][
                      element.Id + "_cdr"
                    ] || false
                  }
                  id={element.Id + "_cdr"}
                  onChange={handleClick}
                />
              </td>
              <td>
                <Form.Check
                  type="switch"
                  checked={
                    globalState.wizardOptions[globalState.tmcrIndex][
                      element.Id + "_process_review"
                    ] || false
                  }
                  id={element.Id + "_process_review"}
                  onChange={handleClick}
                />
              </td>
              <td>
                <Form.Check
                  type="switch"
                  checked={
                    globalState.wizardOptions[globalState.tmcrIndex][
                      element.Id + "_verification"
                    ] || false
                  }
                  id={element.Id + "_verification"}
                  onChange={handleClick}
                />
              </td>
              <td>
                <Form.Check
                  type="switch"
                  checked={
                    globalState.wizardOptions[globalState.tmcrIndex][
                      element.Id + "_prepub_review"
                    ] || false
                  }
                  id={element.Id + "_prepub_review"}
                  onChange={handleClick}
                />
              </td>
              <td>
                <Form.Check
                  type="switch"
                  checked={
                    globalState.wizardOptions[globalState.tmcrIndex][
                      element.Id + "_final_delivery"
                    ] || false
                  }
                  id={element.Id + "_final_delivery"}
                  onChange={handleClick}
                />
              </td>
            </tr>
          ))}

          {globalState.wizardOptions[globalState.tmcrIndex].table4_custom?.map(
            (element: any, i: number) => (
              <tr key={"table4_custom_" + i}>
                <td>
                  <Form.Control
                    required
                    value={element.Text}
                    id={"Text_" + i}
                    onChange={handleCustomClick}
                  />
                </td>
                <td>
                  <Form.Check
                    type="switch"
                    checked={element.pdr || false}
                    id={"pdr_" + i}
                    onChange={handleCustomClick}
                  />
                </td>
                <td>
                  <Form.Check
                    type="switch"
                    checked={element.cdr || false}
                    id={"cdr_" + i}
                    onChange={handleCustomClick}
                  />
                </td>
                <td>
                  <Form.Check
                    type="switch"
                    checked={element.process_review || false}
                    id={"process_review_" + i}
                    onChange={handleCustomClick}
                  />
                </td>
                <td>
                  <Form.Check
                    type="switch"
                    checked={element.verification || false}
                    id={"verification_" + i}
                    onChange={handleCustomClick}
                  />
                </td>
                <td>
                  <Form.Check
                    type="switch"
                    checked={element.prepub_review || false}
                    id={"prepub_review_" + i}
                    onChange={handleCustomClick}
                  />
                </td>
                <td>
                  <Form.Check
                    type="switch"
                    checked={element.final_delivery || false}
                    id={"final_delivery_" + i}
                    onChange={handleCustomClick}
                  />
                </td>
              </tr>
            )
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={7} className="text-end">
              <Button variant="outline-primary" onClick={addRow}>
                Add custom row
              </Button>
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};
