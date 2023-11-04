import React from "react";
import ButtonPop from "./ButtonPop";

const TableStudent = () => {
  return (
    <div class="flex justify-center items-center h-screen">
      <div class="bg-gray-200 p-4 rounded-lg shadow-lg">
        <h1 class="text-center text-blue-900 font-bold">Student List</h1>
        <table class="table-auto">
          <thead>
            <tr>
              <th class="px-4 py-2">Student Name</th>
              <th class="px-4 py-2">Index</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-orange-100">
              <td class="border px-4 py-2">Bartek</td>
              <td class="border px-4 py-2">1</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Edit
                </button>
              </td>
              <td className="border px-4 py-2">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Remove
                </button>
              </td>
            </tr>
            <tr className="border-b hover:bg-orange-100">
              <td className="border px-4 py-2">Maciek</td>
              <td className="border px-4 py-2">2</td>
              <td className="border px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Edit
                </button>
              </td>
              <td className="border px-4 py-2">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                  Remove
                </button>
              </td>
            </tr>
          </tbody>
          <ButtonPop />
        </table>
      </div>
    </div>
  );
};

export default TableStudent;
