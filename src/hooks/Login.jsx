import React, { useEffect, useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login({ show, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const panelRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    if (!show) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [show, onClose]);

  // Focus trap inside panel when open
  useEffect(() => {
    if (show && panelRef.current) {
      panelRef.current.focus();
    }
  }, [show]);

  const validate = () => {
    const errs = {};
    if (!email) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errs.email = "Email is invalid";
    }
    if (!password) {
      errs.password = "Password is required";
    } else if (password.length < 6) {
      errs.password = "Password must be at least 6 characters";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Please fix the errors and try again.");
      return;
    }

    // Fake login logic (replace with real API call)
    if (email === "user@example.com" && password === "password123") {
      toast.success("Login successful!");
      setEmail("");
      setPassword("");
      setErrors({});
      onClose();
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={2500} theme="colored" />

      {/* Backdrop */}
      {show && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Offcanvas panel */}
      <div
        tabIndex={-1}
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="loginPanelTitle"
        className={`
          fixed top-0 right-0 h-full w-80 bg-white shadow-2xl rounded-l-3xl
          z-50 transform transition-transform duration-300 ease-in-out
          ${show ? "translate-x-0" : "translate-x-full"}
          focus:outline-none
          flex flex-col
        `}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 id="loginPanelTitle" className="text-xl font-semibold text-gray-800">
            Login
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 text-3xl font-bold"
            aria-label="Close login panel"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 flex flex-col flex-grow">
          <label htmlFor="email" className="mb-1 font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`mb-2 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-400 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby="emailError"
            autoComplete="username"
          />
          {errors.email && (
            <span
              id="emailError"
              className="text-red-600 text-sm mb-2"
              role="alert"
            >
              {errors.email}
            </span>
          )}

          <label htmlFor="password" className="mb-1 font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-400 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            aria-invalid={errors.password ? "true" : "false"}
            aria-describedby="passwordError"
            autoComplete="current-password"
          />
          {errors.password && (
            <span
              id="passwordError"
              className="text-red-600 text-sm mb-4"
              role="alert"
            >
              {errors.password}
            </span>
          )}

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded transition"
          >
            Login
          </button>
        </form>

        <div className="p-4 text-center text-sm text-gray-500">
          {/* Optional: Add links to signup or forgot password */}
          Don't have an account?{" "}
          <button
            type="button"
            className="text-red-600 hover:underline focus:outline-none"
            onClick={() => alert("Signup flow coming soon!")}
          >
            Sign up
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
