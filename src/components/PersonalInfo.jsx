import { useSelector, useDispatch } from "react-redux";
import { setField } from "../redux/formSlice";

const PersonalInfo = () => {
  const { firstName, lastName, errors } = useSelector((state) => state.form);
  const dispatch = useDispatch();

  return (
    <div className="content">
      <h2 className="title">Personal Information</h2>
      <div>
        <label htmlFor="firstName" className="label">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          placeholder="add your first name"
          onChange={(e) =>
            dispatch(setField({ field: "firstName", value: e.target.value }))
          }
          className={`input ${errors.firstName ? "border-red-500" : ""}`}
        />
        {errors.firstName && <p className="error_text">{errors.firstName}</p>}
      </div>
      <div>
        <label htmlFor="lastName" className="label">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          placeholder="add your last name"
          onChange={(e) =>
            dispatch(setField({ field: "lastName", value: e.target.value }))
          }
          className={`input ${errors.lastName ? "border-red-500" : ""}`}
        />
        {errors.lastName && <p className="error_text">{errors.lastName}</p>}
      </div>
    </div>
  );
};

export default PersonalInfo;
