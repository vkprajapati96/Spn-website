import { FiPhoneCall } from "react-icons/fi";

export default function CallButton() {
  return (
    <a
      href="tel:+918860567964" 
      className="fixed bottom-15 right-5 bg-yellow-400 text-white p-4 rounded-full shadow-lg z-50 hover:bg-yellow-500 transition-all flex items-center justify-center"
    >
      <FiPhoneCall size={22} />
    </a>
  );
}
