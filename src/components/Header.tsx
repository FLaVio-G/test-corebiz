const Header = () => {
  return (
    <div className="flex h-20 flex-row items-center justify-center bg-white">
      <div className="mr-[121px]">
        {" "}
        <img
          src="\public\logoCoreBlack.svg"
          alt="Example Icon"
          className="h-[41px] w-[181px]"
        />
      </div>
      <label className="flex h-[23px] w-[718px] items-center gap-2 border-b border-gray-400 bg-white">
        <input
          type="text"
          className="w-full bg-transparent outline-none"
          placeholder="O que você está procurando"
        />

        <img
          src="\public\magnifying-glass1.svg"
          alt="Example Icon"
          className="h-[18px] w-[18px]"
        />
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
