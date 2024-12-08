import React from "react";

const Header = () => {
  return (
    <div className="flex h-20 flex-row items-center justify-center bg-white">
      <div className="mr-[121px]">
        {" "}
        <img
          src="\public\site-logo-corebiz-preto-cinza.svg"
          alt="Example Icon"
          className="h-[41px] w-[181px]"
        />
      </div>
      <label className="input input-bordered flex h-[23px] w-[718px] items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="O que você está procurando?"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <div className="ml-[41px] flex">
        <div>
          <img
            src="\public\user 1.svg"
            alt="Example Icon"
            className="h-[18px] w-[18px]"
          />
        </div>
        <div className="ml-[5px]">
          <p>Minha Conta </p>
        </div>
        <div className="ml-[21px]">
          {" "}
          <img
            src="\public\shopping-cart 1.svg"
            alt="Example Icon"
            className="h-[18px] w-[18px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
