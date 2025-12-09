// /pages/api/get-location.js
export default async function handler(req, res) {
  try {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Location fetch error:", error);
    res.status(500).json({ error: "Failed to fetch location" });
  }
}
