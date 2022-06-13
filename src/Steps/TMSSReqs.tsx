import React, { useContext } from "react";
import { Col, Form } from "react-bootstrap";
import { globalContext } from '../stateManagement/GlobalStore';

export const TMSSReqs = () => {
  const { globalState, dispatch } = useContext(globalContext);

  // These elements tie back into the GlobalStore.tsx file
  // Any additions/subsractions here should also be reflected in the GlobalStore
  const TMSSReqs = [
    {
      name: "Inspection TOs (MIL-DTL-5096)",
      manuals: [
        { name: "Inspection and Maintenance Requirements (-6) Manual", id: "tmss-1-a" },
        { name: "Acceptance and Functional Check Flight (FCF) Procedures (-6CF) Manual", id: "tmss-1-b" },
        { name: "Acceptance and Functional Check Flight (-6CL) Checklist", id: "tmss-1-c" },
        { name: "Inspection Workcards (-6WC)", id: "tmss-1-d" },
        { name: "Maintenance/Operations Checklists", id: "tmss-1-e" }
      ]
    },
    {
      name: "Cargo Aircraft Loading and Offloading TOs (MIL-DTL-5288)",
      manuals: [
        { name: "Loading Instructions Manual", id: "tmss-2-a" },
        { name: "Nuclear Weapon Cargo Loading Manual", id: "tmss-2-b" },
        { name: "Checklists", id: "tmss-2-c" }
      ]
    },
    {
      name: "Weight and Balance (Aircraft) (MIL-DTL-5920)",
      manuals: [
        { name: "Loading Data Manual", id: "tmss-3-a" },
        { name: "Sample Basic Weight Checklists", id: "tmss-3-b" },
      ]
    },
    {
      name: "Flight Manuals (MIL-DTL-7700)",
      manuals: [
        { name: "Flight Manual", id: "tmss-4-a" },
        { name: "Performance Data Manual", id: "tmss-4-b" },
        { name: "Mission Crew Manual", id: "tmss-4-c" },
        { name: "Supplemental Manual", id: "tmss-4-d" },
        { name: "Abbreviated Flight Crew Checklist", id: "tmss-4-e" }
      ]
    },
    {
      name: "List of Applicable Publications (MIL-DTL-8031)",
      manuals: [
        { name: "List of Applicable Publications", id: "tmss-5-a" }
      ]
    },
    {
      name: "Structural Repair Manuals (for Aircraft) (MIL-DTL-9854)",
      manuals: [
        { name: "Structural Repair Manuals (for Aircraft)", id: "tmss-6-a" }
      ]
    },
    {
      name: "Munitions/Weapons Loading Procedures, Non- nuclear and Nuclear TOs (MIL-DTL-9977)",
      manuals: [
        { name: "Nuclear Weapons Basic Information and Loading Procedures", id: "tmss-7-a" },
        { name: "Nuclear Weapons Loading Procedures", id: "tmss-7-b" },
        { name: "Non-nuclear Munitions Basic Information", id: "tmss-7-c" },
        { name: "Non-nuclear Loading Procedures", id: "tmss-7-d" },
        { name: "Non-nuclear Munitions Loading Standard Data Packages (SDPs)", id: "tmss-7-e" },
        { name: "Loading Procedures Checklist", id: "tmss-7-f" },
        { name: "Single Loading Procedures Checklist", id: "tmss-7-g" },
        { name: "Integrated Loading Procedures Checklists", id: "tmss-7-h" },
        { name: "Family Group Loading Procedures Checklist", id: "tmss-7-i" },
        { name: "Nuclear Weapons Loading Procedure Checklists", id: "tmss-7-j" },
        { name: "Functional Check Procedures Checklist", id: "tmss-7-k" },
        { name: "NATO Stage B Cross-Servicing Checklists", id: "tmss-7-l" },
        { name: "End of Runway (EOR) Procedures Checklist", id: "tmss-7-m" }
      ]
    },
    {
      name: "Space Operations and Support Documentation TOs (MIL-PRF-38311)",
      manuals: [
        { name: "MIL-SPEC (Intercontinental Ballistic Missiles)", id: "tmss-8-a" }
      ]
    },
    {
      name: "Nuclear and Non-nuclear Weapon Delivery and Aircrew Procedures Manuals and Checklists (MIL-DTL-38384)",
      manuals: [
        { name: "Non-nuclear Weapon Delivery Manual", id: "tmss-9-a" },
        { name: "Aircrew Nuclear Bomb Delivery Manual (Strategic Bomber Aircraft)", id: "tmss-9-b" },
        { name: "Aircrew Nuclear Missile Delivery Manual (Strategic Bomber Aircraft)", id: "tmss-9-c" },
        { name: "Aircrew Nuclear Bomb Delivery Manual (Tactical Aircraft)", id: "tmss-9-d" },
        { name: "Non-nuclear Weapon Delivery Checklist", id: "tmss-9-e" },
        { name: "Nuclear Weapon Delivery Checklist (Strategic Bomber Aircraft))", id: "tmss-9-f" },
        { name: "Aircrew Nuclear Bomb Delivery Checklist (Tactical Aircraft)", id: "tmss-9-g" },
        { name: "Non-nuclear Weapon Delivery Source Data Packages", id: "tmss-9-h" }
      ]
    },
    {
      name: "Work Unit Code Manual (MIL-DTL-38769)",
      manuals: [
        { name: "Standard WUC Manual", id: "tmss-10-a" },
        { name: "Two Chapter Manual", id: "tmss-10-b" },
        { name: "Three Chapter Manual", id: "tmss-10-c" }
      ]
    },
    {
      name: "Calibration Procedures (MIL-PRF-38793)",
      manuals: [
        { name: "Calibration Procedures", id: "tmss-11-a" }
      ]
    },
    {
      name: "Time Compliance Technical Orders (TCTOs) (MIL-PRF-38311)",
      manuals: [
        { name: "TCTO", id: "tmss-12-a" },
        { name: "TCTO Supplement", id: "tmss-12-b" }
      ]
    },
    {
      name: "Aircraft Battle Damage Assessment and Repair TOs (MIL-DTL-87158)",
      manuals: [
        { name: "Aircraft Battle Damage Assessment and Repair TOs", id: "tmss-13-a" }
      ]
    },
    {
      name: "Illustrated Parts Breakdown (MIL-DTL-38807)",
      manuals: [
        { name: "Illustrated Parts Breakdown", id: "tmss-14-a" }
      ]
    },
    {
      name: "On-Equipment Organizational Maintenance Manual Set (MIL-DTL-83495)",
      manuals: [
        { name: "General Equipment (GE) Manual", id: "tmss-15-a" },
        { name: "General System (GS) Manuals", id: "tmss-15-b" },
        { name: "Combined GE &amp; GS Manual", id: "tmss-15-c" },
        { name: "Job Guide (JG) Manuals", id: "tmss-15-d" },
        { name: "Fault Reporting (FR) Manual", id: "tmss-15-e" },
        { name: "Fault Isolation (FI) Manual", id: "tmss-15-f" },
        { name: "Wiring Data (WD) Manual", id: "tmss-15-g" },
        { name: "Schematic Diagram (SD) Manual", id: "tmss-15-h" }
      ]
    },
    {
      name: "Operation and Maintenance Instructions in Work Package Format (MIL-DTL-87929)",
      manuals: [
        {
          name: "Maintenance Manuals", id: "tmss-16-a",
          manuals: [
            { name: "Organizational Maintenance", id: "tmss-16-a-1" },
            { name: "Intermediate Maintenance", id: "tmss-16-a-2" },
            { name: "Depot Maintenance", id: "tmss-16-a-3" },
            { name: "Combined (I&amp;D) Maintenance", id: "tmss-16-a-4" },
            { name: "On Condition Maintenance", id: "tmss-16-a-5" }
          ]
        },
        { name: "Operation & Maintenance Instruction Manuals", id: "tmss-16-b" },
        {
          name: "Special Manuals", id: "tmss-16-c",
          manuals: [
            { name: "Aircraft Engine Testing and Trending Procedures", id: "tmss-16-c-1" },
            { name: "Intermediate Maintenance", id: "tmss-16-c-2" },
            { name: "Static Firing of Missile Motors", id: "tmss-16-c-3" },
            { name: "System Peculiar Corrosion Control", id: "tmss-16-c-4" },
            { name: "Nondestructive Inspection (NDI)", id: "tmss-16-c-5" },
            { name: "Aircraft Structural Integrity Program (ASIP)", id: "tmss-16-c-6" },
            { name: "ATE Operator Test Procedures", id: "tmss-16-c-7" },
            { name: "Special Requirements for Storage and Maintenance Procedures; AUR Munitions/Launchers and Associated Support Equipment, Conventional Components and CMBR Agents", id: "tmss-16-c-8" },
            { name: "Parachute Packing Procedures", id: "tmss-16-c-9" },
            { name: "Operators Instructions (Hand‑Held Flight Computers)", id: "tmss-16-c-10" },
            { name: "Installation‑Engineering Facility (Ground C-E Equipment)", id: "tmss-16-c-11" }
          ]
        },
        { name: "With Illustrated Parts Breakdown", id: "tmss-16-d" },
      ]
    },
    {
      name: "Aircraft Cross-servicing Guide (MIL-DTL-22202)",
      manuals: [
        { name: "Aircraft Cross-servicing Guide", id: "tmss-17-a" }
      ]
    }
  ];


  const  handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Bit hacky here using the any type, but it allows us to dynamically name the payload attributes
    let payload:any = {};
    payload[e.target.id] = e.target.checked;
    
    dispatch({ type: 'MERGE_OPTION', payload});
  }

  return (
    <div className="m-3">
      <h1>TMSS Requirements</h1>
      <h3>Select which manuals will be required...</h3>
      <ol className="text-start">
        {TMSSReqs.map((element) =>
          <div key={element.name}>
            <h5><li>{element.name}</li></h5>
            <ol type="a">
              {element.manuals.map((manual) =>
                <Col key={manual.id} className="text-start">
                  <li>
                    {
                      manual.manuals ?
                        <>
                          <h6>{manual.name}</h6>
                          <ol>
                            {manual.manuals.map((submanual) =>
                              <Col key={submanual.id}>
                                <li>
                                  <Form.Check
                                    type="checkbox"
                                    checked={globalState.wizardOptions[globalState.tmcrIndex][submanual.id]}
                                    id={submanual.id}
                                    label={submanual.name}
                                    onChange={handleClick} />
                                </li>
                              </Col>
                            )}
                          </ol>
                        </>
                        :
                        <Form.Check
                          type="checkbox"
                          checked={globalState.wizardOptions[globalState.tmcrIndex][manual.id]}
                          id={manual.id}
                          label={manual.name}
                          onChange={handleClick} />
                    }
                  </li>
                </Col>
              )}
            </ol>
          </div>
        )}
      </ol>
    </div>
  );
}
