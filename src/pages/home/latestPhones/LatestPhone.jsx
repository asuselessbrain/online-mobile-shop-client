import PhoneCard from "../../../components/PhoneCard";

const LatestPhone = ({ latestPhone }) => {
  return (
    <div className="my-20">
      <h2 className="text-6xl mb-16 font-Cinzel font-bold text-center">
        Latest Phones
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {latestPhone.map((phone) => (
          <PhoneCard key={phone._id} phone={phone} />
        ))}
      </div>
    </div>
  );
};
export default LatestPhone;
