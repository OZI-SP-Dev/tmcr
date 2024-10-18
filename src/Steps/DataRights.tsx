import { useContext } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { globalContext } from "../stateManagement/GlobalStore";

export const DataRights = () => {
  const { globalState, dispatch } = useContext(globalContext);

  const dataRightsOptions = [
    {
      ID: "Unlimited Rights",
      desc: "The Government shall have unlimited rights in technical data that are data pertaining to an item, component, or process which has been or will be developed exclusively with Government funds; studies, analyses, test data, or similar data produced for this contract, when the study, analysis, test, or similar work was specified as an element of performance; created exclusively with Government funds in the performance of a contract that does not require the development, manufacture, construction, or production of items, components, or processes; form, fit, and function data; necessary for installation, operation, maintenance, or training purposes (other than detailed manufacturing or process data); corrections or changes to technical data furnished to the Contractor by the Government; otherwise publicly available or have been released or disclosed by the Contractor or subcontractor without restrictions on further use, release or disclosure, other than a release or disclosure resulting from the sale, transfer, or other assignment of interest in the technical data to another party or the sale or transfer of some or all of a business entity or its assets to another party; data in which the Government has obtained unlimited rights under another Government contract or as a result of negotiations; or data furnished to the Government, under this or any other Government contract or subcontract thereunder, with Government purpose license rights or limited rights and the restrictive condition(s) has/have expired; or Government purpose rights and the Contractor's exclusive right to use such data for commercial purposes has expired.",
    },
    {
      ID: "Government Purpose Rights",
      desc: "The Government shall have government purpose rights for a five-year period, or such other period as may be negotiated, in technical data that pertain to items, components, or processes developed with mixed funding except when the Government is entitled to unlimited rights in such data as provided in paragraphs (b)(1)(ii) and (b)(1)(iv) through (b)(1)(ix) of this clause (DFARS 252.227-7013); or created with mixed funding in the performance of a contract that does not require the development, manufacture, construction, or production of items, components, or processes. The five-year period, or such other period as may have been negotiated, shall commence upon execution of the contract, subcontract, letter contract (or similar contractual instrument), contract modification, or option exercise that required development of the items, components, or processes or creation of the data described in paragraph (b)(2)(i)(B) of this clause (DFARS 252.227-7013). Upon expiration of the five-year or other negotiated period, the Government shall have unlimited rights in the technical data. The Government shall not release or disclose technical data in which it has government purpose rights unless prior to release or disclosure, the intended recipient is subject to the non-disclosure agreement at 227.7103-7 of the Defense Federal Acquisition Regulation Supplement (DFARS); or the recipient is a Government contractor receiving access to the data for performance of a Government contract that contains the clause at DFARS 252.227-7025 , Limitations on the Use or Disclosure of Government-Furnished Information Marked with Restrictive Legends. The Contractor has the exclusive right, including the right to license others, to use technical data in which the Government has obtained government purpose rights under this contract for any commercial purpose during the time period specified in the government purpose rights legend prescribed in paragraph (f)(2) of this clause (DFARS 252.227-7013).",
    },
    {
      ID: "Limited Rights",
      desc: "Except as provided in paragraphs (b)(1)(ii) and (b)(1)(iv) through (b)(1)(ix) of this clause (DFARS 252.227-7013), the Government shall have limited rights in technical data pertaining to items, components, or processes developed exclusively at private expense and marked with the limited rights legend prescribed in paragraph (f) of this clause; or created exclusively at private expense in the performance of a contract that does not require the development, manufacture, construction, or production of items, components, or processes. The Government shall require a recipient of limited rights data for emergency repair or overhaul to destroy the data and all copies in its possession promptly following completion of the emergency repair/overhaul and to notify the Contractor that the data have been destroyed. The Contractor, its subcontractors, and suppliers are not required to provide the Government additional rights to use, modify, reproduce, release, perform, display, or disclose technical data furnished to the Government with limited rights. However, if the Government desires to obtain additional rights in technical data in which it has limited rights, the Contractor agrees to promptly enter into negotiations with the Contracting Officer to determine whether there are acceptable terms for transferring such rights. All technical data in which the Contractor has granted the Government additional rights shall be listed or described in a license agreement made part of the contract. The license shall enumerate the additional rights granted the Government in such data. The Contractor acknowledges that Limited rights data are authorized to be released or disclosed to covered Government support contractors. The Contractor will be notified of such release or disclosure; the Contractor (or the party asserting restrictions as identified in the limited rights legend) may require each such covered Government support contractor to enter into a non-disclosure agreement directly with the Contractor (or the party asserting restrictions) regarding the covered Government support contractor’s use of such data, or alternatively, that the Contractor (or party asserting restrictions) may waive in writing the requirement for a non-disclosure agreement; and any such non-disclosure agreement shall address the restrictions on the covered Government support contractor's use of the limited rights data as set forth in the clause at 252.227-7025 , Limitations on the Use or Disclosure of Government-Furnished Information Marked with Restrictive Legends. The non-disclosure agreement shall not include any additional terms and conditions unless mutually agreed to by the parties to the non-disclosure agreement.",
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
