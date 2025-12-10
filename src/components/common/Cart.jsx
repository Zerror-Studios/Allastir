import React, { useEffect, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

const Cart = ({ isCartOpen, setIsCartOpen, productData }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    product: productData?.name || "",
    cas: productData?.description || "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Update product data
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      product: productData?.name || "",
      cas: productData?.description || "",
    }));
  }, [productData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "phone" ? value.replace(/\D/g, "") : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
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
    if (!validateForm()) return;

    setIsLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Submission failed");

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        product: productData?.name || "",
        cas: productData?.description || "",
      });
      setErrors({});
      setSuccessMessage("Form submitted successfully!");

      setTimeout(() => {
        setIsCartOpen(false);
        setSuccessMessage("");
      }, 2500);
    } catch (error) {
      setErrorMessage("Submission failed. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // GSAP animation
  useEffect(() => {
    const cartContainer = document.getElementById("cartContainer");
    const cartOverlay = document.getElementById("cartOverlay");
    if (!cartContainer || !cartOverlay) return;

    const tl = gsap.timeline();

    if (isCartOpen) {
      gsap.set(cartContainer, { right: "-100%" });
      gsap.set(cartOverlay, { visibility: "visible" });

      tl.to(cartOverlay, {
        opacity: 1,
        backgroundColor: "#00000070",
        duration: 0.5,
      }).to(
        cartContainer,
        { right: "0%", duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );
    } else {
      tl.to(cartOverlay, { backgroundColor: "transparent", duration: 0.3 })
        .to(
          cartContainer,
          { right: "-100%", duration: 0.6, ease: "power3.in" },
          "-=0.3"
        )
        .set(cartOverlay, { visibility: "hidden" });

      setErrors({});
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        product: productData?.name || "",
        cas: productData?.description || "",
      });
      setSuccessMessage("");
      setErrorMessage("");
    }

    return () => tl.kill();
  }, [isCartOpen, productData]);

  return (
    <div
      id="cartOverlay"
      className="fixed top-0 left-0 w-full h-[100dvh] bg-[#00000070] opacity-0 invisible z-[999] flex justify-end"
      onClick={() => setIsCartOpen(false)}
    >
      <div
        id="cartContainer"
        data-lenis-prevent
        className="absolute right-[-100%] top-0 sm:w-full md:w-[80vw] lg:w-[70vw] xl:w-[60vw] w-[38vw] h-full bg-white shadow-lg p-6 sm:p-4 overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex flex-col justify-between h-full">
          <div className="mb-5">
            <h1 className="text-[3vw] sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight">
              Enquire Now
            </h1>

            <p className="sm:text-[4.5vw] md:text-[3.7vw] lg:text-[2.2vw] sm:w-full md:w-full text-[1vw] w-[80%] sm:my-[4.5vw] md:my-[4.5vw] lg:my-[4.5vw] my-[1vw] leading-1">
              Have questions or need product details? Fill out the form and our
              team will get back to you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {successMessage && (
              <p className="text-green-600 bg-green-100 p-2 rounded border border-green-600 text-sm font-semibold">
                {successMessage}
              </p>
            )}
            {errorMessage && (
              <p className="text-red-600 bg-red-100 p-2 rounded border border-red-600 text-sm font-semibold">
                {errorMessage}
              </p>
            )}

            {productData && (
              <div className="flex items-center gap-4 p-2 bg-gray-100 rounded">
                <div className="w-16 h-16 relative bg-white overflow-hidden">
                  <Image
                    width={1000}
                    height={1000}
                    src={productData.image}
                    className="w-full h-full object-contain"
                    alt={productData.name}
                  />
                </div>
                <div>
                  <h2 className="font-semibold">{productData.name}</h2>
                  <p className="text-sm">{productData.description}</p>
                </div>
              </div>
            )}

            {["name", "phone", "email"].map((field) => (
              <div key={field} className="flex flex-col">
                {errors[field] && (
                  <span className="text-red-500 text-sm mb-1">
                    {errors[field]}
                  </span>
                )}
                <input
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  type="text"
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  className="w-full p-3 border border-black/20 rounded-md bg-transparent"
                />
              </div>
            ))}

            <div className="flex flex-col">
              {errors.message && (
                <span className="text-red-500 text-sm mb-1">
                  {errors.message}
                </span>
              )}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write additional information"
                className="w-full resize-none p-3 border border-black/20 rounded-md h-40 sm:h-48 md:h-52"
              />
            </div>

            <button className="bg-black text-white mb-4 w-full sm:py-3 py-[.6vw] font-semibold p-[2vw] rounded-full mt-2 text-lg">
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>

        <button
          className="absolute top-5 right-5 text-2xl text-black hover:text-gray-800"
          onClick={() => setIsCartOpen(false)}
        >
          <i className="ri-close-line"></i>
        </button>
      </div>
    </div>
  );
};

export default Cart;
