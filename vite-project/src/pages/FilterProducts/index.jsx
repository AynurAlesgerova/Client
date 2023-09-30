import { FormControl, MenuItem, Select } from "@mui/material";
import rightArrow from "../../assets/images/right-arrow.svg";
import { useState } from "react";
import Product from "../../pages/HomePage/components/Product";
import FilterSearch from "../FilterProducts/components/FilterSearch/index";
import productImage from "../../assets/images/product-image.svg";
import Gender from "./components/Gender";
const FilterProducts = () => {
  const [filter, setFilter] = useState("");
  return (
    <div className="container flex gap-5">
      <div className="filter-section w-1/4 mt-5">
        <div className="w-full flex-col">
          <div>
            <Gender filterName={"Cinsiyyət"} />
          </div>
          <div>
            <FilterSearch
              filterName={"Bədən ölçüsü"}
              options={sizes}
              placeholder={"Bədən ölçüsü axtar"}
            />
          </div>
          <div>
            <FilterSearch
              filterName={"Brendlər"}
              options={brands}
              placeholder={"Brend axtar"}
            />
          </div>
          <div>
            <FilterSearch
              filterName={"Boy ölçüsü"}
              options={lengths}
              placeholder={"Boy ölçüsü axtar"}
            />
          </div>
        </div>
      </div>
      <div className="products w-3/4  mt-5">
        <div className="flex justify-between">
          <div className="flex-col items-center justify-between">
            <div className="navigation-section flex gap-2 items-center text-sm mb-2">
              <p style={{ color: "#5D5F70" }}>Geyim</p>
              <img src={rightArrow} style={{ width: "15px", height: "10px" }} />
              <p className="font-semibold">Koynek</p>
            </div>
            <div className="flex gap-2 mb-4">
              <p className="font-semibold">Köynək</p>{" "}
              <p style={{ color: "#5D5F70" }}>üçün 1,877 nəticə</p>
            </div>
          </div>
          <div className="filter-btn">
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <p>Sırala</p>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="products flex flex-wrap gap-3">
          <Product
            width={"217px"}
            styled={false}
            brand={"Spykar"}
            name={"Lorem ipsum dolor sit amet consectetur  Dolores praesentium"}
            currentPrice={400.99}
            previousPrice={550.99}
            ratingCount={"3.7"}
            commentCount={"120"}
            image={productImage}
          />
          <Product
            width={"217px"}
            brand={"Spykar"}
            name={"Lorem ipsum dolor sit amet consectetur  Dolores praesentium"}
            currentPrice={400.99}
            previousPrice={550.99}
            ratingCount={"3.7"}
            commentCount={"120"}
            image={productImage}
          />
          <Product
            width={"217px"}
            brand={"Spykar"}
            name={"Lorem ipsum dolor sit amet consectetur  Dolores praesentium"}
            currentPrice={400.99}
            previousPrice={550.99}
            ratingCount={"3.7"}
            commentCount={"120"}
            image={productImage}
          />
          <Product
            width={"217px"}
            brand={"Spykar"}
            name={"Lorem ipsum dolor sit amet consectetur  Dolores praesentium"}
            currentPrice={400.99}
            previousPrice={550.99}
            ratingCount={"3.7"}
            commentCount={"120"}
            image={productImage}
          />
          <Product
            width={"217px"}
            brand={"Spykar"}
            name={"Lorem ipsum dolor sit amet consectetur  Dolores praesentium"}
            currentPrice={400.99}
            previousPrice={550.99}
            ratingCount={"3.7"}
            commentCount={"120"}
            image={productImage}
          />
          <Product
            width={"217px"}
            brand={"Spykar"}
            name={"Lorem ipsum dolor sit amet consectetur  Dolores praesentium"}
            currentPrice={400.99}
            previousPrice={550.99}
            ratingCount={"3.7"}
            commentCount={"120"}
            image={productImage}
          />
          <Product
            width={"217px"}
            brand={"Spykar"}
            name={"Lorem ipsum dolor sit amet consectetur  Dolores praesentium"}
            currentPrice={400.99}
            previousPrice={550.99}
            ratingCount={"3.7"}
            commentCount={"120"}
            image={productImage}
          />
          <Product
            width={"217px"}
            brand={"Spykar"}
            name={"Lorem ipsum dolor sit amet consectetur  Dolores praesentium"}
            currentPrice={400.99}
            previousPrice={550.99}
            ratingCount={"3.7"}
            commentCount={"120"}
            image={productImage}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;

const brands = [
  { title: "Nike" },
  { title: "Bershka" },
  { title: "Stradivarius" },
  { title: "Elle" },
  { title: "Mango" },
  { title: "Zara" },
];

const sizes = [
  { title: "XXS" },
  { title: "XS" },
  { title: "S" },
  { title: "M" },
  { title: "L" },
  { title: "XL" },
];

const lengths = [
  { title: "Midi" },
  { title: "Crop" },
  { title: "Uzun" },
  { title: "Qisa" },
];
