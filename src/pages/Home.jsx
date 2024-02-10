import React from "react";

// IMPORT ICONS
import {
  faPlus,
  faBook,
  faHouse,
  faNewspaper,
  faBookOpenReader,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// IMPORT COMPONENTS
import { Avatar, Chip, Input, Tooltip } from "@nextui-org/react";
import { BooksData } from "../components/BooksData";
import Banner from "../components/Banner";
import Authors from "../components/Authors";

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
    data: 124
  },
  {
    title: "Me gusta",
    data: "155 k"
  },
  {
    title: "Lectores",
    data: "8 k"
  },
  {
    title: "Opiniones",
    data: "163 k"
  },
]

const Home = () => {
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
                >
                  <FontAwesomeIcon
                    className="flex lg:hidden text-xl"
                    icon={item.icon}
                  />
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
      <main className="bg-white w-full min-h-screen sm:rounded-l-[1.5rem] p-5">
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
              <span className="font-semibold text-small text-center">Jean Angarita</span>
              <Avatar
                radius="sm"
                className="cursor-pointer"
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              />
            </div>
          </div>
        </div>
        {/* <-------- BOTTOM SECTION ---------> */}
        <div className="grid sm:grid-cols-3">
          {/* left section */}
          <div className="col-span-2">
            {/* banner */}
            <Banner/>
            {/* authors section */}
            <div className="grid lg:grid-cols-3 my-3">
              <div className="col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-2">
                {/* library stadistics */}
                {
                  booksStadistics.map(item =>(
                    <BooksData key={item.title} bookItem={item}/>
                  ))
                }
                <div className="col-span-4">
                  <Authors/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
