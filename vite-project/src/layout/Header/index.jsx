import burdanTapLogo from "../../assets/images/bt-logo.svg";
import favoriteIcon from "../../assets/images/fav-icon.svg";
import profileIcon from "../../assets/images/profile-icon.svg";
import Search from '../Header/components/searchInput/index'
import { Link } from "react-router-dom";
// import CountryDropdown from '../Header/components/Country dropdown/index'
const Header = () => {
  return (
    <div className="header container">
      <div className="flex py-6  items-center justify-between border-b-2 border-slate-100">
        <div className="logo w-1/6">
          <img src={burdanTapLogo} />
        </div>
        <div className="search w-2/4"><Search/></div>
        <div className="w-2/5 flex justify-center gap-8">
          <div className="language">
              {/* <CountryDropdown/> */}
          </div>
          <div className="flex items-center justify-center gap-2">
            <img src={favoriteIcon} />
            <p>Favoritlər</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <img src={profileIcon} />
            <p>Hesabım</p>
          </div>
        </div>
      </div>
      <div className="navbar">
        <div className="flex justify-center items-center justify-between px-8 py-3 ">
          <div>
            <Link to="">
              <div className="flex items-center">
                <p>Kişi</p>
              </div>
            </Link>
          </div>
          <div>
            <Link>
              <div className="flex items-center">
                <p>Qadın</p>
              </div>
            </Link>
          </div>
          <div>
            <Link>
              <div className="flex items-center">
                <p>Uşaq</p>
              </div>
            </Link>
          </div>
          <div>
            <Link>
              <div className="flex items-center">
                <p>Kosmetika</p>
              </div>
            </Link>
          </div>
          <div>
            <Link>
              <div className="flex items-center">
                <p>Ayaqqabı & Çanta</p>
              </div>
            </Link>
          </div>
          <div>
            <Link>
              <div className="flex items-center">
                <p>Elektronika</p>
              </div>
            </Link>
          </div>
          <div>
            <Link>
              <div className="flex items-center">
                <p>Ev & Mebel</p>
              </div>
            </Link>
          </div>
          <div>
            <Link>
              <div className="flex items-center">
                <p>Sport & Outdoor</p>
              </div>
            </Link>
          </div>
          <div>
            <Link>
              <div className="flex items-center">
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
