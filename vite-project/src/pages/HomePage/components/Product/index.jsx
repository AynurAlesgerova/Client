import favIcon from "../../../../assets/images/fav-icon.svg";
import ProductInfo from '../../../../components/product-info/index'

const Product = ({brand,name,ratingCount,previousPrice, currentPrice,commentCount,image, width,styled}) => {

  // const textStyle={
  //     textSize: width='298px' ? '20px' : '12px';
  // }
  return (
    <div className="product relative cursor-pointer" style={{width:width}}>
      <div className="px-1 py-1 absolute left-2 top-3 border-2 rounded-lg text-sm">
        <p> 40% endirim</p>
      </div>
      <div className="fav-icon-box  absolute right-2 top-3 p-1 flex items-center justify-center bg-white rounded-lg">
        <img src={favIcon} style={{width:'20px', height:'20px'}} />
      </div>
      <div className=" flex items-center justify-center py-8 rounded-lg  background-gray">
        <img className="background-image w-3/4" src={image} />
      </div>
      <ProductInfo brand={brand} name={name} currentPrice={currentPrice} previousPrice={previousPrice} ratingCount={ratingCount} commentCount={commentCount} styled={styled}/>
    </div>
  );
};

export default Product;
