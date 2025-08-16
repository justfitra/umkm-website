const Comment = () => {
  return (
    <>
      <div className="flex flex-col  bg-light items-center justify-center  text-dark z-0 bg-cover bg-no-repeat bg-center w-full">
        <div className="flex w-full flex-col   max-w-7xl px-4 md:px-16 xl:px-0">
          <div className="mt-4">
            <form action="" className="gap-4">
              <input
                type="text"
                className="w-full p-4 border my-4 border-dark rounded-md"
                placeholder="Masukkan Nama"
              />
              <textarea
                className="w-full p-4 border border-dark rounded-md"
                rows={4}
                placeholder="Tulis komentar Anda di sini..."
              ></textarea>
              <button
                type="submit"
                className="mt-4 px-6 py-2 bg-dark text-light rounded-md"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
