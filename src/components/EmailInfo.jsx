import { useSelector, useDispatch } from "react-redux";
import { setField } from "../redux/formSlice";

const EmailInfo = () => {
  const { email, confirmEmail, errors } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  return (
    <div className="content">
      <h2 className="title">Email Information</h2>
      <div>
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          placeholder="add your email"
          onChange={(e) =>
            dispatch(setField({ field: "email", value: e.target.value }))
          }
          className={`input ${errors.email ? "border-red-500" : ""}`}
        />
        {errors.email && <p className="error_text">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="confirmEmail" className="label">
          Confirm Email
        </label>
        <input
          type="email"
          id="confirmEmail"
          value={confirmEmail}
          placeholder="confirm your email"
          onChange={(e) =>
            dispatch(setField({ field: "confirmEmail", value: e.target.value }))
          }
          className={`input ${errors.confirmEmail ? "border-red-500" : ""}`}
        />
        {errors.confirmEmail && (
          <p className="error_text">{errors.confirmEmail}</p>
        )}
      </div>
    </div>
  );
};

export default EmailInfo;
