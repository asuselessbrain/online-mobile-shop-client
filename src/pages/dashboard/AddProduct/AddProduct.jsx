import axios from "axios";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { toast } from "react-toastify";
import AddProductForm from "./AddProductForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const axiosSecure = useAxiosPublic();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

    try {
      setLoading(true)
      const res = await axios.post(image_hosting_url, imageFile, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

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
        console.log(productInfo);
        try{
          const { data } = await axiosSecure.post(
            "/upload-phone-details",
            productInfo
          );
          console.log(data);
          if (data.insertedId) {
            toast.success("Item added successfully");
            navigate('/dashboard/manage-product')
            setLoading(false)
          }
        }
        catch(err){
          console.log(err.message)
          setLoading(false)
        }
      }

    } catch (err) {
      console.log(err.message);
      setLoading(false)
    }
  };
  return (
    <div className="w-full min-h-[calc(100vh-80px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
      <h2 className="text-6xl text-center font-bold font-Cinzel pt-10 drop-shadow-lg">
        Add Product
      </h2>

      <AddProductForm handleFormData={handleFormData} loading={loading} />
    </div>
  );
};

export default AddProduct;
