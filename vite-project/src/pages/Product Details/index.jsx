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
import rightIcon from "../../assets/images/right-arrow.svg";
import locationIcon from "../../assets/images/location-icon.svg";
import messageIcon from "../../assets/images/message-icon.svg";
import startIcon from "../../assets/images/star-icon.svg";
import starts from "../../assets/images/starts.svg";
import { useRef, useState } from "react";
import icon from "../../assets/images/computer.svg";
import explaintIcon from "../../assets/images/explaint-icon.svg";
import agreeIcon from "../../assets/images/agree-icon.svg";
import appleLogo from "../../assets/images/apple.svg";
import blueMarkIcon from "../../assets/images/blue mark.svg";

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
        <div className="image-section w-1/2">{/* //////// */}</div>
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
        <h1 className="font-semibold text-xl mb-6">Satıcı məlumatı</h1>
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
            <div className="flex items-center gap-3 w-3/4 cursor-pointer">
              <p className="font-semibold">Mağazaya bax</p>
              <img src={rightIcon} />
            </div>
          </div>
        </div>
        <div className="flex mt-3">
          <div className="location flex gap-4 items-center mr-6">
            <img src={locationIcon} />
            <div className="flex-col items-center justify-center">
              <p className="font-semibold text-sm">Bakı</p>
              <p style={{ color: "#5D5F70" }} className="text-sm">
                26a Neftçilər Ave, 1000 Azərbaycan
              </p>
            </div>
          </div>
          <div className="questions flex items-center gap-4 w-1/2 cursor-pointer">
            <img src={messageIcon} />
            <div>
              <p className="font-semibold text-sm">Satıcı sualları</p>
              <p style={{ color: "#5D5F70" }} className="text-sm">
                170 Sual
              </p>
            </div>
            <img src={rightIcon} />
          </div>
        </div>
        <div className="features mt-4 px-4 py-10 border-2 border-slate-100">
          <div className="flex flex-wrap gap-6 pl-10">
            <div
              className="flex items-center justify-between border-2 border-gray-200 py-2.5 px-4 rounded-md"
              style={{ width: "550px" }}
            >
              <p style={{ color: "#5D5F70" }} className="text-sm">
                Brend:
              </p>
              <p className="text-sm font-semibold">Apple</p>
            </div>
            <div
              className="flex items-center justify-between border-2 border-gray-200 py-2.5 px-4 rounded-md"
              style={{ width: "550px" }}
            >
              <p style={{ color: "#5D5F70" }} className="text-sm">
                Prosessor:
              </p>
              <p className="text-sm font-semibold">Apple M1</p>
            </div>
            <div
              className="flex items-center justify-between border-2 border-gray-200 py-2.5 px-4 rounded-md"
              style={{ width: "550px" }}
            >
              <p style={{ color: "#5D5F70" }} className="text-sm">
                Rəng:
              </p>
              <p className="text-sm font-semibold">Mavi</p>
            </div>
            <div
              className="flex items-center justify-between border-2 border-gray-200 py-2.5 px-4 rounded-md"
              style={{ width: "550px" }}
            >
              <p style={{ color: "#5D5F70" }} className="text-sm">
                Məhsul növü:
              </p>
              <p className="text-sm font-semibold">Kompüter</p>
            </div>
            <div
              className="flex items-center justify-between border-2 border-gray-200 py-2.5 px-4 rounded-md"
              style={{ width: "550px" }}
            >
              <p style={{ color: "#5D5F70" }} className="text-sm">
                Kateqoriya:
              </p>
              <p className="text-sm font-semibold">Elektronika</p>
            </div>
            <div
              className="flex items-center justify-between border-2 border-gray-200 py-2.5 px-4 rounded-md"
              style={{ width: "550px" }}
            >
              <p style={{ color: "#5D5F70" }} className="text-sm">
                Yaddaş:
              </p>
              <p className="text-sm font-semibold">256GB</p>
            </div>
            <div
              className="flex items-center justify-between border-2 border-gray-200 py-2.5 px-4 rounded-md"
              style={{ width: "550px" }}
            >
              <p style={{ color: "#5D5F70" }} className="text-sm">
                Zəmanət müddəti:
              </p>
              <p className="text-sm font-semibold">8 il</p>
            </div>
            <div
              className="flex items-center justify-between border-2 border-gray-200 py-2.5 px-4 rounded-md"
              style={{ width: "550px" }}
            >
              <p style={{ color: "#5D5F70" }} className="text-sm">
                İstehsalçı ölkə:
              </p>
              <p className="text-sm font-semibold">America, China</p>
            </div>
            <div
              className="flex items-center justify-between border-2 border-gray-200 py-2.5 px-4 rounded-md"
              style={{ width: "550px" }}
            >
              <p style={{ color: "#5D5F70" }} className="text-sm">
                Kamera:
              </p>
              <p className="text-sm font-semibold">Camera facetime</p>
            </div>
            <div
              className="flex items-center justify-between border-2 border-gray-200 py-2.5 px-4 rounded-md"
              style={{ width: "550px" }}
            >
              <p style={{ color: "#5D5F70" }} className="text-sm">
                Audio:
              </p>
              <p className="text-sm font-semibold">Dolby Atmos</p>
            </div>
            <div
              className="flex items-center justify-between border-2 border-gray-200 py-2.5 px-4 rounded-md"
              style={{ width: "550px" }}
            >
              <p style={{ color: "#5D5F70" }} className="text-sm">
                Keyboard:
              </p>
              <p className="text-sm font-semibold">Apple magic keyboard</p>
            </div>
            <div
              className="flex items-center justify-between border-2 border-gray-200 py-2.5 px-4 rounded-md"
              style={{ width: "550px" }}
            >
              <p style={{ color: "#5D5F70" }} className="text-sm">
                Wireless:
              </p>
              <p className="text-sm font-semibold">Wifi, Bluetooth</p>
            </div>
            <div
              className="flex items-center justify-between border-2 border-gray-200 py-2.5 px-4 rounded-md"
              style={{ width: "550px" }}
            >
              <p style={{ color: "#5D5F70" }} className="text-sm">
                Port:
              </p>
              <p className="text-sm font-semibold">Display port</p>
            </div>
          </div>
        </div>
      </div>
      <div className="rating-rewiews flex-col border-2 border-gray-100 ounded-md px-8 py-10">
        <p className="font-semibold text-xl mb-8 ">Reytinq və baxışlar</p>
        <div className="flex gap-10">
          <div className="rating-count border-2 border-gray-100 w-1/6">
            <p className="count">4.9</p>
          </div>
          <div className="messages w-4/5 flex-col">
            <div className="mb-6 flex gap-3">
              <div className="py-1 px-4 border-2 border-gray-100 rounded-md font-medium text-sm cursor-pointer">
                Bütün rəylər
              </div>
              <div className="py-1 px-4 border-2 border-gray-100 rounded-md font-medium text-sm cursor-pointer">
                Şəkilli rəylər (1,788)
              </div>
              <div className="flex gap-1 items-center justify-center border-2 border-gray-100 rounded-md px-2 cursor-pointer">
                <img src={startIcon} />
                <p className="font-medium text-sm">1</p>
              </div>
              <div className="flex gap-1 items-center justify-center border-2 border-gray-100 rounded-md px-2 cursor-pointer">
                <img src={startIcon} />
                <p className="font-medium text-sm">2</p>
              </div>
              <div className="flex gap-1 items-center justify-center border-2 border-gray-100 rounded-md px-2 cursor-pointer">
                <img src={startIcon} />
                <p className="font-medium text-sm">3</p>
              </div>
              <div className="flex gap-1 items-center justify-center border-2 border-gray-100 rounded-md px-2 cursor-pointer">
                <img src={startIcon} />
                <p className="font-medium text-sm">4</p>
              </div>
              <div className="flex gap-1 items-center justify-center border-2 border-gray-100 rounded-md px-2 cursor-pointer">
                <img src={startIcon} />
                <p className="font-medium text-sm">5</p>
              </div>
            </div>
            <div>
              <p className="font-semibold text-md pl-2">Şəkilli rəylər</p>
              <div className="photos flex gap-4" style={{ height: "130px" }}>
                <div className="photo rounded-md h-full ">
                  <img className="h-full" src={icon} />
                </div>
                <div className="photo rounded-md h-full ">
                  <img className="h-full" src={icon} />
                </div>
                <div className="photo rounded-md h-full ">
                  <img className="h-full" src={icon} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="filter-message my-6">
          <p className="font-semibold text-md ">Dəyərləndirmələr</p>
          {/* dropdown */}
        </div>
        <div className="messages flex-col">
          <div className="message mb-8">
            <div className="flex gap-3">
              <div
                className="profile-photo flex items-center justift-center rounded-full px-2 py-2 bg-black "
                style={{ width: "44px", height: "44px" }}
              >
                <div className="flex gap-1 text-white">
                  <p>G</p>
                  <p>A</p>
                </div>
              </div>
              <div className="flex-col">
                <div className="name flex gap-2">
                  <p className="font-semibold text-sm">G*****</p>
                  <p className="font-semibold text-sm">A*****</p>
                </div>
                <div className="flex gap-2">
                  <div className="date font-semibold text-sm">12 dekabr</div>
                  <div className="location font-semibold text-sm">Gəncə</div>
                </div>
              </div>
            </div>
            <div className="rating-starts my-3">
              <img src={starts} />
            </div>
            <div className="content w-3/4">
              <p className="font-semibold text-sm ">
                Mən onu sevirəm, qablaşdırma mükəmməldir
              </p>
              <p className="font-normal text-sm">
                Aldığım kimi evdə idi, bu gün geyinmək istədim, yan tərəfdəki
                etiket olan yer, deşikdi, heyf. 184 yaşım M. L ölçü böyük olur.
                Yaxşı məhsuldur, amma bir az nazikdir, ondan başqa gözəldir.
              </p>
            </div>
            <div className="buttons flex gap-3 mt-3">
              <div className="agree-btn py-1 px-2 border-2 border-gray-100 flex gap-1 items-center justify-center cursor-pointer">
                <img
                  src={agreeIcon}
                  style={{ width: "20px", height: "20px" }}
                />
                <p className="text-sm font-semibold">24</p>
              </div>
              <div className="explaint-btn py-1 px-2 border-2 border-gray-100 flex gap-1 items-center justify-center cursor-pointer">
                <img
                  src={explaintIcon}
                  style={{ width: "20px", height: "20px" }}
                />
                <p className="text-sm font-semibold">Şikayət</p>
              </div>
            </div>
          </div>
          <div className="message mb-8">
            <div className="flex gap-3">
              <div
                className="profile-photo flex items-center justift-center rounded-full px-2 py-2 bg-black "
                style={{ width: "44px", height: "44px" }}
              >
                <div className="flex gap-1 text-white">
                  <p>G</p>
                  <p>A</p>
                </div>
              </div>
              <div className="flex-col">
                <div className="name flex gap-2">
                  <p className="font-semibold text-sm">G*****</p>
                  <p className="font-semibold text-sm">A*****</p>
                </div>
                <div className="flex gap-2">
                  <div className="date font-semibold text-sm">12 dekabr</div>
                  <div className="location font-semibold text-sm">Gəncə</div>
                </div>
              </div>
            </div>
            <div className="rating-starts my-3">
              <img src={starts} />
            </div>
            <div className="content w-3/4">
              <p className="font-semibold text-sm ">
                Mən onu sevirəm, qablaşdırma mükəmməldir
              </p>
              <p className="font-normal text-sm">
                Aldığım kimi evdə idi, bu gün geyinmək istədim, yan tərəfdəki
                etiket olan yer, deşikdi, heyf. 184 yaşım M. L ölçü böyük olur.
                Yaxşı məhsuldur, amma bir az nazikdir, ondan başqa gözəldir.
              </p>
            </div>
            <div className="buttons flex gap-3 mt-3">
              <div className="agree-btn py-1 px-2 border-2 border-gray-100 flex gap-1 items-center justify-center">
                <img
                  src={agreeIcon}
                  style={{ width: "20px", height: "20px" }}
                />
                <p className="text-sm font-semibold">24</p>
              </div>
              <div className="explaint-btn py-1 px-2 border-2 border-gray-100 flex gap-1 items-center justify-center">
                <img
                  src={explaintIcon}
                  style={{ width: "20px", height: "20px" }}
                />
                <p className="text-sm font-semibold">Şikayət</p>
              </div>
            </div>
          </div>
          <div className="message mb-8">
            <div className="flex gap-3">
              <div
                className="profile-photo flex items-center justift-center rounded-full px-2 py-2 bg-black "
                style={{ width: "44px", height: "44px" }}
              >
                <div className="flex gap-1 text-white">
                  <p>G</p>
                  <p>A</p>
                </div>
              </div>
              <div className="flex-col">
                <div className="name flex gap-2">
                  <p className="font-semibold text-sm">G*****</p>
                  <p className="font-semibold text-sm">A*****</p>
                </div>
                <div className="flex gap-2">
                  <div className="date font-semibold text-sm">12 dekabr</div>
                  <div className="location font-semibold text-sm">Gəncə</div>
                </div>
              </div>
            </div>
            <div className="rating-starts my-3">
              <img src={starts} />
            </div>
            <div className="content w-3/4">
              <p className="font-semibold text-sm ">
                Mən onu sevirəm, qablaşdırma mükəmməldir
              </p>
              <p className="font-normal text-sm">
                Aldığım kimi evdə idi, bu gün geyinmək istədim, yan tərəfdəki
                etiket olan yer, deşikdi, heyf. 184 yaşım M. L ölçü böyük olur.
                Yaxşı məhsuldur, amma bir az nazikdir, ondan başqa gözəldir.
              </p>
            </div>
            <div className="buttons flex gap-3 mt-3">
              <div className="agree-btn py-1 px-2 border-2 border-gray-100 flex gap-1 items-center justify-center">
                <img
                  src={agreeIcon}
                  style={{ width: "20px", height: "20px" }}
                />
                <p className="text-sm font-semibold">24</p>
              </div>
              <div className="explaint-btn py-1 px-2 border-2 border-gray-100 flex gap-1 items-center justify-center">
                <img
                  src={explaintIcon}
                  style={{ width: "20px", height: "20px" }}
                />
                <p className="text-sm font-semibold">Şikayət</p>
              </div>
            </div>
          </div>
        </div>
        <div className="see-all mt-12">
          <p className="text-orange-500 font-semibold text-md underline cursor-pointer">
            Hamısını gör
          </p>
        </div>
      </div>
      <div className="question-answers border-2 border-gray-100 ounded-md px-8 py-10">
        <p className="font-semibold text-xl mb-8">Sual-cavablar</p>
        <div className="questions">
          <div className="question mb-5">
            <div className="user flex gap-3 mb-2">
              <div
                className="profile-photo flex items-center justift-center rounded-full px-2 py-2 bg-black "
                style={{ width: "44px", height: "44px" }}
              >
                <div className="flex gap-1 text-white">
                  <p>G</p>
                  <p>A</p>
                </div>
              </div>
              <div className="flex-col">
                <div className="name flex gap-2">
                  <p className="font-semibold text-sm">G*****</p>
                  <p className="font-semibold text-sm">A*****</p>
                </div>
                <div className="flex gap-2">
                  <div className="date font-semibold text-sm">12 dekabr</div>
                  <div className="location font-semibold text-sm">Gəncə</div>
                </div>
              </div>
            </div>
            <div className="mb-2 text-sm ">
              Salam bu məhsulu kredit kartı ilə neçə taksitlə ala bilərəm və
              rənginə görə digərlərindən ucuzdur.
            </div>
            <div className="answer bg-gray-100 rounded-md p-5 mt-3">
              <div className="seller flex gap-1 items-center mb-2">
                <div className="logo rounded-full p-2 ">
                  <img src={appleLogo} />
                </div>
                <div className="name flex gap-1">
                  <p>Apple</p>
                  <img src={blueMarkIcon} />
                </div>
              </div>
              <p className="text-sm font-medium">
                Məhsulu Səbətə Götürün, Ödəniş Ekranına Keçin, Kart
                Məlumatlarını Daxil Edin, Ödəniş Alternativlərini Görə
                Bilərsiniz.
              </p>
            </div>
          </div>
          <div className="question mb-5">
            <div className="user flex gap-3 mb-2">
              <div
                className="profile-photo flex items-center justift-center rounded-full px-2 py-2 bg-black "
                style={{ width: "44px", height: "44px" }}
              >
                <div className="flex gap-1 text-white">
                  <p>G</p>
                  <p>A</p>
                </div>
              </div>
              <div className="flex-col">
                <div className="name flex gap-2">
                  <p className="font-semibold text-sm">G*****</p>
                  <p className="font-semibold text-sm">A*****</p>
                </div>
                <div className="flex gap-2">
                  <div className="date font-semibold text-sm">12 dekabr</div>
                  <div className="location font-semibold text-sm">Gəncə</div>
                </div>
              </div>
            </div>
            <div className="mb-2 text-sm ">
              Salam bu məhsulu kredit kartı ilə neçə taksitlə ala bilərəm və
              rənginə görə digərlərindən ucuzdur.
            </div>
            <div className="answer bg-gray-100 rounded-md p-5 mt-3">
              <div className="seller flex gap-1 items-center mb-2">
                <div className="logo rounded-full p-2 ">
                  <img src={appleLogo} />
                </div>
                <div className="name flex gap-1">
                  <p>Apple</p>
                  <img src={blueMarkIcon} />
                </div>
              </div>
              <p className="text-sm font-medium">
                Məhsulu Səbətə Götürün, Ödəniş Ekranına Keçin, Kart
                Məlumatlarını Daxil Edin, Ödəniş Alternativlərini Görə
                Bilərsiniz.
              </p>
            </div>
          </div>
          <div className="question">
            <div className="user flex gap-3 mb-2">
              <div
                className="profile-photo flex items-center justift-center rounded-full px-2 py-2 bg-black "
                style={{ width: "44px", height: "44px" }}
              >
                <div className="flex gap-1 text-white">
                  <p>G</p>
                  <p>A</p>
                </div>
              </div>
              <div className="flex-col">
                <div className="name flex gap-2">
                  <p className="font-semibold text-sm">G*****</p>
                  <p className="font-semibold text-sm">A*****</p>
                </div>
                <div className="flex gap-2">
                  <div className="date font-semibold text-sm">12 dekabr</div>
                  <div className="location font-semibold text-sm">Gəncə</div>
                </div>
              </div>
            </div>
            <div className="mb-2 text-sm">
              Salam bu məhsulu kredit kartı ilə neçə taksitlə ala bilərəm və
              rənginə görə digərlərindən ucuzdur.
            </div>
            <div className="answer bg-gray-100 rounded-md p-5 mt-3">
              <div className="seller flex gap-1 items-center mb-2">
                <div className="logo rounded-full p-2 ">
                  <img src={appleLogo} />
                </div>
                <div className="name flex gap-1">
                  <p>Apple</p>
                  <img src={blueMarkIcon} />
                </div>
              </div>
              <p className="text-sm font-medium">
                Məhsulu Səbətə Götürün, Ödəniş Ekranına Keçin, Kart
                Məlumatlarını Daxil Edin, Ödəniş Alternativlərini Görə
                Bilərsiniz.
              </p>
            </div>
          </div>
        </div>
        <div className="see-all mt-12">
          <p className="text-orange-500 font-semibold text-md underline cursor-pointer">
            Hamısını gör
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
