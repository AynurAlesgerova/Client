import logo from "../../../../assets/images/nike-logo.svg";
import background from "../../../../assets/images/nike-bg.svg";
const Card = ({ slogan, width }) => {
  const cardStyle = {
    width: width || 'auto', // Set the width based on the width prop or 'auto' if not provided
  };

  return (
    <div className="card relative rounded-lg shadow-md" style={cardStyle}>
      <img className="rounded-lg" src={background} />
      <div className="logo-image absolute left-0 top-24 bg-white rounded-r-lg">
        <div className="flex justify-center items-center  py-3 ">
          <img src={logo} />
        </div>
        <div className="border-t-2 px-4 bg-black py-2 text-white rounded-br-lg  ">
          28mart - 1aprel
        </div>
      </div>
      {slogan && (
        <div className="slogan absolute right-0 top-0 w-1/4 h-full flex  justify-center bg-orange-200 px-8 pt-20">
          <p className="font-semibold  text-xl">DIQQETE LAYIQ MEHSUL VAR</p>
        </div>
      )}
      <div className="w-full card-button absolute bottom-0 bg-white flex items-center justify-start pl-6 py-4 text-lg font-semibold cursor-pointer hover:bg-gray-100 ">
        <button>Məhsulları kəşf et</button>
      </div>
    </div>
  );
};

export default Card;
