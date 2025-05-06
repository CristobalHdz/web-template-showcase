import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

import "./FormAlertMsg.css";

const FormAlertMsg = ({ text, alertType }) => {
  return (
    <div className="alert-wrapper">
      <Alert icon={<CheckIcon fontSize="inherit" />} severity={alertType}>
        {text}
      </Alert>
    </div>
  );
};

export default FormAlertMsg;
