import "swiper/css";
import nikeLogo from "../../assets/images/nike-logo.svg";
import Card from "./components/Card/index";
import logo from "../../assets/images/nike-logo.svg";
import appleLogo from "../../assets/images/apple.svg";
import blueMark from "../../assets/images/blue mark.svg";
import computer from "../../assets/images/computer.svg";
import Product from "./components/Product";
const HomePage = () => {
  return (
    <div className="container">
      <section className="brands-section mb-10 pl-8">
        <h1 className="font-semibold text-2xl mb-10">Brendlər</h1>
        <div className="brands flex flex-wrap gap-6">
          <div className="brand  flex gap-2 px-6 py-4  border-2 border-transparent rounded-2xl items-center justify-start bg-gray-100">
            <div className="brand-image-box p-2  rounded-full bg-white">
              <img className="brand-img" src={nikeLogo} />
            </div>
            <p className="brand-name font-medium text-lg">Nike</p>
          </div>
          <div className="brand  flex gap-2 px-6  py-4 border-2 border-transparent rounded-2xl items-center justify-start bg-gray-100">
            <div className="brand-image-box p-2  rounded-full bg-white">
              <img className="brand-img" src={nikeLogo} />
            </div>
            <p className="brand-name font-medium text-lg">Nike</p>
          </div>
          <div className="brand flex gap-2 px-6  py-4border-2 border-transparent rounded-2xl items-center justify-start bg-gray-100">
            <div className="brand-image-box p-2  rounded-full bg-white">
              <img className="brand-img" src={nikeLogo} />
            </div>
            <p className="brand-name font-medium text-lg">Nike</p>
          </div>
          <div className="brand flex gap-2 px-6 py-4  border-2 border-transparent rounded-2xl items-center justify-start bg-gray-100">
            <div className="brand-image-box p-2  rounded-full bg-white">
              <img className="brand-img" src={nikeLogo} />
            </div>
            <p className="brand-name font-medium text-lg">Nike</p>
          </div>
          <div className="brand  flex gap-2 px-6  py-4 border-2 border-transparent rounded-2xl items-center justify-start bg-gray-100">
            <div className="brand-image-box p-2  rounded-full bg-white">
              <img className="brand-img" src={nikeLogo} />
            </div>
            <p className="brand-name font-medium text-lg">Nike</p>
          </div>
          <div className="brand  flex gap-2 px-6 py-4 border-2 border-transparent rounded-2xl items-center justify-start bg-gray-100">
            <div className="brand-image-box p-2  rounded-full bg-white">
              <img className="brand-img" src={nikeLogo} />
            </div>
            <p className="brand-name font-medium text-lg">Nike</p>
          </div>
          <div className="brand  flex gap-2 px-6 py-4 border-2 border-transparent rounded-2xl items-center justify-start bg-gray-100">
            <div className="brand-image-box p-2  rounded-full bg-white">
              <img className="brand-img" src={nikeLogo} />
            </div>
            <p className="brand-name font-medium text-lg">Nike</p>
          </div>
          <div className="brand  flex gap-2 px-6 py-4 border-2 border-transparent rounded-2xl items-center justify-start bg-gray-100">
            <div className="brand-image-box p-2  rounded-full bg-white">
              <img className="brand-img" src={nikeLogo} />
            </div>
            <p className="brand-name font-medium text-lg">Nike</p>
          </div>
        </div>
      </section>
      <section className="cards flex flex-wrap mb-16 gap-6">
        <Card slogan={true} width={"605px"} />
        <Card slogan={true} width={"605px"} />
        <Card slogan={true} width={"605px"} />
        <Card slogan={true} width={"605px"} />
      </section>
      <div className="best-seller mb-16">
        <h1 className="font-semibold text-3xl mb-8">Ən çox satan mağazalar</h1>
        <div className="flex  gap-10">
          <div className="bg-gray-100 py-6 px-4 w-1/3 flex-col rounded-lg">
            <div className="brand mb-4 flex gap-4">
              <div className="p-4 rounded-full bg-white">
                <img className="brand-img" src={appleLogo} />
              </div>
              <div>
                <div className="name mb-2 flex gap-1">
                  <p className="font-semibold text-lg">Apple</p>
                  <img src={blueMark} />
                </div>
                <div className="rating flex gap-2">
                  <p className="px-2 border-2 w-1/4 rounded-md border-teal-500 bg-emerald-50">
                    9.7
                  </p>
                  <p className="px-2 border-2 border-red-500 bg-red-50 rounded-md">
                    30.9 izleyici
                  </p>
                </div>
              </div>
            </div>
            <div className="details flex gap-3 items-center justify-between px-3">
              <div className="p-5 bg-white rounded-lg">
                <img src={computer} />
              </div>
              <div className="p-5 bg-white rounded-lg">
                <img src={computer} />
              </div>
              <div className="p-5 bg-white rounded-lg">
                <img src={computer} />
              </div>
            </div>
          </div>
          <div className="bg-gray-100 py-6 px-4 w-1/3 flex-col rounded-lg">
            <div className="brand mb-4 flex gap-4">
              <div className="p-4 rounded-full bg-white">
                <img className="brand-img" src={appleLogo} />
              </div>
              <div>
                <div className="name mb-2 flex gap-1">
                  <p className="font-semibold text-lg">Apple</p>
                  <img src={blueMark} />
                </div>
                <div className="rating flex gap-2">
                  <p className="px-2 border-2 w-1/4 rounded-md border-teal-500 bg-emerald-50">
                    9.7
                  </p>
                  <p className="px-2 border-2 border-red-500 bg-red-50 rounded-md">
                    30.9 izleyici
                  </p>
                </div>
              </div>
            </div>
            <div className="details flex gap-3 items-center justify-between px-3">
              <div className="p-5 bg-white rounded-lg">
                <img src={computer} />
              </div>
              <div className="p-5 bg-white rounded-lg">
                <img src={computer} />
              </div>
              <div className="p-5 bg-white rounded-lg">
                <img src={computer} />
              </div>
            </div>
          </div>
          <div className="bg-gray-100 py-6 px-4 w-1/3 flex-col rounded-lg">
            <div className="brand mb-4 flex gap-4">
              <div className="p-4 rounded-full bg-white">
                <img className="brand-img" src={appleLogo} />
              </div>
              <div>
                <div className="name mb-2 flex gap-1">
                  <p className="font-semibold text-lg">Apple</p>
                  <img src={blueMark} />
                </div>
                <div className="rating flex gap-2">
                  <p className="px-2 border-2 w-1/4 rounded-md border-teal-500 bg-emerald-50">
                    9.7
                  </p>
                  <p className="px-2 border-2 border-red-500 bg-red-50 rounded-md">
                    30.9 izleyici
                  </p>
                </div>
              </div>
            </div>
            <div className="details flex gap-3 items-center justify-between px-3">
              <div className="p-5 bg-white rounded-lg">
                <img src={computer} />
              </div>
              <div className="p-5 bg-white rounded-lg">
                <img src={computer} />
              </div>
              <div className="p-5 bg-white rounded-lg">
                <img src={computer} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="mb-16">
        <div className="flex flex-wrap  gap-4">
          <Card width={"400px"} />
          <Card width={"400px"} />
          <Card width={"400px"} />
          <Card width={"400px"} />
          <Card width={"400px"} />
          <Card width={"400px"} />
          <Card width={"400px"} />
          <Card width={"400px"} />
          <Card width={"400px"} />
        </div>
      </section>
      <section className="products">
        <h1 className="font-semibold text-3xl mb-8">Bu günün populyar məhsulları</h1>
        <div className="flex gap-6">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
