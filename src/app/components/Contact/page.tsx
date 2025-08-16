"use client";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    if (!formRef.current) return;

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(() => {
        setSuccess(true);
        formRef.current?.reset();
      })
      .catch(() => {
        setSuccess(false);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <div
        id="contact"
        className="flex flex-col  bg-light items-center justify-center  text-dark z-0 bg-cover bg-no-repeat bg-center w-full"
      >
        <div className="flex w-full flex-col mt-8  max-w-7xl px-4 md:px-16 xl:px-0">
          <div className="mt-4">
            <div className="flex w-full items-center gap-4">
              <span className="w-14 md:w-32 h-[1px] bg-dark"></span>
              <span className="text-md md:text-lg ">Hubungi Kami</span>
            </div>
            <h1 className="font-bold text-lg md:text-2xl my-3">
              Kalian Bisa Menghubungi Kami Melalui Kontak Berikut
            </h1>

            <div className="">
              <div className="">
                <form
                  ref={formRef}
                  onSubmit={sendEmail}
                  className="space-y-4 mt-8 "
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Masukkan Nama"
                    required
                    className="w-full border p-2 border-dark text-dark rounded-lg"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Masukkan Email"
                    required
                    className="w-full border p-2 border-dark text-dark rounded-lg"
                  />
                  <textarea
                    name="message"
                    placeholder="Masukkan Pesan"
                    required
                    className="w-full border p-2 border-dark text-dark rounded-lg h-32"
                  />
                  <button
                    type="submit"
                    className="bg-dark text-light hover:border-dark border px-4 py-2 rounded-lg hover:bg-light hover:text-dark transition-all ease-in-out duration-150 cursor-pointer"
                    disabled={loading}
                  >
                    {loading ? "Mengirim..." : "Kirim"}
                  </button>

                  {success === true && (
                    <p className="text-green-500">Pesan Terkirim</p>
                  )}
                  {success === false && (
                    <p className="text-red-500">Gagal Mengirim Pesan</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
