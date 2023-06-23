import React, { useState, ChangeEvent, FormEvent } from "react";

interface UserTypeFormProps {
  handleType: (userType: string) => void;
}

const UserTypeForm: React.FC<UserTypeFormProps> = ({ handleType }) => {
  const [userType, setUserType] = useState<string>("");

  const handleUserTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserType(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleType(userType);
    console.log("Selected user type:", userType);
  };

  return (
    <div className="flex justify-center items-center mt-12">
      <form
        className="bg-white shadow-md rounded-lg p-6 border border-sky-200"
        onSubmit={handleSubmit}>
        <h2 className="text-xl text-sky-500 font-semibold mb-6">
          Are you a student or a teacher?
        </h2>
        <div className="flex items-center mb-4">
          <input
            type="radio"
            id="student"
            name="userType"
            value="student"
            className="mr-2"
            checked={userType === "student"}
            onChange={handleUserTypeChange}
          />
          <label htmlFor="student" className="text-lg">
            Student
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="radio"
            id="teacher"
            name="userType"
            value="teacher"
            className="mr-2"
            checked={userType === "teacher"}
            onChange={handleUserTypeChange}
          />
          <label htmlFor="teacher" className="text-lg">
            Teacher
          </label>
        </div>
        <div className="flex justify-between mt-4">
          <p></p>
          <button
            type="submit"
            className="text-sky-500 hover:text-sky-600 focus:outline-none">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserTypeForm;
