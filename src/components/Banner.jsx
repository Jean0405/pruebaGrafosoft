import React from "react";
import { Button, Image } from "@nextui-org/react";

// IMPORT ASSETS
import imgBanner from "/img_1.svg";

// IMPORT ICONS
import {
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Banner = () => {
  return (
    <div className="bg-orange grid md:grid-cols-2 justify-between text-white rounded-lg gap-2 p-4">
      <div className="flex flex-col justify-center">
        <h1 className="font-semibold text-xl">
          Hola, Jean! Tienes ideas sobre un nuevo libro?
        </h1>
        <p className="mt-2">Vuelve tus libros tendencia mundial!</p>
        <p>Quieres empezar a escribir una vez más?</p>
        <Button className="bg-darkGray max-w-[12rem] text-white mt-2">
          Crear Borrador <FontAwesomeIcon className="text-md" icon={faPlus} />
        </Button>
      </div>
      <div className="flex justify-center items-center order-first md:order-last">
        <Image
          className="w-[15rem]"
          src={imgBanner}
          alt="woman and book image"
        />
      </div>
    </div>
  );
};


export default Banner;