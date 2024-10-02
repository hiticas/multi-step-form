import { useDispatch, useSelector } from "react-redux";
import { setErrors } from "../redux/formSlice";
import { nextStep, prevStep } from "../redux/stepSlice";
import {
  PersonalInfo,
  EmailInfo,
  PasswordInfo,
  Summary,
  Sidebar,
  Congrats,
} from "./index";

const MultiStepForm = () => {
  const currentStep = useSelector((state) => state.step.currentStep);
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const lastStep = 5;

  const validateStep = (currentStep) => {
    let stepErrors = {};

    switch (currentStep) {
      case 1:
        if (!form.firstName) stepErrors.firstName = "First name is required";
        if (!form.lastName) stepErrors.lastName = "Last name is required";
        break;
      case 2:
        if (!form.email) stepErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(form.email))
          stepErrors.email = "Email is invalid";
        if (form.email !== form.confirmEmail)
          stepErrors.confirmEmail = "Emails do not match";
        break;
      case 3:
        if (!form.password) stepErrors.password = "Password is required";
        else if (form.password.length < 8)
          stepErrors.password = "Password must be at least 8 characters";
        if (form.password !== form.confirmPassword)
          stepErrors.confirmPassword = "Passwords do not match";
        break;
    }

    dispatch(setErrors(stepErrors));
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      dispatch(nextStep());
    }
  };

  const handlePrev = () => {
    dispatch(prevStep());
  };

  const handleSubmit = () => {
    if (validateStep(1) && validateStep(2) && validateStep(3)) {
      dispatch(nextStep());
    }
    console.log("Form submitted: ", form);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <EmailInfo />;
      case 3:
        return <PasswordInfo />;
      case 4:
        return <Summary />;
      case 5:
        return <Congrats />;
      default:
        return null;
    }
  };
  return (
    <div className="multi_step_form">
      {currentStep !== lastStep && <Sidebar />}
      <div className="main">
        {renderStep()}
        {currentStep !== lastStep && (
          <div className="actions">
            {currentStep > 1 && (
              <button onClick={handlePrev} className="btn_prev">
                Previous
              </button>
            )}
            {currentStep < lastStep - 1 ? (
              <button onClick={handleNext} className="btn_next">
                Next
              </button>
            ) : (
              <button onClick={handleSubmit} className="btn_submit">
                Submit
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
