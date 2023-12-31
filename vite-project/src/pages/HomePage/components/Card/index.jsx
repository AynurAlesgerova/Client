const Card = ({
  slogan,
  width,
  height,
  backgroundImg,
  logo,
  firstDate,
  lastDate,
}) => {
  const cardStyle = {
    width: width || "auto",
    height: height || "auto", 
  };

  return (
    <div>
      {slogan === true ? (
        <div className="card relative rounded-lg shadow-lg" style={cardStyle}>
          <img className=" w-3/4 card-image rounded-tl-lg h-full " src={backgroundImg} />
            <div className="slogan w-1/4 absolute rounded-tr-lg right-0 top-0  flex  justify-center bg-orange-200 px-8  items-center" style={{height:'300px'}}>
              <p className="font-semibold  text-xl"></p>
            </div>
          <div className="logo-image absolute left-0 top-28 bg-white rounded-r-lg">
            <div className="flex justify-center items-center py-4">
              <img src={logo} />
            </div>
            <div className="border-t-2 px-6 bg-black py-2 text-white rounded-br-lg ">
              {firstDate + " - " + lastDate}
            </div>
          </div>
          <div className=" w-full card-button rounded-bl-lg  rounded-br-lg  bg-white flex items-center justify-start pl-6  text-lg font-semibold cursor-pointer hover:bg-gray-100 ">
            <button>Məhsulları kəşf et</button>
          </div>
        </div>
      ) : (
        <div className="card relative rounded-lg shadow-lg" style={cardStyle}>
          <img className=" w-full card-image rounded-t-lg  " src={backgroundImg} />
          <div className="logo-image absolute left-0 top-28 bg-white rounded-r-lg">
            <div className="flex justify-center items-center py-4">
              <img src={logo} />
            </div>
            <div className="border-t-2 px-6 bg-black py-2 text-white rounded-br-lg ">
              {firstDate + " - " + lastDate}
            </div>
          </div>
          <div className=" w-full card-button rounded-bl-lg  rounded-br-lg bg-white flex items-center justify-start pl-6  text-lg font-semibold cursor-pointer hover:bg-gray-100 ">
            <button>Məhsulları kəşf et</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
