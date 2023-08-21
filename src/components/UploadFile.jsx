import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useDropzone } from "react-dropzone";
import { AiOutlineClose } from "react-icons/ai";
import fileupload from "../assets/images/upload_icon.png";

const UploadFile = ({
  setShowUploadFile,
  showUploadFile,
  setImages,
  images,
}) => {
  const [loading, setLoading] = useState(false);

  const uploadFileRef = useRef(null);

  const { getInputProps, getRootProps } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/jpg": [],
      "image/png": [],
      "image/gif": [],
    },
    onDrop: (acceptedFiles) => {
      setImages(acceptedFiles);
    },
    maxFiles: 10,
    onDropRejected: (rejection) => {
      toast.remove();
      if (rejection.length > 10) {
        toast.error("You can upload maximum 10 files.");
      } else {
        toast.error(rejection[0]?.errors[0]?.message);
      }
    },
  });

  const handleChangeFile = (e) => {
    // const existingFile = images
    //   .flat(Infinity)
    //   .filter((image) =>
    //     Object.values(e.target.files).some((img) => img.name === image.name)
    //   );
    // if (existingFile.length > 0) {
    //   toast.error("File is already added!!!");
    // } else {
    if (Object.values(e.target.files).flat(Infinity).length > 11) {
      return toast.error("you can upload 11 images maximum!!!");
    } else {
      setImages([...images, Object.values(e.target.files)]);
    }
    // }
  };

  const handleDeleteFile = (name) => {
    const file = images.flat(Infinity).filter((img) => img?.name !== name);
    setImages(file);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        uploadFileRef.current &&
        !uploadFileRef.current.contains(event?.target)
      ) {
        setShowUploadFile(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [handleClickOutside]);

  function handleClickOutside() {
    setShowUploadFile(false);
  }

  return (
    <div
      className={`fixed bg-black/10 duration-300 z-50 ease-out ${
        showUploadFile ? "translate-x-0" : "-translate-x-full"
      } w-full h-screen inset-0 backdrop-blur-sm`}
    >
      <div
        ref={uploadFileRef}
        className={`relative ease-out duration-700 ${
          showUploadFile ? "-translate-x-1/2" : "-translate-x-full"
        } bg-white rounded-xl p-4 text-center lg:h-3/4 md:h-[60%] h-4/5 xl:w-1/3 md:w-1/2 w-3/4 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2`}
      >
        <div className="flex flex-col justify-evenly items-center h-full w-full xl:gap-y-7 lg:gap-y-5 gap-y-3">
          {/* title & tbn */}
          <div className="flex justify-between items-center w-full">
            <p className="font-bold text-base">Upload Files</p>
            <button
              type="button"
              onClick={() => {
                setShowUploadFile(false);
                setImages([]);
              }}
            >
              <AiOutlineClose size={30} />
            </button>
          </div>
          {images.length > 0 ? (
            <div className="w-full h-[70%] space-y-4">
              <div className="overflow-y-scroll scrollbar h-full space-y-2 w-full">
                {images.flat(Infinity).map((image, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 border border-BorderGray w-full p-3 flex justify-between items-center text-black text-base"
                  >
                    <p>{image?.name}</p>

                    <button
                      type="button"
                      onClick={() => handleDeleteFile(image?.name)}
                    >
                      <AiOutlineClose height={25} />
                    </button>
                  </div>
                ))}
              </div>
              {/* <div className="relative h-auto text-center w-full">
                <input
                  type="file"
                  className="absolute w-40 cursor-pointer inset-0 h-12 z-50 opacity-0 mx-auto rounded-3xl"
                  onChange={(e) => handleChangeFile(e)}
                  multiple={true}
                />
                <button
                  type="button"
                  className="md:w-40 w-32 lg:h-12 h-10 z-10 mx-auto absolute cursor-pointer inset-0 rounded-3xl bg-green-500 text-white text-center"
                >
                  Choose Files
                </button>
              </div> */}
            </div>
          ) : (
            <div
              {...getRootProps()}
              className="flex items-center w-full justify-center h-full flex-col gap-y-2"
            >
              <p>
                <img
                  src={fileupload}
                  className="md:w-20 md:h-20 h-14 w-14 object-contain"
                  alt="fileuploadicon"
                />
              </p>
              <p className="relative z-50 h-12 text-center w-full">
                <input
                  {...getInputProps()}
                  type="file"
                  className="absolute w-full cursor-pointer inset-0 h-full z-50 opacity-0 mx-auto rounded-3xl"
                  onChange={(e) => handleChangeFile(e)}
                  multiple={true}
                  accept="image/*"
                />
                <button
                  type="button"
                  className="md:w-40 w-32 z-10 mx-auto absolute cursor-pointer inset-0 md:h-12 h-10 rounded-3xl bg-green-500 text-white text-center"
                >
                  Choose Files
                </button>
              </p>
              <p className="text-gray-700 text-sm font-normal">
                Or drag and drop files here
              </p>
            </div>
          )}
          {images.length > 0 && (
            <button
              type="button"
              className="w-full bg-primaryBlue font-bold text-white text-center h-10 rounded-lg"
              //       onClick={() => handleUploadFile()}
              disabled={loading}
            >
              {loading ? "Uploading..." : "Upload"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
