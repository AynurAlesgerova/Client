import favIcon from "../../../../assets/images/fav-icon.svg";
import ProductInfo from '../../../../components/product-info/index'

const Product = ({brand,name,ratingCount,previousPrice, currentPrice,commentCount,image}) => {
  return (
    <div className="product relative" style={{width:'300px'}}>
      <div className="px-2 py-1 absolute left-2 top-3 border-2 rounded-lg">
        <p> 40% endirim</p>
      </div>
      <div className="fav-icon-box  absolute right-2 top-3 p-1 flex items-center justify-center bg-white rounded-lg">
        <img src={favIcon} />
      </div>
      <div className=" flex items-center justify-center py-8 rounded-lg  background-gray">
        <img className="background-image w-3/4" src={image} />
      </div>
      <ProductInfo brand={brand} name={name} currentPrice={currentPrice} previousPrice={previousPrice} ratingCount={ratingCount} commentCount={commentCount}/>
    </div>
  );
};

export default Product;
