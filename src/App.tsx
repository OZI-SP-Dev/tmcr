import { useContext, useState } from 'react';
import { Button, Container, Form, Stack, Spinner } from 'react-bootstrap';
import './App.css';
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import { saveAs } from 'file-saver';
import { Step1 } from './Steps/Step1';
import { FinalStep } from './Steps/FinalStep';
import AppHeader from './components/AppHeader';
import { globalContext } from './stateManagement/GlobalStore';
import { AlertModal } from './Steps/AlertModal';

function App() {
  const { globalState, dispatch } = useContext(globalContext);
  const [isLoading, setLoading] = useState(false);
  const [isChecking, setChecking] = useState(false);

  function handleAlert(accept: boolean) {
    setChecking(false);
    if (accept) {
      dispatch({ type: 'PURGE_STATE' });
    }
  }
      
  function handleSubmit(e: any) {
    if (globalState.wizardStep === 2) {
      setLoading(true);
      generateDocument();
    } else {
      dispatch({ type: 'NEXT_STEP' });
    }
    e.preventDefault();
  }

  // TODO: update to use ResetAlert
  function handleReset(e: any) {
    setChecking(true);
  }

  async function generateDocument() {
    console.log("generating document...");
    console.log(globalState)
    PizZipUtils.getBinaryContent(
      '.\\S1000D_Linear Combined_Review.docx',
      function (error: any, content: any) {
        if (error) {
          throw error;
        }
        const zip = new PizZip(content);
        const doc = new Docxtemplater(zip, {
          paragraphLoop: true,
          linebreaks: true,
        });

        // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
        doc.render(globalState.wizardOptions);
        const out = doc.getZip().generate({
          type: "blob",
          mimeType:
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        }); //Output the document using Data-URI
        saveAs(out, globalState.wizardOptions.program_mod_system_name + "_template.docx");
        setLoading(false);
      }
    );
  };


  return (
      <Stack className="App" gap={2}>
        <AppHeader />
        <Container fluid="sm">
          <Form onSubmit={handleSubmit}>
            {globalState.wizardStep === 1 && <Step1 />}
            {globalState.wizardStep === 2 && <FinalStep />}
            <Stack direction="horizontal" gap={3}>
              <Button className="ms-auto" type="button" disabled={isLoading || globalState.wizardStep === 1} onClick={e => dispatch({ type: 'PREV_STEP'})}>
                Previous Step
              </Button>
              <Button type="submit" disabled={isLoading}>
                {(isLoading === true && <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                /> && "Generating Document...")
                  || (globalState.wizardStep === 2 ? "Generate Document" : "Next Step")
                }
              </Button>
              <div className="vr" />
              <Button variant="outline-danger" type="reset" disabled={isLoading} onClick={e => handleReset(e)}>Reset</Button>
            </Stack>
            <AlertModal show={isChecking} close={ handleAlert } />
          </Form>
        </Container>
      </Stack>
  );
}

export default App;
