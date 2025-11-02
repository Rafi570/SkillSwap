import React, { use } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const MyProfile = () => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const handleUpdateClick = () => {
 
    navigate("/update-profile");
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 sm:p-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          My Profile
        </h2>

        <div className="flex flex-col items-center mb-6">
          <img
            src={user.photoURL}
            alt="User"
            className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800">{user?.displayName || "No Name"}</h3>
          <p className="text-gray-600">{user?.email || "No Email"}</p>
        </div>

        <button
          onClick={handleUpdateClick}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition-all duration-300 mt-4"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
