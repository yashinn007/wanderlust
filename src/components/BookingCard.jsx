"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Card, DateField, Label } from "@heroui/react";
import { useState } from "react";
import { toast } from "react-toastify";
const BookingCard = ({ destination }) => {
  // User Data
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  //console.log(user);

  // date
  const [departureDate, setDepartureDate] = useState(null);
  //console.log(new Date(departureDate));

  //   destination data
  const {
    _id,
    destinationName,
    duration,
    imageUrl,
    country,
    price,
    description,
  } = destination;

  const handelBooking = async () => {
    if (isPending) return;

    if (!user?.id) {
      alert("Booking করতে আগে login করুন");
      return;
    }

    if (!departureDate) {
      alert("Departure date নির্বাচন করুন");
      return;
    }
    const bookingData = {
      userId: user.id,
      userImage: user.image ?? null,
      userName: user.name,
      destinationId: _id,
      destinationName: destinationName,
      price: price,
      imageUrl: imageUrl,
      country: country,
      departureDate: new Date(departureDate),
    };

    const res = await fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();

    toast.success("You booked successfully");
  };

  return (
    <Card className="p-4">
      <h5 className="text-gray-500">Starting from</h5>
      <h2 className="text-4xl font-semibold text-blue-400">${price}</h2>
      <h5 className="text-gray-500 mb-7">per person</h5>
      {/* date */}
      <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
        <Label>Depature Date</Label>
        <DateField.Group>
          <DateField.Input>
            {(segment) => <DateField.Segment segment={segment} />}
          </DateField.Input>
        </DateField.Group>
      </DateField>
      <Button
        onClick={handelBooking}
        className="w-full mt-7 rounded-none bg-blue-500"
      >
        Book Now
      </Button>
    </Card>
  );
};

export default BookingCard;
