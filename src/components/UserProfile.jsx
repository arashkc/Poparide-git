import React from "react";

const UserProfile = ({ user }) => {
  return (
    <section style={{ marginBottom: 30 }}>
      <h2>اطلاعات کاربری</h2>
      <p>
        <strong>نام:</strong> {user.name || "بدون نام"}
      </p>
      <p>
        <strong>ایمیل:</strong> {user.email}
      </p>
      {/* Add more user info here */}
    </section>
  );
};

export default UserProfile;
