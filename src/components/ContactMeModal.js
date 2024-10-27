import React, { useEffect } from "react";

const ContactMeModal = ({ isOpen, onClose }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOutsideClick}
    >
      <div className="relative bg-ksuPurple p-4 md:p-8 rounded-lg shadow-lg w-10/12 md:w-2/3 lg:w-1/2 xl:w-1/3 text-white max-h-screen overflow-y-auto border-gradient">
        <div className="flex justify-end">
          <button className="text-2xl font-bold text-white" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="container px-6 pb-12 mx-auto">
          <div>
            <h1 className="mt-2 text-2xl font-semibold text-customOrange md:text-3xl">
              Get in touch
            </h1>
            <p className="mt-3 text-gray-300">
              I'd love to hear from you! Feel free to reach out with any
              questions or opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <span className="inline-block p-3 text-customOrange rounded-full bg-customOrange/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <h2 className="mt-4 text-base font-medium text-white">Email</h2>
                <p className="mt-2 text-sm text-customOrange">
                  <a href="mailto:anssipeltola@hotmail.com">
                    anssipeltola@hotmail.com
                  </a>
                </p>
              </div>
              <div>
                <span className="inline-block p-3 text-customOrange rounded-full bg-customOrange/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>
                <h2 className="mt-4 text-base font-medium text-white">
                  Address
                </h2>
                <p className="mt-2 text-sm text-customOrange">
                  Itsenäisyydenkatu 18 A7, 33500 Tampere, Finland
                </p>
              </div>
              <div>
                <span className="inline-block p-3 text-customOrange rounded-full bg-customOrange/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>
                <h2 className="mt-4 text-base font-medium text-white">Phone</h2>
                <p className="mt-2 text-sm text-customOrange">+358400244925</p>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
              <iframe
                width="100%"
                height="100%"
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d951.9307855102961!2d23.784574139140428!3d61.49861417383124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468edf5673cdeeef%3A0x54bfcf1c76b810ed!2sItsen%C3%A4isyydenkatu%2018%2C%2033500%20Tampere!5e0!3m2!1sfi!2sfi!4v1693223567084!5m2!1sfi!2sfi"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMeModal;
