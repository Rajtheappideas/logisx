import React, { useState } from "react";
import EditDocument from "./EditDocument";

const Document = () => {
  const [showEditDocument, setShowEditDocument] = useState(false);

  return (
    <div className="min-h-screen">
      {showEditDocument ? (
        <EditDocument setShowEditDocument={setShowEditDocument} />
      ) : (
        <div className="bg-bgLight w-full h-full">
          <div className="bg-white md:p-4 p-2 rounded-2xl w-full min-h-screen md:space-y-4 space-y-2">
            <p className="md:text-2xl text-md  text-primaryBlue font-semibold">
              Documents
            </p>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 md:gap-5 gap-3">
              <div className="w-full border border-[#B8D2E0] rounded-xl md:p-3 p-2 space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-primaryBlue text-sm font-semibold">
                      EIN number
                    </p>
                    <p className="font-semibold">123456</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowEditDocument(true)}
                    className="bg-primaryBlue uppercase text-white font-medium px-5 py-1 rounded-lg hover:bg-primaryBlue/80 active:scale-95 transition"
                  >
                    Edit
                  </button>
                </div>
                <div>
                  <p className="text-primaryBlue text-sm font-semibold">
                    Loading docks
                  </p>
                  <p className="font-semibold">1</p>
                </div>
              </div>
              <div className="w-full border border-[#B8D2E0] rounded-xl md:p-3 p-2 space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-primaryBlue text-sm font-semibold">
                      EIN number
                    </p>
                    <p className="font-semibold">123456</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowEditDocument(true)}
                    className="bg-primaryBlue uppercase text-white font-medium px-5 py-1 rounded-lg hover:bg-primaryBlue/80 active:scale-95 transition"
                  >
                    Edit
                  </button>
                </div>
                <div>
                  <p className="text-primaryBlue text-sm font-semibold">
                    Loading docks
                  </p>
                  <p className="font-semibold">1</p>
                </div>
              </div>
              <div className="w-full border border-[#B8D2E0] rounded-xl md:p-3 p-2 space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-primaryBlue text-sm font-semibold">
                      EIN number
                    </p>
                    <p className="font-semibold">123456</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowEditDocument(true)}
                    className="bg-primaryBlue uppercase text-white font-medium px-5 py-1 rounded-lg hover:bg-primaryBlue/80 active:scale-95 transition"
                  >
                    Edit
                  </button>
                </div>
                <div>
                  <p className="text-primaryBlue text-sm font-semibold">
                    Loading docks
                  </p>
                  <p className="font-semibold">1</p>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Document;
