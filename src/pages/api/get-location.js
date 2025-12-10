// /pages/api/get-location.js
export default async function handler(req, res) {
  try {
    const response = await fetch("https://ipwho.is/");
    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message || "Failed to get location");
    }

    res.status(200).json({
      country_name: data.country,
      region: data.region,
      city: data.city,
    });
  } catch (error) {
    console.error("Location fetch error:", error);
    res.status(500).json({ error: "Failed to fetch location" });
  }
}
