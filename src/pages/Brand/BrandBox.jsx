import { useNavigate } from "react-router-dom";
import { brands } from "./Brand";
import queryString from "query-string";

const BrandBox = () => {
  //   const navigate = useNavig

  const navigate = useNavigate();

  const handleBrand = (brand) => {
    const brandInfo = { brand };

    const url = queryString.stringifyUrl({
      url: "/all-phones",
      query: brandInfo,
    });
    navigate(url);
  };
  return (
    <div className="pt-4 flex items-center justify-between overflow-x-auto mb-6">
      {brands.map((brand) => (
        <p
          key={brand.id}
          onClick={() => handleBrand(brand.name)}
          className="flex 
  flex-col 
  items-center 
  justify-center 
  gap-2
  p-3
  border-b-2
  hover:text-neutral-800
  transition
  cursor-pointer"
        >
          {brand.name}
        </p>
      ))}
    </div>
  );
};

export default BrandBox;
