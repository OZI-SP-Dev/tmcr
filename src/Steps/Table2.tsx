import { useContext, useEffect } from "react";
import { Form, Table } from "react-bootstrap";
import { globalContext } from '../stateManagement/GlobalStore';

export const Table2 = () => {
  const { globalState, dispatch } = useContext(globalContext);
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Bit hacky here using the any type, but it allows us to dynamically name the payload attributes
    let payload:any = {};
    payload[e.target.id] = e.target.checked;
    
    dispatch({ type: 'MERGE_OPTION', payload});
  }

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Bit hacky here using the any type, but it allows us to dynamically name the payload attributes
    let payload:any = {};
    payload[e.target.id] = e.target.value;
    
    dispatch({ type: 'MERGE_OPTION', payload});
  }
  
  return (
    <div className="m-3">
      <h1>TMCR Information</h1>
      <h3>Table 2 Selections...</h3>
      <br />
      <h5>NOTES:</h5>
      <ul className="text-start">
        <li><h5>Check all applicable boxes</h5></li>
        <li><h5>For existing manuals not being updated to latest specification requirements, enter “Same style and format” under the specification heading</h5></li>
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
        {[...Array(20)].map( (element, i) => 
            <tr key={"table2" + i}>
              <td>{i+1}</td>
              <td>
              <Form.Control type="text"
                aria-label={"Item " + i + " Title"}
                value={globalState.wizardOptions[globalState.tmcrIndex]["table2_title" + i]}
                id={"table2_title" + i}
                onChange={handleTextChange} />
            </td>
            <td>
              <Form.Control type="text"
                aria-label={"Item " + i + " Specification"}
                value={globalState.wizardOptions[globalState.tmcrIndex]["table2_specification" + i]}
                id={"table2_specification" + i}
                onChange={handleTextChange} /> 
            </td>
            <td>
              <Form.Check type="switch" checked={globalState.wizardOptions[globalState.tmcrIndex]["table2_change" + i]} id={"table2_change" + i} aria-label={"Item " + (i+1) + " Change"} onChange={handleClick} />
            </td>
            <td>
              <Form.Check type="switch" checked={globalState.wizardOptions[globalState.tmcrIndex]["table2_revision" + i]} id={"table2_revision" + i} aria-label={"Item " + (i+1) + " Revision"} onChange={handleClick} />
            </td>
            <td>
              <Form.Check type="switch" checked={globalState.wizardOptions[globalState.tmcrIndex]["table2_supplement" + i]} id={"table2_supplement" + i} aria-label={"Item " + (i+1) + " Supplement"} onChange={handleClick} />
            </td>
            <td>
              <Form.Check type="switch" checked={globalState.wizardOptions[globalState.tmcrIndex]["table2_supplemental_tm" + i]} id={"table2_supplemental_tm" + i} aria-label={"Item " + (i+1) + " Supplemental TM"} onChange={handleClick} />
            </td>
            <td>
              <Form.Check type="switch" checked={globalState.wizardOptions[globalState.tmcrIndex]["table2_source_data" + i]} id={"table2_source_data" + i} aria-label={"Item " + (i+1) + " Source Data"} onChange={handleClick} />
            </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
