import { useContext } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { globalContext } from '../stateManagement/GlobalStore';

export const TMSSReqs = () => {
  const { globalState, dispatch } = useContext(globalContext);
  return (
    <div className="m-3">
      <h1>TMSS Requirements</h1>
      <h3>Select which manuals will be required...</h3>

      <ol className="text-start">
        <li>Inspection Tos</li>
        <Form.Group as={Row} controlId="newRevision">
          <Col className="text-start">
            <Form.Check required type="checkbox"
              checked={globalState.wizardOptions.new_revision === "new"}
              name="newRevision"
              label="a.  Inspection and Maintenance Requirements (-6) Manual"
              id="new"
              onChange={e => dispatch({ type: 'MERGE_OPTION', payload: { 'new_revision': e.target.id } })} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="newRevision">
          <Col className="text-start">
            <Form.Check required type="checkbox"
              checked={globalState.wizardOptions.new_revision === "new"}
              name="newRevision"
              label="b.  Acceptance and Functional Check Flight (FCF) Procedures (-6CF) Manual"
              id="new"
              onChange={e => dispatch({ type: 'MERGE_OPTION', payload: { 'new_revision': e.target.id } })} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="newRevision">
          <Col className="text-start">
            <Form.Check required type="checkbox"
              checked={globalState.wizardOptions.new_revision === "new"}
              name="newRevision"
              label="Acceptance and Functional Check Flight (-6CL) Checklist"
              id="new"
              onChange={e => dispatch({ type: 'MERGE_OPTION', payload: { 'new_revision': e.target.id } })} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="newRevision">
          <Col className="text-start">
            <Form.Check required type="checkbox"
              checked={globalState.wizardOptions.new_revision === "new"}
              name="newRevision"
              label="d.  Inspection Workcards (-6WC)"
              id="new"
              onChange={e => dispatch({ type: 'MERGE_OPTION', payload: { 'new_revision': e.target.id } })} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="newRevision">
          <Col className="text-start">
            <Form.Check required type="checkbox"
              checked={globalState.wizardOptions.new_revision === "new"}
              name="newRevision"
              label="e.  Maintenance/Operations Checklists"
              id="new"
              onChange={e => dispatch({ type: 'MERGE_OPTION', payload: { 'new_revision': e.target.id } })} />
          </Col>
        </Form.Group>
        <li>Cargo Aircraft Loading and Offloading Tos</li>
      </ol>



      a.  Inspection and Maintenance Requirements (-6) Manual
      b.  Acceptance and Functional Check Flight (FCF) Procedures (-6CF) Manual
      c.  Acceptance and Functional Check Flight (-6CL) Checklist
      d.  Inspection Workcards (-6WC)
      e.  Maintenance/Operations Checklists
      Cargo Aircraft Loading and Offloading Tos
      a.     Loading Instructions Manual
      b.    Nuclear Weapon Cargo Loading Manual
      c.     Checklists
      Weight and Balance (Aircraft)
      a.  Loading Data Manual
      b.  Sample Basic Weight Checklists
      Flight Manuals
      a.  Flight Manual
      b.  Performance Data Manual
      c.  Mission Crew Manual
      d.  Supplemental Manual
      e.  Abbreviated Flight Crew Checklist
      List of Applicable Publications
      Structural Repair Manuals (for Aircraft)
      Munitions/Weapons Loading Procedures, Non- nuclear and Nuclear Tos
      a.  Nuclear Weapons Basic Information and Loading Procedures
      b.  Nuclear Weapons Loading Procedures
      c.  Non-nuclear Munitions Basic Information
      d.  Non-nuclear Loading Procedures
      e.  Non-nuclear Munitions Loading Standard Data Packages (SDPs)
      f.  Loading Procedures Checklist
      g.  Single Loading Procedures Checklist
      h.  Integrated Loading Procedures Checklists
      i.  Family Group Loading Procedures Checklist
      j.  Nuclear Weapons Loading Procedure Checklists
      k. Functional Check Procedures Checklist
      l.  NATO Stage B Cross-Servicing Checklists
      m.  End of Runway (EOR) Procedures Checklist
      "Space Operations and Support Documentation TOs
      -- MIL-SPEC (Intercontinental Ballistic Missiles)
      "
      Nuclear and Non-nuclear Weapon Delivery and Aircrew Procedures Manuals and Checklists
      a.  Non-nuclear Weapon Delivery Manual
      b.  Aircrew Nuclear Bomb Delivery Manual (Strategic Bomber Aircraft)
      c.  Aircrew Nuclear Missile Delivery Manual (Strategic Bomber Aircraft)
      d.  Aircrew Nuclear Bomb Delivery Manual (Tactical Aircraft)
      e.  Non-nuclear Weapon Delivery Checklist
      f.  Nuclear Weapon Delivery Checklist (Strategic Bomber Aircraft)
      g.  Aircrew Nuclear Bomb Delivery Checklist (Tactical Aircraft)
      h.  Non-nuclear Weapon Delivery Source Data Packages
      Work Unit Code Manual
      a. Standard WUC Manual
      b. Two  Chapter Manual
      c. Three Chapter Manual
      Calibration Procedures
      Time Compliance Technical Orders (TCTOs)
      a. TCTO
      b. TCTO Supplement
      Aircraft Battle Damage Assessment and Repair Tos
      Illustrated Parts Breakdown
      On-Equipment Organizational Maintenance Manual Set
      a.  General Equipment (GE) Manual
      b.  General System (GS) Manuals
      c.  Combined GE &amp; GS Manual
      d.  Job Guide (JG) Manuals
      e.  Fault Reporting (FR) Manual
      f.  Fault Isolation (FI) Manual
      g.  Wiring Data (WD) Manual
      h.  Schematic Diagram (SD) Manual
      Operation and Maintenance Instructions in Work Package Format
      a.  Maintenance Manuals
      (1)  Organizational Maintenance
      (2)  Intermediate Maintenance
      (3)  Depot Maintenance
      (4)  Combined (I&amp;D) Maintenance
      (5)  On Condition Maintenance
      b.  Operation &amp; Maintenance Instruction Manuals
      c.  Special Manuals
      (1)  Aircraft Engine Testing and Trending Procedures
      (2)  Aircraft Power Package Testing Procedures
      (3)  Static Firing of Missile Motors
      (4)  System Peculiar Corrosion Control
      (5)  Nondestructive Inspection (NDI)
      (6)  Aircraft Structural Integrity Program (ASIP)
      (7)  ATE Operator Test Procedures
      (8)  Special Requirements for Storage and Maintenance Procedures; AUR Munitions/Launchers and Associated Support Equipment, Conventional Components and CMBR Agents
      (9)  Parachute Packing Procedures
      (10)  Operators Instructions (Hand‑Held Flight Computers)
      (11)  Installation‑Engineering Facility (Ground C-E Equipment)

      d.  With Illustrated Parts Breakdown
      Aircraft Cross-servicing Guide


      <Form.Group as={Row} className="mb-3" controlId="tomaName">
        <Form.Label column sm={2}>TOMA Name</Form.Label>
        <Col>
          <Form.Control required type="text"
            value={globalState.wizardOptions.toma_name}
            onChange={e => dispatch({ type: 'MERGE_OPTION', payload: { 'toma_name': e.target.value } })} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="tomaOfficeSymbol">
        <Form.Label column sm={2}>TOMA Office Symbol</Form.Label>
        <Col>
          <Form.Control required type="text"
            value={globalState.wizardOptions.toma_office_symbol}
            onChange={e => dispatch({ type: 'MERGE_OPTION', payload: { 'toma_office_symbol': e.target.value } })} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="tomaAddress">
        <Form.Label column sm={2}>TOMA Address</Form.Label>
        <Col>
          <Form.Control required as="textarea"
            value={globalState.wizardOptions.toma_address}
            rows={3}
            onChange={e => dispatch({ type: 'MERGE_OPTION', payload: { 'toma_address': e.target.value } })} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="tomaPhone">
        <Form.Label column sm={2}>TOMA Phone Number (Commercial)</Form.Label>
        <Col>
          <Form.Control required type="text"
            value={globalState.wizardOptions.toma_phone}
            onChange={e => dispatch({ type: 'MERGE_OPTION', payload: { 'toma_phone': e.target.value } })} />
        </Col>
      </Form.Group>
    </div>
  );
}
