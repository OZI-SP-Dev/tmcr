import { useContext, useEffect } from "react";
import { Button, Col, Form, InputGroup, Row, Table } from "react-bootstrap";
import { globalContext } from "../stateManagement/GlobalStore";

export const TMDeliveryRequirementsS1000D = () => {
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
        final_delivery_days: 0,
      };
      dispatch({ type: "MERGE_OPTION", payload });
    }
  }, [dispatch, globalState.tmcrIndex, globalState.wizardOptions]);

  let tableNumber = 4;
  if (globalState.wizardOptions[globalState.tmcrIndex].tmcr_type === "CDA") {
    tableNumber = 3;
  }

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
    const index = e.target.id.substring(e.target.id.lastIndexOf("_") + 1);

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

  const deleteRow = (index: number) => {
    let table4_custom = [
      ...globalState.wizardOptions[globalState.tmcrIndex].table4_custom,
    ];
    table4_custom.splice(index, 1);

    const payload = { table4_custom: table4_custom };

    dispatch({ type: "MERGE_OPTION", payload });
  };

  const toggleRow = (row: string) => {
    let toggle = true;
    const thisTMCR = globalState.wizardOptions[globalState.tmcrIndex];
    if (
      thisTMCR[row + "_pdr"] &&
      thisTMCR[row + "_cdr"] &&
      thisTMCR[row + "_process_review"] &&
      thisTMCR[row + "_verification"] &&
      thisTMCR[row + "_prepub_review"] &&
      thisTMCR[row + "_final_delivery"]
    ) {
      toggle = false;
    }
    const payload: any = {};
    payload[row + "_pdr"] = toggle;
    payload[row + "_cdr"] = toggle;
    payload[row + "_process_review"] = toggle;
    payload[row + "_verification"] = toggle;
    payload[row + "_prepub_review"] = toggle;
    payload[row + "_final_delivery"] = toggle;

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

  const minChecks = new Map();
  const reviews = [
    "pdr",
    "cdr",
    "process_review",
    "verification",
    "prepub_review",
    "final_delivery",
  ];

  // Set minimum values based on if standard items are selected or not
  reviews.forEach((name) => {
    let min = 0;
    knownDeliverables.forEach((element) => {
      if (
        globalState.wizardOptions[globalState.tmcrIndex][
          element.Id + "_" + name
        ]
      ) {
        min = 1;
      }
    });
    minChecks.set(name, min);
  });

  // Update minimum values based on if custom items are selected or not
  globalState.wizardOptions[globalState.tmcrIndex].table4_custom?.forEach(
    (element: any) => {
      reviews.forEach((name) => {
        if (element[name]) {
          minChecks.set(name, 1);
        }
      });
    }
  );

  return (
    <div className="m-3">
      <h1>Table {tableNumber}</h1>
      <h3>TM Delivery Requirements</h3>
      <br />
      <h5>NOTES:</h5>
      <ul className="text-start">
        <li>
          <h5>
            Select deliverables and annotate the number of days required for
            each event
          </h5>
        </li>
      </ul>

      <Form.Group as={Row} className="mb-3" controlId="deliveryAddress">
        <Form.Label column sm={2}>
          Delivery address
        </Form.Label>
        <Col>
          <Form.Control
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
            <th style={{ minWidth: "8em" }}></th>
          </tr>
          <tr>
            <th></th>
            <th>PDR (Preliminary Design Review)</th>
            <th>CDR (Critical Design Review)</th>
            <th>In Process Review(s)</th>
            <th>Verification </th>
            <th>Prepublication Review</th>
            <th>Final Delivery</th>
            <th></th>
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
                  min={minChecks.get("pdr")}
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
                  min={minChecks.get("cdr")}
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
                  min={minChecks.get("process_review")}
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
                  min={minChecks.get("verification")}
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
                  min={minChecks.get("prepub_review")}
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
            <td>
              <InputGroup>
                <Form.Control
                  required
                  type="number"
                  min={minChecks.get("final_delivery")}
                  value={
                    globalState.wizardOptions[globalState.tmcrIndex]
                      .final_delivery_days || 0
                  }
                  onChange={(e) =>
                    dispatch({
                      type: "MERGE_OPTION",
                      payload: { final_delivery_days: e.target.value },
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
            <th colSpan={7}></th>
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
              <td>
                <Button
                  onClick={(e) => {
                    toggleRow(element.Id);
                  }}
                >
                  Toggle Row
                </Button>
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
                <td>
                  <Button
                    onClick={(e) => {
                      deleteRow(i);
                    }}
                  >
                    Delete
                  </Button>
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
