import useBrochureStore from "@/stores/brochureStore";
import React, { useState, useEffect } from "react";

const BrochurePopup = () => {
  const { isOpen, email, submitted, closePopup, setEmail, setSubmitted } =
    useBrochureStore();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [location, setLocation] = useState({
    country: "",
    state: "",
    city: "",
  });
  const [locationLoaded, setLocationLoaded] = useState(false);

  // Fetch user location when popup opens
  useEffect(() => {
    if (!isOpen) return;

    const fetchLocation = async () => {
      try {
        const res = await fetch("/api/get-location");
        if (!res.ok) throw new Error("Failed to fetch location");
        const data = await res.json();
        setLocation({
          country: data.country_name || "",
          state: data.region || "",
          city: data.city || "",
        });
      } catch (err) {
        setLocation({ country: "", state: "", city: "" });
      } finally {
        setLocationLoaded(true);
      }
    };

    fetchLocation();
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return setError("Email is required");

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/brochure-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          country: location.country || null,
          state: location.state || null,
          city: location.city || null,
        }),
      });

      if (res.ok) {
        setSubmitted();
      } else {
        const data = await res.json();
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex h-full items-center justify-center bg-black bg-opacity-80 p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold transition-colors"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Content */}
        {!submitted ? (
          <>
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Download Our Brochure
            </h2>
            <p className="text-gray-700 text-center mb-4 text-sm">
              Please enter your email to download the brochure.
            </p>

            {error && (
              <p className="text-red-600 text-center mb-2 text-sm">{error}</p>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#DD2B1C] text-sm"
              />
              <button
                type="submit"
                disabled={loading || !locationLoaded}
                className={`bg-red-600 text-white py-2 rounded font-semibold hover:bg-[#DD2B1C] transition-colors text-sm ${
                  loading || !locationLoaded
                    ? "opacity-70 cursor-not-allowed"
                    : ""
                }`}
              >
                {loading ? "Submitting..." : "Submit & Download"}
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              Thank You!
            </h2>
            <p className="text-gray-700 text-center mb-4 text-sm">
              Your brochure is ready to download.
            </p>
            <div className="flex justify-center">
              <a
                href="/Allaster-Brochure.pdf"
                download
                className="bg-[#DD2B1C] text-white py-2 px-4 rounded font-semibold hover:bg-[#DD2B1C] transition-colors text-sm"
              >
                Download Brochure
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BrochurePopup;
