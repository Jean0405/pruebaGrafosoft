import { useEffect, useState } from "react";

import Author from "./Author";
import { Button, Divider, Spinner, divider } from "@nextui-org/react";
import { getThreeCharacters } from "../api/getCharacters";

const Authors = () => {
  const [characters, setCharacters] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  // GET THREE CHARACTERS
  const getCharacters = async () => {
    let response = await getThreeCharacters();
    setCharacters(response);
    setIsFetching(false);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="bg-gray-100 flex flex-col rounded-2xl p-3">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-darkGray text-xl">Autores</h2>
        <Button
          className="bg-buttonGreen text-green font-semibold rounded-full"
          variant="flat"
        >
          Ver todo
        </Button>
      </div>
      <div className="my-2">
        {isFetching ? (
          <div className="flex justify-center items-center">
            <Spinner label="Loading" color="default" />
          </div>
        ) : (
          characters.map((character, index) => (
            <>
              <Author key={character.id} character={character} />
              {
                index !== characters.length - 1 && (
                  <Divider />
                )
              }
            </>
          ))
        )}
      </div>
    </div>
  );
};

export default Authors;
