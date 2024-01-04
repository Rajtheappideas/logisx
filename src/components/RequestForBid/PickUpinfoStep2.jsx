import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { pickUpInfoStepTwo } from "../../yupValidations/validation";

const PickUpinfoStep2 = ({
  setStep,
  getValues,
  setValue,
  setActiveBidComponent,
  clearErrors,
  step,
}) => {
  const { equipment, endorsement, specification, weight } = getValues();

  const [equipments, setEquipments] = useState([]);
  const [endorsements, setEndorsements] = useState([]);

  const handleSelectEquipments = (val) => {
    if (equipments.includes(val)) {
      const filtered = equipments.filter((value) => value !== val);
      setEquipments(filtered);
    } else {
      setEquipments([...equipments, val]);
    }
  };

  const handleSelectEndorsement = (val) => {
    if (endorsements.includes(val)) {
      const filtered = endorsements.filter((value) => value !== val);
      setEndorsements(filtered);
    } else {
      setEndorsements([...endorsements, val]);
    }
  };

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    shouldFocusError: true,
    resolver: yupResolver(pickUpInfoStepTwo),
    defaultValues: {
      equipment: [],
      endorsement: [],
      specification,
      weight,
    },
  });

  const onSubmit = (data) => {
    const { specification ,weight} = data;
    toast.remove();
    if (equipments.length === 0)
      return toast.error("Select at least one equipments");
    setValue("equipment", equipments);
    setValue("endorsement", endorsements);
    setValue("specification", specification);
    setValue("weight", weight);
    setStep(3);
  };

  const endoresementList = [
    "Tank vehicle endoresement",
    "Hazardous materials endoresement",
    "Tank/HazMat combination endorsement",
    "Double/triples endorsement",
    "TWIC",
  ];

  const equipmentList = ["Dry van", "Refer", "Flat bed", "Power only"];

  useEffect(() => {
    if (equipment.length > 0) setEquipments(equipment);
    if (endorsement.length > 0) setEndorsements(endorsement);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <div className="grid md:grid-cols-2 md:gap-5 gap-3">
        {/* equipments */}
        <div>
          <p className="lg:text-2xl text-md text-primaryBlue font-semibold">
            Equipment needed
          </p>
          {equipmentList.map((item, i) => (
            <div key={i} className="flex pt-5">
              <label htmlFor={item} className="flex items-center">
                <input
                  type="checkbox"
                  defaultChecked={equipment.includes(item)}
                  className="space-y-5"
                  value={item}
                  onChange={(e) => handleSelectEquipments(e.target.value)}
                  id={item}
                />
                <p className="mx-2 lg:text-base text-sm font-semibold">
                  {item}
                </p>
              </label>
            </div>
          ))}
        </div>
        {/* Endorsement */}
        <div>
          <p className="lg:text-2xl text-md text-primaryBlue font-semibold">
            Endorsement
          </p>
          {endoresementList.map((item, i) => (
            <div key={i} className="flex pt-5">
              <label htmlFor={item} className="flex items-center">
                <input
                  type="checkbox"
                  defaultChecked={endorsement.includes(item)}
                  className="space-y-5"
                  value={item}
                  onChange={(e) => handleSelectEndorsement(e.target.value)}
                  id={item}
                />
                <p className="mx-2 lg:text-base text-sm font-semibold">
                  {item}
                </p>
              </label>
            </div>
          ))}
        </div>
      </div>

      <p className="text-textColorGray font-semibold lg:text-lg text-sm">
        Weight
      </p>
      <div className="w-full md:space-y-3 space-y-2">
        <input
          type="text"
          name="weight"
          className="input_field"
          {...register("weight")}
        />
        <span className="error">{errors?.weight?.message}</span>
      </div>
      {/* specification */}
      <p className="text-textColorGray font-semibold lg:text-lg text-sm">
        Specification
      </p>
      <textarea
        className="p-2 min-h-[6rem] max-h-[8rem] w-full focus:border-primaryBlue focus:border-2 text-sm rounded-lg border border-gray-400 outline-none"
        placeholder="Type Here..."
        {...register("specification")}
      ></textarea>
      <div className="w-full col-span-full flex items-center justify-between md:flex-row flex-col gap-2">
        <button
          onClick={() => setStep(step - 1)}
          type="button"
          className="blue_button w-1/4 uppercase"
        >
          back
        </button>

        <div>2 of 3</div>
        <button type="submit" className="blue_button w-1/4 uppercase">
          NEXT
        </button>
      </div>
    </form>
  );
};

export default PickUpinfoStep2;
