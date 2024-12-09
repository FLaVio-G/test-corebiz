const Footer = () => {
  return (
    <div className="flex flex-wrap-reverse items-center justify-center bg-black px-[2rem] py-[2rem] md:px-[3rem] lg:flex-col lg:justify-normal">
      <div className="mt-2 flex flex-col items-center justify-center gap-4 lg:mt-0 lg:flex-row lg:gap-0 lg:pt-[2rem]">
        <button className="btn glass h-[2.375rem] w-[12.1875rem] bg-white lg:mr-[1rem]">
          <div className="flex">
            <img
              className="mr-[1.13125rem] h-[1.055rem] w-[0.843rem]"
              src="/public/email.svg"
              alt="Email"
            />
            <p className="text-[0.75rem] text-black">ENTRE EM CONTATO</p>
          </div>
        </button>
        <button className="btn glass h-[2.375rem] w-[12.1875rem] bg-white">
          <div className="flex items-center justify-center">
            <img
              className="h-[1.055rem] w-[0.843rem]"
              src="/public/headseat.svg"
              alt="Consultor Online"
            />
            <p className="text-[0.75rem] text-black">
              FALE COM O NOSSO CONSULTOR ONLINE
            </p>
          </div>
        </button>
      </div>

      <div className="mt-[2rem] flex w-full flex-col md:w-[78.125rem] md:flex-row lg:items-center lg:justify-between">
        <div className="items-start text-center md:text-left">
          <h3 className="text-[1.25rem] text-white">Localização</h3>
          <div className="mt-[1rem] flex flex-col items-start lg:flex-none">
            <p className="text-white">Avenida Andrômeda, 2000. Bloco 6 e 8</p>
            <p className="text-white">Alphaville SP</p>
            <p className="text-white">brasil@corebiz.ag</p>
            <p className="text-white">+55 11 3090 1039</p>
          </div>
        </div>

        <div className="mt-[1rem] hidden md:mt-0 lg:block">
          <img
            className="h-[1.125rem] w-[8.5rem] text-white"
            src="/public/logoFooter.svg"
            alt="Logo Footer"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
