import { revalidateDestinationPaths } from "@/app/lib/actions";
import { DeleteAlert } from "@/components/DeleteAlert";
import { EditModal } from "@/components/EditModal";
import Image from "next/image";
import { FaCalendarAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/destination/${id}`);
  const destination = await res.json();
  const {
    _id,
    destinationName,
    duration,
    imageUrl,
    country,
    price,
    description,
  } = destination;

  console.log(destination);
  return (
    <div className="container mx-auto  pt-5 pb-15">
      <div className="flex justify-end items-center gap-2 mb-5">
        <EditModal
          destination={destination}
          revalidateDestinationPaths={revalidateDestinationPaths}
        ></EditModal>
        <DeleteAlert destination={destination}></DeleteAlert>
      </div>
      <div className="flex justify-center items-center mb-10">
        <Image
          alt={destinationName}
          src={imageUrl}
          width={400}
          height={400}
          className="w-[40vw] h-full object-cover"
        />
      </div>

      <div className="space-y-1 px-2 pt-2 mb-10">
        <span className="text-gray-500">
          <IoLocationSharp className="inline mr-2" />
          {country}
        </span>

        <div className="flex justify-between items-center gap-2 min-w-0">
          <h3 className="text-3xl font-semibold min-w-0 truncate">
            {destinationName}
          </h3>

          <p className="text-3xl font-semibold shrink-0 whitespace-nowrap">
            ${price}
          </p>
        </div>

        <span className="text-gray-500">
          <FaCalendarAlt className="inline mr-2" />
          {duration}
        </span>
      </div>
      <p className="text-lg text-gray-700">
        <span className="font-semibold">Description:</span> {description}
      </p>
    </div>
  );
};

export default DestinationDetailsPage;
