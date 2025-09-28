// src/pages/Home.jsx
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Home content */}
      <main className="p-6 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to DSA Sheet Tracker 🚀
        </h1>
        <p className="text-lg text-gray-700">
          Track your DSA progress, analyze strengths & weaknesses, and stay
          consistent on your placement journey.
        </p>
      </main>
    </div>
  );
}
