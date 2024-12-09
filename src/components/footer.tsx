const footer = () => {
  return (
    <div className="flex h-[246.68px] w-full flex-col items-center bg-black">
      <div className="flex items-center justify-center pt-[32px]">
        <button className="btn mr-[16px] h-[38px] w-[195px] bg-white">
          <div className="flex">
            <img
              className="mr-[18.08px] h-[16.88px] w-[13.51px]"
              src="/public/email.svg"
              alt=""
            />
            <p className="text-[12px] text-black">ENTRE EM CONTATO</p>
          </div>
        </button>
        <button className="btn h-[38px] w-[195px] bg-white">
          <div className="flex items-center justify-center">
            <img
              className="h-[16.88px] w-[13.51px]"
              src="/public/headseat.svg"
              alt=""
            />
            <p className="text-[12px] text-black">
              FALE COM O NOSSO CONSULTOR ONLINE
            </p>
          </div>
        </button>
      </div>
      <div className="mt-[32px] flex w-[1248px] items-end justify-between">
        <div>
          <h3 className="text-[20px] text-white">Localização</h3>
          <div className="mt-[16px]">
            <p className="text-white">
              Avenida Andrômeda, 2000. Bloco 6 e 8 - Alphavile SP
            </p>
            <p className="text-white">brasil@corebiz.ag</p>
            <p className="text-white">+55 11 3090 1039</p>
          </div>
        </div>

        <div>
          <img
            className="h-[18px] w-[136px] text-white"
            src="\public\logoFooter.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default footer;
