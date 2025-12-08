import Image from "next/image";
import React, { useState } from "react";

const Section1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); 


  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numericValue = value.replace(/\D/g, "");
      setFormData((prev) => ({
        ...prev,
        [name]: numericValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Phone must be 10 digits";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFormData({ name: "", phone: "", email: "", message: "" });
        setErrors({});
        setErrorMessage("");
        setSuccessMessage(
          "Thank you! Your message has been submitted successfully. We will get back to you shortly."
        );
      } else {
        setSuccessMessage("");
        setErrorMessage(result.error || "Submission failed. Please try again.");
      }
    } catch (error) {
      setSuccessMessage("");
      setErrorMessage("Error submitting form. Please try again later.");
    }

    setIsLoading(false);
  };

  return (
    <div className="w-full min-h-screen flex sm:flex-col md:flex-col lg:flex-col sm:gap-[6vw] md:gap-[6vw] lg:gap-[6vw] gap-[1vw] items-center p-[2.5vw] sm:pt-[35vw] md:pt-[20vw] lg:pt-[15vw] sm:px-[4vw] md:px-[4vw] lg:px-[4vw] pt-[5.5vw]">
      <div className="sm:w-full md:w-full lg:w-full w-[50%] sm:h-fit md:h-fit h-[85vh] sm:bg-transparent md:bg-transparent bg-zinc-100/40 rounded-2xl sm:p-0 md:p-0 p-[2.5vw] flex flex-col justify-between">
        <div className="w-full">
          <h1 className="sm:font-semibold sm:text-[7vw] md:text-[7vw] text-[3vw] sm:mb-[6vw] capitalize leading-none">
            Contact us
          </h1>
          <p className="sm:text-[4.5vw] md:text-[3.7vw] lg:text-[2.2vw] sm:w-full md:w-full text-[1vw] w-[80%] sm:my-[4.5vw] md:my-[4.5vw] lg:my-[4.5vw] my-[1vw] leading-1">
            Our secure system ensures a smooth and hassle-free booking
            experience. Don’t wait for your dental needs—book your appointment
            online today.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full mt-[1.5vw] sm:mt-[0] md:mt-[0] flex flex-col sm:gap-[3vw] md:gap-[3vw] gap-[1vw] sm:text-[3.8vw] md:text-[3.5vw]"
        >
          {/* SUCCESS MESSAGE */}
          {/* SUCCESS MESSAGE */}
          {successMessage && (
            <p className="text-green-600 text-xs w-fit bg-green-600/10 p-2 border rounded border-green-600  font-semibold mb-2">
             <i class="ri-error-warning-line"></i> {successMessage}
            </p>
          )}

          {/* ERROR MESSAGE */}
          {errorMessage && (
            <p className="text-red-600 text-xs w-fit bg-red-600/10 p-2 border rounded border-red-600  font-semibold mb-2">
             <i class="ri-error-warning-line"></i> {errorMessage}
            </p>
          )}

          <div className="w-full flex flex-col">
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name}</span>
            )}
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-[1.5vw] sm:py-[2.5vw] md:py-[1.8vw] lg:py-[1.5vw] sm:px-[2vw] md:px-[2vw] py-[.6vw] border border-black/20 rounded-md bg-transparent"
              type="text"
              placeholder="Name"
            />
          </div>

          <div className="w-full flex flex-col">
            {errors.phone && (
              <span className="text-red-500 text-sm">{errors.phone}</span>
            )}
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-[1.5vw] sm:py-[2.5vw] md:py-[1.8vw] lg:py-[1.5vw] sm:px-[2vw] md:px-[2vw] py-[.6vw] border border-black/20 rounded-md bg-transparent"
              type="text"
              placeholder="Phone Number"
            />
          </div>

          <div className="w-full flex flex-col">
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-[1.5vw] sm:py-[2.5vw] md:py-[1.8vw] lg:py-[1.5vw] sm:px-[2vw] md:px-[2vw] py-[.6vw] border border-black/20 rounded-md bg-transparent"
              type="text"
              placeholder="E-Mail Address"
            />
          </div>

          <div className="w-full flex flex-col">
            {errors.message && (
              <span className="text-red-500 text-sm">{errors.message}</span>
            )}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full resize-none sm:h-[18vw] md:h-[18vw] lg:h-[18vw] h-[7vw] p-[1.5vw] sm:py-[2.5vw] md:py-[1.8vw] lg:py-[1.5vw] sm:px-[2vw] md:px-[2vw] py-[.6vw] border border-black/20 rounded-md bg-transparent"
              placeholder="Write additional information"
            ></textarea>
          </div>

          <div className="w-full flex items-center justify-center sm:h-[7vw] md:h-[6vw] lg:h-[10vw] h-[4vw] sm:mt-[2vw] md:mt-[2vw]">
            <button
              className="text-white bg-black w-full text-center capitalize px-[1.5vw] transition-all duration-500 cursor-pointer sm:py-[4vw] md:py-[2vw] lg:py-[2vw] xl:py-[1.5vw] py-[.6vw] rounded-full font-semibold"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="loader w-full flex items-center justify-center">
                  <img src="/loader.gif" className="w-6" alt="" />
                </div>
              ) : (
                <h4 className="sm:text-[3.5vw] md:text-[3.5vw] lg:text-[3vw] xl:text-[1.8vw] text-[1.1vw] font-normal">
                  Submit
                </h4>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* RIGHT SIDE IMAGES */}
      <div className="sm:w-full md:w-full lg:w-full w-[50%] sm:h-fit md:h-fit h-[85vh] sm:gap-[6vw] md:gap-[6vw] gap-[1vw] rounded-2xl flex flex-col sm:pt-[4vw]">
        {/* UNIT 1 */}
        <div className="w-full h-[50%] rounded-2xl overflow-hidden sm:p-0 md:p-0 p-[1.2vw] bg-zinc-100/40 flex sm:flex-col justify-between items-center">
          <Image
            className="sm:w-full w-[56%] h-full rounded-xl object-cover"
            width={1000}
            height={1000}
            priority
            src="/unit1.png"
            alt="unit-image"
          />
          <div className="sm:hidden w-[41%] h-fit">
            <h4 className="text-[1vw] font-semibold">Address</h4>
            <a target="_blank" className="text-[1.05vw] text-black/70">
              <span className="font-semibold">Unit 1</span> : Plot No. 12, Shed
              No. 9A, Sidco Industrial Estate, Vichoor, Manali New Town, Chennai
              - 600103, Tamilnadu, INDIA
            </a>
            <h4 className="mt-[1vw] text-[1vw] font-semibold">
              E-Mail Address
            </h4>
            <p className="text-[1.05vw] text-black/70">Info@allastir.com</p>
          </div>
        </div>

        {/* UNIT 2 */}
        <div className="w-full h-[50%] rounded-2xl overflow-hidden sm:p-0 md:p-0 p-[1.2vw] bg-zinc-100/40 flex sm:flex-col justify-between items-center">
          <Image
            className="sm:w-full w-[56%] h-full rounded-xl object-cover"
            width={1000}
            height={1000}
            priority
            src="/unit2.jpg"
            alt="unit-image"
          />
          <div className="sm:hidden w-[41%] h-fit">
            <h4 className="text-[1vw] font-semibold">Address</h4>
            <a target="_blank" className="text-[1.05vw] text-black/70">
              <span className="font-semibold">Unit 2</span> : Plot No. 8-7, 8-8,
              8-17, 8-18, APIIC Industrial Park, Attivaram Village, Ozili
              Mandal, Tirupati District, Andhra Pradesh -524 421.
            </a>
            <h4 className="mt-[1vw] text-[1vw] font-semibold">
              E-Mail Address
            </h4>
            <p className="text-[1.05vw] text-black/70">Info@allastir.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
