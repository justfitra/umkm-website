import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <div className="fixed bottom-4 right-4">
      <Link
        href={"https://wa.me/1234567890"}
        className="flex items-center gap-2 bg-green-500 text-white p-3 rounded-full shadow-green-500 shadow-lg"
      >
        <FaWhatsapp className="text-4xl" />
      </Link>
    </div>
  );
};

export default WhatsApp;
