// src/components/userpanel/ProfileOverview.jsx
import React, { useState, useRef } from "react";

const ProfileOverview = ({ user }) => {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [photo, setPhoto] = useState(null);
  const fileInputRef = useRef(null);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    setEditing(false);
  };

  return (
    <section className="bg-white shadow-sm border rounded-2xl p-6 max-w-5xl mx-auto animate-fade-in">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-3">
        اطلاعات پروفایل
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Photo */}
        <div className="flex flex-col items-center">
          <div
            onClick={() => fileInputRef.current.click()}
            className="w-28 h-28 rounded-full bg-gray-200 overflow-hidden border hover:ring-2 ring-indigo-400 cursor-pointer relative"
            title="تغییر عکس"
          >
            {photo ? (
              <img
                src={photo}
                alt="profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full text-gray-400 p-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            )}
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={handlePhotoChange}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs text-center py-1 opacity-0 hover:opacity-100 transition">
              تغییر عکس
            </div>
          </div>
        </div>

        {/* Info Form or Static */}
        <div className="md:col-span-2 space-y-4">
          {!editing ? (
            <>
              <div>
                <p className="text-sm text-gray-600">نام</p>
                <p className="text-lg font-medium">{name || "نام وارد نشده"}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">ایمیل</p>
                <p className="text-lg font-medium">{email || "—"}</p>
              </div>
              <button
                onClick={() => setEditing(true)}
                className="mt-4 px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-sm"
              >
                ویرایش اطلاعات
              </button>
            </>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSave();
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  نام
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ایمیل
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 text-sm"
                >
                  ذخیره
                </button>
                <button
                  type="button"
                  onClick={() => setEditing(false)}
                  className="bg-gray-300 text-gray-800 px-5 py-2 rounded-lg text-sm"
                >
                  انصراف
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfileOverview;
