import React, { useEffect, useRef, useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import useAbortApiCall from "../../hooks/useAbortApiCall";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";
import {
  handleGetJobDetails,
  handleUploadBillOfLanding,
} from "../../redux/BidSlice";
import { socket } from "../../Socket";

const UploadBills = ({ setShowUploadBillModal, showUploadBillModal }) => {
  const [images, setImages] = useState([]);
  const [displayImages, setDisplayImages] = useState([]);

  const { singleJobDetails, uploadBillLoading, singleJobLoading } = useSelector(
    (s) => s.root.bid
  );
  const { token } = useSelector((s) => s.root.auth);

  const modalRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (modalRef.current && !modalRef.current.contains(event?.target)) {
  //       setShowUploadBillModal(false);
  //       setDisplayImages([]);
  //       setImages([]);
  //     }
  //   };
  //   document.addEventListener("click", handleClickOutside, true);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside, true);
  //   };
  // }, [handleClickOutside]);

  // function handleClickOutside() {
  //   setShowUploadBillModal(false);
  //   setDisplayImages([]);
  //   setImages([]);
  // }

  const dispatch = useDispatch();

  const { AbortControllerRef, abortApiCall } = useAbortApiCall();

  const uploadFileRef = useRef(null);

  const { getInputProps, getRootProps } = useDropzone({
    accept: {
      "image/png": [],
      "image/jpg": [],
    },
    onDrop: (acceptedFiles) => {
      setImages(acceptedFiles);
    },
    maxFiles: 1,
    onDropRejected: (rejection) => {
      toast.remove();
      if (rejection.length > 2) {
        toast.error("You can upload maximum 3 files.");
      } else {
        toast.error(rejection[0]?.errors[0]?.message);
      }
    },
  });

  const handleChangeFile = (e) => {
    const existingFile = images
      .flat(Infinity)
      .filter((image) =>
        Object.values(e.target.files).some((img) => img.name === image.name)
      );

    if (existingFile.length > 0) {
      toast.error("File is already added!!!");
    } else {
      setImages([
        ...images.flat(Infinity),
        Object.values(e.target.files).flat(Infinity),
      ]);
      let imageUrls = [];
      for (const iterator of Object.values(e.target.files)) {
        const objectUrl = window.URL.createObjectURL(iterator);
        imageUrls.push({
          url: objectUrl,
          name: iterator.name,
        });
      }
      setDisplayImages([
        ...displayImages.flat(Infinity),
        Object.values(imageUrls).flat(Infinity),
      ]);
    }
  };

  const handleDeleteFile = (name) => {
    const file = images.flat(Infinity).filter((img) => img?.name !== name);
    setImages(file);
    const fileurl = displayImages
      .flat(Infinity)
      .filter((img) => img?.name !== name);
    setDisplayImages(fileurl);
  };

  const handleUploadFile = () => {
    if (images.length === 0) return toast.error("Please select file");
    if (uploadBillLoading || singleJobLoading) return;
    const response = dispatch(
      handleUploadBillOfLanding({
        images: images.flat(Infinity),
        jobId: singleJobDetails?._id,
        token,
        signal: AbortControllerRef,
      })
    );
    if (response) {
      response.then((res) => {
        if (res?.payload?.status === "success") {
          toast.success("Bill uploaded successfully.");
          socket.emit("jobStatus", {
            jobId: singleJobDetails?._id,
            jobStatus: "loadingComplete",
          });
          const response = dispatch(
            handleGetJobDetails({
              token,
              id: singleJobDetails?._id,
              signal: AbortControllerRef,
            })
          );
          if (response) {
            response.then((res) => {
              if (res?.payload?.status === "success") {
                setTimeout(() => {
                  setShowUploadBillModal(false);
                }, 2000);
              }
            });
          }
        }
      });
    }
  };

  const handleCloseModal = () => {
    setShowUploadBillModal(false);
    setImages([]);
    setDisplayImages([]);
    abortApiCall();
  };

  return (
    <div>
      <div
        className={`fixed bg-black/10 duration-300 z-20 ease-out ${
          showUploadBillModal ? "translate-x-0" : "-translate-x-full"
        } inset-0 backdrop-blur-sm`}
      ></div>
      <div
        ref={modalRef}
        className={`fixed z-30 ease-out duration-300 ${
          showUploadBillModal ? "scale-100" : "scale-0"
        } bg-white rounded-xl md:p-4 p-2 md:space-y-3 space-y-2 text-center h-fit xl:w-1/3 md:w-1/2 w-11/12 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2`}
      >
        <p className="md:text-xl font-semibold text-primaryBlue text-left">
          Upload bill of lading
        </p>
        <p className="text-xs font-semibold text-textBlackcolor text-left">
          {/* * Max 3 files upload */}
        </p>
        <div className="w-full h-[25vh] overflow-y-scroll scrollbar relative space-y-1">
          {images.length === 0 && (
            <input
              type="file"
              className="w-full h-full top-0 left-0 absolute cursor-pointer z-10 opacity-0"
              multiple
              accept="image/*"
              onChange={handleChangeFile}
            />
          )}

          {images.length > 0 ? (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 items-start place-items-start gap-3 w-full">
              {displayImages.flat(Infinity).map((image) => (
                <div key={image?.name} className="w-full relative">
                  <img
                    src={image.url}
                    alt={image.name}
                    className="w-full h-[25vh] object-contain object-start border border-gray-400 rounded-lg p-1"
                    title={image}
                  />
                  <AiOutlineClose
                    onClick={() => handleDeleteFile(image?.name)}
                    className="absolute top-2 rounded-full right-2 bg-red-500 p-1 text-lg h-6 w-6 text-white"
                    role="button"
                    height={35}
                  />
                </div>
              ))}
              <div className="w-full h-[25vh] relative flex flex-col items-center justify-center rounded-lg border border-primaryBlue text-primaryBlue">
                <BsPlusCircleFill className="text-2xl" />
                <input
                  type="file"
                  className="w-full h-full top-0 left-0 absolute cursor-pointer z-10 opacity-0"
                  multiple
                  accept="image/*"
                  onChange={handleChangeFile}
                />
                <span>Add new </span>
              </div>
            </div>
          ) : (
            <img
              src={require("../../assets/images/upload_docs.png")}
              alt=""
              className="h-[20vh] w-full mx-auto object-contain object-center absolute"
            />
          )}
        </div>
        {images.length === 0 && (
          <p className="text-sm text-gray-500 font-semibold text-center">
            Upload from you files
          </p>
        )}

        <div className="flex w-full items-center gap-x-2 text-sm font-semibold">
          <button
            className={`blue_button_outline w-1/2 ${
              (uploadBillLoading || singleJobLoading) &&
              "cursor-not-allowed opacity-50"
            } `}
            onClick={() => handleCloseModal()}
            disabled={uploadBillLoading || singleJobLoading}
          >
            Cancel
          </button>
          <button
            className={`blue_button w-1/2 ${
              (uploadBillLoading || singleJobLoading) &&
              "cursor-not-allowed opacity-50"
            } `}
            disabled={uploadBillLoading || singleJobLoading}
            onClick={() => handleUploadFile()}
          >
            {uploadBillLoading ? "Uploading..." : "upload"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadBills;
