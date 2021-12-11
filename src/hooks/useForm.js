// write your custom hook here to control your checkout form
import { useState } from "react";
// write your custom hook here to control your checkout form

function useForm(initVals){
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState(initVals);
  const handleChanges = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };
  return [values, showSuccessMessage, handleChanges, handleSubmit];
}

export default useForm;