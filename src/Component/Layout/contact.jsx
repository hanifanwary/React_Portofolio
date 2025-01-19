import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactLayout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    const serviceId = "service_rlk4dno";
    const templateId = "template_504tysg";
    const userId = "Nb9R26p2-r0LxO4sw";

    emailjs.send(serviceId, templateId, formData, userId).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSuccess("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      },
      (err) => {
        console.error("FAILED...", err);
        setError("Failed to send message. Please try again later.");
        setIsSubmitting(false);
      }
    );
  };

  return (
    <div
      id="contact"
      className="min-h-screen bg-[#0B3142] flex flex-col justify-center items-center px-6 py-12 md:flex-row z-50 relative"
    >
      {/* Left Side: SVG Animation */}
      <div className="w-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0">
        <img
          src="../../../img/digital-contract.svg"
          alt="SVG CONTACT"
        />
      </div>

      {/* Right Side: Contact Form */}
      <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-bold mb-6 text-center text-[#0F5257]">Contact Me</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg focus:ring-[#0F5257] focus:border-[#0F5257]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg focus:ring-[#0F5257] focus:border-[#0F5257]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg focus:ring-[#0F5257] focus:border-[#0F5257]"
              required
            ></textarea>
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          {success && <div className="text-green-500 text-sm">{success}</div>}
          <button
            type="submit"
            className="w-full bg-[#0F5257] text-white py-3 rounded-lg hover:bg-[#073a47] transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactLayout;
