import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`${styles} cursor-pointer w-[170px] h-[64px] px-6 py-4 rounded-[16px] bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none`}
  >
    Get Started
  </button>
);

export default Button;
