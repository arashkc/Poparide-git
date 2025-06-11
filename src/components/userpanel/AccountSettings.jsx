import React, { useState } from "react";
import AccountSidebar from "./account/AccountSidebar";
import PersonalDetails from "./account/PersonalDetails";
import Security from "./account/Security";
import Preferences from "./account/Preferences";
import PaymentSettings from "./account/PaymentSettings";

const AccountSettings = () => {
  const [activeTab, setActiveTab] = useState("personal");

  const renderSection = () => {
    switch (activeTab) {
      case "personal":
        return <PersonalDetails />;
      case "security":
        return <Security />;
      case "preferences":
        return <Preferences />;
      case "payments":
        return <PaymentSettings />;
      default:
        return <PersonalDetails />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-full" dir="rtl">
      <AccountSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 p-4">{renderSection()}</div>
    </div>
  );
};

export default AccountSettings;
