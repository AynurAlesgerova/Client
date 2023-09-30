import Rating from '../../components/Rating/index'
const ProductInfo = ({
  brand,
  name,
  ratingCount,
  previousPrice,
  currentPrice,
  commentCount,
  styled,
}) => {

  return (
    <div className="h-1/4" >
      <div className="name mt-2" style={styled ? {fontSize:'18px'} : {fontSize:'16px'}}>
        <strong className="barnd-name font-semibold mr-2">{brand}</strong>
        {name}
      </div>
      <div className="rating flex items-center gap-3 mt-2 mb-2">
        <p className="font-semibold text-sm">{ratingCount}</p>
        <div className="star-percent">
          <Rating value={ratingCount} />
        </div>
        <div className="comment-count text-slate-400">({commentCount})</div>
      </div>
      <div className="price flex items-center gap-2 pb-2">
        <div className="before-price text-slate-400 text-sm line-through" style={styled ?  {fontSize:'14px'} : {fontSize:'12px'}}>
          {previousPrice}₼
        </div>
        <div className="after-price font-semibold text-lg" style={styled ?  {fontSize:'18px'} : {fontSize:'14px'}}>
          {currentPrice}₼{" "}
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
