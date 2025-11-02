import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { updateUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const photoURL = e.target.Url.value.trim();

    
    if (!name) {
      toast.error("Name cannot be empty!");
      return;
    }
    if (!photoURL) {
      toast.error("Profile Image URL cannot be empty!");
      return;
    }

    updateUser({ displayName: name, photoURL: photoURL })
      .then(() => {
        toast.success("Profile updated successfully!");
        navigate(-1); 
      })
      .catch((err) => {
        // console.log(err);
        toast.error("Failed to update profile");
      });
  };

  return (
    <div className="min-h-screen  flex justify-center items-center px-4">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 sm:p-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Update Profile
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Profile Image URL</label>
            <input
              type="text"
              name="Url"
              placeholder="Enter profile image URL"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition-all duration-300 mt-4"
          >
            Save Changes
          </button>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-full py-3 bg-gray-300 text-gray-800 font-semibold rounded-xl shadow-md hover:bg-gray-400 transition-all duration-300 mt-2"
          >
            Back
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
