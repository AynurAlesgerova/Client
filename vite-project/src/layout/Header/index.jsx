import burdanTapLogo from "../../assets/images/bt-logo.svg";
import favoriteIcon from "../../assets/images/fav-icon.svg";
import profileIcon from "../../assets/images/profile-icon.svg";
import Search from "../Header/components/searchInput/index";
import { Link } from "react-router-dom";
// import CountryDropdown from '../Header/components/Country dropdown/index'
const Header = () => {
  return (
    <div className="header container">
      <div className="flex py-6  items-center justify-between border-b-2 border-slate-100">
        <div className="logo cursor-pointer mr-10" style={{width:'140px'}}>
          <Link to="/">
            <img src={burdanTapLogo} className="w-full"/>
          </Link>
        </div>
        <div className="search w-2/4">
          <Search />
        </div>
        <div className="w-2/5 flex justify-center gap-8">
          <div className="language">{/* <CountryDropdown/> */}</div>
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <img src={favoriteIcon} />
            <p>Favoritlər</p>
          </div>
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <img src={profileIcon} />
            <p>Hesabım</p>
          </div>
        </div>
      </div>
      <div className="navbar">
        <div className="flex justify-center items-center justify-between px-8 py-4 ">
          <div>
            <Link to="">
              <div className="flex items-center font-medium hover:text-orange-600">
                <p>Kişi</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to="">
              <div className="flex items-center font-medium hover:text-orange-600">
                <p>Qadın</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to="">
              <div className="flex items-center font-medium hover:text-orange-600">
                <p>Uşaq</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to="">
              <div className="flex items-center font-medium hover:text-orange-600">
                <p>Kosmetika</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to="">
              <div className="flex items-center font-medium hover:text-orange-600">
                <p>Ayaqqabı & Çanta</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to="">
              <div className="flex items-center font-medium hover:text-orange-600">
                <p>Elektronika</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to="">
              <div className="flex items-center font-medium hover:text-orange-600">
                <p>Ev & Mebel</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to="">
              <div className="flex items-center font-medium hover:text-orange-600">
                <p>Sport & Outdoor</p>
              </div>
            </Link>
          </div>
          <div>
            <Link to="">
              <div className="flex items-center font-medium hover:text-orange-600">
                <p>PC & Notbuk</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
