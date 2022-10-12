import React, { useContext, useEffect } from "react";
import { Col, Form } from "react-bootstrap";
import { globalContext } from "../stateManagement/GlobalStore";
import "./TMSSReqs.css";

export const TMSSReqs = () => {
  const { globalState, dispatch } = useContext(globalContext);

  const TMSSReqs = [
    {
      name: "Inspection TOs (MIL-DTL-5096)",
      manuals: [
        {
          name: "Inspection and Maintenance Requirements (-6) Manual",
          id: "tmss_1_a",
        },
        {
          name: "Acceptance and Functional Check Flight (FCF) Procedures (-6CF) Manual",
          id: "tmss_1_b",
        },
        {
          name: "Acceptance and Functional Check Flight (-6CL) Checklist",
          id: "tmss_1_c",
        },
        { name: "Inspection Workcards (-6WC)", id: "tmss_1_d" },
        { name: "Maintenance/Operations Checklists", id: "tmss_1_e" },
      ],
    },
    {
      name: "Cargo Aircraft Loading and Offloading TOs (MIL-DTL-5288)",
      manuals: [
        { name: "Loading Instructions Manual", id: "tmss_2_a" },
        { name: "Nuclear Weapon Cargo Loading Manual", id: "tmss_2_b" },
        { name: "Checklists", id: "tmss_2_c" },
      ],
    },
    {
      name: "Flight Operation Manuals (MIL-DTL-7700)",
      manuals: [
        {
          name: "Flight Manuals",
          id: "tmss_3_a",
          manuals: [
            { name: "Flight Manual", id: "tmss_3_a_1" },
            { name: "Performance Data Manual", id: "tmss_3_a_2" },
            { name: "Mission Crew Manual", id: "tmss_3_a_3" },
            { name: "Fanfold Checklists", id: "tmss_3_a_4" },
            { name: "Supplemental Manual", id: "tmss_3_a_5" },
            { name: "Abbreviated Flight Crew Checklist", id: "tmss_3_a_6" },
            { name: "Non-nuclear Weapon Delivery Manual", id: "tmss_3_a_7" },
            {
              name: "Aircrew Nuclear Bomb Delivery Manual (Strategic Bomber Aircraft)",
              id: "tmss_3_a_8",
            },
            {
              name: "Aircrew Nuclear Missile Delivery Manual (Strategic Bomber Aircraft)",
              id: "tmss_3_a_9",
            },
            {
              name: "Aircrew Nuclear Bomb Delivery Manual (TacticalAircraft)",
              id: "tmss_3_a_10",
            },
            {
              name: "Non-nuclear Weapon Delivery Checklist",
              id: "tmss_3_a_11",
            },
            {
              name: "Nuclear Weapon Delivery Checklist (Strategic Bomber Aircraft)",
              id: "tmss_3_a_12",
            },
            {
              name: "Aircrew Nuclear Bomb Delivery Checklist (Tactical Aircraft)",
              id: "tmss_3_a_13",
            },
            {
              name: "Non-nuclear Weapon Delivery Source Data Packages",
              id: "tmss_3_a_14",
            },
          ],
        },
        {
          name: "Weight and Balance (Aircraft)",
          id: "tmss_3_b",
          manuals: [
            { name: "Loading Data Manual", id: "tmss_3_b_1" },
            { name: "Sample Basic Weight Checklists", id: "tmss_3_b_2" },
          ],
        },
      ],
    },
    {
      name: "List of Applicable Publications (MIL-DTL-8031)",
      manuals: [{ name: "List of Applicable Publications", id: "tmss_4_a" }],
    },
    {
      name: "Structural Repair Manuals (for Aircraft) (MIL-DTL-9854)",
      manuals: [
        { name: "Structural Repair Manuals (for Aircraft)", id: "tmss_5_a" },
      ],
    },
    {
      name: "Munitions/Weapons Loading Procedures, Non- nuclear and Nuclear TOs (MIL-DTL-9977)",
      manuals: [
        {
          name: "Nuclear Weapons Basic Information and Loading Procedures",
          id: "tmss_7_a",
        },
        { name: "Nuclear Weapons Loading Procedures", id: "tmss_7_b" },
        { name: "Non-nuclear Munitions Basic Information", id: "tmss_7_c" },
        { name: "Non-nuclear Loading Procedures", id: "tmss_7_d" },
        {
          name: "Non-nuclear Munitions Loading Standard Data Packages (SDPs)",
          id: "tmss_7_e",
        },
        { name: "Loading Procedures Checklist", id: "tmss_7_f" },
        { name: "Single Loading Procedures Checklist", id: "tmss_7_g" },
        { name: "Integrated Loading Procedures Checklists", id: "tmss_7_h" },
        { name: "Family Group Loading Procedures Checklist", id: "tmss_7_i" },
        {
          name: "Nuclear Weapons Loading Procedure Checklists",
          id: "tmss_7_j",
        },
        { name: "Functional Check Procedures Checklist", id: "tmss_7_k" },
        { name: "NATO Stage B Cross-Servicing Checklists", id: "tmss_7_l" },
        { name: "End of Runway (EOR) Procedures Checklist", id: "tmss_7_m" },
      ],
    },
    {
      name: "Space Operations and Support Documentation TOs (MIL-PRF-38311)",
      manuals: [
        {
          name: "MIL-SPEC (Intercontinental Ballistic Missiles)",
          id: "tmss_8_a",
        },
      ],
    },
    {
      name: "Work Unit Code Manual (MIL-DTL-38769)",
      manuals: [
        { name: "Standard WUC Manual", id: "tmss_10_a" },
        { name: "Two Chapter Manual", id: "tmss_10_b" },
        { name: "Three Chapter Manual", id: "tmss_10_c" },
      ],
    },
    {
      name: "Calibration Procedures (MIL-PRF-38793)",
      manuals: [{ name: "Calibration Procedures", id: "tmss_11_a" }],
    },
    {
      name: "Time Compliance Technical Orders (TCTOs) (MIL-DTL-38804)",
      manuals: [
        { name: "TCTO", id: "tmss_12_a" },
        { name: "TCTO Supplement", id: "tmss_12_b" },
      ],
    },
    {
      name: "Aircraft Battle Damage Assessment and Repair TOs (MIL-DTL-87158)",
      manuals: [
        {
          name: "Aircraft Battle Damage Assessment and Repair TOs",
          id: "tmss_13_a",
        },
      ],
    },
    {
      name: "Illustrated Parts Breakdown (MIL-DTL-38807)",
      manuals: [{ name: "Illustrated Parts Breakdown", id: "tmss_14_a" }],
    },
    {
      name: "On-Equipment Organizational Maintenance Manual Set (MIL-DTL-83495)",
      manuals: [
        { name: "General Equipment (GE) Manual", id: "tmss_15_a" },
        { name: "General System (GS) Manuals", id: "tmss_15_b" },
        { name: "Combined GE & GS Manual", id: "tmss_15_c" },
        { name: "Job Guide (JG) Manuals", id: "tmss_15_d" },
        { name: "Fault Reporting (FR) Manual", id: "tmss_15_e" },
        { name: "Fault Isolation (FI) Manual", id: "tmss_15_f" },
        { name: "Wiring Data (WD) Manual", id: "tmss_15_g" },
        { name: "Schematic Diagram (SD) Manual", id: "tmss_15_h" },
      ],
    },
    {
      name: "Operation and Maintenance Instructions in Work Package Format (MIL-DTL-87929)",
      manuals: [
        {
          name: "Maintenance Manuals",
          id: "tmss_16_a",
          manuals: [
            { name: "Organizational Maintenance", id: "tmss_16_a_1" },
            { name: "Intermediate Maintenance", id: "tmss_16_a_2" },
            { name: "Depot Maintenance", id: "tmss_16_a_3" },
            { name: "Combined (I&D) Maintenance", id: "tmss_16_a_4" },
            { name: "On Condition Maintenance", id: "tmss_16_a_5" },
          ],
        },
        {
          name: "Operation & Maintenance Instruction Manuals",
          id: "tmss_16_b",
        },
        {
          name: "Special Manuals",
          id: "tmss_16_c",
          manuals: [
            {
              name: "Aircraft Engine Testing and Trending Procedures",
              id: "tmss_16_c_1",
            },
            { name: "Intermediate Maintenance", id: "tmss_16_c_2" },
            { name: "Static Firing of Missile Motors", id: "tmss_16_c_3" },
            { name: "System Peculiar Corrosion Control", id: "tmss_16_c_4" },
            { name: "Nondestructive Inspection (NDI)", id: "tmss_16_c_5" },
            {
              name: "Aircraft Structural Integrity Program (ASIP)",
              id: "tmss_16_c_6",
            },
            { name: "ATE Operator Test Procedures", id: "tmss_16_c_7" },
            {
              name: "Special Requirements for Storage and Maintenance Procedures; AUR Munitions/Launchers and Associated Support Equipment, Conventional Components and CMBR Agents",
              id: "tmss_16_c_8",
            },
            { name: "Parachute Packing Procedures", id: "tmss_16_c_9" },
            {
              name: "Operators Instructions (Hand‑Held Flight Computers)",
              id: "tmss_16_c_10",
            },
            {
              name: "Installation‑Engineering Facility (Ground C-E Equipment)",
              id: "tmss_16_c_11",
            },
          ],
        },
        { name: "Checklists (IAW MIL-DTL-5096)", id: "tmss_16_d" },
        { name: "With Illustrated Parts Breakdown", id: "tmss_16_e" },
      ],
    },
    {
      name: "Aircraft Cross-servicing Guide (MIL-DTL-22202)",
      manuals: [{ name: "Aircraft Cross-servicing Guide", id: "tmss_17_a" }],
    },
  ];

  const moreTMSSReqs = [
    {
      name: "Aircraft Cross-servicing Guide (MIL-DTL-22202)",
      manuals: [
        {
          name: "Commercial Manuals (Evaluate according to MIL-PRF-32216)",
          id: "tmss_18_a",
        },
      ],
    },
    {
      name: "Aircraft Cross-servicing Guide (MIL-DTL-22202)",
      manuals: [{ name: "IETM", id: "tmss_19_a" }],
    },
  ];

  useEffect(() => {
    // Check if var has been initialized, if not initialize them all
    let tmss: boolean | undefined =
      globalState.wizardOptions[globalState.tmcrIndex].tmss_1_a;
    if (tmss === undefined) {
      let payload: any = {};
      TMSSReqs.map((parent) =>
        parent.manuals.map((manual) =>
          manual.manuals
            ? manual.manuals.map((submanual) => (payload[submanual.id] = false))
            : (payload[manual.id] = false)
        )
      );
      dispatch({ type: "MERGE_OPTION", payload });
    }
  });

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Bit hacky here using the any type, but it allows us to dynamically name the payload attributes
    let payload: any = {};
    payload[e.target.id] = e.target.checked;

    dispatch({ type: "MERGE_OPTION", payload });
  };

  return (
    <div className="m-3">
      <h1>TMSS Requirements</h1>
      <h3>Select which manuals will be required...</h3>
      <ol className="text-start">
        {TMSSReqs.map((element) => (
          <div key={element.name}>
            <h5>
              <li>{element.name}</li>
            </h5>
            <ol type="a">
              {element.manuals.map((manual) => (
                <Col key={manual.id} className="text-start">
                  <li>
                    {manual.manuals ? (
                      <>
                        <h6>{manual.name}</h6>
                        <ol>
                          {manual.manuals.map((submanual) => (
                            <Col key={submanual.id}>
                              <li>
                                <Form.Check
                                  type="checkbox"
                                  checked={
                                    globalState.wizardOptions[
                                      globalState.tmcrIndex
                                    ][submanual.id]
                                  }
                                  id={submanual.id}
                                  label={submanual.name}
                                  onChange={handleClick}
                                />
                              </li>
                            </Col>
                          ))}
                        </ol>
                      </>
                    ) : (
                      <Form.Check
                        type="checkbox"
                        checked={
                          globalState.wizardOptions[globalState.tmcrIndex][
                            manual.id
                          ]
                        }
                        id={manual.id}
                        label={manual.name}
                        onChange={handleClick}
                      />
                    )}
                  </li>
                </Col>
              ))}
            </ol>
          </div>
        ))}
      </ol>
    </div>
  );
};
