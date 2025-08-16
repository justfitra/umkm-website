import Image from "next/image";
import banner from "../../../../public/assets/images/banner.jpg";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div
        id="home"
        className="flex flex-col bg-light items-center justify-center  text-dark z-0 bg-cover bg-no-repeat bg-center w-full"
      >
        <div className="flex w-full flex-col mt-[120px]  max-w-7xl px-4 lg:px-16 xl:px-0">
          <div className="w-full gap-4 flex md:flex-row flex-col-reverse items-center justify-center ">
            <div className="w-full md:w-1/2 md:mt-0 mt-4">
              <h1 className="text-xl md:text-4xl xl:text-5xl font-bold text-dark w-full ">
                Rasa Juara, Langsung di Lidah!
              </h1>
              <h2 className="text-md md:text-lg mt-6 text-dark">
                Dibuat dari bahan segar pilihan, dimasak dengan resep rahasia
                turun-temurun, setiap gigitan adalah cerita rasa yang tak
                terlupakan.
              </h2>
              <div className="mt-8 flex items-center gap-4 ">
                <Link
                  href={"/"}
                  className="bg-primary ease-in-out flex items-center  gap-2 transition-all duration-150 hover:bg-transparent hover:border-1 hover:text-primary font-semibold shadow-2xl shadow-primary  hover:border-primary rounded-2xl text-white px-4 py-4"
                >
                  <FaWhatsapp className="text-2xl " />
                  <span className="text-sm flex gap-1">
                    Pesan Sekarang{" "}
                    <span className="hidden md:flex">Via WhatsApp</span>
                  </span>
                </Link>
                <Link
                  href={"/"}
                  className="bg-transparent text-primary ease-in-out text-sm transition-all duration-150 hover:bg-primary border hover:text-white font-semibold shadow-2xl shadow-transparent  hover:border-primary rounded-2xl  px-4 py-4"
                >
                  Lihat Menu
                </Link>
              </div>
              <div className="mt-8 text-dark ">
                <p>💥 Gratis Ongkir untuk area tertentu.</p>
                <p>🎁 Pesan hari ini, dapatkan minuman gratis untuk 2 orang.</p>
              </div>
            </div>
            <div className=" w-full md:w-1/2  overflow-hidden flex ">
              <Image
                alt="banner"
                src={banner}
                className=" h-auto w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
