import React from "react";
import {
  faPlus,
  faBook,
  faHouse,
  faNewspaper,
  faBookOpenReader,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
// import { faBell } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Chip, Input, Tooltip } from "@nextui-org/react";

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

const Home = () => {
  return (
    <div className="bg-green flex">
      <aside className="flex flex-col justify-between min-h-screen w-[5rem] lg:w-[12rem] p-3">
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
      <main className="bg-white w-full min-h-screen rounded-l-[2rem] p-5">
        <div className="flex items-center justify-center gap-5">
          <Input
            className="text-lg"
            radius="lg"
            type="email"
            placeholder="Buscar por libros, personas o articulos"
            startContent={
              <FontAwesomeIcon
                className="text-gray-500"
                icon={faMagnifyingGlass}
              />
            }
          />
          <div>
            <Chip color="warning" variant="solid">
              {/* <FontAwesomeIcon icon={faBell} /> */}
            </Chip>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
