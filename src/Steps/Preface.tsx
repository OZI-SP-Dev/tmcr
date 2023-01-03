export const Preface = () => {
  return (
    <div className="m-3">
      <h1>Welcome to the Automated TMCR Tool</h1>
      <br />
      <h3 className="text-start">
        Programs are highly encouraged to use the{" "}
        <a
          href="https://usaf.dps.mil/teams/Hill/USAFTOMANAGEMENT/SitePages/LP-Training.aspx"
          target="_blank"
          rel="noreferrer"
        >
          Automated TMCR Tool Help/User Guide (H/UG)
        </a>{" "}
        when developing their program's TMCR.
      </h3>{" "}
      The H/UG is located on the AFTOMS SharePoint site at the following link:
      <br />
      <a
        href="https://usaf.dps.mil/teams/Hill/USAFTOMANAGEMENT/SitePages/LP-Training.aspx"
        target="_blank"
        rel="noreferrer"
      >
        https://usaf.dps.mil/teams/Hill/USAFTOMANAGEMENT/SitePages/LP-Training.aspx
      </a>
      <br />
      <br />
      <h3 className="text-start">Select "Start TMCR" to get started</h3>
      <ul className="text-start">
        <li>Menu on left allows for review of any section</li>
        <li>
          Data entered within each Section is saved with the “Save and Continue”
          button
        </li>
        <li>“Reset” will clear all saved user input</li>
        <li>
          When TMCR is completed, document can be generated with “Generate
          Document” selection
        </li>
        <li>
          When TMCR is completed, a second document (pdf/flight manual) can be
          created with “Add second TMCR” selection
        </li>
      </ul>
    </div>
  );
};
