import React from "react";

const InputStudentCard = () => {
  return (
    <div
      className=" flex-shrink max-w-sm mx-auto p-4 bg-sky-100  
    shadow-md rounded-lg"
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          <div>Student Name</div>
        </label>
        <div className=" bg-white border border-gray-300 rounded-md p-2 shadow-md transition-transform transform hover:scale-105">
          <textarea
            name="comments"
            className="w-full h-full bg-transparent resize-none outline-none text-sm placeholder-gray-500 transition-transform transform scale-95 focus:border-blue-500"
            placeholder="Your text here"
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
      >
        Submit
      </button>
    </div>
  );
};

export default InputStudentCard;
