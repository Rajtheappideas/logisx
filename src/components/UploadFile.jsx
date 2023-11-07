import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useDropzone } from "react-dropzone";
import { AiOutlineClose } from "react-icons/ai";
import fileupload from "../assets/images/upload_icon.png";
import { useDispatch, useSelector } from "react-redux";
import { handleRequestMutlipleBid } from "../redux/BidSlice";
import useAbortApiCall from "../hooks/useAbortApiCall";

const UploadFile = ({
  setShowUploadFile,
  showUploadFile,
  setMutlipleBidFile,
  mutlipleBidFile,
}) => {
  const [loading, setLoading] = useState(false);

  const { createBidLoading } = useSelector((s) => s.root.bid);
  const { token } = useSelector((s) => s.root.auth);

  const dispatch = useDispatch();

  const { AbortControllerRef, abortApiCall } = useAbortApiCall();

  const uploadFileRef = useRef(null);

  const { getInputProps, getRootProps } = useDropzone({
    accept: {
      ".csv": [],
    },
    onDrop: (acceptedFiles) => {
      setMutlipleBidFile(acceptedFiles);
    },
    maxFiles: 1,
    onDropRejected: (rejection) => {
      toast.remove();
      if (rejection.length > 1) {
        toast.error("You can upload maximum 1 files.");
      } else {
        toast.error(rejection[0]?.errors[0]?.message);
      }
    },
  });

  const handleChangeFile = (e) => {
    setMutlipleBidFile(e.target.files[0]);
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
    setMutlipleBidFile(null);
  }

  const handleUploadFile = () => {
    if (mutlipleBidFile === null) return toast.error("Please select file");
    if (createBidLoading) return;
    const response = dispatch(
      handleRequestMutlipleBid({
        file: mutlipleBidFile[0],
        token,
        signal: AbortControllerRef,
      })
    );
    if (response) {
      response.then((res) => {
        if (res?.payload?.status === "success") {
          // toast.success("File uploaded successfully");
          toast(res?.payload?.message);
          setShowUploadFile(false);
          setMutlipleBidFile(null)
        }
      });
    }
  };

  useEffect(() => {
    return () => abortApiCall();
  }, []);
  
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
                setMutlipleBidFile(null);
              }}
            >
              <AiOutlineClose size={30} />
            </button>
          </div>
          {mutlipleBidFile !== null ? (
            <div className="w-full h-[70%] space-y-4">
              <div className="overflow-y-scroll scrollbar h-full space-y-2 w-full">
                <div className="bg-gray-100 border border-BorderGray w-full p-3 flex justify-between items-center text-black text-base">
                  <p>{mutlipleBidFile[0]?.name}</p>

                  <button
                    type="button"
                    onClick={() => setMutlipleBidFile(null)}
                  >
                    <AiOutlineClose height={25} />
                  </button>
                </div>
              </div>
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
                  accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
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
          {mutlipleBidFile !== null && (
            <button
              type="button"
              className={`w-full bg-primaryBlue font-bold text-white text-center h-10 rounded-lg ${
                createBidLoading && "cursor-not-allowed opacity-50"
              }`}
              onClick={() => handleUploadFile()}
              disabled={createBidLoading}
            >
              {createBidLoading ? "Uploading..." : "Upload"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadFile;
