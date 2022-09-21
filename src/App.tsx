import { useContext, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Stack,
  Spinner,
} from "react-bootstrap";
import "./App.css";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import PizZipUtils from "pizzip/utils/index.js";
import expressions from "angular-expressions";
import { saveAs } from "file-saver";
import { TMCRFinalStep, TMCRWizardSteps } from "./Steps/Steps";
import { AppHeader } from "./components/AppHeader";
import { globalContext } from "./stateManagement/GlobalStore";
import { AlertModal } from "./Steps/AlertModal";
import { AppLeftNav } from "./components/AppLeftNav";
import { AttachmentsReminder } from "./components/AttachmentsReminder";

function angularParser(tag: any) {
  tag = tag
    .replace(/^\.$/, "this")
    .replace(/(‘|’)/g, "'")
    .replace(/(“|”)/g, '"');
  const expr = expressions.compile(tag);
  return {
    get: function (scope: any, context: any) {
      let obj = {};
      const scopeList = context.scopeList;
      const num = context.num;
      for (let i = 0, len = num + 1; i < len; i++) {
        obj = Object.assign(obj, scopeList[i]);
      }
      return expr(scope, obj);
    },
  };
}

function App() {
  const { globalState, dispatch } = useContext(globalContext);
  const [isLoading, setLoading] = useState(false);
  const [isChecking, setChecking] = useState(false);
  const [reminder, setReminder] = useState(false);

  let submitButtonText;
  if (isLoading) {
    submitButtonText = "Generating Document...";
  } else {
    switch (globalState.wizardStep) {
      case TMCRFinalStep:
        submitButtonText = "Generate Document";
        break;
      case 0:
        submitButtonText = "Start TMCR";
        break;
      default:
        submitButtonText = "Save and Continue";
    }
  }

  function handleAlert(accept: boolean) {
    setChecking(false);
    if (accept) {
      dispatch({ type: "PURGE_STATE" });
    }
  }

  function handleSubmit(e: any) {
    if (globalState.wizardStep === TMCRFinalStep) {
      setLoading(true);
      generateDocument();
    } else {
      dispatch({ type: "NEXT_STEP" });
    }
    e.preventDefault();
  }

  // TODO: update to use ResetAlert
  function handleReset(e: any) {
    setChecking(true);
  }

  async function generateDocument() {
    console.log("generating document...");
    console.log(globalState);
    PizZipUtils.getBinaryContent(
      ".\\TMCR_Template.docx",
      function (error: any, content: any) {
        if (error) {
          throw error;
        }
        const zip = new PizZip(content);
        const doc = new Docxtemplater(zip, {
          paragraphLoop: true,
          linebreaks: true,
          parser: angularParser,
        });

        // render the document (replace all occurences of {first_name} by John, {last_name} by Doe, ...)
        doc.render(globalState);
        const out = doc.getZip().generate({
          type: "blob",
          mimeType:
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          compression: "DEFLATE",
        }); //Output the document using Data-URI
        saveAs(out, globalState.program_mod_system_name + "_template.docx");
        setLoading(false);
        setReminder(true);
      }
    );
  }

  return (
    <Stack className="App" gap={2}>
      <AppHeader />
      <Container fluid>
        <Row>
          <Col md={2} className="d-none d-md-block">
            <AppLeftNav />
          </Col>
          <Col md={10} xs={12}>
            <Form className="mb-3" onSubmit={handleSubmit}>
              <TMCRWizardSteps currentStep={globalState.wizardStep} />
              <Stack direction="horizontal" gap={3}>
                <Button
                  variant="secondary"
                  className="ms-auto"
                  type="button"
                  disabled={isLoading || globalState.wizardStep === 0}
                  onClick={(e) => dispatch({ type: "PREV_STEP" })}
                >
                  Previous Step
                </Button>
                {globalState.wizardStep === TMCRFinalStep &&
                  globalState.wizardOptions.length === 1 && (
                    <Button
                      type="button"
                      onClick={(e) => dispatch({ type: "ADD_TMCR" })}
                    >
                      Add second TMCR
                    </Button>
                  )}
                {!(
                  globalState.wizardOptions.length === 2 &&
                  globalState.wizardStep === TMCRFinalStep &&
                  globalState.tmcrIndex === 0
                ) && (
                  <Button type="submit" disabled={isLoading}>
                    <>
                      {isLoading === true && (
                        <Spinner
                          as="span"
                          animation="grow"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      )}
                      {submitButtonText}
                    </>
                  </Button>
                )}
                <div className="vr" />
                <Button
                  variant="outline-danger"
                  type="reset"
                  disabled={isLoading}
                  onClick={(e) => handleReset(e)}
                >
                  {globalState.wizardStep === TMCRFinalStep
                    ? "Close and Reset"
                    : "Reset"}
                </Button>
              </Stack>
              <AlertModal show={isChecking} close={handleAlert} />
            </Form>
          </Col>
        </Row>
      </Container>
      <AttachmentsReminder
        show={reminder}
        handleClose={() => setReminder(false)}
      />
    </Stack>
  );
}

export default App;
