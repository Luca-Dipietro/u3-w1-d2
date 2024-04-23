import { Alert } from "react-bootstrap";

const Welcome = function () {
  return (
    <div className="mt-3">
      <Alert variant="dark">
        <Alert.Heading>Benvenuto nel nostro negozio!</Alert.Heading>
        <p>Grazie per averci scelto. Speriamo che tu trovi ciò che stai cercando.</p>
      </Alert>
    </div>
  );
};

export default Welcome;
