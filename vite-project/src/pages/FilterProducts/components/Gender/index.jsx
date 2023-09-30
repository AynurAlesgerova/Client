import dropdownIcon from "../../../../assets/images/dropdown-icon.svg";
import { useState } from "react";
import { Checkbox } from "@mui/material";

const Gender = ({ filterName }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t-2 border-l-2 border-r-2 border-gray-100 py-4 flex-col items-center ">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="delivery w-full flex items-center justify-between px-4 cursor-pointer "
      >
        <div className="flex gap-3">
          <p className="font-semibold text-sm">{filterName}</p>
        </div>
        <img src={dropdownIcon} />
      </div>
      {open && (
        <div className="mt-4">
          <div className="flex items-center  px-3">
            <Checkbox />
            <p>Qadin</p>
          </div>
          <div className="flex items-center  px-3">
            <Checkbox />
            <p>Kişi</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gender;
