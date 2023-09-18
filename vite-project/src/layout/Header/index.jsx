import burdanTapLogo from "../../assets/images/bt-logo.svg";
import favoriteIcon from "../../assets/images/fav-icon.svg";
import profileIcon from "../../assets/images/profile-icon.svg";
// import Search from './searchInput/index'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="flex py-6 px-44 justify-between border-b-2">
        <div className="logo w-1/5">
          <img src={burdanTapLogo} />
        </div>
        <div className="search w-3/5">{/* <Search/> */}</div>
        <div className="w-2/5 flex gap-8">
          <div></div>
          <div className="flex items-center justify-center gap-2">
            <img src={favoriteIcon} />
            <p>Favoritlər</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <img src={profileIcon} />
            <p>Favoritlər</p>
          </div>
        </div>
      </div>
      <div className="navbar">
        <div className="flex justify-center items-center px-8 py-3 gap-12">
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
