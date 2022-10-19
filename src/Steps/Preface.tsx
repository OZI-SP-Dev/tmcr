export const Preface = () => {
  return (
    <div className="m-3">
      <h1>Welcome to the Automated TMCR Tool</h1>
      <br />
      <h3 className="text-start">Select "Start TMCR"</h3>
      <ul className="text-start">
        <li>Menu on left allows for review of any section</li>
        <li>
          Data entered within each Section is saved with the “Save and Continue”
          selection
        </li>
        <li>“Reset” select will clear all user input</li>
        <li>
          When TMCR is completed, document can be generated with “Generate
          Document” selection
        </li>
        <li>
          When TMCR is completed, second document (pdf/flight manual) can
          becreated with “Add second TMCR” selection
        </li>
      </ul>
    </div>
  );
};
