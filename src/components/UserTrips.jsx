import React, { useState, useEffect } from "react";

const UserTrips = ({ userId }) => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    // Replace this with real API call to fetch user trips by userId
    // For now, mock data:
    const mockTrips = [
      { id: 1, origin: "تهران", destination: "اصفهان", date: "1402/06/01" },
      { id: 2, origin: "شیراز", destination: "مشهد", date: "1402/06/10" },
    ];
    setTrips(mockTrips);
  }, [userId]);

  return (
    <section style={{ marginBottom: 30 }}>
      <h2>سفرهای من</h2>
      {trips.length === 0 ? (
        <p>سفارشی موجود نیست.</p>
      ) : (
        <ul>
          {trips.map((trip) => (
            <li key={trip.id}>
              {trip.origin} → {trip.destination} - {trip.date}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default UserTrips;
