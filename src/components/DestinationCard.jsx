import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaCalendarAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const DestinationCard = ({ destination }) => {
  const { _id, destinationName, duration, imageUrl, country, price } =
    destination;
  return (
    <div className="w-full rounded-md shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 pb-5">
      <div>
        <Image
          alt={destinationName}
          src={imageUrl}
          width={400}
          height={400}
          className="w-full h-62.5 object-cover"
        />
      </div>

      <div className="space-y-1 px-2 pt-2">
        <span className="text-gray-500">
          <IoLocationSharp className="inline mr-2" />
          {country}
        </span>

        <div className="flex justify-between items-center gap-2 min-w-0">
          <h3 className="text-xl font-semibold min-w-0 truncate">
            {destinationName}
          </h3>

          <p className="text-xl font-semibold shrink-0 whitespace-nowrap">
            ${price}
          </p>
        </div>

        <span className="text-gray-500">
          <FaCalendarAlt className="inline mr-2" />
          {duration}
        </span>
      </div>
      <Link href={`/destinations/${_id}`}>
        <Button
          variant="outline"
          className="w-full mt-2 border-blue-400 text-blue-400 font-bold"
        >
          Book Now
        </Button>
      </Link>
    </div>
  );
};

export default DestinationCard;
