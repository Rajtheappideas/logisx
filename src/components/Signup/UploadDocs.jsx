import React, { memo, useState } from "react";
import { RiCamera3Line, RiDeleteBin6Line } from "react-icons/ri";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { uploadDocsSchema } from "../../yupValidations/validation";

const UploadDocs = memo(({ setStep, setValue, getValues }) => {
  const { ein, totalDocks, dockNumbers, photo } = getValues();

  const [photos, setPhotos] = useState(photo.length > 0 ? photo : []);
  const [displayImages, setDisplayImages] = useState([]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    shouldFocusError: true,
    resolver: yupResolver(uploadDocsSchema),
    defaultValues: { ein, totalDocks, dockNumbers, photo: photos },
  });

  const onSubmit = (data) => {
    const { ein, totalDocks, dockNumbers } = data;
    if (photos.length === 0) {
      toast.remove();
      return toast.error("Upload loading docks photos");
    }
    setValue("ein", ein);
    setValue("totalDocks", totalDocks);
    setValue("dockNumbers", dockNumbers);
    setValue("photo", photos.flat(Infinity));
    setStep(5);
  };

  const handleChangeFile = (e) => {
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

  const handleDeleteFile = (name) => {
    const file = photos.flat(Infinity).filter((img) => img?.name !== name);
    const fileurl = displayImages
      .flat(Infinity)
      .filter((img) => img?.name !== name);
    setPhotos(file);
    setDisplayImages(fileurl);
  };

  useEffect(() => {
    let imageUrls = [];
    if (displayImages.length === 0) {
      for (const iterator of photos) {
        const objectUrl = window.URL.createObjectURL(iterator);
        imageUrls.push({
          url: objectUrl,
          name: iterator.name,
        });
      }
      setDisplayImages(imageUrls);
    }
  }, []);

  useEffect(() => {
    if (photos.length > 3) {
      return toast.error("max 3 pics");
    }
  }, [photos]);

  return (
    <div className="w-full">
      <p className="Title">Upload docs</p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-3">
        <div className="space-y-2">
          <label className=" Label">EIN number</label>
          <input
            className="input_field"
            type="text"
            placeholder="EIN number"
            {...register("ein")}
          />
          <span role="alert" className="error">
            {errors?.ein?.message}
          </span>
        </div>
        <div className="space-y-2">
          <label className=" Label">How many loading docks ?</label>
          <input
            className="input_field"
            type="number"
            placeholder="1"
            {...register("totalDocks")}
          />
          <span role="alert" className="error">
            {errors?.totalDocks?.message}
          </span>
        </div>

        <div className="space-y-2">
          <label className=" Label">Loading dock numbers</label>
          <input
            className="input_field"
            type="number"
            placeholder="Loading dock numbers"
            {...register("dockNumbers")}
          />
          <span role="alert" className="error">
            {errors?.dockNumbers?.message}
          </span>
        </div>
        <div className="space-y-2">
          <label className=" text-textColorGray lg:text-lg text-sm">
            Loading dock photos
          </label>
          <div className="w-full flex md:gap-3 gap-2 flex-wrap items-center justify-start">
            {/* input file */}
            <p className="lg:w-36 lg:h-24 w-28 h-20 border border-gray-400 relative flex items-center justify-center text-center rounded-lg bg-gray-200">
              <input
                className="inset-0 opacity-0 absolute"
                type="file"
                {...register("photo", {
                  onChange: (e) => {
                    handleChangeFile(e);
                  },
                })}
                multiple
                accept="image/*"
              />
              <RiCamera3Line className="text-2xl text-gray-500" />
            </p>
            {photos.length > 0 &&
              displayImages.flat(Infinity).map((image) => (
                <div
                  className="lg:w-36 lg:h-24 w-28 h-20 relative"
                  key={image.name}
                >
                  <img
                    src={image.url}
                    alt={image.name}
                    className="w-full h-full object-contain object-center border border-gray-400 rounded-lg p-1"
                  />
                  <span className="bg-black bg-opacity-30 w-full h-full inset-0 absolute z-0 rounded-lg"></span>
                  <RiDeleteBin6Line
                    onClick={() => handleDeleteFile(image.name)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl h-8 w-8 p-1 rounded-full bg-white cursor-pointer z-10 text-red-500"
                  />
                </div>
              ))}
          </div>
          <span role="alert" className="error">
            {errors?.photo?.message}
          </span>
        </div>
        {/* btns */}
        <div className="w-full flex justify-between items-center md:flex-row flex-col mt-5 gap-2">
          <button
            type="button"
            onClick={() => {
              setStep(3);
              // setPhotos([])
            }}
            className="blue_button md:w-auto"
          >
            BACK
          </button>
          <p className="text-xs md:text-base">4 to 4</p>
          <button type="submit" className="blue_button  md:w-auto">
            NEXT
          </button>
        </div>
      </form>
    </div>
  );
});

export default UploadDocs;
