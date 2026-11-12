import DestinationCard from "@/components/DestinationCard";

const DestinationPage = async () => {
  "use cache";
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination`);
  const destinations = await res.json();

  console.log(destinations);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">All Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {destinations.map((destination) => (
          <DestinationCard key={destination._id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default DestinationPage;
