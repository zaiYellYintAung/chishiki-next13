import { BsFillEnvelopeFill, BsLockFill } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setID } from "../../store/registerSlice";
import { RootState } from "../../store";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const url = "http://localhost:5000/user/register";
  let role = false;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post(url, { email, password, role })
      .then((res) => {
        console.log("id", res.data.id);
        dispatch(setID(res.data.id));

        navigate("/profile/create-profile");
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
    const rid = useSelector((state: RootState) => state.registerID.id);
    console.log("Redux id", rid);
  };

  return (
    <div className="flex items-center justify-center mt-20">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl text-center text-sky-700 font-bold mb-8">
          Register
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6 relative">
            <label
              htmlFor="email"
              className="block text-sky-700 text-sm font-semibold mb-1">
              Email
            </label>
            <div className="flex items-center absolute inset-y-0 left-0 pl-3 pt-5">
              <BsFillEnvelopeFill className="h-5 w-5 text-sky-500" />
            </div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-sky-300 rounded focus:outline-none focus:border-sky-500 text-sky-700"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6 relative">
            <label
              htmlFor="password"
              className="block text-sky-700 text-sm font-semibold mb-1">
              Password
            </label>
            <div className="flex items-center absolute inset-y-0 left-0 pl-3 pt-5">
              <BsLockFill className="h-5 w-5 text-sky-500" />
            </div>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-sky-300 rounded focus:outline-none focus:border-sky-500 text-sky-700"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-6 relative">
            <label
              htmlFor="confirmPassword"
              className="block text-sky-700 text-sm font-semibold mb-1">
              Confirm Password
            </label>
            <div className="flex items-center absolute inset-y-0 left-0 pl-3">
              <BsLockFill className="h-5 w-5 text-sky-500" />
            </div>
            <input
              type="password"
              id="confirmPassword"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-sky-300 rounded focus:outline-none focus:border-sky-500 text-sky-700"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-sky-500 text-white py-2 px-4 rounded-md hover:bg-sky-600 transition duration-200">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
