import { useContext, useEffect } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { globalContext } from "../stateManagement/GlobalStore";

export const Table2 = () => {
  const { globalState, dispatch } = useContext(globalContext);
  useEffect(() => {
    if (!globalState.wizardOptions[globalState.tmcrIndex].table2) {
      addRow();
    }
  });

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Bit hacky here using the any type, but it allows us to dynamically name the payload attributes
    let payload: any = {};
    const payloadName = e.target.id.slice(0, e.target.id.lastIndexOf("_"));
    const index = e.target.id.substring(e.target.id.lastIndexOf("_") + 1);

    payload.table2 = [
      ...globalState.wizardOptions[globalState.tmcrIndex].table2,
    ];
    payload.table2[index][payloadName] =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    dispatch({ type: "MERGE_OPTION", payload });
  };

  const addRow = () => {
    let payload: any = {};
    const newEntry = {
      title: "",
      specification: "",
      change: false,
      revision: false,
      supplement: false,
      supplementaltm: false,
      sourcedata: false,
    };

    if (!globalState.wizardOptions[globalState.tmcrIndex].table2) {
      payload.table2 = [];
    } else {
      payload.table2 = [
        ...globalState.wizardOptions[globalState.tmcrIndex].table2,
      ];
    }
    payload.table2.push(newEntry);

    dispatch({ type: "MERGE_OPTION", payload });
  };

  const deleteRow = (index: number) => {
    let table2 = [...globalState.wizardOptions[globalState.tmcrIndex].table2];
    table2.splice(index, index + 1);

    const payload = { table2: table2 };

    dispatch({ type: "MERGE_OPTION", payload });
  };

  return (
    <div className="m-3">
      <h1>TMCR Information</h1>
      <h3>Table 2 Selections...</h3>
      <br />
      <h5>NOTES:</h5>
      <ul className="text-start">
        <li>
          <h5>Complete all applicable boxes</h5>
        </li>
        <li>
          <h5>
            For existing manuals not being updated to latest specification
            requirements, enter “Same style and format” under the specification
            heading
          </h5>
        </li>
      </ul>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>TO Number, Title, or Type of Manual or Chapter</th>
            <th>Specification</th>
            <th>Change</th>
            <th>Revision</th>
            <th>Supplement</th>
            <th>Supplemental TM</th>
            <th>Source Data</th>
          </tr>
        </thead>
        <tbody>
          {globalState.wizardOptions[globalState.tmcrIndex].table2?.map(
            (element: any, i: number) => (
              <tr key={"table2_" + i}>
                <td>{i + 1}</td>
                <td>
                  <Form.Control
                    type="text"
                    aria-label={"Item " + i + " Title"}
                    value={element.title}
                    id={"title_" + i}
                    onChange={handleClick}
                  />
                </td>
                <td>
                  <Form.Control
                    type="text"
                    aria-label={"Item " + i + " Specification"}
                    value={element.specification}
                    id={"specification_" + i}
                    onChange={handleClick}
                  />
                </td>
                <td>
                  <Form.Check
                    type="switch"
                    checked={element.change}
                    id={"change_" + i}
                    aria-label={"Item " + (i + 1) + " Change"}
                    onChange={handleClick}
                  />
                </td>
                <td>
                  <Form.Check
                    type="switch"
                    checked={element.revision}
                    id={"revision_" + i}
                    aria-label={"Item " + (i + 1) + " Revision"}
                    onChange={handleClick}
                  />
                </td>
                <td>
                  <Form.Check
                    type="switch"
                    checked={element.supplement}
                    id={"supplement_" + i}
                    aria-label={"Item " + (i + 1) + " Supplement"}
                    onChange={handleClick}
                  />
                </td>
                <td>
                  <Form.Check
                    type="switch"
                    checked={element.supplementaltm}
                    id={"supplementaltm_" + i}
                    aria-label={"Item " + (i + 1) + " Supplemental TM"}
                    onChange={handleClick}
                  />
                </td>
                <td>
                  <Form.Check
                    type="switch"
                    checked={element.sourcedata}
                    id={"sourcedata_" + i}
                    aria-label={"Item " + (i + 1) + " Source Data"}
                    onChange={handleClick}
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
