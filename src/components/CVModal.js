import React from "react";

const CVModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={(e) => {
        if (e.target.id === "modal-overlay") {
          onClose();
        }
      }}
    >
      <div className="relative bg-ksuPurple p-8 rounded-lg shadow-lg w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 text-white h-[95vh] max-h-[95vh] overflow-y-auto border-gradient">
        <div className="flex flex-col items-center h-full">
          <button
            className="absolute text-2xl right-0 items-end font-bold text-white"
            onClick={onClose}
          >
            &times;
          </button>
          <h1 className="text-2xl font-bold mb-4">My CV</h1>
          <iframe
            src={`${process.env.PUBLIC_URL}/CV_Anssi_Peltola.pdf`}
            width="100%"
            height="100%"
            className="flex-grow"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <a
            href={`${process.env.PUBLIC_URL}/CV_Anssi_Peltola.pdf`}
            download
            className="mt-4 bg-customOrange text-white px-4 py-2 rounded shadow-md transition-colors duration-300 hover:bg-orange-600"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default CVModal;
