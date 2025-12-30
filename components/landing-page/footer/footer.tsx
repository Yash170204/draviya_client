import Link from "next/link";
import { FaArrowTurnDown } from "react-icons/fa6";

const SOCIALS = [
  {
    title: "Twitter",
    icon: "/images/socials/twitter.png",
    link: "",
  },
  {
    title: "Instagram",
    icon: "/images/socials/instagram.png",
    link: "",
  },
  {
    title: "GitHub",
    icon: "/images/socials/github.png",
    link: "",
  },
];

const FOOTER_ITEMS = [
  {
    title: "Home",
    link: "",
  },
  {
    title: "About",
    link: "",
  },
  {
    title: "Contact",
    link: "",
  },
  {
    title: "Terms of Service",
    link: "",
  },
];

const Footer = () => {
  return (
    <section className="w-full h-screen p-2 sm:p-3 lg:p-4 relative overflow-x-hidden">
      <img
        src="/images/footer/bg.png"
        alt=""
        className="w-full h-full object-cover object-center rounded-2xl sm:rounded-3xl lg:rounded-4xl"
      />
      <div className="absolute text-white inset-0 p-2 sm:p-3 lg:p-4 w-full h-full">
        <div className="h-[75%] sm:h-[78%] lg:h-[80%] xl:h-[82%] w-full pt-8 sm:pt-12 lg:pt-16 xl:pt-20 2xl:pt-24">
          <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 lg:gap-10 h-full">
            <h2 className="font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-center max-w-sm sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl px-4 leading-tight">
              Invest in creators before everyone else gets it.
            </h2>
            <button
              type="button"
              className="text-sm sm:text-base lg:text-lg xl:text-xl border border-zinc-900 bg-linear-to-t from-[#FF2F00] to-[#f5775b] cursor-pointer hover:from-[#FF2F00] hover:to-[#FF2F00] font-semibold text-white px-4 sm:px-5 lg:px-6 xl:px-7 py-2 sm:py-2.5 lg:py-3 rounded-full transition-all duration-300 relative z-50"
            >
              Invest Like It's 2026
            </button>
            <div className="flex flex-col gap-2 sm:gap-3 items-center">
              <div className="flex gap-2 sm:gap-3 lg:gap-4">
                {SOCIALS.map((social, index) => {
                  const randomRotation = Math.random() * 20 - 10;

                  return (
                    <Link key={index} href={social.link}>
                      <div
                        className="p-2 sm:p-2.5 lg:p-3 border border-zinc-300 bg-white shadow-zinc-500 rounded-lg sm:rounded-xl hover:-translate-y-1 sm:hover:-translate-y-2 duration-300 transition-all"
                        style={{
                          transform: `rotate(${randomRotation}deg)`,
                        }}
                      >
                        <img
                          src={social.icon}
                          alt={social.title}
                          className="h-4 w-4 sm:h-5 sm:w-5"
                        />
                      </div>
                    </Link>
                  );
                })}
              </div>

              <p className="text-zinc-400 font-medium text-sm sm:text-base text-center px-4">
                Follow us on these platforms
              </p>
            </div>
          </div>
        </div>
        <div className="h-[25%] sm:h-[22%] lg:h-[18%] xl:h-[20%] w-full backdrop-blur-2xl border-dashed border-t border-zinc-700 flex flex-col sm:flex-row rounded-b-2xl sm:rounded-b-3xl lg:rounded-b-4xl">
          <div className="h-full sm:w-[70%] border-r-0 sm:border-r border-dashed border-zinc-700 flex flex-col justify-center sm:justify-between p-4 sm:p-6 lg:p-8 xl:p-10 gap-3 sm:gap-0">
            <div className="grid grid-cols-2 sm:flex sm:flex-col gap-3 sm:gap-0">
              {FOOTER_ITEMS.map((item, index) => (
                <Link
                  href={item.link}
                  className="text-white text-sm sm:text-base lg:text-lg font-medium hover:text-zinc-300 transition-colors"
                  key={index}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="h-full sm:w-[30%] p-4 sm:p-6 lg:p-8 xl:p-12 flex flex-col gap-3 sm:gap-4 lg:gap-5">
            <div className="text-white font-medium text-sm sm:text-base lg:text-lg">
              Stay in touch
            </div>
            <div className="w-full h-10 sm:h-11 lg:h-12 xl:h-[50px] bg-[#121111cb] rounded-lg sm:rounded-xl border border-zinc-700 flex justify-between p-[2px]">
              <input
                type="text"
                placeholder="name@gmail.com"
                className="w-full px-3 sm:px-4 lg:px-5 focus:outline-none text-sm sm:text-base bg-transparent text-white placeholder-zinc-400"
              />
              <button className="w-fit px-4 sm:px-5 lg:px-6 xl:px-7 py-1.5 sm:py-2 bg-[#292929] hover:bg-[#3a3a3a] rounded-lg sm:rounded-xl flex gap-2 sm:gap-3 lg:gap-4 xl:gap-5 items-center transition-colors">
                <FaArrowTurnDown className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 rotate-90" />
                <span className="text-xs sm:text-sm lg:text-base">
                  Subscribe
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
