import React from "react";

const AccountSidebar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { key: "personal", label: "اطلاعات شخصی" },
    { key: "security", label: "امنیت حساب" },
    { key: "preferences", label: "تنظیمات" },
    { key: "payments", label: "روش‌های پرداخت" },
  ];

  return (
    <aside className="w-full md:w-64 bg-white border-l p-4">
      <ul className="space-y-2">
        {tabs.map((tab) => (
          <li key={tab.key}>
            <button
              onClick={() => setActiveTab(tab.key)}
              className={`w-full text-right px-3 py-2 rounded transition ${
                activeTab === tab.key
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AccountSidebar;
