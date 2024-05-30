"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slice";

const AddUser = () => {
  const [name, setName] = useState<string>("");
  const dispatch = useDispatch();

  const handleAddUser = () => {
    dispatch(addUser({ name }));
    setName("");
  };

  return (
    <div className="flex flex-col gap-2 p-4 m-4 rounded-lg border-2 border-orange-400 w-1/2 mx-auto">
      <h2 className="text-xl font-bold text-gray-500 text-center text-nowrap">
        Add User
      </h2>
      <div className="flex">
        <input
          type="text"
          placeholder="User Name"
          className="bg-gray-100 p-2 w-2/3 rounded-lg focus:outline-none"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="bg-orange-400 rounded-lg w-1/3 ml-2 text-gray-100 font-semibold hover:bg-opacity-70"
          onClick={handleAddUser}
        >
          Add User
        </button>
      </div>
    </div>
  );
};

export default AddUser;
