import React from "react";

export const BooksData = ({bookItem}) => {
  return (
    <div className="flex flex-col justify-center items-center text-center text-sm rounded-lg border-1 p-2 shadow-md cursor-pointer hover:bg-gray-50">
      <p className="text-gray-400">{bookItem.title}</p>
      <p className="font-bold text-darkGray text-xl">{bookItem.data}</p>
    </div>
  );
};
