import ProductInfo from "../../components/product-info";
import productImage from "../../assets/images/product-image.svg";
import computerImage from "../../assets/images/details-computer-image.svg";
import favIcon from "../../assets/images/fav-icon.svg";
import deliveryGreen from "../../assets/images/delivery-icon.svg";
import deliveryPurple from "../../assets/images/delivery-purple.svg";
import dropdownIcon from "../../assets/images/dropdown-icon.svg";
import plus from "../../assets/images/plus-icon.svg";
import minus from "../../assets/images/minus-icon.svg";
import BrandLogoWrapper from "../../components/BrandLogoWrapper/index";
import apple from "../../assets/images/apple.svg";
import rightIcon from '../../assets/images/right-arrow.svg'
import { useRef, useState } from "react";
const ProductDetails = () => {
  const [count, setCount] = useState(1);
  const [freeDelivery, setFreeDelivery] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const modelDivRefs = useRef([]);
  const memoryDivRefs = useRef([]);
  const colorDivRefs = useRef([]);

  const handleModelClick = (index) => {
    modelDivRefs.current.forEach((ref, i) => {
      if (i === index) {
        ref.style.borderColor = "#FF6400";
      } else {
        ref.style.borderColor = "#E4E4E4";
      }
    });
  };
  const handleMemoryClick = (index) => {
    memoryDivRefs.current.forEach((ref, i) => {
      if (i === index) {
        ref.style.borderColor = "#FF6400";
      } else {
        ref.style.borderColor = "#E4E4E4";
      }
    });
  };
  const handleColorClick = (index) => {
    colorDivRefs.current.forEach((ref, i) => {
      if (i === index) {
        ref.style.borderColor = "#FF6400";
      } else {
        ref.style.borderColor = "#E4E4E4";
      }
    });
  };
  return (
    <div className="product-details container flex-col items-center justify-center py-5  ">
      <div className="w-full flex items-center justify-center pb-12 border-b-2 border-slate-100">
        <div className="image-section w-1/2"></div>
        <div className="details-section w-1/2">
          <div className="product-info mb-4 border-b-2 border-slate-100">
            <ProductInfo
              styled={true}
              brand={"Spykar"}
              name={"iMac 24-inch (M1 Pro chip, 8GB RAM)"}
              currentPrice={400.99}
              previousPrice={550.99}
              ratingCount={"3.7"}
              commentCount={"120"}
              image={productImage}
            />
          </div>
          <div className="model-info flex-col mb-4">
            <p className="mb-4 flex gap-2 items-center">
              <p style={{ color: "#8F91A3" }} className="text-sm">
                Model:
              </p>{" "}
              <p className="font-semibold text-sm">7-Core GPU</p>
            </p>
            <div className="choices flex gap-2">
              <div
                ref={(el) => (modelDivRefs.current[0] = el)}
                onClick={() => handleModelClick(0)}
                className="py-2 px-3 border-2 rounded-md cursor-pointer text-xs flex items-center justify-center font-medium"
              >
                7-Core CPU
              </div>
              <div
                ref={(el) => (modelDivRefs.current[1] = el)}
                onClick={() => handleModelClick(1)}
                className="py-2 px-3 border-2 rounded-md cursor-pointer text-xs flex items-center justify-center font-medium"
              >
                8-Core CPU
              </div>
            </div>
          </div>
          <div className="memory-info flex-col mb-3">
            <p className="mb-4 flex gap-2 items-center">
              <p style={{ color: "#8F91A3" }} className="text-sm">
                Yaddaş:
              </p>{" "}
              <p className="font-semibold  text-sm">256GB</p>
            </p>
            <div className="choices flex gap-2">
              <div
                ref={(el) => (memoryDivRefs.current[0] = el)}
                onClick={() => handleMemoryClick(0)}
                className="py-2 px-3 border-2 rounded-md cursor-pointer text-xs flex items-center justify-center font-medium"
              >
                128 GB
              </div>
              <div
                ref={(el) => (memoryDivRefs.current[1] = el)}
                onClick={() => handleMemoryClick(1)}
                className="py-2 px-3 border-2 rounded-md cursor-pointer text-xs flex items-center justify-center font-medium"
              >
                256 GB
              </div>
              <div
                ref={(el) => (memoryDivRefs.current[2] = el)}
                onClick={() => handleMemoryClick(2)}
                className="py-2 px-3 border-2 rounded-md cursor-pointer text-xs flex items-center justify-center font-medium"
              >
                512 GB
              </div>
            </div>
          </div>
          <div className="photosForColor border-b-2 border-slate-100 pb-5">
            <p className="mb-4 flex gap-2 items-center">
              <p style={{ color: "#8F91A3" }} className="text-sm ">
                Rəng:
              </p>{" "}
              <p className="font-semibold  text-sm ">Mavi</p>
            </p>
            <div className="choices flex gap-3 ">
              <div
                ref={(el) => (colorDivRefs.current[0] = el)}
                onClick={() => handleColorClick(0)}
                className="px-3 py-2 border-2 rounded-lg cursor-pointer"
              >
                <img src={computerImage} />
              </div>
              <div
                ref={(el) => (colorDivRefs.current[1] = el)}
                onClick={() => handleColorClick(1)}
                className="px-3 py-2 border-2 rounded-lg cursor-pointer"
              >
                <img src={computerImage} />
              </div>
              <div
                ref={(el) => (colorDivRefs.current[2] = el)}
                onClick={() => handleColorClick(2)}
                className="px-3 py-2 border-2 rounded-lg cursor-pointer"
              >
                <img src={computerImage} />
              </div>
              <div
                ref={(el) => (colorDivRefs.current[3] = el)}
                onClick={() => handleColorClick(3)}
                className="px-3 py-2 border-2 rounded-lg cursor-pointer"
              >
                <img src={computerImage} />
              </div>
            </div>
          </div>
          <div className=" pb-5 flex gap-3 mt-4">
            <div className="py-1 px-2 border-2 flex gap-1 items-center justify-center rounded-lg">
              <img src={favIcon} style={{ width: "20px", height: "20px" }} />
              <p className="text-xs font-bold" style={{ color: "#F02F52" }}>
                (102)
              </p>
            </div>
            <div className="count flex shadow-sm border-2 rounded-md">
              <div
                className="decrease  py-1 px-2  border-r-2 cursor-pointer flex items-center justify-center"
                onClick={() => setCount((prev) => prev - 1)}
              >
                <img src={minus} style={{ width: "20px", height: "20px" }} />
              </div>
              <div className="px-3 flex items-center justify-center">
                {count}
              </div>
              <div
                className="increase py-1 px-2 border-l-2 cursor-pointer flex items-center justify-center"
                onClick={() => setCount((prev) => prev + 1)}
              >
                <img src={plus} style={{ width: "20px", height: "20px" }} />
              </div>
            </div>
            <div className="ml-3">
              <p className="font-semibold text-sm text-orange-500">
                Stokda cəmi 7 ədəd qaldı!
              </p>
              <p className="font-semibold text-sm">Bunu qaçırma.</p>
            </div>
          </div>
          <div className="buttons w-1/2 flex gap-3  w-full mt-4 mb-10">
            <div>
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-8 border border-amber-400 hover:border-transparent rounded-lg"
              >
                Zəng et
              </button>
            </div>
            <div>
              <button className="bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-2 px-8  border border-orange-400 hover:border-transparent rounded-lg">
                Sual ver
              </button>
            </div>
          </div>
          <div
            onClick={() => setDelivery((prev) => !prev)}
            className="delivery w-full flex items-center justify-between pr-6 border-b-2 border-slate-100 py-1 cursor-pointer mb-4"
          >
            <div className="flex gap-3">
              <img src={deliveryGreen} />
              <p className="font-semibold text-sm">
                24 saat ərzində çatdırılma
              </p>
            </div>
            <img src={dropdownIcon} />
          </div>
          {delivery && <div className="py-4">sdfghj</div>}
          <div
            onClick={() => setFreeDelivery((prev) => !prev)}
            className="free-delivery w-full flex items-center justify-between pr-6 border-b-2 border-slate-100 py-1 cursor-pointer"
          >
            <div className="flex gap-3">
              <img src={deliveryPurple} />
              <p className="font-semibold text-sm">Pulsuz çatdırılma</p>
            </div>
            <img src={dropdownIcon} />
          </div>
          {freeDelivery && <div className="py-4">hjkljhg</div>}
        </div>
      </div>
      <div className="seller-information pt-10">
        <h1 className="font-semibold text-xl">Satıcı məlumatı</h1>
        <div className="flex justify-between items-center">
          <BrandLogoWrapper
            logo={apple}
            brandName={"Apple"}
            ratingCount={"9.7"}
            followerCount={"30.9"}
          />
          <div className="flex gap-10 items-center">
            <button className="flex items-center justify-center  w-1/4 bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-2 px-6  border border-orange-400 hover:border-transparent rounded-lg">
              İzlə
            </button>
            <div className="flex items-center gap-3 w-3/4">
              <p className="font-semibold">Mağazaya bax</p>
              <img src={rightIcon}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
