import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const err = useRouteError();
  console.log(err);
  return <h1>Error Page +{err.status + " " + err.error}</h1>;
};

export default ErrorElement;
