import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../Constants";

const Footer = () => (
  <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full `}>
      <div className="flex-1 flex flex-col justify-start self-start mr-10">
        <img
          src={logo}
          alt="hoobank"
          className="w-[266px] h-[72px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px] `}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10  ">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.title}
            className="flex flex-col ss:my-0 my-4 min-w-[150px] "
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((e, index) => (
                <li
                  key={e.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  <a href={e.link}>{e.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="flex justify-between items-center w-full md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        2021 HooBank. All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6 ">
        {socialMedia.map((icon ,index) => (
          <img key={icon.id} src={icon.icon} alt={icon.id} className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== icon.length - 1 ? 'mr-6': 'mr-0'} ` }/>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
