import { Button, Modal } from "react-bootstrap";

/**
 * Generates modal
 *
 * @param show Boolean that determines when the modal is displayed
 * @param close Function that handles the close
 */
export interface INewAcqModal {
  show: boolean;
  close: any;
}

export const NewAcqModal = (props: INewAcqModal): JSX.Element => {
  return (
    <Modal show={props.show}>
      <Modal.Header>
        <Modal.Title>Waiver Requirement</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <strong>ATTENTION:</strong> IAW AFMCI 63-101, all new major acquisition
        programs will be developed IAW Aerospace and Defense Industries
        Association of Europe (ASD)-S1000D, International Specification for
        Technical Publications Utilizing a Common Source Database and
        MIL-STD-3048. When unable to comply with TO system policies and
        procedures, to include TMSS, organizations will request a waiver IAW TO
        00-5-1.
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => props.close(false)} variant="primary">
          Cancel
        </Button>
        <Button onClick={() => props.close(true)} variant="danger">
          Acknowledge Waiver Requirement
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
