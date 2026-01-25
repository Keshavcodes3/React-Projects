import { useTheme } from "../Contexts/Context";
import assets from "../../assets/assets";
import ServiceImg from './ServiceImg'
const ServiceCard = ({ title, desc, image }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`group relative w-full overflow-hidden rounded-2xl transition
      ${
        theme === "light"
          ? "bg-white shadow-sm hover:shadow-md"
          : "bg-gray-900 shadow-md hover:shadow-xl"
      }`}
    >
      {/* Animated Borders */}
      <span className="absolute left-0 top-0 h-0.5 w-full bg-blue-500 scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
      <span className="absolute right-0 top-0 h-full w-0.5 bg-blue-500 scale-y-0 origin-top transition-transform duration-300 delay-75 group-hover:scale-y-100" />
      <span className="absolute left-0 bottom-0 h-0.5 w-full bg-blue-500 scale-x-0 origin-right transition-transform duration-300 delay-150 group-hover:scale-x-100" />
      <span className="absolute left-0 top-0 h-full w-0.5 bg-blue-500 scale-y-0 origin-bottom transition-transform duration-300 delay-200 group-hover:scale-y-100" />

      <div className="relative z-10 py-8 px-12 flex gap-4">
        <div
          className={`flex items-center justify-center w-24 h-24 rounded-full
          ${
            theme === "light"
              ? "bg-gray-200"
              : "bg-gray-800"
          }`}
        >
          <img src={image} alt={title} className="w-20 h-20" />
        </div>

        <div className="flex flex-col gap-1 flex-1">
          <h3
            className={`text-lg font-semibold ${
              theme === "light" ? "text-gray-800" : "text-white"
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-sm leading-relaxed ${
              theme === "light" ? "text-gray-600" : "text-gray-400"
            }`}
          >
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};


const Services = () => {
  const { theme } = useTheme();

  const serviceData = [
    {
      title: "Advertising",
      desc: "We turn bold ideas into powerful digital solutions that connect, engage...",
      img: assets.ads_icon,
    },
    {
      title: "Content Marketing",
      desc: "We help you execute your plan and deliver results...",
      img: assets.marketing_icon,
    },
    {
      title: "Content Writing",
      desc: "We help you create a marketing strategy that drives results.",
      img: assets.content_icon,
    },
    {
      title: "Social Media",
      desc: "We help you build a strong social media presence and engage with your audience.",
      img: assets.social_icon,
    },
  ];

  return (
    <section
      className={`w-full py-24 px-6 sm:px-12 lg:px-24 flex flex-col items-center gap-12 transition-all
      ${
        theme === "light"
          ? "bg-white"
          : "bg-gray-950"
      }`}
    >
      <ServiceImg />

      {/* Heading */}
      <div className="max-w-2xl text-center">
        <h2
          className={`text-3xl sm:text-4xl lg:text-5xl font-semibold ${
            theme === "light" ? "text-gray-800" : "text-white"
          }`}
        >
          How can we help?
        </h2>
        <p
          className={`mt-4 ${
            theme === "light" ? "text-gray-600" : "text-gray-400"
          }`}
        >
          From strategy to execution, we craft digital solutions that move your
          business forward.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-6xl">
        {serviceData.map((val, index) => (
          <ServiceCard
            key={index}
            title={val.title}
            desc={val.desc}
            image={val.img}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;