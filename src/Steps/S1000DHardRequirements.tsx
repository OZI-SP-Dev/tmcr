import { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";

export const S1000DHardRequirements = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="link" onClick={handleShow}>
        Show Table
      </Button>

      <Modal size="xl" scrollable show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Part I: B-1 Mandatory Functionality Requirements
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover responsive>
            <thead style={{ textAlign: "center" }}>
              <tr>
                <th>Functionality Category</th>
                <th>Requirements</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Annotations</td>
                <td className="text-start" style={{ whiteSpace: "pre-line" }}>
                  Global data annotations
                  <br />
                  The IETM shall have the capability to enter, store, and
                  display globally applicable supplemental data. Globally means
                  it applies at the Air Force level and can be seen by all users
                  of the IETM, whether it's an Air Force Instruction, policy
                  memo, urgent change, or supplemental data to the IETM.
                </td>
              </tr>
              <tr>
                <td>Annotations</td>
                <td className="text-start" style={{ whiteSpace: "pre-line" }}>
                  Local data annotations
                  <br />
                  The IETM shall have the capability to enter, store, and
                  display locally applicable supplemental data. Local can mean
                  either wing level, base level, MAJCOM level or any similar
                  level and can be seen by the applicable users of the IETM at
                  the specified level, whether it's a local instruction or
                  policy.
                </td>
              </tr>
              <tr>
                <td>Delivery and Distribution</td>
                <td className="text-start" style={{ whiteSpace: "pre-line" }}>
                  Network delivery/distribution
                  <br />
                  Technical data shall be delivered/distributed via network such
                  as Internet, Intranet, or LAN and shall use approved transfer
                  protocols (FTP, HTTPS).
                </td>
              </tr>
              <tr>
                <td>Graphics Functionality</td>
                <td className="text-start" style={{ whiteSpace: "pre-line" }}>
                  Pan and zoom
                  <br />
                  At a minimum, the IETM shall provide users the capability to
                  pan and zoom graphics. Other graphic manipulation
                  capabilities, such as rotating or magnifying glass view, may
                  be included.
                </td>
              </tr>
              <tr>
                <td>Linking</td>
                <td className="text-start" style={{ whiteSpace: "pre-line" }}>
                  Hot spotting
                  <br />
                  Graphics shall contain hot spots/embedded links to related
                  information as needed. The most common example are parts
                  illustrations where the callouts are linked to the appropriate
                  parts listing.
                </td>
              </tr>
              <tr>
                <td>Linking</td>
                <td className="text-start" style={{ whiteSpace: "pre-line" }}>
                  Internal and external links
                  <br />
                  All references, both internal to the document/data module and
                  external to other documents/data modules, shall be hyperlinked
                  and take the user to the referenced material when clicked.
                </td>
              </tr>
              <tr>
                <td>Navigation and Tracking</td>
                <td className="text-start" style={{ whiteSpace: "pre-line" }}>
                  Filter content per applicability
                  <br />
                  The IETM shall filter the content displayed to the user based
                  on applicability criteria given by the user. For example, the
                  user specifies the tail number of the aircraft and only
                  information relevant to that particular aircraft is shown.
                  Filtering criteria are displayed in the "Additional Comments"
                  field. At a minimum, both tail number and TCTO (pre and post)
                  filtering options shall be provided.
                </td>
              </tr>
              <tr>
                <td>Navigation and Tracking</td>
                <td className="text-start" style={{ whiteSpace: "pre-line" }}>
                  Next and previous
                  <br />
                  The IETM shall include "Next" and "Previous" navigation
                  functions. These functions shall act in an equivalent manner
                  to the "Forward" and "Back" arrows of web browsers.
                </td>
              </tr>
              <tr>
                <td>Navigation and Tracking</td>
                <td className="text-start" style={{ whiteSpace: "pre-line" }}>
                  Restore initial navigation view
                  <br />
                  The IETM shall provide users the capability to restore the
                  IETM interface to a default view. Frames and other parts of
                  the IETM interface that have been resized, moved, or hidden
                  will be reset to the IETM's default setting.
                </td>
              </tr>
              <tr>
                <td>Navigation and Tracking</td>
                <td className="text-start" style={{ whiteSpace: "pre-line" }}>
                  Search
                  <br />
                  The IETM shall provide users the capability to search the
                  technical content for specific characters, words, or phrases.
                  Users shall be able to specify whether whole or partial
                  matches should be returned and whether to search a single data
                  module, a range of data modules, or the entire IETM.
                </td>
              </tr>
              <tr>
                <td>Navigation and Tracking</td>
                <td className="text-start" style={{ whiteSpace: "pre-line" }}>
                  Simultaneous display of multiple content objects
                  <br />
                  The IETM shall provide the users the capability to display
                  technical content text and any tables or graphics
                  simultaneously. This can be accomplished either through
                  separate panes on the IETM interface, separate pop-up windows,
                  or a combination of both.
                </td>
              </tr>
              <tr>
                <td>Navigation and Tracking</td>
                <td className="text-start" style={{ whiteSpace: "pre-line" }}>
                  System/subsystem navigation
                  <br />
                  The IETM shall provide users the capability to navigate
                  through the technical content via the product's
                  system/subsystem breakdown. User's would start at the highest
                  level of the product (such as the aircraft itself), and would
                  then navigate down through the system structure (such as
                  airframe, cockpit) to find the appropriate data.
                </td>
              </tr>
              <tr>
                <td>Navigation and Tracking</td>
                <td className="text-start" style={{ whiteSpace: "pre-line" }}>
                  Text, graphic, and table searchability
                  <br />
                  All text in the technical content shall be searchable,
                  including all text located in graphics and tables.
                </td>
              </tr>
              <tr>
                <td>Printing</td>
                <td className="text-start" style={{ whiteSpace: "pre-line" }}>
                  Data module printing
                  <br />
                  The IETM shall provide users the capability to print the
                  current data module being viewed. TO policy must be followed
                  with regards to printing excerpts (such as printing
                  distribution and security statements).
                </td>
              </tr>
              <tr>
                <td>Printing</td>
                <td className="text-start" style={{ whiteSpace: "pre-line" }}>
                  Print screen
                  <br />
                  The IETM shall provide users the capability to print the
                  screen currently being viewed. TO policy must be followed with
                  regards to printing excerpts (such as printing distribution
                  and security statements).
                </td>
              </tr>
              <tr>
                <td>Printing</td>
                <td className="text-start" style={{ whiteSpace: "pre-line" }}>
                  Printing data module and linked data
                  <br />
                  The IETM shall provide users the capability to print the
                  current data module being viewed as well as any data
                  referenced by the data module. Printed linked data shall be
                  limited to one level of linking (i.e. any referenced data in
                  the linked data shall not also be printed). TO policy must be
                  followed with regards to printing excerpts (such as printing
                  distribution and security statements).
                </td>
              </tr>
              <tr>
                <td>Publishing</td>
                <td className="text-start" style={{ whiteSpace: "pre-line" }}>
                  Complete page-based PDF technical manual publishing
                  <br />
                  The publishing system shall be able to publish fully
                  formatted, linear, page-based technical manuals as a PDF from
                  authored S1000D data modules. This would be a complete
                  publication, not an excerpt or a single data module.
                </td>
              </tr>
              <tr>
                <td>Special Content</td>
                <td className="text-start" style={{ whiteSpace: "pre-line" }}>
                  Emergency procedure quick access
                  <br />
                  The IETM shall provide users quick (one click) access to
                  associated emergency procedures. The IETM shall also provide
                  users quick (one click) access to a listing of all emergency
                  procedures.
                </td>
              </tr>
              <tr>
                <td>Special Content</td>
                <td className="text-start" style={{ whiteSpace: "pre-line" }}>
                  Help documentation
                  <br />
                  The IETM shall have a "Help" option which provides users with
                  documentation and guidance on how to use the IETM and all its
                  options.
                </td>
              </tr>
              <tr>
                <td>Updates</td>
                <td className="text-start" style={{ whiteSpace: "pre-line" }}>
                  Active change indications and markings
                  <br />
                  The IETM shall display appropriately authored change markers
                  in the technical data and provide users with the capability to
                  toggle the display of change markers on/off.
                </td>
              </tr>
              <tr>
                <td>User Operation Mode</td>
                <td className="text-start" style={{ whiteSpace: "pre-line" }}>
                  Connected mode
                  <br />
                  The IETM shall be able to access the network and/or the CSDB
                  wirelessly during use. This functionality is necessary for
                  integrating with external applications such as parts ordering
                  or maintenance data collections.
                </td>
              </tr>
              <tr>
                <td>User Operation Mode</td>
                <td className="text-start" style={{ whiteSpace: "pre-line" }}>
                  Disconnected mode
                  <br />
                  The IETM shall be able to operate entirely in a stand-alone or
                  disconnected mode where the IETM is not connected to any
                  network or Internet.
                </td>
              </tr>
              <tr>
                <td>User Operation Mode</td>
                <td className="text-start" style={{ whiteSpace: "pre-line" }}>
                  Web browser viewable
                  <br />
                  The IETM technical content shall be viewable in a standard web
                  browser that is part of the Air Force standard desktop. Web
                  browser plug-ins or helper applications may be used to enable
                  additional IETM functionalities that are not possible with the
                  standard browser.
                </td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
};
