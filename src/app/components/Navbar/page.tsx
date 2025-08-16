"use client";
import { scrollToSection } from "@/app/hooks/scrollToSection";
import { useHash } from "@/app/hooks/useHash";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isSection, setIsSection] = useState<string>("");
  const hash = useHash();
  useEffect(() => {
    const section = hash.replace("#", "");
    setIsSection(section);
    console.log(section);

    if (section) scrollToSection(section);
  }, [hash]);

  const menu = [
    {
      title: "Home",
      url: "home",
    },
    {
      title: "Menu",
      url: "menu",
    },
    {
      title: "Testimoni",
      url: "testimoni",
    },
    {
      title: "Contact",
      url: "contact",
    },
  ];
  return (
    <>
      <nav className=" z-50 fixed bg-light shadow-lg shadow-gray-200 text-dark  flex justify-center w-full px-4 md:px-16 py-4">
        <div className="flex items-center justify-between max-w-7xl w-full">
          {/* Logo */}
          <div className="">
            <h1 className="text-2xl font-bold text-primary">Bakulan</h1>
            <h5 className="text-dark -mt-3 font-semibold">
              Makanan Murah Enak
            </h5>
          </div>
          <div>
            <ul className="md:flex justify-between items-center gap-8 font-medium hidden">
              {menu.map((res) => (
                <li key={res.title}>
                  <button
                    className={`${
                      isSection === res.url
                        ? "text-primary border-b-2 border-primary"
                        : ""
                    }  hover:border-b-2 hover:text-primary transition ease-in-out duration-150 border-primary`}
                    onClick={() => scrollToSection(res.url)}
                  >
                    {res.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Link
              href={"/"}
              className="flex items-center gap-4 font-semibold hover:text-primary duration-150 ease-in-out transition-all"
            >
              <FaWhatsapp className="text-xl" />
              <span>WhatsApp</span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
