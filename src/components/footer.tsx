const footer = () => {
  return (
    <div className="w-full flex flex-col items-center   h-[246.68px] bg-black">
      <div className="flex items-center pt-[32px] justify-center">
        <button className="btn w-[195px] mr-[16px] h-[38px]">
          <div className="flex ">
            <img
              className="h-[16.88px] mr-[18.08px] w-[13.51px]"
              src="/public/email.svg"
              alt=""
            />
            <p className="text-[12px]">ENTRE EM CONTATO</p>
          </div>
        </button>
        <button className="btn w-[195px] h-[38px]">
          <div className="flex">
            <img
              className="h-[16.88px]   w-[13.51px]"
              src="/public/headseat.svg"
              alt=""
            />
            <p className="text-[12px]">FALE COM O NOSSO
              CONSULTOR ONLINE</p>
          </div>
        </button>
      </div>
      <div className="flex items-end w-[1248px] mt-[32px] justify-between bg-red-500">
        <div>
          <h3>
            Localização
          </h3>
          <p>Avenida Andrômeda, 2000. Bloco 6 e 8 - Alphavile SP</p>
          <p>brasil@corebiz.ag</p>
          <p>+55 11 3090 1039</p>
        </div>

        <div>
          <h4>
            Create by
          </h4>
          <img
            className="h-[18px] text-white w-[136px]"
            src="\public\logoFooter.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default footer