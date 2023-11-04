import React from "react";
import TableStudent from "../(components)/TableStudent";

const page = () => {
  return (
    <div className=" bg-gradient-to-br from-sky-300 to-purple-300  ">
      <div className="relative">
        <div className="flex justify-center items-center shadow-lg p-4">
          <TableStudent />
        </div>
      </div>
    </div>
  );
};

export default page;
