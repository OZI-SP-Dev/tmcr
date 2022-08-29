import { useContext } from "react";
import { globalContext } from "../stateManagement/GlobalStore";
import { Table2 } from "./Table2";
import { Table2Linear } from "./Table2Linear";

export const Table2Container = () => {
  const { globalState } = useContext(globalContext);
  if (globalState.wizardOptions[globalState.tmcrIndex].tmcr_type !== "Linear")
    return <Table2 />;
  return <Table2Linear />;
};
