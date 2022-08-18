import { Button, Modal } from "react-bootstrap";

/**
 * Generates modal
 *
 * @param show Boolean that determines when the modal is displayed
 * @param close Function that handles the close
 */
export interface IAlertModal {
  show: boolean;
  close: any;
}

export const AlertModal: React.FunctionComponent<IAlertModal> = (props) => {
  const handleClose = () => {
    return;
  };

  return (
    <Modal show={props.show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Reset TMCR Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <strong>
          Warning: you will lose all selections that have been made, and will
          need to start over from the beginning.
        </strong>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => props.close(false)} variant="primary">
          I've changed my mind
        </Button>
        <Button onClick={() => props.close(true)} variant="danger">
          Reset my data
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
