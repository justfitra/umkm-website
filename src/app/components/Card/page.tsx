import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface MenuItems {
  id: number;
  title: string;
  price: string;
  description: string;
  image: StaticImageData;
  url: string;
}

const Card: React.FC<MenuItems> = ({
  id,
  title,
  description,
  image,
  price,
  url,
}) => {
  return (
    <>
      <div className="rounded-xl relative" key={id}>
        <div className="z-0 overflow-hidden rounded-3xl w-[300px] h-[300px] md:w-[200px] md:h-[200px]">
          <Image
            alt={title}
            src={image}
            className="w-full h-auto rounded-3xl"
          />
        </div>
        <div className="absolute top-[200px] left-40 md:top-[120px] md:left-14 z-10 bg-dark shadow-dark shadow-2xl  w-[185px] h-[185px] p-5 text-white rounded-2xl">
          <h1 className="font-semibold text-lg md:text-xl">{title}</h1>
          <p className="text-light/60 text-sm my-1 line-clamp-2">
            {description}
          </p>
          <p className="mb-4">IDR {price}</p>
          <Link
            className="bg-transparent hover:bg-primary hover:border-primary hover:text-dark text-primary transition-all ease-in-out border border-primary py-2 px-3 rounded-xl mt-4 text-sm"
            href={url}
          >
            Pesan Sekarang
          </Link>
        </div>
      </div>
    </>
  );
};

export default Card;
