import React, { useState } from "react";

const PersonalDetails = () => {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    firstName: "آرش",
    lastName: "کریمی",
    email: "arash@example.com",
    phone: "+98 912 345 6789",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setEditing(false);
    // TODO: Send updated data to backend
  };

  return (
    <section className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-2">
        اطلاعات شخصی
      </h2>

      {!editing ? (
        <div className="space-y-4 text-right">
          <div>
            <p className="text-gray-600">نام</p>
            <p className="text-lg font-medium">{form.firstName}</p>
          </div>
          <div>
            <p className="text-gray-600">نام خانوادگی</p>
            <p className="text-lg font-medium">{form.lastName}</p>
          </div>
          <div>
            <p className="text-gray-600">ایمیل</p>
            <p className="text-lg font-medium">{form.email}</p>
          </div>
          <div>
            <p className="text-gray-600">شماره تماس</p>
            <p className="text-lg font-medium">{form.phone}</p>
          </div>
          <button
            onClick={() => setEditing(true)}
            className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
          >
            ویرایش اطلاعات
          </button>
        </div>
      ) : (
        <form onSubmit={handleSave} className="space-y-4 text-right">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              نام
            </label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              نام خانوادگی
            </label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              ایمیل
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              شماره تماس
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-400"
              required
            />
          </div>

          <div className="flex gap-4 justify-start mt-6 rtl:justify-end">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl transition"
            >
              ذخیره
            </button>
            <button
              type="button"
              onClick={() => setEditing(false)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-xl transition"
            >
              انصراف
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default PersonalDetails;
