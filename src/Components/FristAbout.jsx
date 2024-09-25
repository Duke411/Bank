import Image1 from "../assets/IMG-0905.jpg";
import "../App.css";

const FristAbout = () => {
  return (
    <>
      <section className="section w-full frist">
        <div className=" sm:flex">
          <div className="w-full sm:w-1/2 sm:p-20 pt-5 pl-3">
            <h1 className="text-3xl font-bold text-white mt-4 mb-4">
              Get to Know Us
            </h1>
            <p className="mt-2 mb-5 text-white font-semibold sm:text-2xl">
              At Equity, we believe that understanding your financial partner is
              key to building a strong and lasting relationship. Our commitment
              is to provide you with personalized services that align with your
              unique financial goals. Whether you’re saving for the future,
              managing your day-to-day finances, or planning for a big
              investment, we’re here to support you every step of the way.
            </p>
          </div>
          <div className="w-full sm:w-1/2">
            <img src={Image1} alt="" className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>
    </>
  );
};

export default FristAbout;
