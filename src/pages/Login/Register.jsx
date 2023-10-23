import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
  const { createUser, userProfile } = useContext(AuthContext);
  const navigate = useNavigate(); 

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    try {
      const result = await createUser(email, password);
      const loggedUser = result.user;

      if (photoURL) {
        await userProfile(name, photoURL);
      }
      toast.success("Registration successful!");
      form.reset();
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Registration failed. Please try again.");
    }
  };

  return (
    <div className="hero min-h-screen bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-700">
      <div className="md:hero-content">
        <div className="hidden md:block">
          <iframe
            src="https://lottie.host/?file=51f67130-c9e8-4167-8df3-09ec917181c0/MfAsCmCzCX.json"
            width="800"
            height="800"
          ></iframe>
        </div>
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-900 via-cyan-900 to-blue-900">
              Please Register
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="photo url"
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
                  <Link
                    to="/login"
                    className="p-1 label-text-alt link link-hover text-white"
                  >
                    Have Already an Account? Please Login
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
