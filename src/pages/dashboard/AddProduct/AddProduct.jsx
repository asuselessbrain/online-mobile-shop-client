// import { categories } from '../Categories/CategoriesData'
const AddProduct = () => {
  const handleFormData = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const model = form.model.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const status = form.status.value;
    const displaySize = form.displaySize.value;
    const displayType = form.displayType.value;
    const resolution = form.resolution.value;
    const brightness = form.brightness.value;
    const features = form.features.value;

    const featuresArray = features.split(",");
    const displayTypeArray = displayType.split(",");

    const productInfo = {
      productName,
      model,
      brand,
      price,
      status,
      displaySize,
      displayType: displayTypeArray,
      resolution,
      brightness,
      features: featuresArray,
    };

    console.log(productInfo);
  };
  return (
    // <div className="w-full min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
    //   <h2 className="text-5xl font-bold text-center mb-10">Add Product</h2>
    //   <form>
    //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
    //       <div className="space-y-6">
    //         <div className="space-y-1 text-sm">
    //           <label htmlFor="location" className="block text-gray-600">
    //             Location
    //           </label>
    //           <input
    //             className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
    //             name="location"
    //             id="location"
    //             type="text"
    //             placeholder="Location"
    //             required
    //           />
    //         </div>

    //         {/* <div className='space-y-1 text-sm'>
    //           <label htmlFor='category' className='block text-gray-600'>
    //             Category
    //           </label>
    //           <select
    //             required
    //             className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
    //             name='category'
    //           >
    //             {categories.map(category => (
    //               <option value={category.label} key={category.label}>
    //                 {category.label}
    //               </option>
    //             ))}
    //           </select>
    //         </div> */}

    //         <div className="space-y-1">
    //           <label htmlFor="location" className="block text-gray-600">
    //             Select Availability Range
    //           </label>
    //           {/* Calender */}
    //         </div>
    //       </div>
    //       <div className="space-y-6">
    //         <div className="space-y-1 text-sm">
    //           <label htmlFor="title" className="block text-gray-600">
    //             Title
    //           </label>
    //           <input
    //             className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
    //             name="title"
    //             id="title"
    //             type="text"
    //             placeholder="Title"
    //             required
    //           />
    //         </div>

    //         <div>
    //           <label className="block text-gray-600" htmlFor="user_avatar">
    //             Upload file
    //           </label>
    //           <div className="p-4 bg-white w-full  m-auto rounded-lg">
    //             <input type="file" className="file-input bg-gray-50 w-full" />
    //           </div>
    //         </div>
    //         <div
    //           className="mt-1 text-sm text-gray-500 dark:text-gray-300"
    //           id="user_avatar_help"
    //         >
    //           A profile picture is useful to confirm your are logged into your
    //           account
    //         </div>
    //         <div className="flex justify-between gap-2">
    //           <div className="space-y-1 text-sm">
    //             <label htmlFor="price" className="block text-gray-600">
    //               Price
    //             </label>
    //             <input
    //               className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
    //               name="price"
    //               id="price"
    //               type="number"
    //               placeholder="Price"
    //               required
    //             />
    //           </div>

    //           <div className="space-y-1 text-sm">
    //             <label htmlFor="guest" className="block text-gray-600">
    //               Total guest
    //             </label>
    //             <input
    //               className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
    //               name="total_guest"
    //               id="guest"
    //               type="number"
    //               placeholder="Total guest"
    //               required
    //             />
    //           </div>
    //         </div>

    //         <div className="flex justify-between gap-2">
    //           <div className="space-y-1 text-sm">
    //             <label htmlFor="bedrooms" className="block text-gray-600">
    //               Bedrooms
    //             </label>
    //             <input
    //               className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
    //               name="bedrooms"
    //               id="bedrooms"
    //               type="number"
    //               placeholder="Bedrooms"
    //               required
    //             />
    //           </div>

    //           <div className="space-y-1 text-sm">
    //             <label htmlFor="bathrooms" className="block text-gray-600">
    //               Bathrooms
    //             </label>
    //             <input
    //               className="w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md "
    //               name="bathrooms"
    //               id="bathrooms"
    //               type="number"
    //               placeholder="Bathrooms"
    //               required
    //             />
    //           </div>
    //         </div>

    //         <div className="space-y-1 text-sm">
    //           <label htmlFor="description" className="block text-gray-600">
    //             Description
    //           </label>

    //           <textarea
    //             id="description"
    //             className="block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 "
    //             name="description"
    //           ></textarea>
    //         </div>
    //       </div>
    //     </div>

    //     <button
    //       type="submit"
    //       className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500"
    //     >
    //       Save & Continue
    //     </button>
    //   </form>
    // </div>

    <div className="w-full min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <h2 className="text-6xl text-center font-bold font-Cinzel pt-10 drop-shadow-lg">
        Add Product
      </h2>

      <form onSubmit={handleFormData} className="w-full p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="productName" className="block text-sm font-medium">
              Product Name:
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              placeholder="Product Name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="brand" className="block text-sm font-medium">
              Brand:
            </label>
            <select
              id="brand"
              name="brand"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="">Select Brand</option>
              <option value="Samsung">Samsung</option>
              <option value="Xiaomi">Xiaomi</option>
              <option value="Apple">Apple</option>
              <option value="Google">Google</option>
              <option value="Huawei">Huawei</option>
              <option value="Realme">Realme</option>
              <option value="OnePlus">OnePlus</option>
              <option value="Oppo">Oppo</option>
              <option value="Vivo">Vivo</option>
              <option value="Nokia">Nokia</option>
              <option value="Motorola">Motorola</option>
              <option value="Tecno">Tecno</option>
              <option value="Infinix">Infinix</option>
              <option value="Walton">Walton</option>
              <option value="Symphony">Symphony</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium">
              Price:
            </label>
            <input
              type="number"
              id="price"
              name="price"
              placeholder="Price"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium">
              Category:
            </label>
            <select
              id="category"
              name="category"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="">Select Category</option>
              <option value="Feature phones">Feature phones</option>
              <option value="Smartphones">Smartphones</option>
              <option value="Tablets">Tablets</option>
              <option value="Smart watches">Smart watches</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium">
              Image:
            </label>
          <input type="file" id="image" name="image" className="file-input w-full mt-1" />
          </div>
          {/* Launch  */}
          <div className="mb-4">
            <label htmlFor="announced" className="block text-sm font-medium">
              Announced:
            </label>
            <input
              type="date"
              id="announced"
              name="announced"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="release" className="block text-sm font-medium">
              Release:
            </label>
            <input
              type="date"
              id="release"
              name="release"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="block text-sm font-medium">
              Status:
            </label>
            <select
              id="status"
              name="status"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="">Select Status</option>
              <option value="Available">Available</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>
          </div>
          {/* Network  */}
          <div className="mb-4">
            <label htmlFor="technology" className="block text-sm font-medium">
              Technology:
            </label>
            <input
              type="text"
              id="technology"
              name="technology"
              placeholder="Technology"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="2G-Bands" className="block text-sm font-medium">
              2G bands:
            </label>
            <input
              type="text"
              id="2G-Bands"
              placeholder="2G Bands"
              name="2G-Bands"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="3G-Bands" className="block text-sm font-medium">
              3G bands:
            </label>
            <input
              type="text"
              id="3G-Bands"
              name="3G-Bands"
              placeholder="3G Bands"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="4G-Bands" className="block text-sm font-medium">
            4G bands:
            </label>
            <input
              type="text"
              id="4G-Bands"
              name="4G-Bands"
              placeholder="4G Bands"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="speed" className="block text-sm font-medium">
            Speed:
            </label>
            <input
              type="text"
              id="speed"
              name="speed"
              placeholder="Speed"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          {/* Body  */}
          <div className="mb-4">
            <label htmlFor="dimensions" className="block text-sm font-medium">
            Dimensions:
            </label>
            <input
              type="text"
              id="dimensions"
              name="dimensions"
              placeholder="Dimensions"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="weight" className="block text-sm font-medium">
            Weight:
            </label>
            <input
              type="number"
              id="weight"
              name="weight"
              placeholder="Weight"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="sim" className="block text-sm font-medium">
            SIM:
            </label>
            <input
              type="text"
              id="sim"
              name="sim"
              placeholder="SIM"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          {/* Display */}
          <div className="mb-4">
            <label htmlFor="displayType" className="block text-sm font-medium">
            Display Type:
            </label>
            <input
              type="text"
              id="displayType"
              name="displayType"
              placeholder="Display Type"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="displaySize" className="block text-sm font-medium">
            Display Size:
            </label>
            <input
              type="text"
              id="displaySize"
              name="displaySize"
              placeholder="Display Size"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor=" displayResolution" className="block text-sm font-medium">
            Display  Resolution:
            </label>
            <input
              type="text"
              id=" displayResolution"
              name=" displayResolution"
              placeholder="Display  Resolution"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          {/* Platform */}
          <div className="mb-4">
            <label htmlFor="os" className="block text-sm font-medium">
            OS:
            </label>
            <input
              type="text"
              id="os"
              name="os"
              placeholder="OS"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="chipset" className="block text-sm font-medium">
            Chipset:
            </label>
            <input
              type="text"
              id="chipset"
              name="chipset"
              placeholder="Chipset"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="cpu" className="block text-sm font-medium">
              CPU:
            </label>
            <input
              type="text"
              id="cpu"
              name="cpu"
              placeholder="CPU"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gpu" className="block text-sm font-medium">
              GPU:
            </label>
            <input
              type="text"
              id="gpu"
              name="gpu"
              placeholder="GPU"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          {/* Memory  */}
          <div className="mb-4">
            <label htmlFor="cardSlot" className="block text-sm font-medium">
            Card Slot:
            </label>
            <input
              type="text"
              id="cardSlot"
              placeholder="Card Slot"
              name="cardSlot"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="internal" className="block text-sm font-medium">
            Internal:
            </label>
            <input
              type="text"
              id="internal"
              placeholder="Internal"
              name="internal"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="ram" className="block text-sm font-medium">
              RAM:
            </label>
            <input
              type="text"
              id="ram"
              name="ram"
              placeholder="RAM"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="variant" className="block text-sm font-medium">
            Variant:
            </label>
            <input
              type="text"
              id="variant"
              placeholder="Variant"
              name="variant"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          {/* Main camera  */}
          <div className="mb-4">
            <label htmlFor="mainCameraDual" className="block text-sm font-medium">
            Main camera:
            </label>
            <input
              type="text"
              id="mainCameraDual"
              name="mainCameraDual"
              placeholder="Main camera"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mainCameraFeatures" className="block text-sm font-medium">
            Main camera Features:
            </label>
            <input
              type="text"
              id="mainCameraFeatures"
              placeholder="Main camera Features"
              name="mainCameraFeatures"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mainCameraVideo" className="block text-sm font-medium">
            Main camera Video:
            </label>
            <input
              type="text"
              id="mainCameraVideo"
              placeholder="Main camera Video"
              name="mainCameraVideo"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          {/* Selfie camera  */}
          <div className="mb-4">
            <label htmlFor="mainCameraDual" className="block text-sm font-medium">
            Selfie camera:
            </label>
            <input
              type="text"
              id="mainCameraDual"
              name="mainCameraDual"
              placeholder="Selfie camera"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mainCameraFeatures" className="block text-sm font-medium">
            Selfie camera Features:
            </label>
            <input
              type="text"
              id="mainCameraFeatures"
              name="mainCameraFeatures"
              placeholder="Selfie camera Features"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mainCameraVideo" className="block text-sm font-medium">
            Selfie camera Video:
            </label>
            <input
              type="text"
              id="mainCameraVideo"
              name="mainCameraVideo"
              placeholder="Selfie camera Video"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          {/* Sound */}
          <div className="mb-4">
            <label htmlFor="loudspeaker" className="block text-sm font-medium">
            Loudspeaker:
            </label>
            <select
              id="loudspeaker"
              name="loudspeaker"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="">Select One</option>
              <option value="YES">YES</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="3.5mmJack" className="block text-sm font-medium">
            3.5mm jack:
            </label>
            <select
              id="3.5mmJack"
              name="3.5mmJack"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="">Select One</option>
              <option value="YES">YES</option>
              <option value="No">No</option>
            </select>
          </div>
          {/* Connectivity  */}
          <div className="mb-4">
            <label htmlFor="wlan" className="block text-sm font-medium">
            WLAN:
            </label>
            <input
              type="text"
              id="wlan"
              name="wlan"
              placeholder="WLAN"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="bluetooth" className="block text-sm font-medium">
            Bluetooth:
            </label>
            <input
              type="text"
              id="bluetooth"
              placeholder="Bluetooth"
              name="bluetooth"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gps" className="block text-sm font-medium">
            GPS:
            </label>
            <input
              type="text"
              id="gps"
              name="gps"
              placeholder="GPS"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="nfc" className="block text-sm font-medium">
            NFC:
            </label>
            <input
              type="text"
              id="nfc"
              name="nfc"
              placeholder="NFC"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor=" FMradio" className="block text-sm font-medium">
            FM radio:
            </label>
            <input
              type="text"
              id=" FMradio"
              placeholder="FM radio"
              name=" FMradio"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="usb" className="block text-sm font-medium">
              USB:
            </label>
            <input
              type="text"
              id="usb"
              name="usb"
              placeholder="USB"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          {/* Features  */}
          <div className="mb-4">
            <label htmlFor="sensors" className="block text-sm font-medium">
            Sensors:
            </label>
            <input
              type="text"
              id="sensors"
              name="sensors"
              placeholder="Sensors"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          {/* Battery  */}
          <div className="mb-4">
            <label htmlFor="batteryType" className="block text-sm font-medium">
            Battery Type:
            </label>
            <input
              type="text"
              id="batteryType"
              placeholder="Battery Type"
              name="batteryType"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="batteryCapacity" className="block text-sm font-medium">
            Battery Capacity:
            </label>
            <input
              type="text"
              id="batteryCapacity"
              placeholder="Battery Capacity"
              name="batteryCapacity"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          {/* More */}
          <div className="mb-4">
            <label htmlFor="madeBy" className="block text-sm font-medium">
            Made by:
            </label>
            <input
              type="text"
              id="madeBy"
              name="madeBy"
              placeholder="Made by"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="color" className="block text-sm font-medium">
            Color:
            </label>
            <input
              type="text"
              id="color"
              name="color"
              placeholder="Color"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          {/* <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium">
              Job Description:
            </label>
            <textarea
              id="description"
              name="description"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            ></textarea>
          </div> */}
          {/* <div className="mb-4">
            <label className="block text-sm font-medium">Posted By:</label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">
              Email of the Person Posting:
            </label>
            <input
              type="email"
              name="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="applicantsNumber"
              className="block text-sm font-medium"
            >
              Job Applicants Number:
            </label>
            <input
              type="number"
              id="applicantsNumber"
              name="applicantsNumber"
              defaultValue={0}
              readOnly
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div> */}
        </div>
        <button
          type="submit"
          className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500"
        >
          Save & Continue
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
