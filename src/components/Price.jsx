import { House } from "lucide-react";

const Pricing = () => {
  return (
    <div className="mt-10">
      <h2 className="text-3xl sm:text-5xl lg:text-5xl text-center my-8 tracking-wide text-orange-500">
        Address
      </h2>
      <div className="flex justify-center items-center my-8 tracking-wide">
        <House className="text-green-500 w-6 h-6 mr-4" />
        <div className="text-white text-lg">
          Kollanarambath House, Vengeri P O, 673010, Calicut-10
        </div>
      </div>
    </div>
  );
};

export default Pricing;
