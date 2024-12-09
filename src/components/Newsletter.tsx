const newsletter = () => {
  return (
    <div className="mt-[69px] w-full bg-[#F2F2F2] pb-[36px]">
      <div className="flex flex-col items-center justify-center pt-[24px]">
        <h2 className="text-[22px] font-bold text-black">
          Participe de nossas news com promoções e novidades!
        </h2>
        <div className="mt-[16px] flex">
          <label className="input input-bordered mr-2 flex items-center gap-2">
            <input
              type="text"
              className="w-[228px] grow text-[12px]"
              placeholder=" Digite seu nome"
            />
          </label>
          <label className="input input-bordered mr-2 flex items-center gap-2">
            <input
              type="text"
              className="w-[228px] grow text-[12px]"
              placeholder=" Digite seu Email"
            />
          </label>
          <button className="btn h-[48px] w-[140px] bg-black text-white">
            Eu quero!
          </button>
        </div>
      </div>
    </div>
  );
};

export default newsletter;
