import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import UserPanelHeader from "../components/userpanel/UserPanelHeader";

const UserPanel = () => {
  const { user, loading } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) navigate("/loginregister");
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        در حال بارگذاری...
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50" dir="rtl">
      <UserPanelHeader user={user} />
      <main className="flex-1 px-4 py-10 max-w-4xl mx-auto text-right">
        <div className="text-center">
          <img
            src={user?.photo || "/avatar.png"}
            className="w-24 h-24 rounded-full mx-auto mb-4"
            alt="avatar"
          />
          <h2 className="text-2xl font-semibold">
            سلام {user?.username || "کاربر"}،
          </h2>
          <p className="text-gray-600 mb-2">به همسفر خوش آمدی!</p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
              🛣 پست سفر جدید
            </button>
            <button className="bg-white text-blue-600 border border-blue-600 px-6 py-2 rounded-full hover:bg-blue-50 transition">
              🔍 جستجوی سفر
            </button>
          </div>

          <div className="flex justify-center gap-6 text-sm text-gray-500 mt-4">
            <span>🚫 هنوز کیلومتری اشتراک‌گذاری نشده</span>
            <span>👤 هنوز فعالیتی ثبت نشده</span>
          </div>
          <button className="mt-6 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
            شروع کن
          </button>
        </div>
      </main>
    </div>
  );
};

export default UserPanel;
