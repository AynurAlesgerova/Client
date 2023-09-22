import blueMark from '../../assets/images/blue mark.svg'
const BrandLogoWrapper = ({logo,brandName,ratingCount,followerCount}) => {
  return (
    <div className="brand mb-4 flex gap-4 w-full  cursor-pointer">
        <div className="p-4 rounded-full bg-white">
          <img className="brand-img" src={logo} />
        </div>
        <div>
          <div className="name mb-2 flex gap-1 items-center ">
            <p className="font-semibold text-lg">{brandName}</p>
            <img src={blueMark} />
          </div>
          <div className="rating flex gap-2">
            <p
              className="px-2  w-1/4 rounded-md bg-emerald-50"
              style={{ border: "1px solid #179739" }}
            >
              {ratingCount}
            </p>
            <p
              className="px-2 rounded-md"
              style={{
                border: "1px solid #FF6400",
                backgroundColor: "rgba(255, 100, 0, 0.04)",
              }}
            >
              {followerCount} izləyici
            </p>
          </div>
        </div>
      </div>
  )
}

export default BrandLogoWrapper