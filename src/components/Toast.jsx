import { useEffect } from "react";

export default function Toast({ message, show, onClose, duration = 3000 }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, onClose, duration]);

  return (
    <>
      {show && (
        <div
          className="
            fixed bottom-6 left-1/2 transform -translate-x-1/2
            bg-gradient-to-r from-[#111c30] via-[#4A2A91] to-[#191970]
            text-white px-6 py-3 rounded-lg shadow-lg shadow-[#4A2A91]/50
            z-50
            flex items-center space-x-3
            opacity-95
            ring-1 ring-[#7c3aed] focus:outline-none
          "
          role="alert"
          aria-live="assertive"
        >
          {/* Checkmark icon, matching the theme */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span>{message}</span>
        </div>
      )}
    </>
  );
}
