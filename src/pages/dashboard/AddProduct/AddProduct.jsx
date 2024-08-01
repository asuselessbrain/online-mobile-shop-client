import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { toast } from "react-toastify";

const AddProduct = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosPublic();

  const image_upload_api_key = import.meta.env.VITE_Imagebb_API_KEY;
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_upload_api_key}`;
  const handleFormData = async (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form?.productName.value;
    const brand = form?.brand.value;
    const price = form?.price.value;
    const category = form?.category.value;
    const imageFile = { image: form?.image.files[0] };

    // launch
    const announced = form?.announced.value;
    const release = form?.release.value;
    const status = form?.status.value;
    // network
    const technology = form?.technology.value;
    const _2G_Bands = form?._2G_Bands.value;
    const _3G_Bands = form?._3G_Bands.value;
    const _4G_Bands = form?._4G_Bands.value;
    const speed = form?.speed.value;
    // body
    const dimensions = form?.dimensions.value;
    const weight = form?.weight.value;
    const sim = form?.sim.value;
    // Display
    const displayType = form?.displayType.value;
    const displaySize = form?.displaySize.value;
    const displayResolution = form?.displayResolution.value;
    // Platform
    const os = form?.os.value;
    const chipset = form?.chipset.value;
    const cpu = form?.cpu.value;
    const gpu = form?.gpu.value;
    // Memory
    const cardSlot = form?.cardSlot.value;
    const internal = form?.internal.value;
    const ram = form?.ram.value;
    const variant = form?.variant.value;
    // Main camera
    const mainCameraDual = form?.mainCameraDual.value;
    const mainCameraFeatures = form?.mainCameraFeatures.value;
    const mainCameraVideo = form?.mainCameraVideo.value;
    // Selfie camera
    const selfieCameraDual = form?.selfieCameraDual.value;
    const selfieCameraFeatures = form?.selfieCameraFeatures.value;
    const selfieCameraVideo = form?.selfieCameraVideo.value;
    // sound
    const loudspeaker = form?.loudspeaker.value;
    const _3_5mmJack = form?._3_5mmJack.value;
    // Connectivity
    const wlan = form?.wlan.value;
    const bluetooth = form?.bluetooth.value;
    const gps = form?.gps.value;
    const nfc = form?.nfc.value;
    const FMradio = form?.FMradio.value;
    const usb = form?.usb.value;
    // Features
    const sensors = form?.sensors.value;
    // Battery
    const batteryType = form?.batteryType.value;
    const batteryCapacity = form?.batteryCapacity.value;
    // more
    const madeBy = form?.madeBy.value;
    const color = form?.color.value;
    const host_name = form?.host_name.value;
    const host_email = form?.host_email.value;

      // image hosted in imagebb

      const res = await axios.post(image_hosting_url, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      console.log(res.data)
      if (res.data.success) {
        const image = res.data.data.display_url;

        const productInfo = {
          productName,
          brand,
          price,
          category,
          image,
          launch: {
            announced,
            release,
            status,
          },
          network: {
            technology,
            _2G_Bands,
            _3G_Bands,
            _4G_Bands,
            speed,
          },
          body: {
            dimensions,
            weight,
            sim,
          },
          display: {
            displayType,
            displaySize,
            displayResolution,
          },
          platform: {
            os,
            chipset,
            cpu,
            gpu,
          },
          memory: {
            cardSlot,
            internal,
            ram,
            variant,
          },
          mainCamera: {
            mainCameraDual,
            mainCameraFeatures,
            mainCameraVideo,
          },
          selfieCamera: {
            selfieCameraDual,
            selfieCameraFeatures,
            selfieCameraVideo,
          },
          sound: {
            loudspeaker,
            _3_5mmJack,
          },
          connectivity: {
            wlan,
            bluetooth,
            gps,
            nfc,
            FMradio,
            usb,
          },
          features: {
            sensors,
          },
          battery: {
            batteryType,
            batteryCapacity,
          },
          more: {
            madeBy,
            color,
          },
          hostInfo: {
            host_name,
            host_email,
          },
        };
        console.log(image);
        console.log(productInfo)
          const {data} = await axiosSecure.post('/upload-phone-details', productInfo)
        console.log(data)
        if(data.insertedId){
          toast.success("Item added successfully")
        }
        }
        
    

  };
  return (
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
            />
          </div>
          <div className="mb-4">
            <label htmlFor="brand" className="block text-sm font-medium">
              Brand:
            </label>
            <select
              defaultValue="default"
              id="brand"
              name="brand"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="default">Select Brand</option>
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
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium">
              Category:
            </label>
            <select
              defaultValue="default"
              id="category"
              name="category"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="default">Select Category</option>
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
            <input
              type="file"
              id="image"
              name="image"
              className="file-input
               w-full mt-1"
            />
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
            />
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="block text-sm font-medium">
              Status:
            </label>
            <select
              defaultValue="default"
              id="status"
              name="status"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="default">Select Status</option>
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
            />
          </div>
          <div className="mb-4">
            <label htmlFor="_2G_Bands" className="block text-sm font-medium">
              2G bands:
            </label>
            <input
              type="text"
              id="_2G_Bands"
              placeholder="2G Bands"
              name="_2G_Bands"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="_3G_Bands" className="block text-sm font-medium">
              3G bands:
            </label>
            <input
              type="text"
              id="_3G_Bands"
              name="_3G_Bands"
              placeholder="3G Bands"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="_4G_Bands" className="block text-sm font-medium">
              4G bands:
            </label>
            <input
              type="text"
              id="_4G_Bands"
              name="_4G_Bands"
              placeholder="4G Bands"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="displayResolution"
              className="block text-sm font-medium"
            >
              Display Resolution:
            </label>
            <input
              type="text"
              id="displayResolution"
              name="displayResolution"
              placeholder="Display  Resolution"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
            />
          </div>
          {/* Main camera  */}
          <div className="mb-4">
            <label
              htmlFor="mainCameraDual"
              className="block text-sm font-medium"
            >
              Main camera:
            </label>
            <input
              type="text"
              id="mainCameraDual"
              name="mainCameraDual"
              placeholder="Main camera"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="mainCameraFeatures"
              className="block text-sm font-medium"
            >
              Main camera Features:
            </label>
            <input
              type="text"
              id="mainCameraFeatures"
              placeholder="Main camera Features"
              name="mainCameraFeatures"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="mainCameraVideo"
              className="block text-sm font-medium"
            >
              Main camera Video:
            </label>
            <input
              type="text"
              id="mainCameraVideo"
              placeholder="Main camera Video"
              name="mainCameraVideo"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {/* Selfie camera  */}
          <div className="mb-4">
            <label
              htmlFor="selfieCameraDual"
              className="block text-sm font-medium"
            >
              Selfie camera:
            </label>
            <input
              type="text"
              id="selfieCameraDual"
              name="selfieCameraDual"
              placeholder="Selfie camera"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="selfieCameraFeatures"
              className="block text-sm font-medium"
            >
              Selfie camera Features:
            </label>
            <input
              type="text"
              id="selfieCameraFeatures"
              name="selfieCameraFeatures"
              placeholder="Selfie camera Features"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="selfieCameraVideo"
              className="block text-sm font-medium"
            >
              Selfie camera Video:
            </label>
            <input
              type="text"
              id="selfieCameraVideo"
              name="selfieCameraVideo"
              placeholder="Selfie camera Video"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {/* Sound */}
          <div className="mb-4">
            <label htmlFor="loudspeaker" className="block text-sm font-medium">
              Loudspeaker:
            </label>
            <input
              type="text"
              id="loudspeaker"
              placeholder="Loudspeaker"
              name="loudspeaker"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="_3_5mmJack" className="block text-sm font-medium">
              3.5mm jack:
            </label>
            <select
              defaultValue="default"
              id="_3_5mmJack"
              name="_3_5mmJack"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="default">Select One</option>
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
            />
          </div>
          <div className="mb-4">
            <label htmlFor="FMradio" className="block text-sm font-medium">
              FM radio:
            </label>
            <input
              type="text"
              id="FMradio"
              placeholder="FM radio"
              name="FMradio"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="batteryCapacity"
              className="block text-sm font-medium"
            >
              Battery Capacity:
            </label>
            <input
              type="text"
              id="batteryCapacity"
              placeholder="Battery Capacity"
              name="batteryCapacity"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Added By:</label>
            <input
              type="text"
              value={user?.displayName}
              name="host_name"
              id="host_name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">
              Email of the Person Added Product:
            </label>
            <input
              type="email"
              name="host_email"
              id="host_email"
              value={user?.email}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              readOnly
            />
          </div>
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
