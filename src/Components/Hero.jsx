import styles from "../style";
import { discount, robot } from "../assets";
import Stats from "./Stats";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section
    id="home"
    className={`flex md:flex-row flex-col ${styles.paddingY} `}
  >
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="h-[32px] 2-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white ">20%</span> Discounf For{" "}
          <span className="text-white ">1 Month</span> Account
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full ">
        <h1 className="flex-1 font-poppins font-semibold  ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span> <br />
        </h1>
        <div className="ss:flex hidden md:mr-4  mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className=" font-poppins font-semibold  ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]2-full">
        Payment Method.
      </h1>
      <p className={`${styles.paragraph} max-w-[483px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>
    <div className={`flex flex-1 ${styles.flexCenter} md:my-0 my-10 relative `}>
      <img src={robot} alt="robot arm" className="w-[100%] relative z-[5]" />

      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 top-0 white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] rigth-20 bottom-20 top-0 blue__gradient" />
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
