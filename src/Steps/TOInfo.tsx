import { ChangeEvent, useContext, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { globalContext } from "../stateManagement/GlobalStore";
import { NewAcqModal } from "./NewAcqModal";

export const TOInfo = () => {
  const { globalState, dispatch } = useContext(globalContext);
  const [showModal, setShowModal] = useState(false);

  const handleTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    let payload: any = {};

    // Force re-select of subtype and ctr maintained TOs when main type changes
    payload.new_revision = "";
    payload.ctr_maintained_conversion_tos = false;

    payload.tmcr_type = e.target.value;
    dispatch({ type: "MERGE_OPTION", payload });
  };

  /**
   * When the sub type changes to New Acq, display the waiver modal
   * for S1000D and Linear, but not CDA.
   */
  const handleSubTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.id === "new" &&
      globalState.wizardOptions[globalState.tmcrIndex].tmcr_type !== "CDA"
    ) {
      setShowModal(true);
    } else {
      let payload: any = {};
      if (e.target.id !== "conversion") {
        payload.ctr_maintained_conversion_tos = false;
      }
      payload.new_revision = e.target.id;
      dispatch({ type: "MERGE_OPTION", payload });
    }
  };

  const handleNewAcqConfirmation = (result: boolean) => {
    if (result) {
      const payload = {
        ctr_maintained_conversion_tos: false,
        new_revision: "new",
      };
      dispatch({ type: "MERGE_OPTION", payload });
    }
    setShowModal(false);
  };

  return (
    <div className="m-3">
      <h1>TMCR Information</h1>
      <h3>General TMCR Selections...</h3>

      <Form.Group as={Row} className="mb-3" controlId="programModSystemName">
        <Form.Label column sm={2}>
          System Name
        </Form.Label>
        <Col>
          <Form.Control
            required
            type="text"
            value={globalState.program_mod_system_name}
            onChange={(e) =>
              dispatch({
                type: "MERGE_GLOBAL_OPTION",
                payload: { program_mod_system_name: e.target.value },
              })
            }
            readOnly={globalState.tmcrIndex === 1}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="attachment">
        <Form.Label column sm={2}>
          Attachment
        </Form.Label>
        <Col>
          <Form.Control
            type="text"
            value={globalState.wizardOptions[globalState.tmcrIndex].attachment}
            onChange={(e) =>
              dispatch({
                type: "MERGE_OPTION",
                payload: { attachment: e.target.value },
              })
            }
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="cdrlSequenceNumber">
        <Form.Label column sm={2}>
          CDRL Sequence Number
        </Form.Label>
        <Col>
          <Form.Control
            required
            type="text"
            value={
              globalState.wizardOptions[globalState.tmcrIndex]
                .cdrl_sequence_number
            }
            onChange={(e) =>
              dispatch({
                type: "MERGE_OPTION",
                payload: { cdrl_sequence_number: e.target.value },
              })
            }
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="exhibit">
        <Form.Label column sm={2}>
          Exhibit
        </Form.Label>
        <Col>
          <Form.Control
            type="text"
            value={globalState.wizardOptions[globalState.tmcrIndex].exhibit}
            onChange={(e) =>
              dispatch({
                type: "MERGE_OPTION",
                payload: { exhibit: e.target.value },
              })
            }
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="rfp_contract">
        <Form.Label column sm={2}>
          RFP/Contract
        </Form.Label>
        <Col>
          <Form.Control
            required
            type="text"
            value={globalState.rfp_contract}
            onChange={(e) =>
              dispatch({
                type: "MERGE_GLOBAL_OPTION",
                payload: { rfp_contract: e.target.value },
              })
            }
            readOnly={globalState.tmcrIndex === 1}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="clin">
        <Form.Label column sm={2}>
          CLIN
        </Form.Label>
        <Col>
          <Form.Control
            required
            type="text"
            value={globalState.wizardOptions[globalState.tmcrIndex].clin}
            onChange={(e) =>
              dispatch({
                type: "MERGE_OPTION",
                payload: { clin: e.target.value },
              })
            }
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="tmcrDate">
        <Form.Label column sm={2}>
          Date
        </Form.Label>
        <Col>
          <Form.Control
            required
            type="date"
            value={globalState.tmcr_date}
            onChange={(e) =>
              dispatch({
                type: "MERGE_GLOBAL_OPTION",
                payload: { tmcr_date: e.target.value },
              })
            }
            readOnly={globalState.tmcrIndex === 1}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="contractType">
        <Form.Label column sm={2}>
          Contract Type
        </Form.Label>
        <Col>
          <Form.Select
            required
            aria-label="Contract Type"
            value={
              globalState.wizardOptions[globalState.tmcrIndex].contract_type
            }
            onChange={(e) =>
              dispatch({
                type: "MERGE_OPTION",
                payload: { contract_type: e.target.value },
              })
            }
          >
            <option></option>
            <option>Firm-Fixed-Price (FFP)</option>
            <option>Fixed-Price Economic Price Adjustment (FPEPA)</option>
            <option>Fixed-Price Incentive Firm Target (FPIF)</option>
            <option>Fixed-Price Award-Fee (FPAF)</option>
            <option>
              Fixed-Price Prospective Price Redetermination (FP3R)
            </option>
            <option>Cost-Plus-Incentive-Fee (CPIF)</option>
            <option>Cost-Plus-Award-Fee (CPAF)</option>
            <option>Cost-Plus-Fixed-Fee (CPFF)</option>
            <option>Cost or Cost-Sharing (C or CS)</option>
            <option>Time &amp; Materials (T&amp;M)</option>
            <option>Other</option>
          </Form.Select>
        </Col>
      </Form.Group>

      {globalState.wizardOptions[globalState.tmcrIndex].contract_type ===
        "Other" && (
        <Form.Group as={Row} className="mb-3 offset-sm-1" controlId="clin">
          <Form.Label column sm={2}>
            Other Contract Type
          </Form.Label>
          <Col className="">
            <Form.Control
              required={
                globalState.wizardOptions[globalState.tmcrIndex]
                  .contract_type === "Other"
              }
              type="text"
              value={
                globalState.wizardOptions[globalState.tmcrIndex]
                  .other_contract_type
              }
              onChange={(e) =>
                dispatch({
                  type: "MERGE_OPTION",
                  payload: { other_contract_type: e.target.value },
                })
              }
            />
          </Col>
        </Form.Group>
      )}

      <Form.Group as={Row} className="mb-3" controlId="tmcrType">
        <Form.Label column sm={2}>
          TMCR Type
        </Form.Label>
        <Col>
          <Form.Select
            required
            aria-label="TMCR Type"
            value={globalState.wizardOptions[globalState.tmcrIndex].tmcr_type}
            onChange={handleTypeChange}
          >
            <option></option>
            {(globalState.tmcrIndex === 0 ||
              globalState.wizardOptions[0].tmcr_type !== "S1000D") && (
              <option value="S1000D">S1000D (IETM)</option>
            )}
            {(globalState.tmcrIndex === 0 ||
              globalState.wizardOptions[0].tmcr_type !== "Linear") && (
              <option value="Linear">Linear (SGML/XML)</option>
            )}
            {(globalState.tmcrIndex === 0 ||
              globalState.wizardOptions[0].tmcr_type !== "CDA") && (
              <option value="CDA">CDA (i.e., CDA/COTS</option>
            )}
          </Form.Select>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="newRevision">
        <Form.Label column sm={2}>
          New Acquisition Or Revision (Mod)
        </Form.Label>
        <Col className="text-start">
          <Form.Check
            required
            type="radio"
            checked={
              globalState.wizardOptions[globalState.tmcrIndex].new_revision ===
              "new"
            }
            name="newRevision"
            label="New Acquisition"
            id="new"
            onChange={handleSubTypeChange}
          />
          <Form.Check
            required
            type="radio"
            checked={
              globalState.wizardOptions[globalState.tmcrIndex].new_revision ===
              "revision"
            }
            name="newRevision"
            label="Revision (i.e. Modification)"
            id="revision"
            onChange={handleSubTypeChange}
          />
          <Form.Check
            required
            type="radio"
            checked={
              globalState.wizardOptions[globalState.tmcrIndex].new_revision ===
              "conversion"
            }
            name="newRevision"
            label="Conversion (S1000D Only)"
            id="conversion"
            disabled={
              !(
                globalState.wizardOptions[globalState.tmcrIndex].tmcr_type ===
                "S1000D"
              )
            }
            onChange={handleSubTypeChange}
          />
        </Col>
      </Form.Group>

      <Form.Group className="text-start">
        <Col sm={{ offset: 1 }}>
          <Form.Check
            type="switch"
            checked={
              globalState.wizardOptions[globalState.tmcrIndex].jnwps_eod_data
            }
            id="jnwps_eod_data"
            label="Does your program have Joint Nuclear Weapons Publications System (JNWPS) or Non-nuclear Explosive Ordnance Disposal (EOD)?"
            onChange={(e) =>
              dispatch({
                type: "MERGE_OPTION",
                payload: { jnwps_eod_data: e.target.checked },
              })
            }
          />
        </Col>
      </Form.Group>

      {globalState.wizardOptions[globalState.tmcrIndex].new_revision ===
        "conversion" && (
        <>
          <Form.Group className="text-start">
            <Col sm={{ offset: 1 }}>
              <Form.Check
                type="switch"
                checked={
                  globalState.wizardOptions[globalState.tmcrIndex]
                    .ctr_maintained_conversion_tos
                }
                id="ctr_maintained_conversion_tos"
                label="Is the contractor maintaining TOs after the conversion?"
                onChange={(e) =>
                  dispatch({
                    type: "MERGE_OPTION",
                    payload: {
                      ctr_maintained_conversion_tos: e.target.checked,
                    },
                  })
                }
              />
            </Col>
          </Form.Group>
        </>
      )}

      <NewAcqModal show={showModal} close={handleNewAcqConfirmation} />
    </div>
  );
};
