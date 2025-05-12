import React, { useState, useEffect } from "react";
import RideCard from "../components/Ridecard";
import TripFilters from "../components/TripFilters";
import styles from "./SearchResults.module.css";

const SearchResults = () => {
  const [allTrips, setAllTrips] = useState([]); // fetched from backend in the future
  const [filteredTrips, setFilteredTrips] = useState([]);
  const [filters, setFilters] = useState({
    origin: "",
    destination: "",
    minPrice: 0,
    maxPrice: 10000000,
    date: "",
  });

  useEffect(() => {
    // Simulate fetching trips (replace with API later)
    const sampleTrips = [
      {
        id: 1,
        origin: "رشت",
        destination: "تهران",
        date: "2025-05-20",
        price: 150000,
        seats: 4,
        takenSeats: 2,
      },
      {
        id: 2,
        origin: "اصفهان",
        destination: "تهران",
        date: "2025-05-21",
        price: 220000,
        seats: 3,
        takenSeats: 3,
      },
    ];
    setAllTrips(sampleTrips);
    setFilteredTrips(sampleTrips);
  }, []);

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const applyFilters = () => {
    const result = allTrips.filter((trip) => {
      const matchesOrigin =
        !filters.origin || trip.origin.includes(filters.origin);
      const matchesDestination =
        !filters.destination || trip.destination.includes(filters.destination);
      const matchesPrice =
        trip.price >= filters.minPrice && trip.price <= filters.maxPrice;
      const matchesDate = !filters.date || trip.date === filters.date;

      return matchesOrigin && matchesDestination && matchesPrice && matchesDate;
    });

    setFilteredTrips(result);
  };

  return (
    <div className={styles.searchResults}>
      <TripFilters filters={filters} setFilters={setFilters} />
      <div className={styles.resultsGrid}>
        {filteredTrips.length === 0 ? (
          <p className={styles.noResults}>نتیجه‌ای پیدا نشد</p>
        ) : (
          filteredTrips.map((trip) => <RideCard key={trip.id} trip={trip} />)
        )}
      </div>
    </div>
  );
};

export default SearchResults;
