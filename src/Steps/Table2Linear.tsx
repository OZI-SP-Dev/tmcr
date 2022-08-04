import { ChangeEvent, ChangeEventHandler, useContext, useEffect } from "react";
import { Button, Form, InputGroup, Table } from "react-bootstrap";
import { globalContext } from "../stateManagement/GlobalStore";
import { Delivery } from "../stateManagement/types";
import { DeliveryRequirements } from "./DeliveryRequirements";

const defaultDelivery: Delivery = {
  paper: 0,
  sgml: false,
  pdf: false,
  xml: false,
  cddvd: 0,
};

export const Table2Linear = () => {
  const { globalState, dispatch } = useContext(globalContext);
  useEffect(() => {
    if (!globalState.wizardOptions[globalState.tmcrIndex].table2linear) {
      addRow();
    }
  });

  if (!globalState.wizardOptions[globalState.tmcrIndex].table2linear) {
    return <></>;
  }

  const handleClick: ChangeEventHandler = (
    e: ChangeEvent<HTMLInputElement>,
    delivery_type?: string
  ) => {
    // Bit hacky here using the any type, but it allows us to dynamically name the payload attributes
    let payload: any = {};
    let payloadName = e.target.id.slice(0, e.target.id.lastIndexOf("_"));
    const index = e.target.id.substr(e.target.id.lastIndexOf("_") + 1);

    payload.table2linear = [
      ...globalState.wizardOptions[globalState.tmcrIndex].table2linear,
    ];

    if (delivery_type) {
      payloadName = payloadName.replace(delivery_type + "_", "");
      payload.table2linear[index][delivery_type][payloadName] =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
    } else {
      payload.table2linear[index][payloadName] =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
    }

    dispatch({ type: "MERGE_OPTION", payload });
  };

  const addRow = () => {
    let payload: any = {};
    const newEntry = {
      address: "",
      inprocess: { ...defaultDelivery },
      verification: { ...defaultDelivery },
      prepublication: { ...defaultDelivery },
      final: { ...defaultDelivery },
    };

    if (!globalState.wizardOptions[globalState.tmcrIndex].table2linear) {
      payload.table2linear = [];
    } else {
      payload.table2linear = [
        ...globalState.wizardOptions[globalState.tmcrIndex].table2linear,
      ];
    }
    payload.table2linear.push(newEntry);

    dispatch({ type: "MERGE_OPTION", payload });
  };

  return (
    <div className="m-3">
      <h1>Table 2</h1>
      <h3>Linear TM Delivery Requirements</h3>
      <br />
      <ul className="text-start">
        <li>
          <h5>
            For Paper and CD/DVD media delivery indicate required quantity
          </h5>
        </li>
        <li>
          <h5>For all other media types indicate (Y)es or (N)o</h5>
        </li>
        <li>
          <h5>
            TCTO requirements are specified in the contract vehicle approving
            the TCTO.
          </h5>
        </li>
        <li>
          <h5>All SGML file delivers MUST include ALL graphic files.</h5>
        </li>
        <li>
          <h5>All TO files must not be password protected</h5>
        </li>
      </ul>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th></th>
            <th>In Process Review(s)</th>
            <th>Verification</th>
            <th>Prepublication Review</th>
            <th>Final TO Delivery</th>
          </tr>
          <tr>
            <th></th>
            <th colSpan={4}>Number of days data required prior to event</th>
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
                    globalState.wizardOptions[globalState.tmcrIndex]
                      .in_process_review_days || 0
                  }
                  onChange={(e) =>
                    dispatch({
                      type: "MERGE_OPTION",
                      payload: { in_process_review_days: e.target.value },
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
                      .prepublication_review_days || 0
                  }
                  onChange={(e) =>
                    dispatch({
                      type: "MERGE_OPTION",
                      payload: { prepublication_review_days: e.target.value },
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
                      .final_to_delivery_days || 0
                  }
                  onChange={(e) =>
                    dispatch({
                      type: "MERGE_OPTION",
                      payload: { final_to_delivery_days: e.target.value },
                    })
                  }
                />
                <InputGroup.Text>Days</InputGroup.Text>
              </InputGroup>
            </td>
          </tr>
          <tr>
            <th>
              Physical mailing address, electronic delivery location, or web
              access point
            </th>
            <th colSpan={4}>Quantities to deliver / include for above event</th>
          </tr>
          {globalState.wizardOptions[globalState.tmcrIndex].table2linear?.map(
            (element: any, i: number) => (
              <tr key={"table2linear_" + i}>
                <td>
                  <Form.Group className="mb-3" controlId={"address_" + i}>
                    <Form.Control
                      required
                      as="textarea"
                      value={element.address}
                      rows={4}
                      placeholder="Enter physical mailing address, electronic delivery location or web access point"
                      onChange={handleClick}
                    />
                  </Form.Group>
                </td>
                <td>
                  <DeliveryRequirements
                    delivery={element.inprocess}
                    handleClick={handleClick}
                    i={i}
                    deliveryName="inprocess"
                  />
                </td>
                <td>
                  <DeliveryRequirements
                    delivery={element.verification}
                    handleClick={handleClick}
                    i={i}
                    deliveryName="verification"
                  />
                </td>
                <td>
                  <DeliveryRequirements
                    delivery={element.prepublication}
                    handleClick={handleClick}
                    i={i}
                    deliveryName="prepublication"
                  />
                </td>
                <td>
                  <DeliveryRequirements
                    delivery={element.final}
                    handleClick={handleClick}
                    i={i}
                    deliveryName="final"
                  />
                </td>
                <td>Delete row button</td>
              </tr>
            )
          )}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={8} className="text-end">
              <Button variant="outline-primary" onClick={addRow}>
                Add row
              </Button>
            </td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
};
