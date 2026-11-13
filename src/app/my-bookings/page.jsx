import { BookingDeleteAlert } from "@/components/BookingDeleteAlert";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import { FaEye } from "react-icons/fa";

const MyBookingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  //get jwt token in (server component)
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const Bookings = await res.json();
  //console.log(Bookings);
  return (
    <div className="container mx-auto py-10 ">
      <h2 className="text-2xl font-semibold">My Bookings</h2>
      <div className="w-[60vw] mx-auto">
        {Bookings.map((Booking) => (
          <div
            key={Booking.id}
            className="border border-blue-200 p-4 mt-7 flex items-center gap-5"
          >
            <div>
              <Image
                src={Booking.imageUrl}
                alt={Booking.destinationName}
                height={200}
                width={400}
              ></Image>
            </div>
            {/* details container */}
            <div className="flex justify-between w-full h-40 ">
              <span className="flex justify-center items-start flex-col space-y-1 ">
                <h2 className="text-3xl font-semibold">
                  {Booking.destinationName}
                </h2>
                <p>Country: {Booking.country}</p>
                <p>
                  Date:{" "}
                  {new Date(Booking.departureDate).toDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h2 className="text-3xl font-semibold text-blue-400">
                  ${Booking.price}
                </h2>
              </span>
              <span className="flex justify-end items-end gap-2 p-2">
                <BookingDeleteAlert
                  bookingId={Booking._id}
                ></BookingDeleteAlert>
                <Button className="rounded-none">
                  <FaEye></FaEye> View
                </Button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingsPage;
