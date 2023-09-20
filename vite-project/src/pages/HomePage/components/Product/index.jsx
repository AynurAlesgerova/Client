import favIcon from "../../../../assets/images/fav-icon.svg";
import productImage from "../../../../assets/images/product-image.svg";
import starts from "../../../../assets/images/starts.svg";
const Product = () => {
  return (
    <div className="product relative ">
      <div className="px-2 py-1 absolute left-2 top-3 border-2 rounded-lg">
        <p> 40% endirim</p>
      </div>
      <div className="fav-icon-box  absolute right-2 top-3 p-1 flex items-center justify-center bg-white rounded-lg">
        <img src={favIcon} />
      </div>
      <div className=" flex items-center justify-center py-8 rounded-lg  background-gray">
        <img className="background-image w-3/4" src={productImage} />
      </div>
      <div className="name mt-2">
        <strong className="barnd-name font-semibold mr-2">Spykar</strong>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
        praesentium
      </div>
      <div className="rating flex items-center gap-3 mt-2 mb-2">
        <p className="font-semibold text-sm">3.7</p>
        <div className="star-percent"><img src={starts}/></div>
        <div className="comment-count text-slate-400">(120)</div>
      </div>
      <div className="price flex items-center gap-2 pb-2">
        <div className="before-price text-slate-400 text-sm line-through">220azn</div>
        <div className="after-price font-semibold text-lg">413.99azn  </div>
      </div>
    </div>
  );
};

export default Product;
