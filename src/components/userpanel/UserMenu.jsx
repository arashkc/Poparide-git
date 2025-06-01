import React, { useState } from "react";

const UserMenu = ({ user }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <img
        src={user.avatar || "https://via.placeholder.com/40"}
        alt="User"
        className="w-10 h-10 rounded-full cursor-pointer"
        onClick={() => setOpen(!open)}
      />
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow p-2 space-y-2">
          <p className="font-medium">{user.name}</p>
          <button className="w-full text-left hover:bg-gray-100 p-2">
            Your profile
          </button>
          <button className="w-full text-left hover:bg-gray-100 p-2">
            Account settings
          </button>
          <button className="w-full text-left hover:bg-gray-100 p-2">
            Payments
          </button>
          <button className="w-full text-left hover:bg-gray-100 p-2">
            Payouts
          </button>
          <button className="w-full text-left hover:bg-gray-100 p-2">
            Help
          </button>
          <button className="w-full text-left hover:bg-gray-100 p-2">
            Cool stuff
          </button>
          <button className="w-full text-left hover:bg-gray-100 p-2">
            Students
          </button>
          <button className="w-full text-left hover:bg-gray-100 p-2 text-red-500">
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
