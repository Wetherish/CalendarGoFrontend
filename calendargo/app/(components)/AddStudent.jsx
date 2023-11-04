import React from "react";
import InputStudentCard from "./InputStudentCard";

const AddStudent = ({ isvisible, onClose }) => {
  if (!isvisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 
    backdrop-blur- flex justify-center items-center"
    >
      <div className="w-80 flex flex-col">
        <button
          className="text-white text-xl place-self-end "
          onClick={() => onClose()}
        >
          X
        </button>
        <div className=" p-2 rounded">
          <InputStudentCard />
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
