import { Button, Modal } from 'react-bootstrap';

/**
   * Generates modal
   * 
   * @param show Boolean that determines when the modal is displayed
   * @param close Function that handles the close
   */
export interface IAlertModal {
  show: boolean,
  close: any
}

export const AlertModal: React.FunctionComponent<IAlertModal> = (props) => {

  const handleClose = () => {
    return
  }

  return (
    <Modal show={props.show} onHide={handleClose}>
      <Modal.Header><Modal.Title>Danger!</Modal.Title></Modal.Header>
      <Modal.Body>
        Warning: you will lose all inputted data. Are you sure you wish to continue?
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => props.close(false)} variant="secondary">
          Get me out of here!
        </Button>
        <Button onClick={() => props.close(true)} variant="danger">
          Yes, I'm sure!
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
