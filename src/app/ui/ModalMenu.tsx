"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function FrostedMenu() {
  const [open, setOpen] = useState(false); // user-intent
  const [rendered, setRendered] = useState(false); // controls DOM presence
  const [animate, setAnimate] = useState(false); // toggles open/closed classes

  // When `open` becomes true -> mount DOM and then trigger animation next tick
  useEffect(() => {
    let timeout;
    if (open) {
      setRendered(true);
      // next frame to ensure initial styles applied, then flip to animate=true
      requestAnimationFrame(() => {
        // small timeout can help on some browsers
        timeout = setTimeout(() => setAnimate(true), 20);
      });
    } else {
      // start closing animation
      setAnimate(false);
      // wait for the longest animation (menu items + container) before unmounting
      // here items: 500ms transition + max delay 300ms -> ~800ms total; container 300ms
      timeout = setTimeout(() => setRendered(false), 900);
    }
    return () => clearTimeout(timeout);
  }, [open]);

  // body overflow: use `rendered` (while DOM present)
  useEffect(() => {
    if (rendered) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [rendered]);

  // close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (rendered) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [rendered]);

  return (
    <div>
      <button onClick={() => setOpen(true)} className="text-white">
        <FontAwesomeIcon icon={faBars} />
      </button>

      {rendered && (
        // overlay: fade in/out
        <div
          className={`fixed inset-0 bg-white/30 backdrop-blur-sm z-40 flex justify-center items-center transition-opacity duration-300
            ${animate ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        >
          {/* stop propagation so clicking the panel doesn't close */}
          <div
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            className={`relative bg-white/80 w-3/4 max-w-md p-6 rounded-md shadow-xl transform transition-all duration-300 ease-out
              ${animate ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>

            <nav className="space-y-6 text-center">
              <a
                href="#section1"
                onClick={() => setOpen(false)}
                className={`block text-lg font-semibold text-gray-800 hover:text-indigo-600
                  transform transition-transform transition-opacity duration-500 ease-out
                  ${
                    animate
                      ? "opacity-100 translate-y-0 delay-100"
                      : "opacity-0 -translate-y-4"
                  }`}
              >
                Join Waitlist
              </a>

              <a
                href="#section2"
                onClick={() => setOpen(false)}
                className={`block text-lg font-semibold text-gray-800 hover:text-indigo-600
                  transform transition-transform transition-opacity duration-500 ease-out
                  ${
                    animate
                      ? "opacity-100 translate-y-0 delay-200"
                      : "opacity-0 -translate-y-4"
                  }`}
              >
                Tenancy Cycle
              </a>

              <a
                href="#section3"
                onClick={() => setOpen(false)}
                className={`block text-lg font-semibold text-gray-800 hover:text-indigo-3
                  transform transition-transform transition-opacity duration-500 ease-out
                  ${
                    animate
                      ? "opacity-100 translate-y-0 delay-300"
                      : "opacity-0 -translate-y-4"
                  }`}
              >
                Features
              </a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
