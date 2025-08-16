import { FaUser } from "react-icons/fa";

const Testimoni = () => {
  return (
    <>
      <div
        id="testimoni"
        className="flex flex-col bg-light items-center justify-center  text-dark z-0 bg-cover bg-no-repeat bg-center w-full"
      >
        <div className="flex w-full flex-col mt-8  max-w-7xl px-4 md:px-16 xl:px-0">
          <div className="mt-4">
            <div className="flex w-full items-center gap-4">
              <span className="w-14 md:w-32 h-[1px] bg-dark"></span>
              <span className="text-md md:text-lg">Testimoni</span>
            </div>
            <h1 className="font-bold text-lg md:text-2xl my-3">
              Ini Adalah Beberapa Testimoni dari Pelanggan Kami
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="rounded-lg border p-6 border-dark flex flex-col gap-2">
                <div className="flex gap-3 items-center">
                  <FaUser className="text-3xl p-0.5 rounded-full border border-dark" />
                  <h1 className="text-lg md:text-2xl font-bold">
                    Fitra Maulana
                  </h1>
                </div>
                <p className="text-sm text-gray-600">13 - 10 - 2026</p>
                <p className="line-clamp-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                  debitis recusandae ipsam laborum saepe sequi odio quibusdam
                </p>
              </div>
              <div className="rounded-lg border p-6 border-dark flex flex-col gap-2">
                <div className="flex gap-3 items-center">
                  <FaUser className="text-3xl p-0.5 rounded-full border border-dark" />
                  <h1 className="text-lg md:text-2xl font-bold">
                    Tutur Budi Prayoga
                  </h1>
                </div>
                <p className="text-sm text-gray-600">13 - 10 - 2026</p>
                <p className="line-clamp-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                  debitis recusandae ipsam laborum saepe sequi odio quibusdam
                </p>
              </div>
              <div className="rounded-lg border p-6 border-dark flex flex-col gap-2">
                <div className="flex gap-3 items-center">
                  <FaUser className="text-3xl p-0.5 rounded-full border border-dark" />
                  <h1 className="text-lg md:text-2xl font-bold">Nauval </h1>
                </div>
                <p className="text-sm text-gray-600">13 - 10 - 2026</p>
                <p className="line-clamp-3">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                  debitis recusandae ipsam laborum saepe sequi odio quibusdam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
