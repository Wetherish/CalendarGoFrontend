"use client";

import AddStudent from "./AddStudent";
import React, { Fragment, useState } from "react";

const ButtonPop = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <div>
        <button
          className="bg-green-500 hover:bg-green-700 
        text-white font-bold py-2 px-4 rounded-lg 
        shadow-md transition-transform transform hover:scale-105"
          onClick={() => setShowModal(true)}
        >
          Add student
        </button>
      </div>{" "}
      <AddStudent isvisible={showModal} onClose={() => setShowModal(false)} />
    </Fragment>
  );
};

export default ButtonPop;
