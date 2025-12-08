import React, { useState } from "react";

const PopupForm = ({ position, closePopup }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resumeLink: "", // normal URL
    remarks: "",
    position: position,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // success message
  const [errorMessage, setErrorMessage] = useState(""); // error message

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.name) {
      formErrors.name = "Full name is required";
      isValid = false;
    }

    if (!formData.email) {
      formErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.phone) {
      formErrors.phone = "Contact number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = "Phone must be 10 digits";
      isValid = false;
    }

    if (!formData.resumeLink) {
      formErrors.resumeLink = "Resume link is required";
      isValid = false;
    }

    if (!formData.remarks) {
      formErrors.remarks = "Remarks are required";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/career", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccessMessage("Application submitted successfully! Our team will review it and contact you if shortlisted.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          resumeLink: "",
          remarks: "",
          position: position,
        });
      } else {
        setErrorMessage(data.error || "Submission failed. Try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Submission failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[999]">
      <div className="bg-white rounded-2xl p-[2vw] w-[45vw] sm:w-[90vw] relative">
        <button onClick={closePopup} className="absolute top-3 right-3 text-xl">
          <i className="ri-close-large-line"></i>
        </button>

        <h2 className="text-[2vw] sm:text-[6vw] font-semibold mb-4">
          Apply for {position}
        </h2>

        <form className="flex flex-col gap-[1vw]" onSubmit={handleSubmit}>
          {/* SUCCESS MESSAGE */}
          {successMessage && (
            <p className="text-green-600 text-xs w-fit bg-green-600/10 p-2 border rounded border-green-600 font-semibold mb-2">
              <i className="ri-error-warning-line"></i> {successMessage}
            </p>
          )}

          {/* ERROR MESSAGE */}
          {errorMessage && (
            <p className="text-red-600 text-xs w-fit bg-red-600/10 p-2 border rounded border-red-600 font-semibold mb-2">
              <i className="ri-error-warning-line"></i> {errorMessage}
            </p>
          )}

          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border p-2 rounded w-full"
            />
            {errors.name && (
              <p className="absolute bottom-[-1.2rem] text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="relative mb-3">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="border p-2 rounded w-full"
            />
            {errors.email && (
              <p className="absolute bottom-[-1.2rem] text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="relative mb-3">
            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="border p-2 rounded w-full"
            />
            {errors.phone && (
              <p className="absolute bottom-[-1.2rem] text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          <div className="relative mb-3">
            <input
              type="url"
              placeholder="Resume URL"
              name="resumeLink"
              value={formData.resumeLink}
              onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })}
              className="border p-2 rounded w-full"
            />
            {errors.resumeLink && (
              <p className="absolute bottom-[-1.2rem] text-red-500 text-sm">{errors.resumeLink}</p>
            )}
          </div>

          <div className="relative mb-3">
            <textarea
              placeholder="Remarks"
              name="remarks"
              value={formData.remarks}
              onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
              className="border p-2 rounded h-[6vw] sm:h-[20vw] w-full"
            ></textarea>
            {errors.remarks && (
              <p className="absolute bottom-[-1.2rem] text-red-500 text-sm">{errors.remarks}</p>
            )}
          </div>

          <button
            className="bg-[#000] text-white py-[.6vw] rounded-full font-semibold p-[2vw] transition-all duration-75 relative mt-4"
            type="submit"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
