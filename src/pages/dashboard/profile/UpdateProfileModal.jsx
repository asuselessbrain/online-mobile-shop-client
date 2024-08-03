import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UpdateProfileModal = ({ isOpen, close }) => {
  const { user, updateUser } = useAuth();
  const navigate = useNavigate()
  const image_hosting_uri = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_Imagebb_API_KEY
  }`;

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.displayName.value;
    const imageFile = { image: form.image.files[0] };

    const { data } = await axios.post(image_hosting_uri, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    const image = data.data.display_url;
    if (data.success) {
      try{
        await updateUser(displayName, image)
        toast.success("Profile Updated Successfully")
        navigate('/')
      }
      catch(err){
        toast.error(err.message)
      }
    }
    else{
      toast.error("Please select a image!!")
    }

  };

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-center mb-8 font-bold text-2xl text-black"
              >
                Update Profile
              </DialogTitle>
              <form onSubmit={handleUpdate}>
                <label className="input input-bordered flex items-center gap-2 mt-2 text-sm/6 text-black/50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    defaultValue={user.displayName}
                    id="displayName"
                    name="displayName"
                    type="text"
                    className="grow"
                    placeholder="Username"
                  />
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  className="file-input w-full mt-6 text-sm/6 text-black/50"
                />
                <div className="mt-6 w-full">
                  <button
                    className="w-full rounded-md bg-[#F43F5E] mx-auto py-1.5 px-3 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    onClick={close}
                  >
                    Update
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default UpdateProfileModal;
