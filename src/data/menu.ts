import { StaticImageData } from "next/image";
import image1 from "../../public/assets/images/ayam-geprek.png"
import image2 from "../../public/assets/images/baso-aci.jpg"
import image3 from "../../public/assets/images/ayam-bakar.jpg"
import image4 from "../../public/assets/images/lemontea.jpg"
export interface Menu {
    id: number;
    title: string;
    description: string;
    price: string;
    image: StaticImageData;
    url: string
}

const menu: Menu[] = [
    {
        id: 1,
        title: "Ayam Geprek",
        description: `ayam geprek adalah makanan enak dan pedas`,
        price: '10.000',
        image: image1,
        url: '/'
    },
    {
        id: 2,
        title: "Baso Aci",
        description: `baso aci enak dan nikmat untuk mu`,
        price: '10.000',
        image: image2,
        url: '/'
    },
    {
        id: 3,
        title: "Ayam Bakar",
        description: `ayambakar sedap cukup beli 1 bisa untuk 10 orang`,
        price: '60.000',
        image: image3,
        url: '/'
    },
    {
        id: 4,
        title: "Lemontea",
        description: `minuman segar dan nikmat untuk menemani makan`,
        price: '15.000',
        image: image4,
        url: '/'
    },
]

export default menu
