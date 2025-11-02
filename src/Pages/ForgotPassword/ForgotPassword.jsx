import React, { use, useState } from "react";
import { useLocation } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../provider/AuthProvider";

const ForgotPassword = () => {
  const { resetPassword } = use(AuthContext);
  const location = useLocation();

  const passedEmail = location.state?.email || "";
  const [email, setEmail] = useState(passedEmail);

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email!");
      return;
    }

    if (!email) {
      toast.error("Please enter your email!");
      return;
    }

    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");

        setTimeout(() => {
          window.open("https://mail.google.com", "_blank");
        }, 1000);
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 sm:p-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Forgot Password
        </h2>

        <form onSubmit={handleReset} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Enter your Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition-all duration-300"
          >
            Reset Password
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Remember your password?{" "}
          <button
            onClick={() => window.history.back()}
            className="text-blue-600 font-semibold hover:underline"
          >
            Go back to Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
