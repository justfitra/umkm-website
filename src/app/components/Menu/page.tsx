import menu from "@/data/menu";
import Card from "../Card/page";

const Menu = () => {
  return (
    <>
      <div
        id="menu"
        className=" pb-20 flex flex-col bg-light items-center justify-center  text-dark z-0 bg-cover bg-no-repeat bg-center w-full"
      >
        <div className="flex w-full flex-col my-8  max-w-7xl px-4 md:px-16 xl:px-0">
          <div className="mt-4">
            <div className="flex w-full items-center gap-4">
              <span className="w-14 md:w-32 h-[1px] bg-dark"></span>
              <span className="text-md md:text-lg ">Menu Kami</span>
            </div>
            <h1 className="font-bold text-lg md:text-2xl my-3">
              Pilihlah Menu Terbaik Kami
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-36 lg:gap-8">
              {/* <Card /> */}
              {menu.map((res) => (
                <Card
                  title={res.title}
                  image={res.image}
                  price={res.price}
                  url={res.url}
                  description={res.description}
                  id={res.id}
                  key={res.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
