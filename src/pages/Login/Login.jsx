import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const [error, setError] = useState(null);

  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      await signIn(email, password);

      // Show a success toast
      toast.success("Login successful!");

      // Navigate to the home page
      navigate(from);
    } catch (error) {
      setError(error.message);
      toast.error("Login failed. Please try again.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();

      // Show a success toast
      toast.success("Google login successful!");

      // Navigate to the home page
      navigate("/");
    } catch (error) {
      setError(error.message);
      toast.error("Google login failed. Please try again.");
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-700">
        <div className="md:hero-content">
          <div className="hidden md:block">
            <iframe
              width={800}
              height={800}
              src="https://lottie.host/?file=fcaa96af-b0ec-4b9c-b682-2bc80b0e2f93/Dy5jyViBEP.json"
            ></iframe>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900  shadow-2xl">
            <h1 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 pt-4">
              Please Login!
            </h1>
            <form onSubmit={handleLogin} className="card-body rounded-lg">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-accent">Login</button>
              </div>

              <div className="flex gap-4 mx-auto">
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="btn btn-outline btn-accent mt-2"
                >
                  <img
                    className="mx-2"
                    src="https://developers.google.com/identity/images/g-logo.png"
                    alt="Google logo"
                    width="20px"
                    height="20px"
                  />
                  Google
                </button>
              </div>
            </form>
            {error && <p className="text-red-500">{error}</p>}
            <span className="p-5 text-white">
              New to this Website?
              <Link
                to="/register"
                className="label-text-alt link link-hover text-white"
              >
                Please Register..
              </Link>
            </span>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
