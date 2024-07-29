import React from "react";
import profileimage from "../../assets/profileimage.svg";

const UpdateClientInformation = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-full max-w-md p-6 rounded-md shadow-md">
        <div className="flex justify-end font-bold">
          <button className="text-gray-500 hover:text-gray-700">&times;</button>
        </div>
        <div className="flex mb-4 gap-2">
          <img src={profileimage} alt="profileimage" />
          <h2 className="text-xl font-semibold">Update Client Information</h2>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Client Name</label>
            <input
              type="text"
              placeholder="Enter client name"
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Contact No</label>
            <input
              type="text"
              placeholder="Enter contact no"
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="text"
              placeholder="Enter Email-ID"
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full mt-1 p-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateClientInformation;
