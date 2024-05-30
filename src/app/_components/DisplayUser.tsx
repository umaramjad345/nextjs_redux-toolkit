"use client";
import { Trash2 } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slice";

const DisplayUser = () => {
  const users = useSelector((state: any) => state.users);
  const dispatch = useDispatch();

  const handleDeleteUser = (id: string) => {
    dispatch(removeUser({ id }));
  };

  return (
    <div className="flex flex-col gap-2 p-4 m-4 rounded-lg border-2 border-orange-400 w-1/2 mx-auto h-96 overflow-y-scroll">
      <h2 className="text-xl font-bold text-gray-500 text-center">
        Display Users
      </h2>

      {users?.map((user: any) => (
        <div
          className="text-gray-500 font-semibold text-xl bg-yellow-100 p-2 rounded-lg capitalize flex justify-between items-center"
          key={user.id}
        >
          <span>{user.name}</span>
          <Trash2 onClick={() => handleDeleteUser(user.id)} />
        </div>
      ))}
    </div>
  );
};

export default DisplayUser;
