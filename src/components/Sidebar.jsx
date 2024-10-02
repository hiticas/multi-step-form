import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../redux/stepSlice";

const Sidebar = () => {
  const currentStep = useSelector((state) => state.step.currentStep);
  const { errors } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleStepClick = (stepNumber) => {
    if (Object.keys(errors).length !== 0) {
      return;
    } else {
      dispatch(setStep(stepNumber));
    }
  };

  return (
    <div className="sidebar">
      <ul>
        {["Personal Info", "Email", "Password", "Summary"].map(
          (label, index) => {
            const stepNumber = index + 1;
            return (
              <li
                key={stepNumber}
                className={`${currentStep === stepNumber ? "active" : ""}`}
                onClick={() => handleStepClick(stepNumber)}
              >
                <div className="sidebar_step">
                  <span>{stepNumber}</span>
                  <div className="hidden md:block">
                    <div className="text-gray-300 text-xs">{`STEP ${stepNumber}`}</div>
                    <div className="text-white font-bold">{label}</div>
                  </div>
                </div>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
