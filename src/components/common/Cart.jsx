import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { toast } from "react-toastify";
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

  // Update product data in form whenever selected product changes
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      product: productData?.name || "",
      cas: productData?.description || "",
    }));
  }, [productData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      setFormData((prev) => ({ ...prev, [name]: value.replace(/\D/g, "") }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!phoneRegex.test(formData.phone)) newErrors.phone = "Phone must be 10 digits";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);

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
      setIsLoading(false);
      toast.success("Form submitted successfully!");
      setIsCartOpen(false);
    } catch (error) {
      setIsLoading(false);
      toast.error("Submission failed. Please try again.");
      console.error(error);
    }
  };

  // GSAP animation
  useEffect(() => {
    const cartContainer = document.getElementById("cartContainer");
    const cartOverlay = document.getElementById("cartOverlay");
    if (!cartContainer || !cartOverlay) return;

    const tl = gsap.timeline();

    if (isCartOpen) {
      gsap.set(cartContainer, { right: "-50%" });
      gsap.set(cartOverlay, { visibility: "visible" });

      tl.to(cartOverlay, {
        opacity: 1,
        backgroundColor: "#00000070",
        duration: 0.5,
      }).to(cartContainer, { right: "0%", duration: 0.8, ease: "power3.out" }, "-=0.4");
    } else {
      tl.to(cartOverlay, { backgroundColor: "transparent", duration: 0.3 })
        .to(cartContainer, { right: "-50%", duration: 0.6, ease: "power3.in" }, "-=0.3")
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
    }

    return () => tl.kill(); // Clean up timeline on unmount
  }, [isCartOpen, productData]);

  return (
    <div
      id="cartOverlay"
      className="fixed top-0 left-0 w-full sm:h-[100dvh] h-screen bg-[#00000070] opacity-0 invisible z-[999] flex justify-end"
      onClick={() => setIsCartOpen(false)}
    >
      <div
        id="cartContainer"
        className="absolute right-[-50%] top-0 sm:w-[100vw] md:w-[100vw] lg:w-[100vw] xl:w-[60vw] w-[40vw] h-full bg-white shadow-lg sm:pt-[30px] p-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full sm:h-[95vh] h-[100vh] p-[2vw] py-[0] pb-[2vw] flex flex-col justify-between">
          <div className="w-full">
            <h1 className="sm:text-[10vw] md:text-[7vw] lg:text-[7vw] xl:text-[5vw] text-[3.5vw] sm:font-semibold capitalize leading-none">
              Enquire Now
            </h1>
            <p className="sm:text-[4.5vw] md:text-[3.7vw] lg:text-[3vw] xl:text-[2vw] sm:w-full text-[1vw] w-[80%] my-[1vw] leading-1">
              Have questions or need product details? Fill out the form and our team will get back to you shortly.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="w-full mt-[1.5vw] flex flex-col gap-[1vw] text-[1.1vw]">
            {productData && (
              <div className="flex items-center p-2 bg-gray-100 rounded">
                <div className="w-[60px] h-[60px] relative overflow-hidden bg-white">
                  <Image
                    width={1000}
                    height={1000}
                    src={productData.image}
                    className="w-full h-full object-contain"
                    alt={productData.name}
                  />
                </div>
                <div className="ml-4">
                  <h2 className="font-semibold">{productData.name}</h2>
                  <p>{productData.description}</p>
                </div>
              </div>
            )}
            {["name", "phone", "email"].map((field) => (
              <div key={field} className="w-full flex flex-col">
                {errors[field] && <span className="text-red-500 text-sm mb-1">{errors[field]}</span>}
                <input
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  type="text"
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  className="w-full p-2 border border-black/20 rounded-md bg-transparent"
                />
              </div>
            ))}
            <div className="w-full flex flex-col">
              {errors.message && <span className="text-red-500 text-sm mb-1">{errors.message}</span>}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write additional information"
                className="w-full resize-none h-[7vw] p-2 border border-black/20 rounded-md bg-transparent"
              />
            </div>
            <button className="bg-black text-white w-full py-2 rounded-full mt-2">
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
        <button
          className="absolute top-[20px] right-[40px] text-xl text-black hover:text-gray-800"
          onClick={() => setIsCartOpen(false)}
        >
          <i className="ri-close-line"></i>
        </button>
      </div>
    </div>
  );
};

export default Cart;
