import React, { useEffect, useState } from "react";
import { Checkbox } from "@mui/material";
import dropdownIcon from "../../../../assets/images/dropdown-icon.svg";
import searchIcon from "../../../../assets/images/search-icon.svg";

export default function CheckboxesTags({ filterName, options, placeholder }) {
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
//   const [items, setItems] = useState([]);
  const filteredOptions = options.filter((el) =>
    el.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleOptionSelect = (option) => {
    if (selectedOptions.some((selected) => selected.title === option.title)) {
      // If the option is already selected, remove it
      setSelectedOptions(
        selectedOptions.filter((selected) => selected.title !== option.title)
      );
    } else {
      // If the option is not selected, add it
      setSelectedOptions([...selectedOptions, option]);
    }
    setSearchText("");
  };

//   const handleRemoveOption = (option) => {
//     setSelectedOptions(
//       selectedOptions.filter((selected) => selected.title !== option.title)
//     );
//   };

//   useEffect(() => {
//     const arr = [];
//     selectedOptions.map((el) => {
//       arr.push(el.title);
//     });
//     setItems(arr)
//   }, [selectedOptions]);

//   console.log(items);

console.log(selectedOptions);

  
  return (
    <div className="aa border-t-2 border-l-2 border-r-2 border-gray-100 py-4 flex-col items-center ">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="delivery w-full flex items-center justify-between px-4   cursor-pointer "
      >
        <div className="flex gap-3">
          <p className="font-semibold text-sm">{filterName}</p>
        </div>
        <img src={dropdownIcon} alt="Dropdown Icon" />
      </div>
      {open && (
        <div className="px-5 mt-3 flex-col">
          <div className="flex gap-3 mb-3 border-gray-100 border-2 py-2 px-2 rounded-md">
            <img src={searchIcon} alt="Search Icon" />
            <input
              placeholder={placeholder}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <div className="list px-2">
            {filteredOptions.map((el) => (
              <div
                className="flex items-center mb-1"
                key={el.title}
                onClick={() => handleOptionSelect(el)}
              >
                <Checkbox
                  checked={selectedOptions.some(
                    (selected) => selected.title === el.title
                  )}
                />
                <p>{el.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* <div className="px-2 mt-3">
        {selectedOptions.map((option) => (
          <span
            key={option.title}
            className="px-2 py-1 bg-gray-200 rounded-full text-sm mr-2"
          >
            {option.title}
            <button
              className="ml-1 text-red-500"
              onClick={() => handleRemoveOption(option)}
            >
              ×
            </button>
          </span>
        ))}
      </div> */}
    </div>
  );
}
