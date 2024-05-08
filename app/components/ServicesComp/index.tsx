import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { serviceDat } from "@/app/interfaces/webData.interface";

const Services = ({serviceDat}:{serviceDat:serviceDat[]}) => {
  return (
    <div id="services-section">
      <div className="mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative">
        <Image
          src="/images/aboutus/dots.svg"
          width={100}
          height={100}
          alt="dots-image"
          className="absolute bottom-1 -left-20"
        />
        <h4 className="text-center text-4xl lg:text-65xl font-bold">
          Our Services
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32">
          {serviceDat.map((item, i) => (
            <div
              key={i}
              className="hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group"
            >
              <h4 className="text-4xl font-semibold  text-black mb-5 group-hover:text-white">
                {item.heading}
              </h4>
              <div
                className="icon"
                dangerouslySetInnerHTML={{ __html: item.imgSrc }}
              />
              <h4 className="text-lg font-normal text-black group-hover:text-offwhite mb-5">
                {item.paragraph}
              </h4>
              {/* <Link
                href="#"
                className="text-lg font-semibold group-hover:text-white text-blue hover-underline"
              >
                {item.link}
                <ChevronRightIcon width={20} height={20} />
              </Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
