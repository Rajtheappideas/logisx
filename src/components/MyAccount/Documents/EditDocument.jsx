import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { GoArrowLeft } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import useAbortApiCall from "../../../hooks/useAbortApiCall";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-hot-toast";
import { imageUrl } from "../../../Baseurl";
import { RiCamera3Line, RiDeleteBin6Line } from "react-icons/ri";
import {
  handleDeleteDockPhoto,
  handleDeleteDockPhotos,
  handleEditDocuments,
} from "../../../redux/DocumentSlice";

const EditDocument = ({ setShowEditDocument }) => {
  const [photos, setPhotos] = useState([]);
  const [displayImages, setDisplayImages] = useState([]);

  const { documents, loading, deleteLoading } = useSelector(
    (state) => state.root.documents
  );
  const { token } = useSelector((state) => state.root.auth);

  const { AbortControllerRef, abortApiCall } = useAbortApiCall();

  const dispatch = useDispatch();

  const editDocumentSchema = yup.object({
    ein: yup
      .string()
      .required("ein is required")
      .max(20, "20 Max limit reached")
      .min(2, "minimum two digits required")
      .typeError("Only characters allowed")
      .trim(),
    totalDocks: yup
      .string()
      .required("totaldocks is required")
      .matches(/[0-9]{1,3}$/, "Max 3 digit allowed ")
      .typeError("totaldocks is required, only numbers allowed"),
    dockNumbers: yup
      .string()
      .required("totaldocks is required")
      .max(10, "only 10 digit number allowed")
      .min(1, "add atleast 1 digit number")
      .matches(/[0-9]{1,10}$/, "Max 10 digit allowed ")
      .typeError("totaldocks is required, only numbers allowed"),
    photo: yup
      .mixed()
      .required("photo is required")
      .test("is-valid-size", "Max allowed size is 1 MB", (value) => {
        for (const item of value) {
          return item?.size < 1_000_000;
        }
      })
      .test("is_valid_type", "Not valid image type", (value) => {
        for (const item of value) {
          return item.name.includes("png", "jpg", "jpeg");
        }
      })
      .typeError("Photos is required."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(editDocumentSchema),
    defaultValues: {
      ein: documents?.ein,
      photo: photos,
      totalDocks: documents?.totalDocks,
      dockNumbers: documents?.dockNumbers,
    },
  });

  const onSubmit = (data) => {
    if (loading || deleteLoading) return true;

    const { ein, totalDocks, dockNumbers } = data;
    if (!isDirty) return true;

    const response = dispatch(
      handleEditDocuments({
        ein,
        totalDocks,
        dockNumbers,
        photo: photos.flat(Infinity),
        token,
        signal: AbortControllerRef,
      })
    );
    if (response) {
      response.then((res) => {
        if (res.payload.status === "success") {
          toast.success("documents edited successfully.");
          setDisplayImages([]);
          setPhotos([]);
        } else if (res.payload.status === "error") {
          toast.error(res.payload.message);
        }
      });
    }
  };

  const handleDetetePhoto = (pic) => {
    if (loading || deleteLoading) return true;
    toast.loading("Deleting...");
    const remainingPhotos = documents?.dockPhotos.filter(
      (photo) => photo !== pic
    );
    const deletedPhoto = documents?.dockPhotos.find((photo) => photo === pic);
    const response = dispatch(
      handleDeleteDockPhoto({
        photo: deletedPhoto,
        token,
        signal: AbortControllerRef,
      })
    );
    if (response) {
      response.then((res) => {
        if (res.payload.status === "success") {
          toast.remove();
          toast.success("Photo deleted successfully.");
          dispatch(handleDeleteDockPhotos(remainingPhotos));
        } else if (res.payload.status === "error") {
          toast.remove();
          toast.error(res.payload.message);
        }
      });
    }
  };

  const handleDeleteFile = (name) => {
    const file = photos.flat(Infinity).filter((img) => img?.name !== name);
    const fileurl = displayImages
      .flat(Infinity)
      .filter((img) => img?.name !== name);
    setPhotos(file);
    setDisplayImages(fileurl);
  };

  const handleChangeFile = (e) => {
    if (loading || deleteLoading) return true;

    if (photos.flat(Infinity).length > 2) {
      return toast.error("Max 3 photos can upload.");
    } else {
      const existingFile = photos
        .flat(Infinity)
        .filter((image) =>
          Object.values(e.target.files).some((img) => img.name === image.name)
        );

      if (existingFile.length > 0) {
        toast.error("File is already added!!!");
      } else {
        if (
          Object.values(e.target.files).flat(Infinity).length > 3 ||
          Object.values(e.target.files).flat(Infinity).length +
            photos.flat(Infinity).length >
            3 ||
          parseFloat(documents.dockPhotos.length) +
            Object.values(e.target.files).flat(Infinity).length >
            3
        ) {
          return toast.error("you can upload 3 images maximum!!!");
        } else {
          setPhotos([
            ...photos.flat(Infinity),
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
      }
    }
  };

  useEffect(() => {
    return () => {
      abortApiCall();
      setDisplayImages([]);
      setPhotos([]);
    };
  }, []);

  return (
    <div className="bg-bgLight w-full min-h-screen">
      <div className="bg-white md:p-4 p-2 rounded-2xl w-full min-h-screen md:space-y-4 space-y-2">
        <p
          onClick={() => setShowEditDocument(false)}
          className="md:text-2xl text-md  text-primaryBlue font-semibold flex items-center cursor-pointer"
        >
          <GoArrowLeft className="inline-block mr-2" />
          Edit Document
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid md:grid-cols-2 place-items-start items-start gap-3 md:gap-5"
        >
          {/* ein */}
          <div className="w-full md:space-y-3 space-y-2">
            <label className=" Label">EIN number</label>
            <input {...register("ein")} className="input_field" type="text" />
            <span role="alert" className="error">
              {errors?.ein?.message}
            </span>
          </div>
          {/* total docks */}
          <div className="w-full md:space-y-3 space-y-2">
            <label className=" Label">How many loading docks ?</label>
            <input
              className="input_field"
              type="number"
              {...register("totalDocks")}
            />
            <span role="alert" className="error">
              {errors?.totalDocks?.message}
            </span>
          </div>
          {/* docks numbers */}
          <div className="w-full md:space-y-3 space-y-2">
            <label className=" Label">Loading dock number</label>
            <input
              className="input_field"
              type="number"
              {...register("dockNumbers")}
            />
            <span role="alert" className="error">
              {errors?.dockNumbers?.message}
            </span>
          </div>
          {/* docks photos */}
          <div className="space-y-2 md:col-span-2">
            <p className="text-gray-500 text-sm font-semibold">Photos</p>
            <div className="flex w-full items-center justify-start md:gap-3 gap-2 flex-wrap">
              {/* input */}
              <p className="md:w-48 w-28 md:h-32 h-16 border border-gray-400 relative flex items-center justify-center text-center rounded-lg bg-gray-200">
                <input
                  className={`inset-0 opacity-0 absolute ${
                    loading || (deleteLoading && "cursor-not-allowed")
                  } `}
                  type="file"
                  {...register("photo", {
                    onChange: (e) => {
                      handleChangeFile(e);
                    },
                  })}
                  multiple
                  accept="image/*"
                  disabled={loading || deleteLoading}
                />
                <RiCamera3Line className="md:text-3xl text-2xl text-gray-500" />
              </p>
              {/* upload photo */}
              {photos.length > 0 &&
                displayImages.flat(Infinity).map((image) => (
                  <div
                    className={`relative md:w-48 w-28 md:h-32 h-16 ${
                      loading || (deleteLoading && "cursor-not-allowed")
                    } `}
                    key={image.name}
                  >
                    <img
                      src={image.url}
                      alt={image.name}
                      className="w-full h-full object-contain object-center border border-gray-400 rounded-lg p-1"
                      title={image}
                    />
                    <span className="bg-black bg-opacity-20 w-full h-full inset-0 absolute z-0 rounded-lg"></span>
                    <RiDeleteBin6Line
                      onClick={() => handleDeleteFile(image.name)}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl h-8 w-8 p-1 rounded-full bg-white cursor-pointer z-10 text-red-500"
                    />
                  </div>
                ))}

              {/* documents photos */}
              {documents?.dockPhotos.length > 0 &&
              documents?.dockPhotos !== undefined
                ? documents?.dockPhotos.map((photo) => (
                    <div
                      key={photo}
                      className={`relative md:w-48 w-28 md:h-32 h-16 ${
                        loading || (deleteLoading && "cursor-not-allowed")
                      } `}
                    >
                      <img
                        className=" rounded-lg  object-contain object-center h-full w-full"
                        src={imageUrl.concat(photo)}
                        alt={photo}
                      />
                      <span className="bg-black bg-opacity-20 w-full h-full inset-0 absolute z-0 rounded-lg"></span>
                      <RiDeleteBin6Line
                        onClick={() => handleDetetePhoto(photo)}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl h-8 w-8 p-1 rounded-full bg-white cursor-pointer z-10 text-red-500"
                      />
                    </div>
                  ))
                : null}
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="blue_button uppercase"
          >
            {loading ? "saving..." : "save"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditDocument;
