import { useDispatch } from "react-redux";
import { resetForm } from "../redux/formSlice";
import { setStep } from "../redux/stepSlice";
import iconCheck from "../assets/images/icon-checkmark.svg";
const Congrats = () => {
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(resetForm());
    dispatch(setStep(1));
  };
  return (
    <div className="congrats">
      <img src={iconCheck} alt="icon" className="icon_check" />
      <h1>Congratulations! Your data has been logged.</h1>
      <button onClick={handleReset} className="btn_prev p-2 rounded-sm mt-10">
        Start Again
      </button>
    </div>
  );
};

export default Congrats;
