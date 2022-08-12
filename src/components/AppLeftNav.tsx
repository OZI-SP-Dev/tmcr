import { useContext } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { globalContext } from "../stateManagement/GlobalStore";
import { TMCRStepNames } from "../Steps/Steps";
import "./AppLeftNav.css";

export const AppLeftNav = () => {
  const { globalState, dispatch } = useContext(globalContext);
  let steps = TMCRStepNames;

  return (
    <div className="sidebar-sticky bg-light">
      <h5 className="mt-5">Jump to Section</h5>
      <div className="d-grid gap-2 m-2">
        {steps.map((element, i) => (
          <Button
            key={element}
            disabled={globalState.wizardMaxStep[globalState.tmcrIndex] < i}
            variant={
              globalState.wizardStep === i
                ? "success"
                : globalState.wizardMaxStep[globalState.tmcrIndex] >= i
                ? "primary"
                : "outline-secondary"
            }
            className="text-start"
            onClick={(e) =>
              dispatch({ type: "GOTO_STEP", payload: { wizardStep: i } })
            }
          >
            {element}
          </Button>
        ))}
      </div>

      {globalState.wizardOptions.length === 2 && (
        <>
          <h5 className="mt-5">Active TMCR</h5>
          <Container fluid>
            <Row>
              <Col className="d-grid m-2">
                <Button
                  variant={
                    globalState.tmcrIndex === 0 ? "primary" : "outline-primary"
                  }
                  onClick={(e) => dispatch({ type: "LOAD_TMCR", payload: 0 })}
                >
                  TMCR 1
                </Button>
              </Col>
              <Col className="d-grid m-2">
                <Button
                  variant={
                    globalState.tmcrIndex === 1 ? "primary" : "outline-primary"
                  }
                  onClick={(e) => dispatch({ type: "LOAD_TMCR", payload: 1 })}
                >
                  TMCR 2
                </Button>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </div>
  );
};
