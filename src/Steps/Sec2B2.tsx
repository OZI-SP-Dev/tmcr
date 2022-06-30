import { useContext } from "react";
import { Form, Table } from "react-bootstrap";
import { globalContext } from '../stateManagement/GlobalStore';

export const Sec2B2 = () => {
  const { globalState, dispatch } = useContext(globalContext);
  
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Bit hacky here using the any type, but it allows us to dynamically name the payload attributes
    let payload:any = {};
    payload[e.target.id] = e.target.checked;
    
    dispatch({ type: 'MERGE_OPTION', payload});
  }

  const sec2b2Table = [
    {
      Id: "sec2b2_roles",
      Category: "Access",
      Requirement: "IETM tailoring via user roles/profiles\nThe IETM shall be customizable based on user roles. Examples of customization include enabling/disabling menu options and allowing/disallowing access of certain data modules."
    },
    {
      Id: "sec2b2_cac",
      Category: "Access",
      Requirement: "Login/Logout via Common Access Card (CAC)\nThe IETM shall provide users the capability to login and logout with their CAC."
    },
    {
      Id: "sec2b2_username",
      Category: "Access",
      Requirement: "Login/Logout via username and password\nThe IETM shall provide users the capability to login and logout with a username and password."
    },
    {
      Id: "sec2b2_login",
      Category: "Access",
      Requirement: "Login/Logout\nThe IETM shall provide users the capability to login and logout."
    },
    {
      Id: "sec2b2_suspend",
      Category: "Access",
      Requirement: "Suspend/Restart\nThe IETM shall provide users the capability to suspend their current session and to restart the session at a future time at the point where they left off."
    },
    {
      Id: "sec2b2_complete",
      Category: "Annotations",
      Requirement: "Action complete indicators\nThe IETM shall provide users the capability to indicate that actions called for by the technical data have been completed. This is normally represented as a checkbox."
    },
    {
      Id: "sec2b2_personal",
      Category: "Annotations",
      Requirement: "Personal annotations\nThe IETM shall provide users the capability to add supplemental information or notes to the data. Personal annotations can be added or deleted at the end user's discretion but is not retained at the end of the user session."
    },
    {
      Id: "sec2b2_redline_graphics",
      Category: "Annotations",
      Requirement: "Redlining graphics\nThe IETM shall provide users the capability to redline/annotate graphics using markings for deletions, insertions, and changes. These markings are saved as feedback to correct/improve the publication during development and verification."
    },
    {
      Id: "sec2b2_redline_text",
      Category: "Annotations",
      Requirement: "Redlining text\nThe IETM shall provide users the capability to redline/annotate text using markings for deletions, insertions, and changes. These markings are saved as feedback to correct/improve the publication during development and verification."
    },
    {
      Id: "sec2b2_paper_distro",
      Category: "Delivery and Distribution",
      Requirement: "Paper delivery/distribution\nTechnical data shall be delivered/distributed via printed paper publications."
    },
    {
      Id: "sec2b2_physical_distro",
      Category: "Delivery and Distribution",
      Requirement: "Physical media delivery/distribution\nTechnical data shall be delivered/distributed via physical media such as DVD or hard drive."
    },
    {
      Id: "sec2b2_dynamic_diags",
      Category: "Diagnostics and Prognostics",
      Requirement: "Dynamic diagnostics\nThe IETM shall interface with the product to utilize onboard monitoring devices (e.g. Built-In Test) and support/test equipment for fault detection/isolation. Troubleshooting is based on results returned from the product rather than inputs received from the maintainer. This may require external software and the product must also support this functionality."
    },
    {
      Id: "sec2b2_software_diags",
      Category: "Diagnostics and Prognostics",
      Requirement: "Software driven diagnostics\nThe IETM shall guide the user (via software) through troubleshooting by analyzing maintainer inputs, fault codes, and their correlations to display the appropriate starting point/action for fault isolation instead of the maintainer using a predefined fault tree. This will require a logic engine and one or more process data modules."
    },
    {
      Id: "sec2b2_simulation",
      Category: "Diagnostics and Prognostics",
      Requirement: "System simulation\nThe IETM shall have the capability to represent the behavior or characteristics of the system function/malfunction to determine or reenact the problem. System simulation allows the user to introduce stimulus (such as pressure, valve positions, temperatures, voltages, sensor inputs, switch positions) and present the results in a manner that models the system behaviors. This can be used to model hydraulic, fuel, pneumatic and other systems."
    },
    {
      Id: "sec2b2_system_tracing",
      Category: "Diagnostics and Prognostics",
      Requirement: "Wire/Fluid system tracing\nThe IETM shall provide users the capability to select wires, fluid, pneumatic or (HVAC) line in a graphic (diagram or schematic) and have continuity highlighted thru the circuit or schematic."
    },
    {
      Id: "sec2b2_deficiency_reporting",
      Category: "External Processes",
      Requirement: "Deficiency/improvement reporting\nThe IETM shall provide users the capability to report errors/improvements to the technical data by initiating the AFTO 22 process from within the IETM."
    },
    {
      Id: "sec2b2_config_mgmt",
      Category: "External Processes",
      Requirement: "Maintenance data collection integration\nThe IETM shall have the capability to capture and transmit configuration change data (i.e. removed and installed part number information), tasks authorized, tasks performed, results of that work, etc. This information would be transmitted to Air Force maintenance data collection systems (such as REMIS)."
    },
    {
      Id: "sec2b2_external_system",
      Category: "External Processes",
      Requirement: "Other external system integration\nIf there are any other external systems beyond the ones already listed (parts ordering, AFTO 22 change process, maintenance data collection) that should be integrated into the IETM, then these will be listed in the \"Additional Comments\" field."
    },
    {
      Id: "sec2b2_external_parts",
      Category: "External Processes",
      Requirement: "Parts ordering integration\nThe IETM shall interface with the supply system to allow users to order parts from within the IETM."
    },
    {
      Id: "sec2b2_pdf",
      Category: "Functionality Category - Annotations",
      Requirement: "PDF action complete indicators\nThe PDF shall provide users the capability to indicate that actions called for by the technical data have been completed. This is normally represented as a checkbox."
    },
    {
      Id: "sec2b2_modeling",
      Category: "Graphics Functionality",
      Requirement: "3D modeling\nThe product and it's components shall be modeled using 3D, solid object graphical figures and are displayed by the IETM. The use of 3D models can allow virtual assembly, disassembly, removal and installation of parts of the product using animation, simulation and/or virtual reality concepts."
    },
    {
      Id: "sec2b2_tooltips",
      Category: "Linking",
      Requirement: "Hot reference (tool tips)\nThe IETM shall display tool tips to the user on relevant \"mouse overs\". At a minimum, all IETM menu options shall have tool tips as well as all acronyms and footnotes displayed in the technical data."
    },
    {
      Id: "sec2b2_audit",
      Category: "Navigation and Tracking",
      Requirement: "Audit trail\nThe IETM shall track and log all user interactions during a session. These interactions can then be retrieved to recreate the session in case an audit is needed."
    },
    {
      Id: "sec2b2_dialog_nav",
      Category: "Navigation and Tracking",
      Requirement: "Dialog driven navigation\nThe IETM shall prompt the user for input and would then jump to the appropriate location based on the response. This requires the use of one or more process data modules."
    },
    {
      Id: "sec2b2_graphic_nav",
      Category: "Navigation and Tracking",
      Requirement: "Graphical navigation\nThe IETM shall provide users the capability to navigate the technical data via graphical representations of the product's system/subsystem breakdown. Heavy use of hotspotting is required on the graphics. For example, from a graphical overview of the aircraft, the user selects a wing. A graphical overview of the wing is presented. The user then selects the flaps. A graphical overview of the flaps is presented. The user selects the actuator. Information on the actuator is presented."
    }
  ]

  return (
    <div className="m-3">
      <h1>ITEM Functionality Requirements</h1>
      <h3>SECTION II: B-2 Configurable Requirements</h3>
      <br />      
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Selection</th>
            <th>Functionality Category</th>
            <th>Requirement</th>
          </tr>
        </thead>
        <tbody>
          {sec2b2Table.map( (element, i) => 
            <tr key={"sec2b2" + i}>
              <td>
              <Form.Check type="switch" 
                checked={globalState.wizardOptions[globalState.tmcrIndex][element.Id] || false }
                id={element.Id}
                onChange={handleClick} />
              </td>
            <td>{element.Category}</td>
            <td className="text-start" style={{ whiteSpace: 'pre-line' }}>{element.Requirement}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
