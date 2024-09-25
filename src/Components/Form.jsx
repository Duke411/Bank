import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import AuthContext from "../store/auth-context";

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "!Email is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "!Password is Required";
  } else if (values.password.length > 20) {
    errors.password = "Must be 20 characters or less";
  }

  return errors;
};

const Form = () => {
  const authCntxt = useContext(AuthContext);
  const navigate = useNavigate();

  // const [formData, setFormData] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await axios.post(
          "https://equity-bqnkapp.onrender.com/bank/api/v1/login",
          {
            password: values.password,
            email: values.email,
          },
          { withCredentials: true }
        );
        authCntxt.login(res.data.token, res.data.data.user);

        // setUser(res.data.data.user);
        if (res.data.status === "success") {
          const userRole = res.data.data.user.role;
          if (userRole === "admin") {
            navigate("/admin");
          } else {
            navigate("/bankdashboard");
          }
        }
        toast.success("LogIn Successfull");

        // console.log(res);
        // console.log(res.data.data.token);
        // toast.success("LogIn Successfull");
        // authCxt.logIn(res.data.data.token);
        // navigate("/bankdashboard");
      } catch (error) {
        error ? toast.error("Invalid Email or Password") : error;
      } finally {
        resetForm();
      }
    },
  });

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        className="max-w-sm bg-white p-6 rounded-lg shadow-lg m-auto mt-10 space-y-4"
      >
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
        </div>
        {formik.errors.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            required
            name="password"
            id="password"
            placeholder="Enter your password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
        </div>
        {formik.errors.password ? (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        ) : null}
        <div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition-colors duration-300"
          >
            login
          </button>
        </div>
        <Link className="font-semibold text-blue-600" to="/forgot">
          Forgot Password?
        </Link>
        <p>Or</p>
        <Link className=" font-semibold text-blue-600" to="/signup">
          Register
        </Link>
      </form>
    </div>
  );
};

export default Form;
