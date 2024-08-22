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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              delectus in asperiores neque autem, vero ratione dolores maxime ad
              corporis.
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
