// ✅ src/pages/Dashboard.jsx
// 📌 Displays greeting + nominated heroes, consistent with your second screenshot

import React from "react";
import { useSelector } from "react-redux";
import HeroCard from "../components/HeroCard"; // adjust import if needed

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const { heroes, loading, error } = useSelector((state) => state.heroes);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      {/* 👤 Greet the user */}
      <h2 className="text-2xl font-bold mb-4">
        Welcome{user?.name ? `, ${user.name}` : ""}!
      </h2>

      {/* 📝 Show nominated heroes */}
      <h3 className="text-xl font-semibold mb-2">Your Nominated Heroes</h3>

      {/* 🌀 Show loading state */}
      {loading && <p>Loading your heroes...</p>}

      {/* ❌ Show error if failed */}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.isArray(heroes) && heroes.length > 0 ? (
          heroes.map((hero) => (
            <HeroCard key={hero._id || hero.id} hero={hero} />
          ))
        ) : (
          <p>You haven't nominated any heroes yet.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
