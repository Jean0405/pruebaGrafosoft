import { Avatar } from "@nextui-org/react";
import React from "react";

const Author = ({character}) => {
  return (
    <div className="flex justify-between items-center text-darkGray py-1">
      <div className="flex items-center gap-2">
        <Avatar
          className="cursor-pointer border-2 border-gray-100 hover:border-lightGreen"
          radius="md"
          src={character.image}
        />
        <div className="flex flex-col">
          <p className="font-bold">{character.name}</p>
          <span className="text-gray-500">{character.species}</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <p className="font-light">Lectores</p>
        <span className="font-bold text-extrabold">143K</span>
      </div>
    </div>
  );
};

export default Author;
