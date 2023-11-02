import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const PickUpinfoStep3 = ({
  setStep,
  getValues,
  setValue,
  setActiveBidComponent,
  clearErrors,
  step,
}) => {
  const { loadNotes, poNumber, refrenceNumber } = getValues();

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    shouldFocusError: true,
    defaultValues: {
      loadNotes,
      poNumber,
      refrenceNumber,
    },
  });

  const onSubmit = (data) => {
    const { loadNotes, poNumber, refrenceNumber } = data;
    toast.remove();
    if (!poNumber) return toast.error("P.O. Number is required");
    setValue("loadNotes", loadNotes);
    setValue("poNumber", poNumber);
    setValue("refrenceNumber", refrenceNumber);
    setStep(4);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full md:space-y-6 space-y-3">
      <p className="md:text-2xl text-lg text-primaryBlue font-semibold">
        Load notes
      </p>
      <textarea
        className="p-2 min-h-[6rem] max-h-[8rem] w-full focus:border-primaryBlue focus:border-2 text-sm rounded-lg border outline-none"
        placeholder="Type Here..."
        {...register("loadNotes")}
      ></textarea>
      <div className="grid md:grid-cols-2 md:gap-5 gap-3">
        <div className="w-full md:space-y-3 space-y-2">
          <label className="Label">P.O.number</label>
          <input
            className="input_field"
            type="text"
            placeholder="12345"
            name="poNumber"
            {...register("poNumber")}
          />
        </div>
        <div className="w-full md:space-y-3 space-y-2">
          <label className="Label">Reference number</label>
          <input
            className="input_field"
            type="text"
            placeholder="123-4567"
            name="refrenceNumber"
            {...register("refrenceNumber")}
          />
        </div>
      </div>
      <div className="w-full col-span-full flex items-center justify-between md:flex-row flex-col gap-2">
        <button
          onClick={() => setStep(step - 1)}
          type="button"
          className="blue_button w-1/4 uppercase"
        >
          back
        </button>

        <div>3 of 3</div>
        <button type="submit" className="blue_button w-1/4 uppercase">
          NEXT
        </button>
      </div>
    </form>
  );
};

export default PickUpinfoStep3;
