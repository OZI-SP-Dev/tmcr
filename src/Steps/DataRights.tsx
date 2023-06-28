import { useContext } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { globalContext } from "../stateManagement/GlobalStore";

export const DataRights = () => {
  const { globalState, dispatch } = useContext(globalContext);

  const dataRightsOptions = [
    {
      ID: "Unlimited Rights",
      desc: "The Government shall have unlimited rights in technical data that are created exclusively with Government funds in the performance of a contract that does not require the development, manufacture, construction, or production of items, components, or processes; form, fit, and function data; necessary for installation, operation, maintenance, or training purposes (other than detailed manufacturing or process data).",
    },
    {
      ID: "Government Purpose Rights",
      desc: "The Government shall have government purpose rights for a five-year period, or such other period as may be negotiated, in technical data that pertain to items, components, or processes developed with mixed funding except when the Government is entitled to unlimited rights in such data as provided in paragraphs (b)(1)(ii) and (b)(1)(iv) through (b)(1)(ix) of this clause (DFARS 252.227-7013); or created with mixed funding in the performance of a contract that does not require the development, manufacture, construction, or production of items, components, or processes.",
    },
    {
      ID: "Limited Rights",
      desc: "Except as provided in paragraphs (b)(1)(ii) and (b)(1)(iv) through (b)(1)(ix) of this clause (DFARS 252.227-7013), the Government shall have limited rights in technical data pertaining to items, components, or processes developed exclusively at private expense and marked with the limited rights legend prescribed in paragraph (f) of this clause; or created exclusively at private expense in the performance of a contract that does not require the development, manufacture, construction, or production of items, components, or processes.",
    },
    {
      ID: "Specifically Negotiated License Rights",
      desc: "The standard license rights granted to the Government under paragraphs (b)(1) through (b)(3) of this clause (DFARS 252.227-7013), including the period during which the Government shall have government purpose rights in technical data, may be modified by mutual agreement to provide such rights as the parties consider appropriate but shall not provide the Government lesser rights than are enumerated in paragraph (a)(14) of this clause (DFARS 252.227-7013). Any rights so negotiated shall be identified in a license agreement made part of this contract.",
    },
    {
      ID: "Prior Government Rights",
      desc: "Technical data that will be delivered, furnished, or otherwise provided to the Government under this contract, in which the Government has previously obtained rights shall be delivered, furnished, or provided with the pre-existing rights, unless the parties have agreed otherwise; or any restrictions on the Government's rights to use, modify, reproduce, release, perform, display, or disclose the data have expired or no longer apply.",
    },
    {
      ID: "Release from Liability",
      desc: "The Contractor agrees to release the Government from liability for any release or disclosure of technical data made in accordance with paragraph (a)(14) or (b)(2)(iii) of this clause (DFARS 252.227-7013), in accordance with the terms of a license negotiated under paragraph (b)(4) of this clause (DFARS 252.227-7013), or by others to whom the recipient has released or disclosed the data and to seek relief solely from the party who has improperly used, modified, reproduced, released, performed, displayed, or disclosed Contractor data marked with restrictive legends.",
    },
  ];

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: "MERGE_OPTION",
      payload: { data_rights: e.target.id },
    });
  };

  return (
    <div className="m-3">
      <h1 className="m-3">Data Rights</h1>
      <Form.Group className="text-start mb-4">
        {dataRightsOptions.map((element) => (
          <Row className="mb-2" key={element.ID}>
            <Col sm={2}>
              <Form.Check
                type="radio"
                name="data_rights"
                checked={
                  globalState.wizardOptions[globalState.tmcrIndex]
                    .data_rights === element.ID || false
                }
                id={element.ID}
                label={element.ID}
                required
                onChange={handleClick}
              />
            </Col>
            <Col>{element.desc}</Col>
          </Row>
        ))}
      </Form.Group>

      {globalState.wizardOptions[globalState.tmcrIndex].data_rights ===
        "Specifically Negotiated License Rights" && (
        <Form.Group as={Row} className="mb-3" controlId="specialDataRights">
          <Form.Label column sm={2}>
            Additional Information on Specifically Negotiated License Rights
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
