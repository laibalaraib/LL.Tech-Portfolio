import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() =>
        alert("Oops! Something went wrong. Please try again.")
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
      <div className="w-full max-w-[600px] px-4 md:px-10 mx-auto">
          <h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/20 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-400 transition focus:outline-none focus:border-teal-500"
                placeholder="Full Name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/20 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-400 transition focus:outline-none focus:border-teal-500"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                rows={5}
                className="w-full bg-white/20 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-400 transition focus:outline-none focus:border-teal-500"
                placeholder="Your Message"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-3 px-6 rounded font-medium transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
