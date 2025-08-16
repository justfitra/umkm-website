import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-light flex flex-col gap-4 items-center justify-center py-8 ">
      <p>Your Foods Social Media</p>
      <div className="flex">
        <Link href="#" className="mx-2 text-2xl">
          <FaFacebook />
        </Link>
        <Link href="#" className="mx-2 text-2xl">
          <FaWhatsapp />
        </Link>
        <Link href="#" className="mx-2 text-2xl">
          <FaInstagram />
        </Link>
      </div>
      <p>© 2025 Just Ngoding. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
