"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import BackgroundGrid from "../hero/BackgroundGrid";
import axios from "axios";
import { useState } from "react";

interface ContactFormProps {
  showAlert: () => void;
}

export default function ContactForm({ showAlert }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError("Name is required");
      return false;
    }
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      setError("Valid email is required");
      return false;
    }
    if (!formData.message.trim()) {
      setError("Message is required");
      return false;
    }

    return true;
  };

  const submitContactForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!validateForm()) return;

    setLoading(true);

    try {
      const res = await axios.post(
        "/api/message",
        { ...formData },
        { headers: { "Content-Type": "application/json" } }
      );

      showAlert();
      setFormData({ name: "", email: "", company: "", message: "" });

      // setTimeout(() => showAlert(false), 5000);
    } catch (err) {
      console.error("Error:", err);
      setError(
        axios.isAxiosError(err)
          ? err.response?.data?.message || "Failed to submit form"
          : "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="md:grid md:grid-cols-2">
      <div className="p-5 bg-indigo-50 relative pt-16 md:pl-22 lg:pl-8 pb-5">
        <BackgroundGrid lineType="light" />
        <div className="relative z-10">
          <h1 className="font-semibold text-3xl text-brand mb-5">
            Get in touch
          </h1>
          <p className="text-black mb-5">
            We&apos;d love to hear from you—whether it&apos;s feedback, ideas,
            or just to connect.
          </p>
          <div className="text-neutral-500 font-semibold">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
            <small className="ml-2 text-sm">hello@modus.tech.com</small>
          </div>
        </div>
      </div>
      <form onSubmit={submitContactForm}>
        <div className="w-full bg-gray-50 p-5 relative pt-16 md:px-8 lg:px-14 pb-5">
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
              Message sent successfully! We&apos;ll get back to you soon.
            </div>
          )}

          <label
            className="tracking-wide text-gray-700 text-xs font-bold mb-2 block"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-400 mb-4"
            id="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your name"
          />

          <label
            className="tracking-wide text-gray-700 text-xs font-bold mb-2 block"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-400 mb-4"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your@email.com"
          />

          <label
            className="tracking-wide text-gray-700 text-xs font-bold mb-2 block"
            htmlFor="company"
          >
            Company (Optional)
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-400 mb-4"
            id="company"
            type="text"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="Your company"
          />

          <label
            className="tracking-wide text-gray-700 text-xs font-bold mb-2 block"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your Message"
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            className="p-2 w-full resize-y appearance-none block bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-400 mb-4"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="text-white bg-brand p-3 w-full rounded text-sm font-semibold cursor-pointer hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
}
