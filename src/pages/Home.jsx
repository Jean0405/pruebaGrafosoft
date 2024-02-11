import React, { useState } from "react";

// IMPORT ICONS
import {
  faPlus,
  faBook,
  faHouse,
  faGreaterThan,
  faNewspaper,
  faBookOpenReader,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// IMPORT COMPONENTS
import {
  Avatar,
  Chip,
  Input,
  Tooltip,
  Button,
  Divider,
} from "@nextui-org/react";
import { BooksData } from "../components/BooksData";
import Banner from "../components/Banner";
import Authors from "../components/Authors";
import BannerDark from "../components/BannerDark";
import CardInfo from "../components/CardInfo";

const menuItems = [
  {
    item: "Inicio",
    icon: faHouse,
  },
  {
    item: "Libros",
    icon: faBook,
  },
  {
    item: "Editores",
    icon: faNewspaper,
  },
  {
    item: "Lectores",
    icon: faBookOpenReader,
  },
];

const booksStadistics = [
  {
    title: "Libreria",
    data: 124,
  },
  {
    title: "Me gusta",
    data: "155 k",
  },
  {
    title: "Lectores",
    data: "8 k",
  },
  {
    title: "Opiniones",
    data: "163 k",
  },
];

const recentlyData = [
  {
    name: "Victoria Evans",
    date: "May 7",
  },
  {
    name: "Ethan Williams",
    date: "May 5",
  },
  {
    name: "Nathan Fox",
    date: "May 7",
  },
  {
    name: "Megan Fox",
    date: "Apr 29",
  },
];

const cardsData = [
  {
    title: "La Ciudadela",
    img:"https://i0.wp.com/ejmbookkeeping.com/wp-content/uploads/2017/06/fern.jpeg?fit=1568%2C1045&ssl=1",
    description: "Descubre las maravillas escondidas en los bosques de Estados Unidos",
    user:{
      name: "David Jones",
      img: "https://i.pravatar.cc/150?u=a04258114e29026302d",
      date: "May 6, 2020"
    }
  },
  {
    title: "Space X",
    img:"https://woods.stanford.edu/sites/woods/files/styles/breakpoint_2xl_1x/public/media/image/14109578486_e6f497cc6e_o.webp?itok=Ws34VO0z",
    description: "Elon Musk, un emprendedor con otra visión multimillonaria",
    user:{
      name: "Lauren Murphy",
      img:"https://i.pravatar.cc/150?u=a042581f4e29026704d",
      date: "May 3, 2020"
    }
  },
]

const Home = () => {
  const [selectedSection, setSelectedSection] = useState("Inicio");


  return (
    <div className="bg-green flex">
      <aside className="hidden sm:flex flex-col justify-between min-h-screen w-[5rem] lg:w-[12rem] p-3">
        <div className="flex justify-center items-center">
          <div className="bg-lightGreen flex justify-center items-center w-[4rem] h-[4rem] lg:w-[6rem] lg:h-[6rem] rounded-lg shadow-custom">
            <FontAwesomeIcon
              className="text-white text-2xl lg:text-5xl"
              icon={faBook}
            />
          </div>
        </div>
        <div>
          <ul className="flex flex-col gap-8">
            {menuItems.map((item) => (
              <Tooltip
                key={item.item}
                placement="right"
                closeDelay={100}
                content={item.item}
                className="flex lg:hidden bg-black text-white"
              >
                <li
                  className="flex justify-center items-center text-white font-bold gap-2 cursor-pointer hover:text-black duration-200"
                  key={item}
                  onClick={()=>setSelectedSection(item.item)}
                >
                  <FontAwesomeIcon
                    className="flex lg:hidden text-xl"
                    icon={item.icon}
                  />
                  {
                    selectedSection === item.item && (
                      <FontAwesomeIcon className="text-white text-[10px]" icon={faGreaterThan} />
                    )
                  }
                  <span className="hidden lg:flex">{item.item}</span>
                </li>
              </Tooltip>
            ))}
          </ul>
        </div>
        <button className="bg-lightGreen w-[3.5rem] h-[3.5rem] lg:w-full flex justify-center items-center text-white font-bold rounded-lg shadow-custom gap-2 hover:bg-black duration-500">
          <span className="hidden lg:flex">Crear</span>
          <FontAwesomeIcon className="text-xl" icon={faPlus} />
        </button>
      </aside>
      <main className="bg-white w-full min-h-screen sm:rounded-l-[1.5rem] p-3">
        {/* <--------- TOP SECTION --------> */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-2 mb-2">
          {/* search input */}
          <div className="col-span-3 md:col-span-2 grid grid-cols-2">
            <Input
              size="sm"
              radius="lg"
              type="text"
              placeholder="Buscar por libros, personas o articulos"
              className="col-span-2 md:col-span-1 text-sm"
              startContent={
                <FontAwesomeIcon
                  className="text-gray-500"
                  icon={faMagnifyingGlass}
                />
              }
            />
          </div>
          {/* notification section */}
          <div className="cols-span-2 md:col-span-1 flex justify-between items-center gap-1">
            <div className="flex gap-2">
              <Chip radius="sm" color="warning" variant="flat">
                <FontAwesomeIcon
                  className="text-orange cursor-pointer"
                  icon={faBell}
                />
              </Chip>
              <Chip radius="sm" color="success" variant="flat">
                <FontAwesomeIcon
                  className="text-green cursor-pointer"
                  icon={faEnvelope}
                />
              </Chip>
            </div>
            {/* user section */}
            <div className="flex items-center justify-center gap-2">
              <span className="font-semibold text-small text-center">
                Jean Angarita
              </span>
              <Avatar
                radius="sm"
                className="cursor-pointer"
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              />
            </div>
          </div>
        </div>
        {/* <-------- BOTTOM SECTION ---------> */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* left section */}
          <div className="col-span-2">
            {/* banner */}
            <Banner />
            {/* authors section */}
            <div className="grid lg:grid-cols-3 my-3 gap-2 ">
              <div className="col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-2">
                {/* library stadistics */}
                {booksStadistics.map((item) => (
                  <BooksData key={item.title} bookItem={item} />
                ))}
                <div className="col-span-4">
                  <Authors />
                </div>
              </div>
              {/* right section */}
              <div className="bg-gray-100 col-span-2 lg:col-span-1 flex flex-col rounded-2xl shadow-lg gap-2 p-3">
                <div className="flex justify-between items-end pb-2 gap-2">
                  <h2 className="font-bold text-darkGray text-lg">Reciente</h2>
                  <Button
                    className="h-[35px] bg-buttonGreen text-green font-semibold rounded-full"
                    variant="flat"
                  >
                    Ver todo
                  </Button>
                </div>
                <div className="flex flex-col gap-2">
                  {recentlyData.map((data, index) => (
                    <>
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row justify-between items-start lg:items-center text-[13px] text-darkGray gap-5"
                      >
                        <p>
                          <span className="font-bold">{data.name}</span> ha
                          comentado en "La Ciudadela"
                        </p>
                        <span className="text-gray-400 text-start sm:text-center">
                          {data.date}
                        </span>
                      </div>
                      {index !== recentlyData.length - 1 && <Divider/>}
                    </>
                  ))}
                </div>
              </div>
            </div>
            <BannerDark />
          </div>
          <aside className="cols-span-2 bg-gray-100 rounded-lg p-3">
            <div className="flex justify-between items-center text-darkGray">
              <h2 className="font-bold text-xl">Lo último</h2>
              <Button
                className="h-[35px] bg-buttonGreen text-green font-semibold rounded-full"
                variant="flat"
              >
                Ver todo
              </Button>
            </div>
            <div className="flex items-center text-sm md:text-md gap-5 mt-4">
              <p className="font-semibold flex gap-1 items-center"><FontAwesomeIcon className="text-[10px]" icon={faGreaterThan} />Reciente</p>
              <p>Popular</p>
            </div>
            {/* aside cards container */}
            <div className="flex flex-col gap-5 mt-3">
            {
              cardsData.map((card, index)=>(
                <CardInfo key={index} card={card}/>
              ))
            }
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Home;
