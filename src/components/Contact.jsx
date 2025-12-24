import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // SETUP EMAILJS:
      // 1. Install: npm install emailjs-com
      // 2. Get your IDs from emailjs.com
      // 3. Replace the values below

      /*
      import emailjs from 'emailjs-com';
      
      emailjs.init('YOUR_PUBLIC_KEY');
      
      const templateParams = {
        from_name: formData.from_name,
        from_email: formData.from_email,
        phone: formData.phone,
        message: formData.message
      };
      
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
      );
      */

      // Demo success message
      setSubmitted(true);
      setFormData({ from_name: "", from_email: "", phone: "", message: "" });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-4 md:py-14 px-3 md:px-4 bg-gray-50 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Heading */}
        <h1 className="text-xl sm:text-2xl md:text-5xl font-bold text-center mb-6 md:mb-12 text-gray-900">
          Get In Touch
        </h1>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* LEFT - FORM */}
          <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 md:p-10">
            {submitted && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                ✅ Thank you! Your message has been sent successfully.
              </div>
            )}

            <div className="space-y-4 md:space-y-6">
              {/* Name */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 8860567964"
                  className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your project..."
                  required
                  className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 resize-none"
                />
              </div>

              {/* Button */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white text-sm md:text-base font-semibold py-2.5 md:py-3 rounded-lg flex items-center justify-center gap-2"
              >
                {loading ? "Sending..." : "Send Message"}
                {!loading && <Send size={18} />}
              </button>
            </div>
          </div>

          {/* RIGHT - CONTACT INFO */}
          <div className="flex flex-col justify-center space-y-5 md:space-y-8">
            {/* Email */}
            <div className="bg-white rounded-2xl shadow-lg p-5 md:p-8">
              <div className="flex gap-3">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Mail className="text-blue-600" size={22} />
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-bold text-gray-900">
                    Email
                  </h3>
                  <p className="text-sm text-gray-600 break-all">
                    gagandigitalmarketing@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl shadow-lg p-5 md:p-8">
              <div className="flex gap-3">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <Phone className="text-green-600" size={22} />
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-bold text-gray-900">
                    Phone
                  </h3>
                  <p className="text-sm text-gray-600">+91 8860567964</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-2xl shadow-lg p-5 md:p-8">
              <div className="flex gap-3">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <MapPin className="text-purple-600" size={22} />
                </div>
                <div>
                  <h3 className="text-base md:text-xl font-bold text-gray-900">
                    Address
                  </h3>
                  <p className="text-sm text-gray-600">
                    Sadar Bazar, Delhi- 110006{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
