import React from "react";

function Pagination({pageNo,handlePrev,handleNext}) {
  return (
    <div className="bg-gray-300 p-1 mt-4 flex justify-center">
      <div className="px-8" onClick={handlePrev}>
        <i className="fa-solid fa-arrow-left"></i>
      </div>
      <div className="font-bold">
        {pageNo}
      </div>
      <div className="px-8" onClick={handleNext} >
        <i className="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
