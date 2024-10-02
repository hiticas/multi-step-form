import { useSelector, useDispatch } from "react-redux";
import { setField } from "../redux/formSlice";

const PasswordInfo = () => {
  const { password, confirmPassword, errors } = useSelector(
    (state) => state.form
  );
  const dispatch = useDispatch();

  return (
    <div className="content">
      <h2 className="title">Password Information</h2>
      <div>
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          placeholder="add your password"
          onChange={(e) =>
            dispatch(setField({ field: "password", value: e.target.value }))
          }
          className={`input ${errors.password ? "border-red-500" : ""}`}
        />
        {errors.password && <p className="error_text">{errors.password}</p>}
      </div>
      <div>
        <label htmlFor="confirmPassword" className="label">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          placeholder="confirm your password"
          onChange={(e) =>
            dispatch(
              setField({ field: "confirmPassword", value: e.target.value })
            )
          }
          className={`input ${errors.confirmPassword ? "border-red-500" : ""}`}
        />
        {errors.confirmPassword && (
          <p className="error_text">{errors.confirmPassword}</p>
        )}
      </div>
    </div>
  );
};

export default PasswordInfo;
