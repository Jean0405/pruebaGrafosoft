import React from "react";
import { Avatar, Card, CardBody, CardFooter, Image } from "@nextui-org/react";

const CardInfo = ({ card }) => {
  return (
    <Card
      shadow="sm"
      key={card.title}
      isPressable
      onPress={() => console.log("item pressed")}
    >
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={card.title}
          className="w-full object-cover h-[140px] hover:grayscale"
          src={card.img}
        />
      </CardBody>
      <CardFooter className="flex flex-col justify-start text-small">
        <div className="w-full text-start sm:text-center md:text-start">
          <p className="w-full text-darkGray font-bold">
            {card.title}
          </p>
          <p className="text-default-500">{card.description}</p>
        </div>
        <div className="w-full flex sm:flex-col sm:items-center md:flex-row md: gap-2 mt-2">
          <div className="sm:flex-col sm:items-center md:flex-row">
            <Avatar radius="md" src={card.user.img} />
          </div>
          <div>
            <p className="font-bold">{card.user.name}</p>
            <p>{card.user.date}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardInfo;
