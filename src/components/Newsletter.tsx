const newsletter = () => {
  return (
    <div className="w-screen mt-[69px] pb-[36px] bg-blue-700 ">
      <div className="flex flex-col pt-[24px] items-center justify-center">
        <h2 className="text-[22px]">Participe de nossas news com promoções e novidades!</h2>
        <div className="flex mt-[16px]">
          <label className="input input-bordered mr-2 flex items-center gap-2">
            <input
              type="text"
              className="grow w-[228px]"
              placeholder=" Digite seu nome"
            />
          </label>
          <label className="input  input-bordered flex mr-2 items-center gap-2">
            <input
              type="text"
              className="grow w-[228px]" 
              placeholder=" Digite seu Email"
            />
          </label>
          <button className="btn w-[140px] h-[48px]">Eu quero!</button>
        </div>
      </div>
    </div>
  );
};

export default newsletter;
