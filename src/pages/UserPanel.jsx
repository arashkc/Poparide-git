// src/pages/UserPanel.js
import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const UserPanel = () => {
  const { user, loading } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/loginregister");
    }
  }, [user, loading, navigate]);

  if (loading) return <div>در حال بارگذاری...</div>;
  if (!user) return null;

  return (
    <div>
      <h1>پنل کاربری</h1>
      <p>خوش آمدید، {user.name || user.email}!</p>
      {/* Add more user-specific info and functionality here */}
    </div>
  );
};

export default UserPanel;
