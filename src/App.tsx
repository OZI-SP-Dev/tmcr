import { useState } from 'react';
import { Button, Container, Form, Stack, Spinner } from 'react-bootstrap';
import './App.css';
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import { saveAs } from 'file-saver';
import { Step1 } from './Steps/Step1';
import { FinalStep } from './Steps/FinalStep';
import AppHeader from './components/AppHeader'



function App() {
  const date = new Date();
  const [isLoading, setLoading] = useState(false);
  const [options, setOptions] = useState<any>({
    program_mod_system_name: "",
    TMCRDate: date.toDateString(),
    type_of_contract: "Firm Fixed Price",
    attachment_number: null,
    cdrl_sequence_number: null,
    exhibit: null,
    rfp_contract: null,
    CLIN: null,
    include_stuff: false
  });
  const [step, setStep] = useState<number>(1);

  function handleSubmit(e: any) {
    if (step === 2) {
      setLoading(true);
      generateDocument();
    }
    else {
      setStep(step + 1);
    }
    e.preventDefault();
  }

  function handleReset(e: any) {
    setOptions({
      program_mod_system_name: "",
      TMCRDate: date.toDateString(),
      type_of_contract: "Firm Fixed Price",
      attachment_number: null,
      cdrl_sequence_number: null,
      exhibit: null,
      rfp_contract: null,
      CLIN: null,
      include_stuff: false
    });
    setStep(1);
  }

  async function generateDocument() {
    console.log("generating document...");
    console.log(options);
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
        doc.render(options);
        const out = doc.getZip().generate({
          type: "blob",
          mimeType:
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        }); //Output the document using Data-URI
        saveAs(out, options.program_mod_system_name + "_template.docx");
        setLoading(false);
      }
    );
  };


  return (
    <Stack className="App" gap={2}>
      <AppHeader />
      <Container fluid="sm">
        <Form onSubmit={handleSubmit}>
          {step === 1 && <Step1 options={options} setOptions={setOptions} />}
          {step === 2 && <FinalStep options={options} setOptions={setOptions} />}
          <Stack direction="horizontal" gap={3}>
            <Button className="ms-auto" type="submit" disabled={isLoading}>
              {(isLoading === true && <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              /> && "Generating Document...")
                || (step === 2 ? "Generate Document" : "Next Step")
              }
            </Button>
            <div className="vr" />
            <Button variant="outline-danger" type="reset" disabled={isLoading} onClick={e => handleReset(e)}>Reset</Button>
          </Stack>
        </Form>
      </Container>
    </Stack>
  );
}

export default App;
