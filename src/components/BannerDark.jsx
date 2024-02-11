import React from "react";
import { Image } from "@nextui-org/react";

// IMPORT ASSETS
import imgBanner from "/img_2.svg";

const BannerDark = () => {
  return (
    <div className="bg-darkGray grid md:grid-cols-2 justify-between text-white rounded-2xl gap-2 p-4">
      <div className="flex flex-col justify-center">
        <h1 className="font-semibold text-xl">
          Jean, nos gusta tu contenido y queremos darte los siguientes tips:
        </h1> 
        <ol className="list-decimal ml-4 mt-8">
          <li>Lee los comentarios de tus lectores</li>
          <li>Elije el género que quieres para tu público</li>
          <li>Busca siempre a un editor de confianza</li>
        </ol>
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


export default BannerDark;