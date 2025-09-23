"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import BackgroundGrid from "../hero/BackgroundGrid";
import axios from "axios";
import Turnstile from "react-turnstile";

export default function ContactForm() {
  // const submitContactForm = async () => {
  //   try {
  //     const res = await axios.post(
  //       "/api/waitlist",
  //       { email, token },
  //       { headers: { "Content-Type": "application/json" } }
  //     );
  //   } catch (err) {
  //     console.error("Error:", err);
  //   }
  // };

  return (
    <section id="contact" className="md:grid md:grid-cols-2">
      <div className="p-5 bg-indigo-50 relative pt-16 md:pl-22 lg:pl-8 pb-5">
        <BackgroundGrid lineType="light" />
        <div className="relative z-10">
          <h1 className="font-semibold text-3xl text-brand mb-5">
            Get in touch
          </h1>
          <p className="text-black mb-5">
            {
              "We'd love to hear from you—whether it's feedback, ideas, or just to connect."
            }
          </p>
          <div className="text-neutral-500 font-semibold">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
            <small className="ml-2 text-sm">hello@modus.tech.com</small>
          </div>
        </div>
      </div>
      <form onSubmit={submitContactForm}>
        <div className="w-full bg-gray-50 p-5 relative pt-16 md:px-8 lg:px-14 pb-5">
          <label
            className="tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-400"
            id="name"
            type="text"
          ></input>
          <label
            className="tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-400"
            id="email"
            type="email"
          ></input>
          <label
            className="tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="company"
          >
            Company
          </label>
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-400"
            id="company"
            type="text"
          ></input>
          <label
            className="tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>

          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            className=" p-2 w-full resize-y appearance-none block bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-400"
            required
          />

          <button
            type="submit"
            className="text-white bg-brand p-3 w-full rounded text-sm my-8 font-semibold cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
