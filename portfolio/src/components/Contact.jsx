import React, { useEffect, useState, useRef } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [status, setStatus] = useState("");
  const formRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("contact");
      if (!section) return;

      const top = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight - 100) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_k27afqd",     // <-- Replace with your EmailJS service ID
        "template_vx2j86e",    // <-- Replace with your EmailJS template ID
        formRef.current,
        "lsduFKOvJoowBRU_d"    // <-- Replace with your EmailJS public key
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
          setTimeout(() => setStatus(""), 3000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus(""), 3000);
        }
      );
  };

  return (
    <section
      id="contact"
      className={`relative py-24 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundImage: "url('/images/contact.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative max-w-3xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl font-extrabold mb-4">Get in Touch</h2>
        <p className="text-gray-200 mb-12 text-lg">
          Have a project in mind or want to collaborate? Let’s talk.
        </p>

        {/* FORM */}
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder=" "
              required
              className="peer w-full px-4 py-3 bg-white/10 border border-white/30
                         rounded-lg text-white focus:ring-2 focus:ring-blue-400 
                         focus:outline-none"
            />
            <label
              className="absolute left-4 top-3 text-gray-300 transition-all duration-300
                        peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                        peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-300"
            >
              Your Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder=" "
              required
              className="peer w-full px-4 py-3 bg-white/10 border border-white/30
                         rounded-lg text-white focus:ring-2 focus:ring-blue-400 
                         focus:outline-none"
            />
            <label
              className="absolute left-4 top-3 text-gray-300 transition-all duration-300
                        peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                        peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-300"
            >
              Your Email
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              rows="5"
              placeholder=" "
              required
              className="peer w-full px-4 py-3 bg-white/10 border border-white/30 
                         rounded-lg text-white focus:ring-2 focus:ring-blue-400
                         focus:outline-none"
            ></textarea>
            <label
              className="absolute left-4 top-3 text-gray-300 transition-all duration-300
                        peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                        peer-focus:-top-3 peer-focus:text-sm peer-focus:text-blue-300"
            >
              Your Message
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 
                       transition font-semibold shadow-lg"
          >
            {status === "sending" && "Sending..."}
            {status === "" && "Send Message"}
            {status === "success" && "Message Sent ✔"}
            {status === "error" && "Failed to Send ❌"}
          </button>
        </form>

        {/* Social Icons */}
        <div className="mt-12 flex justify-center gap-8 text-white/80">
          {/* Gmail Web Link with Pre-Filled Subject & Body */}
          <a
            href="https://mail.google.com/mail/?view=cm&to=basitabioduntijani@gmail.com&su=Hello%20Tijani&body=I%20would%20like%20to%20collaborate%20on%20your%20projects"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition"
          >
            <Mail size={26} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/basitabioduntijani-prog"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <Github size={26} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/basitabiodun"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <Linkedin size={26} />
          </a>
        </div>
      </div>
    </section>
  );
}
