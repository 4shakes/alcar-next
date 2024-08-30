import { ChevronDown } from "lucide-react";
import { Breadcrumb } from "@/components/ui/breadcrumb /breadcrumb";

const Banner = () => {
  const scrollTo = () => {
    window.scrollTo({
      top: 580,
      behavior: "smooth",
    });
  };

  return (
    <div className="pt-48">
      <section
        style={{
          backgroundImage: `url("/imgs/servicios/printing.jpeg")`,
        }}
        className={` mt-16  h-[300px] m-auto bg-no-repeat   bg-center bg-cover`}
      >
        <div className={`banner h-40`}>
          <div className="w-full h-full flex flex-col justify-center items-center text-white relative z-10 ">
            <div className=" text-xl sm:text-2xl md:text-3xl 2xl:text-5xl font-bold text-white w-full lg:w-1/2 text-center px-4 font-garden_bold">
              <div className="mt-4 ">
                <h1
                  style={{
                    color: "#fff",
                  }}
                  className="my-4 typography-h1"
                >
                  Servicios
                </h1>
              </div>
              <Breadcrumb capitalizeLinks />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
