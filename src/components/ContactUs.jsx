import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError("Please fill all required fields");
      setLoading(false);
      return;
    }

    emailjs
      .send(
        "service_u70fxhb",   //service id
        "template_f4prxmp",  // temp id
        formData,
        "kzgPVGtnSRSDLTt6g"   // public id
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });

          setTimeout(() => setSubmitted(false), 5000);
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          setError("Failed to send message");
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-12 md:py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Get In Touch
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* LEFT - FORM */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border-2 border-green-400 rounded-lg flex items-center gap-3">
                <div>
                  <p className="text-green-800 text-sm">Your message has been sent successfully.</p>
                </div>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 bg-red-100 border-2 border-red-400 rounded-lg">
                <p className="text-red-900 font-bold mb-1">Error</p>
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}

            <form onSubmit={sendEmail} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXXXXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows="5"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="cursor-pointer w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100"
              >
                {loading ? (
                  <div>
                    Sending...
                  </div>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* RIGHT - CONTACT INFO */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Email */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow">
              <div className="flex gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                    Email
                  </h3>
                  <p className="text-sm text-gray-600 break-all">
                    gagandigitalmarketing@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow">
              <div className="flex gap-4">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                    Phone
                  </h3>
                  <p className="text-sm text-gray-600">+91 8860567964</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow">
              <div className="flex gap-4">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                    Address
                  </h3>
                  <p className="text-sm text-gray-600">
                    Sadar Bazar, Delhi - 110006
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

export default ContactUs;