import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function ContactForm() {
  return (
    <section className="p-5 bg-indigo-50">
      <h1 className="font-semibold text-3xl text-brand mb-3">Get in touch</h1>
      <p className="text-black mb-3">
        We'd love to hear from you—whether it's feedback, ideas, or just to
        connect. Your input helps us shape Modus into the best tool for you.
      </p>
      <div className="text-neutral-500 font-semibold">
        <FontAwesomeIcon icon={faEnvelope} size="lg" />
        <small className="ml-2 text-base">hello@modus.tech.com</small>
      </div>
      <form className="w-full max-w-sm">
        <div className="w-full md:w-1/2 px-3">
          <label className="tracking-wide text-gray-700 text-xs font-bold mb-2">
            Last Name
          </label>
          <input
            className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
          ></input>
        </div>
      </form>
    </section>
  );
}
