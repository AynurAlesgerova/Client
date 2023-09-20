import facebookIcon from "../../assets/images/facebookk.svg";
import instagramIcon from "../../assets/images/instagramm.svg";
import youtubeIcon from "../../assets/images/youtubee.svg";
import linkedinIcon from "../../assets/images/linkedinn.svg";

const Footer = () => {
  return (
    <div className="footer background-gray mt-24">
      <div className=" container flex-col px-20 py-20 ">
        <div className="flex items-center justify-center mb-16">
          <div className="w-1/5">
            <h3 className="font-semibold text-lg mb-3">Products</h3>
            <ul>
              <li className="mb-2 text-slate-700">Overwiew</li>
              <li className="mb-2 text-slate-700">Features</li>
              <li className="mb-2 text-slate-700">Solutions</li>
              <li className="mb-2 text-slate-700">Tutorials</li>
              <li className="mb-2 text-slate-700">Pricing</li>
              <li className="mb-2 text-slate-700">Releases</li>
            </ul>
          </div>
          <div className="w-1/5">
            <h3 className="font-semibold text-lg mb-3">Products</h3>
            <ul>
              <li className="mb-2 text-slate-700">Overwiew</li>
              <li className="mb-2 text-slate-700">Features</li>
              <li className="mb-2 text-slate-700">Solutions</li>
              <li className="mb-2 text-slate-700">Tutorials</li>
              <li className="mb-2 text-slate-700">Pricing</li>
              <li className="mb-2 text-slate-700">Releases</li>
            </ul>
          </div>
          <div className="w-1/5">
            <h3 className="font-semibold text-lg mb-3">Products</h3>
            <ul>
              <li className="mb-2 text-slate-700">Overwiew</li>
              <li className="mb-2 text-slate-700">Features</li>
              <li className="mb-2 text-slate-700">Solutions</li>
              <li className="mb-2 text-slate-700">Tutorials</li>
              <li className="mb-2 text-slate-700">Pricing</li>
              <li className="mb-2 text-slate-700">Releases</li>
            </ul>
          </div>
          <div className="w-1/5">
            <h3 className="font-semibold text-lg mb-3">Products</h3>
            <ul>
              <li className="mb-2 text-slate-700">Overwiew</li>
              <li className="mb-2 text-slate-700">Features</li>
              <li className="mb-2 text-slate-700">Solutions</li>
              <li className="mb-2 text-slate-700">Tutorials</li>
              <li className="mb-2 text-slate-700">Pricing</li>
              <li className="mb-2 text-slate-700">Releases</li>
            </ul>
          </div>
          <div className="w-1/5">
            <h3 className="font-semibold text-lg mb-3">Products</h3>
            <ul>
              <li className="mb-2 text-slate-700">Overwiew</li>
              <li className="mb-2 text-slate-700">Features</li>
              <li className="mb-2 text-slate-700">Solutions</li>
              <li className="mb-2 text-slate-700">Tutorials</li>
              <li className="mb-2 text-slate-700">Pricing</li>
              <li className="mb-2 text-slate-700">Releases</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between     items-center">
          <p className="font-semibold text-sm">Copyright © Burdantap - 2023</p>
          <div className="social-media-section flex gap-4">
            <div className="facebook p-1.5 flex items-center justify-center rounded-full bg-white border-2">
              <img className="social-media-icon" src={facebookIcon} />
            </div>
            <div className="youtube p-1.5 flex items-center justify-center rounded-full bg-white border-2">
              <img className="social-media-icon" src={youtubeIcon} />
            </div>
            <div className="instagram p-1.5 flex items-center justify-center rounded-full bg-white border-2">
              <img className="social-media-icon" src={instagramIcon} />
            </div>
            <div className="linkedin p-1.5 flex items-center justify-center rounded-full bg-white border-2">
              <img className="social-media-icon" src={linkedinIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
