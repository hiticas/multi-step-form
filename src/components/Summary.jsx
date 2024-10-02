import { useSelector } from "react-redux";

const Summary = () => {
  const { firstName, email } = useSelector((state) => state.form);

  return (
    <div className="content">
      <h2 className="title">Summary</h2>
      <p>
        <strong>Name:</strong> {firstName ? firstName : "No name provided"}
      </p>
      <p>
        <strong>Email:</strong> {email ? email : "No email provided"}
      </p>
      <p className="text-gray-600 font-bold text-">
        Please review your information before submitting.
      </p>
    </div>
  );
};

export default Summary;
