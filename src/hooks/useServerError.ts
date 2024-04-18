import { useContext } from "react";
import { ServerErrorContext } from "../contexts/serverErrorContext";

const useServerError = () => useContext(ServerErrorContext);

export default useServerError;
